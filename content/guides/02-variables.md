## What a variable is
A variable is a name that points to a value. You make one with `=`, which in Python means "store this", not "is equal to". The name goes on the left and the value on the right.

```py
city = "Lagos"
population = 15_000_000
print(city)
print(population)
```

Think of a variable as a sticky label on a box. `city = "Lagos"` puts the text "Lagos" in a box and sticks the label city on it. Whenever you write `city`, Python looks inside that box.

Underscores inside a number, like `15_000_000`, are only there to make it easier to read. Python ignores them.

## Changing a variable
A variable can be given a new value at any time. The old value is replaced. You can even use the old value to work out the new one.

```py
score = 10
print(score)
score = 15
print(score)
score = score + 5     # take the old score, add 5, store it back
print(score)
```

Adding to a variable is so common that Python has a shortcut: `score += 5` means `score = score + 5`. There are shortcuts for the other operators too: `-=`, `*=`, `/=`.

```py
lives = 3
lives -= 1
print(lives)
coins = 100
coins *= 2
print(coins)
```

## Naming rules
A variable name:

- can contain letters, digits and underscores (`_`)
- cannot start with a digit (`2nd_place` is not allowed)
- cannot contain spaces or dashes (`first-name` is not allowed)
- cannot be one of Python's own words such as `if`, `for`, `class` or `True`
- is case-sensitive, so `Name`, `name` and `NAME` are three different variables

The Python style is called snake_case: all lower case, with underscores between words, like `first_name` or `total_price`. Pick names that say what the value means. `t` tells a reader nothing; `temperature_c` tells them everything.

```py
first_name = "Grace"
last_name = "Hopper"
year_of_birth = 1906
is_programmer = True
print(first_name, last_name, year_of_birth, is_programmer)
```

```py error
2nd_place = "Ben"
```

```py error
name = "Ada"
print(Name)
```

The last example fails because `Name` (capital N) was never created. Only `name` exists.

## Several variables in one line
You can set several variables at once by putting commas on both sides. Python matches them up in order. This also gives you a neat way to swap two values.

```py
first_name, last_name, age = "Alan", "Turing", 41
print(first_name)
print(last_name)
print(age)

a, b = 1, 2
a, b = b, a      # swap
print(a, b)
```

## Data types
Every value has a type. The four basic ones are:

- `int` for whole numbers: `7`, `-3`, `2026`
- `float` for decimals: `3.14`, `-0.5`, `9.81`
- `str` for text: `"hello"`, `'42'`
- `bool` for yes or no: `True`, `False`

`type()` tells you which type a value has. Notice that `"42"` with quotes is text, not a number.

```py
print(type(7))
print(type(3.14))
print(type("hello"))
print(type("42"))
print(type(True))
```

The type matters because it decides what operations make sense. Adding two numbers does maths; adding two strings joins them.

```py
print(2 + 3)
print("2" + "3")
```

## Converting between types (casting)
Python will not guess what you mean when you mix types. Text and numbers cannot be added together.

```py error
age = 25
print("I am " + age)
```

To fix this, convert one value to the other's type. `int()`, `float()`, `str()` and `bool()` each make a new value of that type.

```py
age = 25
print("I am " + str(age))      # number to text
print(int("40") + 2)          # text to whole number
print(float("2.5") * 2)       # text to decimal
print(int(9.99))              # float to int cuts off the decimals (it does not round)
print(float(7))               # int to float
```

Converting only works when the text really looks like a number.

```py error
print(int("twelve"))
```

`bool()` turns a value into True or False. Zero, empty text and empty collections count as False; nearly everything else is True.

```py
print(bool(0))
print(bool(5))
print(bool(""))
print(bool("hi"))
print(bool([]))
```

## Getting input from the user
`input()` asks the person running the program to type something, and gives you what they typed as a string. It cannot run inside these examples, but this is what it looks like. Remember to convert the answer if you need a number.

```py norun
name = input("What is your name? ")
age = int(input("How old are you? "))
print("Hello", name, "next year you will be", age + 1)
```

## Built-in functions
Python comes with tools you can use straight away, called built-in functions. You have already met `print()`, `type()` and `input()`. Some more:

- `len()` counts the items in something, or the characters in text
- `abs()` gives the distance from zero (drops the minus sign)
- `round()` rounds to the nearest whole number, or to a number of decimal places
- `min()` and `max()` pick the smallest and largest
- `sum()` adds up a collection of numbers
- `pow(a, b)` is the same as `a ** b`

```py
print(len("Python"))
print(abs(-7))
print(round(3.14159))
print(round(3.14159, 2))
print(min(4, 9, 2))
print(max(4, 9, 2))
print(sum([10, 20, 30]))
print(pow(2, 5))
```

`help()` shows the documentation for any function, and `dir()` lists what a value can do. These are great for exploring.

```py
print(dir("text")[-5:])   # the last five things a string can do
```

## Putting it together
A small program that uses variables, conversion and built-in functions to work out a bill split between friends.

```py
meal_cost = "84.60"        # arrived as text, perhaps from a form
tip_percent = 10
people = 4

total = float(meal_cost) * (1 + tip_percent / 100)
each = total / people
print("Total with tip:", round(total, 2))
print("Each person pays:", round(each, 2))
```
