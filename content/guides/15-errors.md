## Errors are normal
Every programmer sees errors all day. An error is Python telling you exactly what went wrong and where. When code fails, Python prints a traceback; the most useful part is the last line, which names the kind of error and gives a short description. Learning to read that line is one of the best skills you can have.

```py error
numbers = [1, 2, 3]
print(numbers[10])
```

The examples below show the most common errors, what causes each, and how to fix it.

## SyntaxError
The code is not valid Python, so it cannot even start. Usual causes: a missing colon, bracket or quote, or a typo in a keyword.

```py error
if 5 > 3
    print("yes")
```

```py error
print("hello"
```

Fix: look at the line Python points to, and the line just before it. Here the colon and closing bracket were missing.

```py
if 5 > 3:
    print("yes")
print("hello")
```

## IndentationError
The spaces at the start of a line do not match what Python expects.

```py error
def greet():
print("hi")
```

Fix: indent the body of every `if`, `for`, `while`, `def` and `class` by 4 spaces.

## NameError
You used a name that does not exist (yet). Usual causes: a typo, wrong capital letters, or using a variable before you create it.

```py error
age = 20
print(Age)
```

```py error
print(total)
total = 10
```

Fix: check the spelling, and make sure the variable is created above the line that uses it.

## TypeError
You used a value in a way its type does not allow, like adding text to a number, or calling a function with the wrong number of arguments.

```py error
print("Age: " + 25)
```

```py error
print(len(5))
```

```py error
def add(a, b):
    return a + b
add(1)
```

Fix: convert types where needed (`str(25)`), or use an f-string, and pass the right arguments.

```py
print("Age: " + str(25))
print(f"Age: {25}")
```

## ValueError
The type is right, but the value is not acceptable, like turning "hello" into a number.

```py error
print(int("hello"))
```

```py error
import math
print(math.sqrt(-1))
```

```py error
a, b = [1, 2, 3]
```

## IndexError
You asked for a position that a list, tuple or string does not have.

```py error
colours = ["red", "green"]
print(colours[2])
```

Fix: remember indexes start at 0, so the last index is `len(x) - 1`. Using `-1` always gets the last item safely.

```py
colours = ["red", "green"]
print(colours[len(colours) - 1], colours[-1])
```

## KeyError
You asked a dictionary for a key it does not have.

```py error
person = {"name": "Ada"}
print(person["age"])
```

Fix: check with `in`, or use `get()` with a default.

```py
person = {"name": "Ada"}
print(person.get("age", "unknown"))
if "age" in person:
    print(person["age"])
else:
    print("No age stored")
```

## AttributeError
You used a method or attribute that this type of value does not have. Often it is the right method on the wrong type, like calling a string method on a list.

```py error
nums = [3, 1, 2]
nums.upper()
```

```py error
result = None
result.append(1)
```

## ZeroDivisionError
Dividing by zero is impossible in maths, so Python stops.

```py error
print(10 / 0)
```

```py error
scores = []
print(sum(scores) / len(scores))
```

Fix: check before dividing.

```py
scores = []
average = sum(scores) / len(scores) if scores else 0
print(average)
```

## ModuleNotFoundError and ImportError
`ModuleNotFoundError` means Python cannot find the module you asked for (a typo, or a package that is not installed). `ImportError` means the module exists but does not have the name you asked for.

```py error
import maths
```

```py error
from math import squareroot
```

## Handling errors with try and except
Sometimes errors are expected: a user types text instead of a number, or a file is missing. `try` and `except` let your program deal with the problem instead of crashing. Python runs the `try` block; if an error happens, it jumps to the matching `except` block.

```py
text = "abc"
try:
    number = int(text)
    print("You typed", number)
except ValueError:
    print(f"'{text}' is not a whole number")
print("The program keeps going")
```

## Catching specific errors
Name the errors you expect. You can have several `except` blocks, or catch several types in one with a tuple. `as e` gives you the error itself, so you can show its message.

```py
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "cannot divide by zero"
    except TypeError as e:
        return f"bad input: {e}"

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide(10, "two"))
```

```py
for value in ["5", "x", None]:
    try:
        print(int(value) * 2)
    except (ValueError, TypeError) as e:
        print("Skipped", repr(value), "because:", type(e).__name__)
```

Avoid a bare `except:` with no error name. It also catches mistakes you did not expect, which hides bugs.

## else and finally
- `else` runs only if the `try` block had no error.
- `finally` always runs, error or not. It is for tidying up, like closing a file.

```py
def read_age(text):
    try:
        age = int(text)
    except ValueError:
        print("Not a number:", text)
    else:
        print("Age is", age)
    finally:
        print("Finished checking", repr(text))

read_age("30")
read_age("thirty")
```

## Asking again until the input is good
A loop with `try` is the standard way to keep asking until the user gives a valid answer. Here a list stands in for what the user types.

```py
typed = ["ten", "", "-5", "7"]
for answer in typed:
    try:
        n = int(answer)
        if n < 0:
            raise ValueError("must not be negative")
    except ValueError as e:
        print(f"{answer!r} rejected: {e}")
        continue
    print("Accepted", n)
    break
```

## Raising your own errors
`raise` lets your own functions signal a problem, the same way Python does. Pick the error type that fits and write a clear message.

```py error
def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age

set_age(-4)
```

```py
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError(f"cannot take {amount}, only {balance} available")
    return balance - amount

try:
    withdraw(50, 80)
except ValueError as e:
    print("Problem:", e)
```

## Making your own error types
For bigger programs you can define your own error class (classes are lesson 19). It makes errors easy to recognise and catch.

```py
class OutOfStock(Exception):
    pass

def buy(item, stock):
    if stock.get(item, 0) == 0:
        raise OutOfStock(f"{item} is out of stock")
    stock[item] -= 1
    return "bought " + item

stock = {"tea": 1}
for attempt in ["tea", "tea"]:
    try:
        print(buy(attempt, stock))
    except OutOfStock as e:
        print("Sorry:", e)
```

## Unpacking, packing and spreading
The 30 Days course covers these alongside exceptions. You met them in lessons 5, 6 and 11; here is a reminder in one place. `*` unpacks a list into separate values and packs extra values into a list; `**` does the same for dictionaries.

```py
def area(width, height):
    return width * height

size = [3, 4]
print(area(*size))                       # unpack a list into arguments
print(area(**{"width": 5, "height": 2})) # unpack a dictionary
first, *rest = [1, 2, 3, 4]
print(first, rest)                       # pack the rest into a list
a = [1, 2]
b = [3, 4]
print([*a, *b, 5])                       # spread lists into a new one
print({**{"x": 1}, **{"y": 2}})          # spread dictionaries
```

## enumerate and zip
Two built-ins that the course also covers here, which you have met in loops.

```py
fruits = ["apple", "pear", "fig"]
prices = [0.5, 0.75, 1.2]
for i, fruit in enumerate(fruits):
    print(i, fruit)
for fruit, price in zip(fruits, prices):
    print(f"{fruit}: £{price}")
print(dict(zip(fruits, prices)))
```
