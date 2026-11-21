## What Python is
Python is a programming language: a way of writing instructions that a computer can follow. It was created by Guido van Rossum and first released in 1991. Its big idea is that code should be easy to read, so Python looks a lot like plain English and uses very few symbols.

People use Python for websites, data analysis, automation (making the computer do boring jobs for you), science, machine learning and games. It is one of the most popular first languages because you can get useful results quickly.

When you press Run, Python reads your code from the top line to the bottom line and does each instruction in order. If something goes wrong on line 5, lines 1 to 4 have already run.

```py
print("First this line runs")
print("then this one")
print("and finally this one")
```

## Showing things with print()
`print()` is a function: a named action you can use. You put what you want shown inside the brackets. Text must go inside quotes, either "double" or 'single'. Numbers do not need quotes.

```py
print("Hello, world")
print('Single quotes work too')
print(42)
print(3.5)
```

You can give `print()` several things at once, separated by commas. Python puts a space between them for you.

```py
print("I am", 25, "years old")
print("Total:", 10 + 5)
```

Two useful extras: `sep` changes what goes between the items, and `end` changes what goes at the end of the line (normally a new line).

```py
print("2026", "11", "21", sep="-")
print("Loading", end="...")
print("done")
```

Calling `print()` with nothing inside prints an empty line, which is handy for spacing out results.

```py
print("Part one")
print()
print("Part two")
```

## Comments
A comment starts with `#`. Python ignores everything after the `#` on that line. Comments are notes for people: they explain why the code does something, or remind you what you were thinking.

```py
# This whole line is a comment, so nothing happens here
print("Comments are skipped")  # a comment can also sit at the end of a line
# print("This line will not run, because it is commented out")
```

For a longer note you can use a string in triple quotes. Python does not print it; it just sits there as a note. You will see this style used to describe functions later.

```py
"""
This program works out a shopping total.
Written while learning Python.
"""
print(3 * 2.50)
```

## Python as a calculator
Python can do all the maths a calculator can. Here are the arithmetic operators:

- `+` adds, `-` subtracts, `*` multiplies, `/` divides
- `//` divides and throws away the decimal part (floor division)
- `%` gives the remainder after dividing (called modulo)
- `**` raises to a power, so `2 ** 3` means 2 × 2 × 2

```py
print(7 + 3)    # addition
print(7 - 3)    # subtraction
print(7 * 3)    # multiplication
print(7 / 3)    # division always gives a decimal
print(7 // 3)   # floor division: how many whole 3s fit in 7
print(7 % 3)    # remainder: what is left over
print(7 ** 2)   # 7 squared
```

Everyday example: 17 sweets shared between 5 children. Each child gets `17 // 5` sweets, and `17 % 5` are left over.

```py
sweets = 17
children = 5
print("Each child gets", sweets // children)
print("Left over:", sweets % children)
```

## Order of operations
Python follows the same order as maths at school: brackets first, then powers, then multiply and divide, then add and subtract. When in doubt, add brackets. They make the order obvious to anyone reading.

```py
print(2 + 3 * 4)      # 3 * 4 happens first
print((2 + 3) * 4)    # brackets first
print(2 ** 3 * 2)     # power first: 8 * 2
print(10 - 4 - 3)     # left to right: (10 - 4) - 3
```

## Whole numbers and decimals
Python has two main kinds of number. An `int` is a whole number like 7 or -20. A `float` is a number with a decimal point like 3.5. Dividing with `/` always gives a float, even if the answer is whole.

```py
print(10 / 2)
print(type(10))
print(type(10 / 2))
print(type(3.5))
```

Floats are stored in binary, so some decimals cannot be stored exactly. This tiny error is normal in every programming language. Use `round()` when you show money or measurements.

```py
print(0.1 + 0.2)
print(round(0.1 + 0.2, 2))
```

Python can also handle huge whole numbers with no trouble, and complex numbers (used in engineering) written with a `j`.

```py
print(2 ** 100)
print(type(3 + 4j))
```

## Python's main data types
Every value in Python has a type, which decides what you can do with it. You will meet each of these in its own lesson:

- `int`: whole numbers, `5`
- `float`: decimals, `2.5`
- `complex`: complex numbers, `1 + 2j`
- `str`: text (a string of characters), `"hello"`
- `bool`: `True` or `False`
- `list`: an ordered collection you can change, `[1, 2, 3]`
- `tuple`: an ordered collection you cannot change, `(1, 2, 3)`
- `set`: a collection with no duplicates, `{1, 2, 3}`
- `dict`: key and value pairs, `{"name": "Ada"}`

`type()` tells you the type of any value.

```py
print(type(5))
print(type(2.5))
print(type(1 + 2j))
print(type("hello"))
print(type(True))
print(type([1, 2, 3]))
print(type((1, 2, 3)))
print(type({1, 2, 3}))
print(type({"name": "Ada"}))
```

## Indentation and errors
Python uses spaces at the start of a line (indentation) to group code. At this stage every line should start at the very left edge. If you add a space by mistake, Python complains.

```py error
print("fine")
 print("one space too many")
```

Error messages look scary at first, but they are helpful: the last line names the problem. Here Python says it did not expect the indent. Another common one is forgetting a closing quote or bracket.

```py error
print("Hello)
```

## Try it yourself
The best way to learn is to change the examples. Press "Try it" under any example to copy it into the Playground, change a number or some text, and press Run to see what happens. Breaking code on purpose and reading the error is a great way to learn.
