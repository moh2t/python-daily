"""Build guides.js from the lesson notes in content/guides/.

Each file content/guides/NN-name.md holds the "In detail" notes for Basics lesson NN.

Format:
    ## Section heading
    A paragraph. Use `backticks` for code words.

    - a bullet point
    - another one

    ```py
    print("this example is run, and its output is shown under it")
    ```

    ```py error
    print(undefined_name)   # runs; the error it raises is shown as the output
    ```

    ```py norun
    name = input("Name: ")  # shown, but not run (no output box)
    ```

    ```text
    a plain box (a diagram, or a file's contents); no Try it button
    ```

Run from the project folder:  python3 tools/build_guides.py
Every example is run with your local python3, so the outputs shown in the app are real.
Outputs in tools/pyodide_outputs.json replace the local ones (see OVERRIDES below).
"""
import json
import os
import pathlib
import re
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "content" / "guides"
OUT = ROOT / "guides.js"
# The app runs Python 3.12 (Pyodide). Where its output differs from your local python3
# (mostly friendlier error messages), the 3.12 output is stored here, keyed by the example's code.
OVERRIDES = json.loads((ROOT / "tools" / "pyodide_outputs.json").read_text())


def run_block(code, cwd, expect_error):
    env = dict(os.environ, PYTHONHASHSEED="0")   # same set order on every build
    p = subprocess.run([sys.executable, "-c", code], cwd=cwd, capture_output=True, text=True, timeout=20, env=env)
    out = p.stdout
    if p.returncode != 0:
        last = [l for l in p.stderr.strip().splitlines() if l.strip()][-1:] or ["Error"]
        if not expect_error:
            raise SystemExit("Example failed:\n" + code + "\n---\n" + p.stderr)
        out += re.sub(r" \((/|unknown location)[^)]*\)$", "", last[0].strip())   # no local file paths
    elif expect_error:
        raise SystemExit("Example was meant to raise an error but did not:\n" + code)
    return out.rstrip("\n")


def parse(path, cwd):
    sections, cur, para, bullets = [], None, [], []
    lines = path.read_text().splitlines()

    def flush():
        nonlocal para, bullets
        if para:
            cur["parts"].append({"p": " ".join(s.strip() for s in para)})
            para = []
        if bullets:
            cur["parts"].append({"ul": bullets})
            bullets = []

    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("## "):
            if cur:
                flush()
            cur = {"h": line[3:].strip(), "parts": []}
            sections.append(cur)
        elif line.startswith("```"):
            flush()
            tag = line[3:].strip().split()
            code = []
            i += 1
            while not lines[i].startswith("```"):
                code.append(lines[i])
                i += 1
            code = "\n".join(code)
            part = {"code": code}
            if tag[:1] != ["py"]:
                part["text"] = True
            elif "norun" not in tag:
                part["out"] = run_block(code, cwd, "error" in tag)
                part["out"] = OVERRIDES.get(code, part["out"])
                if "error" in tag:
                    part["err"] = True
            cur["parts"].append(part)
        elif line.startswith("- "):
            if para:
                flush()
            bullets.append(line[2:].strip())
        elif line.startswith("  ") and bullets and line.strip():
            bullets[-1] += " " + line.strip()
        elif not line.strip():
            flush()
        else:
            if bullets:
                flush()
            para.append(line)
        i += 1
    if cur:
        flush()
    return sections


def main():
    guides, count = {}, 0
    for path in sorted(SRC.glob("*.md")):
        n = int(re.match(r"(\d+)", path.name).group(1))
        with tempfile.TemporaryDirectory() as tmp:
            secs = parse(path, tmp)
        guides["basics-" + str(n)] = secs
        ex = sum(1 for s in secs for p in s["parts"] if "code" in p)
        count += ex
        print(f"lesson {n:2}: {len(secs):2} sections, {ex:2} examples  ({path.name})")
    body = json.dumps(guides, ensure_ascii=False, indent=0)
    OUT.write_text("// Built by tools/build_guides.py from content/guides/*.md. Edit those files, not this one.\n"
                   "window.GUIDES = " + body + ";\n")
    print(f"{count} examples written to {OUT.name}")


if __name__ == "__main__":
    main()
