## What a regular expression is
A regular expression (regex) is a small pattern that describes text you want to find. Instead of searching for one exact word, you can search for "any phone number", "every word starting with a capital letter" or "anything that looks like an email". Python's regex tools are in the `re` module.

```py
import re
text = "Call 0201 555 123 or 0302 999 888 today"
print(re.findall(r"\d{4} \d{3} \d{3}", text))
```

Patterns are usually written as raw strings, with `r` before the quote. That stops Python treating backslashes as escape codes, so `r"\d"` reaches the regex exactly as typed.

## The main functions
- `re.search(pattern, text)` finds the first match anywhere
- `re.match(pattern, text)` only matches at the very start of the text
- `re.fullmatch(pattern, text)` matches only if the whole text fits
- `re.findall(pattern, text)` gives a list of every match
- `re.sub(pattern, replacement, text)` replaces every match
- `re.split(pattern, text)` splits the text wherever the pattern matches

## search and match
`search` and `match` give back a match object, or `None` if nothing matched. The match object's `group()` is the matched text and `span()` is where it was.

```py
import re
text = "I love Python and Python loves me"
m = re.search(r"Python", text)
print(m.group())
print(m.span())
print(m.start(), m.end())
print(re.match(r"Python", text))   # None: text does not start with Python
print(re.match(r"I love", text).group())
```

Always check for `None` before using the result.

```py
import re
for word in ["cat", "dog"]:
    m = re.search(word, "the cat sat")
    if m:
        print(word, "found at", m.start())
    else:
        print(word, "not found")
```

## findall
`findall` is often all you need: it returns every match as a list of strings.

```py
import re
text = "Prices: £4, £12, £150 and £7"
print(re.findall(r"£\d+", text))
print(re.findall(r"\d+", text))
print(len(re.findall(r"a", "banana")))
```

## Ignoring case
The flag `re.I` (short for `re.IGNORECASE`) makes the match ignore capital letters.

```py
import re
text = "Python, python, PYTHON"
print(re.findall(r"python", text))
print(re.findall(r"python", text, re.I))
```

## Replacing with sub
`re.sub` swaps every match for the replacement.

```py
import re
print(re.sub(r"\d", "#", "Card 1234 5678"))
print(re.sub(r"\s+", " ", "too    many     spaces"))
print(re.sub(r"colou?r", "shade", "colour or color"))
print(re.sub(r"[aeiou]", "", "regular expressions"))
```

## Splitting with split
`re.split` is like `str.split`, but the separator can be a pattern.

```py
import re
print(re.split(r"[,;]\s*", "apples, pears;plums,  figs"))
print(re.split(r"\s+", "one   two\tthree\nfour"))
print(re.split(r"\d", "a1b2c3d"))
```

## Character classes
Square brackets match any one of the characters inside. A dash gives a range, and `^` at the start means "anything except these".

- `[aeiou]` one vowel
- `[a-z]` one lower-case letter, `[A-Z]` one capital, `[0-9]` one digit
- `[a-zA-Z0-9]` one letter or digit
- `[^0-9]` one character that is not a digit

```py
import re
text = "Apple banana Cherry 42"
print(re.findall(r"[aeiou]", text))
print(re.findall(r"[A-Z]", text))
print(re.findall(r"[0-9]", text))
print(re.findall(r"[^a-zA-Z ]", text))
```

## Shorthand classes
These are so common they have short codes:

- `\d` a digit, `\D` anything but a digit
- `\w` a word character (letter, digit or underscore), `\W` anything else
- `\s` whitespace (space, tab, new line), `\S` anything else
- `.` any character except a new line
- `\b` a word boundary: the edge between a word and a non-word character

```py
import re
text = "Room 101, floor 3_b!"
print(re.findall(r"\d", text))
print(re.findall(r"\w+", text))
print(re.findall(r"\s", text))
print(re.findall(r"r..m", "room roam rum"))
print(re.findall(r"\bcat\b", "cat catalogue bobcat cat"))
```

## Escaping special characters
Characters like `. + * ? ( ) [ ] { } ^ $ |` have special meanings. To match one literally, put a backslash in front.

