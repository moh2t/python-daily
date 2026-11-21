## Why files
Variables disappear when a program ends. Files keep data: notes, settings, scores, logs. Python can read and write any text file, and has modules for common formats like JSON and CSV.

In this app Python runs inside your browser and has its own small pretend disk, so you can safely write and read files in the examples. They vanish when you reload the page.

## Opening a file
`open(name, mode)` opens a file. The mode says what you want to do:

- `"r"` read (the default); error if the file does not exist
- `"w"` write; creates the file, or empties it first if it exists
- `"a"` append; adds to the end, creating the file if needed
- `"x"` create; error if the file already exists

The best way to open a file is with `with`. It closes the file for you automatically when the block ends, even if an error happens.

```py
with open("hello.txt", "w") as f:
    f.write("Hello, file!\n")
    f.write("A second line\n")

with open("hello.txt") as f:
    print(f.read())
```

## Writing text
`write()` writes exactly what you give it. It does not add a new line, so include `\n` yourself. `writelines()` writes a list of strings. You can also `print()` into a file.

```py
lines = ["apples\n", "pears\n", "plums\n"]
with open("shopping.txt", "w") as f:
    f.writelines(lines)
    print("figs", file=f)

with open("shopping.txt") as f:
    print(f.read())
```

`write()` only takes strings, so convert numbers first.

```py error
with open("score.txt", "w") as f:
    f.write(42)
```

## Reading a file
There are several ways to read, depending on what you need:

- `read()` gives the whole file as one string
- `readline()` gives one line at a time
- `readlines()` gives a list of lines (each still ending in `\n`)
- `read().splitlines()` gives a list of lines without the `\n`

```py
with open("poem.txt", "w") as f:
    f.write("Roses are red\nViolets are blue\nPython is fun\n")

with open("poem.txt") as f:
    print(repr(f.readline()))
    print(repr(f.readline()))

with open("poem.txt") as f:
    print(f.readlines())

with open("poem.txt") as f:
    print(f.read().splitlines())
```

## Looping over lines
The simplest and most memory-friendly way to process a file is to loop over it directly. Each round gives one line. `strip()` removes the new line from the end.

```py
with open("poem.txt", "w") as f:
    f.write("Roses are red\nViolets are blue\nPython is fun\n")

with open("poem.txt") as f:
    for number, line in enumerate(f, start=1):
        print(number, line.strip())
```

```py
with open("poem.txt", "w") as f:
    f.write("Roses are red\nViolets are blue\nPython is fun\n")

with open("poem.txt") as f:
    text = f.read()
print("Lines:", len(text.splitlines()))
print("Words:", len(text.split()))
print("Characters:", len(text))
```

## Appending
Mode `"a"` adds to the end without wiping what is there. It is perfect for logs and diaries.

```py
with open("log.txt", "w") as f:
    f.write("Day 1: started Python\n")

with open("log.txt", "a") as f:
    f.write("Day 2: learned loops\n")
    f.write("Day 3: wrote a function\n")

with open("log.txt") as f:
    print(f.read())
```

## When a file is missing
Reading a file that does not exist raises `FileNotFoundError`. Catch it, or check first with `os.path.exists()`.

```py error
with open("no_such_file.txt") as f:
    print(f.read())
```

```py
import os
name = "settings.txt"
if os.path.exists(name):
    print("found it")
else:
    print(name, "does not exist yet")

try:
    with open(name) as f:
        data = f.read()
except FileNotFoundError:
    data = ""
    print("Using empty settings")
```

## Deleting and renaming files
The `os` module can remove and rename files.

```py
import os
with open("old.txt", "w") as f:
    f.write("temporary")
os.rename("old.txt", "new.txt")
print(os.path.exists("old.txt"), os.path.exists("new.txt"))
os.remove("new.txt")
print(os.path.exists("new.txt"))
```

## JSON: saving structured data
JSON is a text format for data, used all over the web. It looks almost exactly like Python dictionaries and lists. The `json` module converts between the two:

