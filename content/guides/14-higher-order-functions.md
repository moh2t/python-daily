## What a higher order function is
In Python a function is a value, just like a number or a string. You can store it in a variable, pass it to another function, and return it from a function. A higher order function is one that takes a function as input, gives one back, or both.

```py
def shout(text):
    return text.upper() + "!"

yell = shout          # no brackets: the function itself, not a call
print(yell("hello"))
print(shout.__name__) # the function knows its own name
```

## Passing a function as an argument
This lets you write one general function and plug in different behaviour.

```py
def apply_to_all(func, items):
    return [func(x) for x in items]

def double(x):
    return x * 2

def negate(x):
    return -x

nums = [1, 2, 3]
print(apply_to_all(double, nums))
print(apply_to_all(negate, nums))
print(apply_to_all(str, nums))
print(apply_to_all(lambda x: x ** 3, nums))
```

```py
def calculate(func, a, b):
    return func(a, b)

print(calculate(lambda a, b: a + b, 6, 3))
print(calculate(lambda a, b: a * b, 6, 3))
print(calculate(max, 6, 3))
```

## Returning a function
A function can build a new function and hand it back. The inner function is made fresh each time.

```py
def make_multiplier(n):
    def multiply(x):
        return x * n
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(10))
print(triple(10))
```

```py
def greeter(greeting):
    def greet(name):
        return f"{greeting}, {name}!"
    return greet

morning = greeter("Good morning")
evening = greeter("Good evening")
print(morning("Ada"))
print(evening("Ben"))
```

## Closures
In the examples above, the inner function remembers the values from the outer function (`n`, `greeting`) even after the outer function has finished. That remembered environment is called a closure. Closures can even keep state between calls, using `nonlocal` to change the remembered value.

```py
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

clicks = make_counter()
print(clicks())
print(clicks())
print(clicks())
other = make_counter()   # a separate counter with its own count
print(other())
```

## Decorators
A decorator is a function that takes a function and returns an improved version of it, adding something before or after it runs, without changing its code. Writing `@decorator` above a `def` applies it.

```py
def loud(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

@loud
def greet():
    return "hello there"

print(greet())
```

The `@loud` line is just a shortcut for `greet = loud(greet)`.

```py
def loud(func):
    def wrapper():
        return func().upper()
    return wrapper

def greet():
    return "hello there"

greet = loud(greet)
print(greet())
```

## Decorators for functions with arguments
To decorate any function, whatever its arguments, have the wrapper accept `*args` and `**kwargs` and pass them through.

```py
def announce(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args} {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@announce
def add(a, b):
    return a + b

@announce
def greet(name, punctuation="."):
    return "Hello " + name + punctuation

add(2, 3)
greet("Ada", punctuation="!")
```

Here is a useful real-world decorator: timing how long a function takes.

```py
import time

def timed(func):
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        took = time.perf_counter() - start
        print(f"{func.__name__} finished in under {took + 0.01:.2f} seconds")
        return result
    return wrapper

@timed
def add_up(n):
    return sum(range(n))

print(add_up(100000))
```

## Stacking decorators
Several decorators can be applied to one function. The one closest to the `def` is applied first.

```py
def exclaim(func):
    def wrapper():
        return func() + "!"
    return wrapper

def upper(func):
    def wrapper():
        return func().upper()
    return wrapper

@exclaim
@upper
def greet():
    return "welcome"

print(greet())
```

## Decorators that take settings
To give a decorator its own argument, add one more outer layer that takes the setting and returns the real decorator.

```py
def repeat(times):
    def decorator(func):
        def wrapper(*args):
            for _ in range(times):
                func(*args)
        return wrapper
    return decorator

@repeat(3)
def cheer(name):
    print("Go", name)

cheer("team")
```

## map(): change every item
`map(func, items)` runs the function on each item. It gives back a map object, so wrap it in `list()` to see the results.

```py
nums = [1, 2, 3, 4]
print(list(map(lambda x: x * 10, nums)))
print(list(map(str, nums)))
print(list(map(int, ["7", "8", "9"])))
print(list(map(str.title, ["ada", "ben"])))
print(list(map(lambda a, b: a + b, [1, 2, 3], [10, 20, 30])))
```

## filter(): keep some items
`filter(func, items)` keeps only the items for which the function returns True.

```py
nums = range(1, 16)
print(list(filter(lambda n: n % 2 == 0, nums)))
print(list(filter(lambda n: n % 5 == 0, nums)))
words = ["apple", "", "kiwi", "", "fig"]
print(list(filter(None, words)))    # None keeps only truthy items
print(list(filter(str.isdigit, ["12", "a", "7", "x9"])))
```

## reduce(): combine everything into one value
`reduce` lives in the `functools` module. It combines items two at a time: the first two, then that result with the third, and so on, until one value is left.

```py
from functools import reduce
nums = [1, 2, 3, 4, 5]
print(reduce(lambda a, b: a + b, nums))       # ((((1+2)+3)+4)+5)
print(reduce(lambda a, b: a * b, nums))       # 5 factorial
print(reduce(lambda a, b: a if a > b else b, [3, 9, 2, 7]))
print(reduce(lambda a, b: a + " " + b, ["Python", "is", "fun"]))
```

## Built-ins that take a key function
`sorted()`, `min()` and `max()` accept a `key` function that says what to compare. This is higher order functions in everyday use.

```py
cities = [("Lagos", 15.4), ("Cairo", 22.6), ("Accra", 2.6)]
print(sorted(cities, key=lambda c: c[1]))
print(min(cities, key=lambda c: c[1]))
print(max(["pear", "banana", "fig"], key=len))
```

## map and filter or a comprehension?
A list comprehension can do the same jobs as `map` and `filter`, and many Python programmers find it easier to read. Use whichever reads more clearly to you.

```py
nums = [1, 2, 3, 4, 5, 6]
print(list(map(lambda n: n * n, filter(lambda n: n % 2 == 0, nums))))
print([n * n for n in nums if n % 2 == 0])
```

## Putting it together
Cleaning up a list of messy prices with map, filter and reduce.

```py
from functools import reduce
raw = [" 4.50", "free", "12.00 ", "", "3.25", "n/a"]

def looks_like_price(s):
    return s.strip().replace(".", "", 1).isdigit()

prices = list(map(float, filter(looks_like_price, raw)))
print("Prices:", prices)
total = reduce(lambda a, b: a + b, prices, 0)
print(f"Total: £{total:.2f}")
print("Over £4:", list(filter(lambda p: p > 4, prices)))
```