```py
import re
print(re.findall(r".", "a.b"))       # . matches anything
print(re.findall(r"\.", "a.b"))      # \. matches only a full stop
print(re.findall(r"\$\d+", "It costs $40 or $55"))
print(re.findall(r"\(\d+\)", "call (020) now"))
```

## How many times: quantifiers
A quantifier after something says how many times it may repeat.

- `+` one or more
- `*` zero or more
- `?` zero or one (makes it optional)
- `{3}` exactly 3, `{2,4}` between 2 and 4, `{2,}` 2 or more

```py
import re
print(re.findall(r"\d+", "7 cats, 42 dogs, 365 days"))
print(re.findall(r"ab*", "a ab abb abbb"))
print(re.findall(r"colou?r", "color colour colouur"))
print(re.findall(r"\b\d{3}\b", "1 12 123 1234"))
print(re.findall(r"\b\w{6,}\b", "a short list of longer words"))
```

## Greedy and lazy
Quantifiers are greedy: they grab as much as they can. Adding `?` after them makes them lazy, taking as little as possible.

```py
import re
html = "<b>bold</b> and <i>italic</i>"
print(re.findall(r"<.+>", html))    # greedy: one big match
print(re.findall(r"<.+?>", html))   # lazy: each tag separately
```

## Start and end: ^ and $
`^` matches the start of the text and `$` matches the end. Together they check that the whole text has a certain shape, which is great for validating input.

```py
import re
for code in ["AB12", "ab12", "AB123", "XY99"]:
    ok = re.search(r"^[A-Z]{2}\d{2}$", code)
    print(code, "valid" if ok else "invalid")
```

## Either or: |
`|` means "this or that".

```py
import re
text = "I have a cat, a dog and a parrot"
print(re.findall(r"cat|dog", text))
print(re.findall(r"\b(?:Mon|Tues|Wednes)day\b", "Monday Tuesday Friday"))
```

## Groups: capturing parts of a match
Round brackets make a group. You can then pull out just that part. With groups, `findall` returns the groups instead of the whole match.

```py
import re
m = re.search(r"(\d{4})-(\d{2})-(\d{2})", "Due on 2026-11-21, thanks")
print(m.group())
print(m.group(1), m.group(2), m.group(3))
print(m.groups())
```

```py
import re
text = "Ada: 91, Ben: 78, Chen: 85"
print(re.findall(r"(\w+): (\d+)", text))
scores = {name: int(n) for name, n in re.findall(r"(\w+): (\d+)", text)}
print(scores)
```

Groups can be named with `(?P<name>...)`, which makes the code easier to read.

```py
import re
m = re.search(r"(?P<user>\w+)@(?P<domain>[\w.]+)", "Write to ada@example.com")
print(m.group("user"))
print(m.group("domain"))
```

In `sub`, `\1`, `\2` put the groups back into the replacement, so you can rearrange text.

```py
import re
print(re.sub(r"(\d{4})-(\d{2})-(\d{2})", r"\3/\2/\1", "2026-11-21"))
```

## compile: reusing a pattern
`re.compile` turns a pattern into an object you can use many times. It is tidy when the same pattern is used in several places.

```py
import re
word = re.compile(r"\b[A-Z][a-z]+\b")
print(word.findall("Ada met Ben in London"))
print(bool(word.search("no capitals here")))
```

## Putting it together
Pulling useful information out of a block of text.

```py
import re
notes = """Meeting on 2026-11-21 with ada@example.com and ben.k@mail.org.
Call Ada on 0201-555-123. Budget: £1,250. Next meeting 2026-12-05."""

emails = re.findall(r"[\w.]+@[\w]+\.\w+", notes)
dates = re.findall(r"\d{4}-\d{2}-\d{2}", notes)
phones = re.findall(r"\d{4}-\d{3}-\d{3}", notes)
money = re.findall(r"£[\d,]+", notes)
words = re.findall(r"\b[a-zA-Z]+\b", notes)
print("Emails:", emails)
print("Dates:", dates)
print("Phones:", phones)
print("Money:", money)
print("Word count:", len(words))
```
