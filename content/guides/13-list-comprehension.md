## What a list comprehension is
A list comprehension builds a new list in one line by describing what each item should be. It is a short way of writing the "start with an empty list, loop, append" pattern.

Here is the long way and the comprehension way side by side. Both make the same list.

```py
squares = []
for n in range(1, 6):
    squares.append(n * n)
print(squares)

squares = [n * n for n in range(1, 6)]
print(squares)
```

Read it from the middle out: "for each n in range(1, 6), give me n * n".

## The basic shape
`[expression for item in collection]`. The expression can be anything: maths, a method call, a function, even a tuple.

```py
words = ["sun", "moon", "star"]
print([w.upper() for w in words])
print([len(w) for w in words])
print([w[0] for w in words])
print([(w, len(w)) for w in words])
print([c for c in "hello"])
```

```py
prices = [2.0, 4.5, 10.0]
with_tax = [round(p * 1.2, 2) for p in prices]
print(with_tax)
```

```py
text = "3 14 15 92 65"
numbers = [int(x) for x in text.split()]
print(numbers, sum(numbers))
```

## Filtering with if
Add `if condition` at the end to keep only some items.

```py
nums = range(1, 21)
print([n for n in nums if n % 2 == 0])
print([n for n in nums if n % 3 == 0])
print([n * n for n in nums if n > 15])
```

```py
names = ["Ada", "ben", "Chen", "dara", "Eve"]
print([n for n in names if n[0].isupper()])
print([n.title() for n in names if len(n) > 3])
```

```py
temps = [-3, 4, 12, -1, 20, 0]
print([t for t in temps if t < 0])
```

## Choosing between two values with if and else
To transform every item but in two different ways, put a one-line if/else in the expression part, before the `for`. Note the position: a filter `if` goes at the end; an if/else that picks a value goes at the front.

```py
nums = [1, 2, 3, 4, 5, 6]
print(["even" if n % 2 == 0 else "odd" for n in nums])
print([n if n > 0 else 0 for n in [-2, 5, -7, 3]])
```

```py
scores = [45, 82, 67, 91, 38]
print(["pass" if s >= 50 else "fail" for s in scores])
```

## Nested loops in a comprehension
You can have more than one `for`. They run in the same order as nested loops written out in full: the first `for` is the outer loop.

```py
pairs = [(x, y) for x in [1, 2, 3] for y in ["a", "b"]]
print(pairs)

pairs = []
for x in [1, 2, 3]:
    for y in ["a", "b"]:
        pairs.append((x, y))
print(pairs)
```

Flattening a list of lists into one list is a common use.

```py
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [n for row in grid for n in row]
print(flat)
```

A comprehension can also build a list of lists, like a multiplication table.

```py
table = [[r * c for c in range(1, 5)] for r in range(1, 5)]
for row in table:
    print(row)
```

## Dictionary and set comprehensions
The same idea works for dictionaries (with `key: value` in curly brackets) and sets (curly brackets without a colon).

```py
words = ["apple", "kiwi", "banana"]
print({w: len(w) for w in words})
print({n: n ** 2 for n in range(1, 6)})
print({len(w) for w in words})
```

```py
prices = {"tea": 2.0, "cake": 3.5, "soup": 4.0}
cheap = {k: v for k, v in prices.items() if v < 4}
print(cheap)
swapped = {v: k for k, v in prices.items()}
print(swapped)
```

## Generator expressions
With round brackets instead of square ones you get a generator. It makes the values one at a time instead of building the whole list in memory, which is ideal when you only need to add them up or check them once.

```py
print(sum(n * n for n in range(1, 101)))
print(max(len(w) for w in ["a", "abc", "ab"]))
print(any(n > 10 for n in [3, 7, 12]))
print(all(n > 0 for n in [3, 7, 12]))
```

## When not to use one
Comprehensions are for building collections. If a line gets long or needs several conditions, a normal loop is clearer. Readable beats short.

```py
# Clear as a comprehension
evens = [n for n in range(10) if n % 2 == 0]
print(evens)

# Clearer as a loop: several steps for each item
report = []
for n in range(1, 6):
    label = "big" if n > 3 else "small"
    report.append(f"{n} is {label}")
print(report)
```

## Lambda functions
A lambda is a tiny function written in one line: `lambda inputs: result`. It has no name and no `return`; the result is whatever the expression gives. These two do the same thing:

```py
def add(a, b):
    return a + b
print(add(2, 3))

add = lambda a, b: a + b
print(add(2, 3))
```

```py
square = lambda x: x ** 2
is_even = lambda n: n % 2 == 0
full_name = lambda first, last: f"{first.title()} {last.title()}"
print(square(7))
print(is_even(10), is_even(7))
print(full_name("ada", "lovelace"))
```

## Where lambdas shine
Lambdas are most useful as a quick function passed into another one, especially as the `key` for sorting, `min()` or `max()`.

```py
people = [("Ada", 36), ("Ben", 28), ("Chen", 41)]
print(sorted(people, key=lambda p: p[1]))
print(max(people, key=lambda p: p[1]))
words = ["banana", "Kiwi", "apple", "Cherry"]
print(sorted(words, key=lambda w: w.lower()))
print(sorted(words, key=lambda w: len(w)))
```

## A lambda inside a function
A function can build and return a lambda. Here `power(2)` makes a "square" function and `power(3)` makes a "cube" function.

```py
def power(exponent):
    return lambda base: base ** exponent

square = power(2)
cube = power(3)
print(square(5))
print(cube(5))
```

## Putting it together
Processing a small list of products with comprehensions and lambdas.

```py
products = [
    {"name": "pen", "price": 1.20, "stock": 30},
    {"name": "notebook", "price": 3.50, "stock": 0},
    {"name": "bag", "price": 25.00, "stock": 4},
    {"name": "ruler", "price": 0.90, "stock": 12},
]
in_stock = [p["name"] for p in products if p["stock"] > 0]
print("In stock:", in_stock)
value = sum(p["price"] * p["stock"] for p in products)
print(f"Stock value: £{value:.2f}")
labels = [f"{p['name']}: {'cheap' if p['price'] < 2 else 'pricey'}" for p in products]
print(labels)
print("Most expensive:", max(products, key=lambda p: p["price"])["name"])
```
