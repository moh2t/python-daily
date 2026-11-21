## What a tuple is
A tuple is an ordered collection, like a list, but it cannot be changed after it is made (it is immutable). You write it with round brackets. Use a tuple for a fixed group of values that belong together: the days of the week, a date, a map coordinate.

```py
days = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
point = (3, 4)
print(days)
print(point)
print(type(point))
print(len(days))
```

## Making a tuple
The commas make a tuple, not the brackets. That is why a tuple with one item needs a trailing comma; without it, the brackets are just ordinary maths brackets.

```py
a = (5)
b = (5,)
c = 5, 6, 7
print(type(a))
print(type(b))
print(c, type(c))
print(tuple())                  # an empty tuple
print(tuple(["x", "y", "z"]))   # from a list
print(tuple("hey"))             # from a string
```

## Reading items
Indexing and slicing work exactly the same as for lists and strings.

```py
colours = ("red", "green", "blue", "yellow")
print(colours[0])
print(colours[-1])
print(colours[1:3])
print(colours[::-1])
```

## Tuples cannot be changed
Trying to change, add or remove an item is an error. That is the whole point: it protects values that should stay fixed.

```py error
colours = ("red", "green", "blue")
colours[0] = "pink"
```

```py error
colours = ("red", "green", "blue")
colours.append("pink")
```

If you really need a changed version, turn it into a list, change that, and turn it back. You get a new tuple; the original is untouched.

```py
colours = ("red", "green", "blue")
as_list = list(colours)
as_list.append("pink")
colours = tuple(as_list)
print(colours)
```

## Checking, counting and finding
Tuples have only two methods, `count()` and `index()`, plus `in` and the usual built-ins.

```py
rolls = (6, 2, 6, 3, 6, 1)
print(6 in rolls)
print(rolls.count(6))
print(rolls.index(3))
print(min(rolls), max(rolls), sum(rolls))
print(sorted(rolls))   # sorted() always gives back a list
```

## Joining tuples
`+` joins tuples into a new tuple, and `*` repeats one.

```py
front = ("Ada", "Ben")
back = ("Chen", "Dara")
team = front + back
print(team)
print(("ha",) * 3)
```

## Unpacking
Unpacking pulls a tuple's values straight into named variables. This is one of the most useful things in Python and you will see it everywhere.

```py
person = ("Grace", "Hopper", 1906)
first, last, born = person
print(first)
print(last)
print(born)

name, *rest = ("Ada", 36, "London", "maths")
print(name, rest)
```

Swapping two variables is really tuple packing and unpacking: the right side builds a tuple, the left side unpacks it.

```py
x, y = 1, 2
x, y = y, x
print(x, y)
```

## Returning several values from a function
A function can hand back several values at once by returning a tuple, and the caller unpacks it. (Functions are lesson 11.)

```py
def min_and_max(numbers):
    return min(numbers), max(numbers)

low, high = min_and_max([4, 9, 1, 7])
print(low, high)
print(min_and_max([4, 9, 1, 7]))
```

## Looping over tuples
Loops work like they do for lists. A list of tuples is a very common way to store simple records, and unpacking in the loop makes it read nicely.

```py
scores = [("Ada", 91), ("Ben", 78), ("Chen", 85)]
for name, score in scores:
    print(f"{name} scored {score}")
```

## Tuple or list?
- Use a list when the collection will grow, shrink or change, like a to-do list.
- Use a tuple when the values are fixed and belong together, like a date `(2026, 11, 21)` or an RGB colour `(255, 128, 0)`.
- Tuples can be dictionary keys and set items; lists cannot, because they can change.

```py
distances = {("London", "Paris"): 344, ("Paris", "Rome"): 1106}
print(distances[("London", "Paris")])
```

```py error
bad = {["London", "Paris"]: 344}
```

## Deleting a tuple
You cannot delete one item, but `del` can remove the whole variable.

```py error
colours = ("red", "green")
del colours
print(colours)
```
