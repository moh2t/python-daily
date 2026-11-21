## What a string is
A string is a piece of text: a sequence of characters such as letters, digits, spaces and symbols. You write one by putting text inside quotes. Single and double quotes do exactly the same job; pick one and stay consistent.

```py
greeting = "Hello"
name = 'Amara'
empty = ""
print(greeting, name)
print(len(greeting))
print(len(empty))
```

Having two kinds of quote is useful when the text itself contains a quote.

```py
print("It's a lovely day")
print('She said "hi" to me')
```

## Multi-line strings
Triple quotes (three single or three double) let a string run over several lines. The line breaks are kept.

```py
poem = """Roses are red,
Violets are blue,
Python is fun,
And so are you."""
print(poem)
```

## Joining strings (concatenation)
`+` joins strings together. It does not add spaces for you, so include them yourself. `*` repeats a string.

```py
first = "Ada"
last = "Lovelace"
full = first + " " + last
print(full)
print("=" * len(full))
```

You can only join strings to strings. Convert numbers with `str()` first, or use an f-string (below), which does it for you.

```py
first = "Ada"
age = 36
print(first + " is " + str(age))
```

## Escape sequences
A backslash `\` inside a string starts a special code called an escape sequence.

- `\n` a new line
- `\t` a tab (a wide space, good for lining things up)
- `\\` a real backslash
- `\'` and `\"` a quote that does not end the string

```py
print("Line one\nLine two")
print("Name\tAge")
print("Ada\t36")
print("C:\\Users\\Ada")
print('It\'s fine')
```

## Formatting with f-strings
An f-string is a string with `f` in front of it. Anything inside curly brackets `{}` is worked out and dropped into the text. This is the modern, clearest way to build text from values.

```py
name = "Kofi"
age = 29
print(f"My name is {name} and I am {age} years old.")
print(f"Next year I will be {age + 1}.")
print(f"My name has {len(name)} letters.")
```

After a colon inside the brackets you can control how a value looks. `:.2f` shows 2 decimal places, `:,` adds thousands separators, `:%` shows a percentage, and `:>10` or `:<10` pads to a width.

```py
price = 4.5
print(f"Price: £{price:.2f}")
print(f"Population: {8045311447:,}")
print(f"Score: {0.875:.1%}")
print(f"[{'left':<10}]")
print(f"[{'right':>10}]")
print(f"[{'middle':^10}]")
```

Older code uses `.format()` or the `%` operator for the same job. You will see them around, so it helps to recognise them.

```py
print("I am {} and I am {} years old".format("Kofi", 29))
print("I am {name}, aged {age}".format(name="Kofi", age=29))
print("I am %s and I am %d years old" % ("Kofi", 29))
print("Pi is about %.2f" % 3.14159)
```

## Strings are sequences: indexing
Each character in a string has a position number called an index. Counting starts at 0, not 1. Negative indexes count from the end: `-1` is the last character.

```text
 P   y   t   h   o   n
 0   1   2   3   4   5
-6  -5  -4  -3  -2  -1
```

```py
word = "Python"
print(word[0])
print(word[1])
print(word[5])
print(word[-1])
print(word[-2])
print(word[len(word) - 1])
```

Asking for a position that does not exist is an error.

```py error
word = "Python"
print(word[6])
```

## Slicing
A slice takes a piece of a string: `text[start:stop]`. It starts at index start and stops just before index stop. Leave out start to begin at the beginning, and leave out stop to go to the end.

```py
word = "Python"
print(word[0:3])    # indexes 0, 1, 2
print(word[2:5])
print(word[:2])     # from the start
print(word[2:])     # to the end
print(word[-3:])    # the last three
print(word[:])      # a copy of the whole thing
```

A third number is the step. `[::2]` takes every second character and `[::-1]` walks backwards, which reverses the string.

```py
letters = "abcdefghij"
print(letters[::2])
print(letters[1::2])
print(letters[::-1])
print("racecar" == "racecar"[::-1])   # a palindrome reads the same backwards
```

## Unpacking and looping over characters
Because a string is a sequence, you can loop over its characters or unpack them into variables.

```py
for ch in "hey":
    print(ch)

a, b, c = "xyz"
print(a, b, c)
print(list("hello"))
```

## Strings cannot be changed
Strings are immutable: once made, a string cannot be changed in place. Methods like `upper()` do not change the original; they give you a new string. To keep the result, store it.

```py error
word = "cat"
word[0] = "b"
```

```py
word = "cat"
word = "b" + word[1:]
print(word)
shout = word.upper()
print(word, shout)
```

## Changing case
These methods give you a copy of the string with the letters changed.

```py
text = "the quick BROWN fox"
print(text.upper())
print(text.lower())
print(text.title())
print(text.capitalize())
print(text.swapcase())
```

Lowering both sides is the usual way to compare text without caring about capitals.

```py
answer = "YES"
print(answer.lower() == "yes")
```

## Searching inside a string
- `in` checks whether some text appears
- `count()` counts how many times it appears
- `find()` gives the index of the first match, or -1 if there is none
- `index()` is like find but raises an error when there is no match
- `startswith()` and `endswith()` check the beginning and end

```py
sentence = "I love Python and Python loves me"
print("Python" in sentence)
print(sentence.count("Python"))
print(sentence.find("Python"))
print(sentence.rfind("Python"))   # search from the right
print(sentence.find("Java"))
print(sentence.startswith("I love"))
print("photo.jpg".endswith(".jpg"))
```

## Cleaning and replacing
`strip()` removes spaces (and new lines) from both ends. `lstrip()` and `rstrip()` do one end only. `replace(old, new)` swaps every match.

```py
messy = "   hello world   "
print("[" + messy.strip() + "]")
print("[" + messy.lstrip() + "]")
print("[" + messy.rstrip() + "]")
print("I like cats. Cats are great.".replace("cats", "dogs"))
print("2026-11-21".replace("-", "/"))
print("$$$price$$$".strip("$"))
```

## Splitting and joining
`split()` breaks a string into a list of pieces. With no argument it splits on any spaces. `join()` does the opposite: it glues a list of strings together, with the string you call it on placed between each piece.

```py
sentence = "Python is easy to read"
words = sentence.split()
print(words)
print(len(words), "words")
print("apples,pears,plums".split(","))
print("-".join(["2026", "11", "21"]))
print(" ".join(reversed(words)))
```

## Checking what a string contains
These methods answer True or False about every character in the string.

```py
print("12345".isdigit())
print("12a45".isdigit())
print("hello".isalpha())
print("hello123".isalnum())
print("hello world".isalpha())   # the space is not a letter
print("HELLO".isupper())
print("hello".islower())
print("   ".isspace())
print("first_name".isidentifier())   # could it be a variable name?
```

## Lining text up
`center()`, `ljust()` and `rjust()` pad text to a width, and `zfill()` pads a number with zeros.

```py
print("menu".center(20, "*"))
print("Tea".ljust(10, ".") + "£2.00")
print("Coffee".ljust(10, ".") + "£2.50")
print("7".zfill(3))
```

## Putting it together
A small program that tidies a name typed by a user and builds a username from it.

```py
raw = "   ada LOVELACE  "
clean = raw.strip().title()
first, last = clean.split()
username = (first[0] + last).lower()
print(f"Name: {clean}")
print(f"Initials: {first[0]}.{last[0]}.")
print(f"Username: {username}")
print(f"Reversed: {clean[::-1]}")
```
