## What a function is
A function is a named, reusable piece of code. You write it once and use (call) it as many times as you like. Think of a recipe: you write the steps for pancakes once, and whenever you want pancakes you follow the recipe, perhaps with different amounts.

Functions keep code short, stop you repeating yourself, and let you give a name to an idea, so `calculate_tax(price)` explains itself.

## Defining and calling a function
`def` starts a function, followed by its name, brackets and a colon. The indented lines are its body. Defining a function does not run it; calling it by name with brackets does.

```py
def say_hello():
    print("Hello!")
    print("Welcome to Python")

say_hello()
say_hello()
```

A function must be defined before the line that calls it.

```py error
greet()
def greet():
    print("hi")
```

## Parameters: giving a function input
Names inside the brackets are parameters. They act like variables that get their values when you call the function. The values you pass in are called arguments.

```py
def greet(name):
    print(f"Hello, {name}!")

greet("Ada")
greet("Ben")
```

```py
def describe_pet(animal, name):
    print(f"I have a {animal} called {name}.")

describe_pet("dog", "Rex")
describe_pet("cat", "Mittens")
```

Passing the wrong number of arguments is an error.

```py error
def describe_pet(animal, name):
    print(f"I have a {animal} called {name}.")

describe_pet("dog")
```

## Returning a value
`return` hands a value back to whoever called the function, so they can store or use it. `print` only shows something on the screen; `return` gives you something you can keep working with. This difference is one of the most important ideas in programming.

```py
def add(a, b):
    return a + b

total = add(3, 4)
print(total)
print(add(10, 20) * 2)
print(add(add(1, 2), add(3, 4)))
```

```py
def shout(text):
    print(text.upper())      # shows it, but returns nothing

result = shout("hi")
print(result)                # None: there was nothing to keep
```

`return` also ends the function straight away. Any code after it does not run.

```py
def check_age(age):
    if age < 0:
        return "That is not a real age"
    if age < 18:
        return "Minor"
    return "Adult"

print(check_age(-3))
print(check_age(12))
print(check_age(40))
```

## Returning several values
Return several values separated by commas, and they come back as a tuple that you can unpack.

```py
def stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, average = stats([4, 8, 15, 16, 23, 42])
print(low, high, average)
```

## Keyword arguments
You can name the arguments when you call a function. Then the order no longer matters, and the call is easier to read.

```py
def describe_pet(animal, name):
    print(f"I have a {animal} called {name}.")

describe_pet(name="Polly", animal="parrot")
describe_pet("hamster", name="Nibbles")
```

## Default values
A parameter can have a default value, used when the caller leaves it out. Parameters with defaults must come after those without.

```py
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Ada"))
print(greet("Ben", "Good morning"))
print(greet("Chen", greeting="Hi"))
```

```py
def power(base, exponent=2):
    return base ** exponent

print(power(5))
print(power(2, 10))
```

## Any number of arguments: *args
A parameter with one star collects any number of positional arguments into a tuple. `print()` itself works like this, which is why it takes as many values as you give it.

```py
def total(*numbers):
    print("Got", numbers)
    return sum(numbers)

print(total(1, 2))
print(total(5, 10, 15, 20))
print(total())
```

```py
def make_sentence(first_word, *more_words):
    return first_word.capitalize() + " " + " ".join(more_words) + "."

print(make_sentence("python", "is", "really", "fun"))
```

## Any number of named arguments: **kwargs
Two stars collect any named arguments into a dictionary.

```py
def profile(name, **details):
    print("Name:", name)
    for key, value in details.items():
        print(f"  {key}: {value}")

profile("Ada", age=36, city="London", job="mathematician")
```

## Unpacking when you call
The stars also work the other way round: `*` spreads a list into separate arguments, and `**` spreads a dictionary into named arguments.

```py
def add_three(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(add_three(*nums))
info = {"a": 10, "b": 20, "c": 30}
print(add_three(**info))
```

## Variables inside functions (scope)
Variables made inside a function exist only inside it. They are local. Outside the function they do not exist, and two functions can each have their own variable with the same name without any clash.

```py error
def make_secret():
    secret = 42
    return secret

make_secret()
print(secret)
```

```py
counter = 10           # a global variable

def show():
    print("Inside:", counter)   # a function can read a global

show()
print("Outside:", counter)
```

Rather than changing global variables from inside a function, pass values in and return the result. That keeps each function easy to understand and test.

```py
def add_point(score):
    return score + 1

score = 0
score = add_point(score)
score = add_point(score)
print(score)
```

## Docstrings
A string straight after the `def` line describes what the function does. It is called a docstring, and `help()` shows it.

```py
def area_of_circle(radius):
    """Return the area of a circle with the given radius."""
    return 3.14159 * radius ** 2

print(area_of_circle(2))
print(area_of_circle.__doc__)
```

## Functions are values too
A function can be stored in a variable, put in a list, or passed into another function. This is the idea behind lesson 14, higher order functions.

```py
def double(x):
    return x * 2

def triple(x):
    return x * 3

def apply(func, value):
    return func(value)

print(apply(double, 5))
print(apply(triple, 5))
for f in [double, triple]:
    print(f.__name__, f(10))
```

## Lambda: tiny one-line functions
`lambda` makes a small function without a name, in one line: `lambda inputs: result`. It is mostly used when passing a quick function to something like `sorted()`.

```py
square = lambda x: x * x
print(square(6))
add = lambda a, b: a + b
print(add(2, 3))
people = [("Ada", 36), ("Ben", 28), ("Chen", 41)]
print(sorted(people, key=lambda p: p[1]))
```

## Putting it together
A set of small functions that work together, each doing one job.

```py
def c_to_f(celsius):
    """Convert Celsius to Fahrenheit."""
    return celsius * 9 / 5 + 32

def describe(celsius):
    if celsius < 5:
        return "cold"
    if celsius < 20:
        return "mild"
    return "warm"

def report(city, celsius):
    return f"{city}: {celsius}°C ({c_to_f(celsius):.0f}°F), {describe(celsius)}"

for city, temp in [("Oslo", -2), ("London", 12), ("Lagos", 31)]:
    print(report(city, temp))
```

A recursive function calls itself on a smaller problem until it reaches a simple case. Factorial is the classic example: 5! = 5 × 4 × 3 × 2 × 1.

```py
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
print(factorial(10))
```