- `json.dumps(data)` turns Python data into a JSON string
- `json.loads(text)` turns a JSON string into Python data
- `json.dump(data, file)` and `json.load(file)` do the same with files

```py
import json
person = {"name": "Ada", "age": 36, "langs": ["en", "fr"], "married": True}
text = json.dumps(person)
print(text)
print(type(text).__name__)
print(json.dumps(person, indent=2))
```

Notice the small differences: JSON uses `true` and `false` in lower case and always uses double quotes.

```py
import json
text = '{"city": "Accra", "population": 2500000, "coastal": true, "areas": ["Osu", "Labadi"]}'
data = json.loads(text)
print(data)
print(data["areas"][0])
print(type(data).__name__)
```

## Saving and loading JSON files
This is the easiest way to save a program's data and load it again next time.

```py
import json
scores = {"Ada": [91, 88], "Ben": [78, 82]}
with open("scores.json", "w") as f:
    json.dump(scores, f, indent=2)

with open("scores.json") as f:
    loaded = json.load(f)
loaded["Chen"] = [85]
print(loaded)
for name, marks in loaded.items():
    print(name, sum(marks) / len(marks))
```

## CSV: tables of data
CSV (comma-separated values) is how spreadsheets are often saved: each line is a row, and commas separate the columns. The `csv` module handles the details, like commas inside quotes.

```py
import csv
rows = [
    ["name", "country", "score"],
    ["Ada", "UK", 91],
    ["Kofi", "Ghana", 85],
    ["Mei", "China", 88],
]
with open("results.csv", "w", newline="") as f:
    csv.writer(f).writerows(rows)

with open("results.csv") as f:
    print(f.read())
```

`csv.DictReader` reads each row as a dictionary, using the first line as the keys. That is usually the most convenient way to work with a table. Every value comes in as text, so convert numbers.

```py
import csv
with open("results.csv", "w", newline="") as f:
    f.write("name,country,score\nAda,UK,91\nKofi,Ghana,85\nMei,China,88\n")

with open("results.csv", newline="") as f:
    people = list(csv.DictReader(f))
print(people[0])
best = max(people, key=lambda p: int(p["score"]))
print("Best:", best["name"], best["score"])
print("Average:", sum(int(p["score"]) for p in people) / len(people))
```

## Other file types
- Excel (`.xlsx`) files need an extra package such as `openpyxl` or `pandas`, installed with pip on your computer.
- XML files can be read with the built-in `xml.etree.ElementTree` module.

```py
import xml.etree.ElementTree as ET
xml = "<people><person name='Ada' age='36'/><person name='Ben' age='28'/></people>"
root = ET.fromstring(xml)
for p in root:
    print(p.get("name"), p.get("age"))
```

## Text encoding
Files store characters as bytes using an encoding. UTF-8 handles every language and emoji, and it is the safe choice. Passing `encoding="utf-8"` makes your program behave the same on every computer.

```py
with open("hello_world.txt", "w", encoding="utf-8") as f:
    f.write("Hello, こんにちは, مرحبا, Ẹ n lẹ\n")
with open("hello_world.txt", encoding="utf-8") as f:
    print(f.read())
```

## Putting it together
A tiny to-do app that keeps its list in a JSON file between runs.

```py
import json, os

FILE = "todo.json"

def load():
    if not os.path.exists(FILE):
        return []
    with open(FILE) as f:
        return json.load(f)

def save(tasks):
    with open(FILE, "w") as f:
        json.dump(tasks, f)

tasks = load()
tasks.append({"task": "buy milk", "done": False})
tasks.append({"task": "learn files", "done": True})
save(tasks)

for t in load():
    print(("[x] " if t["done"] else "[ ] ") + t["task"])
```

Counting the most common words in a text file.

```py
from collections import Counter
with open("story.txt", "w") as f:
    f.write("The cat sat. The cat ran. A dog sat with the cat.\n")

with open("story.txt") as f:
    words = f.read().lower().replace(".", "").split()
print(Counter(words).most_common(3))
```
