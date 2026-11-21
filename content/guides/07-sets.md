## What a set is
A set is a collection of unique items with no order. It is like a bag of name badges: each name can only be in the bag once, and the badges are not kept in any line. Sets are written with curly brackets.

```py
colours = {"red", "green", "blue"}
print(colours)
print(len(colours))
print(type(colours))
```

Duplicates simply disappear when a set is made.

```py
rolls = {3, 6, 3, 1, 6, 6}
print(rolls)
print(len(rolls))
```

## Making a set
An empty set must be made with `set()`, because `{}` makes an empty dictionary. `set()` can also turn any collection into a set.

```py
print(type({}))
print(type(set()))
print(set("banana"))
print(set([1, 2, 2, 3, 3, 3]))
```

## No order, no indexes
Because a set has no order, there is no first item and no `[0]`. The order Python prints a set in can look random and you should not rely on it.

```py error
colours = {"red", "green", "blue"}
print(colours[0])
```

You can still loop over a set, or sort it into a list when you need an order.

```py
colours = {"red", "green", "blue"}
for c in sorted(colours):
    print(c)
```

## Checking membership
This is what sets are best at. Checking `in` on a set is instant, even with millions of items, while a list has to look at each item in turn.

```py
allowed = {"ada", "ben", "chen"}
print("ben" in allowed)
print("zoe" in allowed)
print("zoe" not in allowed)
```

## Adding items
`add()` puts in one item; `update()` adds every item from another collection. Adding an item that is already there does nothing.

```py
tags = {"python"}
tags.add("beginner")
tags.add("python")       # already there, no change
print(sorted(tags))
tags.update(["code", "learning", "beginner"])
print(sorted(tags))
```

## Removing items
- `remove(x)` deletes x and raises an error if it is missing
- `discard(x)` deletes x and quietly does nothing if it is missing
- `pop()` removes and returns some item (you do not choose which)
- `clear()` empties the set

```py
tags = {"python", "code", "fun"}
tags.remove("fun")
tags.discard("not there")   # no error
print(sorted(tags))
tags.clear()
print(tags)
```

```py error
tags = {"python", "code"}
tags.remove("java")
```

## Removing duplicates from a list
The most common everyday use of a set: turn a list into a set to remove repeats, then back into a list if you need one.

```py
emails = ["a@x.com", "b@x.com", "a@x.com", "c@x.com", "b@x.com"]
unique = list(set(emails))
print(len(emails), "emails,", len(unique), "unique")
print(sorted(unique))
```

If the original order matters, use `dict.fromkeys()` instead, which keeps the first appearance of each item.

```py
visits = ["home", "about", "home", "shop", "about"]
print(list(dict.fromkeys(visits)))
```

## Union: everything in either set
`a | b` (or `a.union(b)`) gives every item that is in a, in b, or in both.

```py
class_a = {"Ada", "Ben", "Chen"}
class_b = {"Chen", "Dara", "Eve"}
print(sorted(class_a | class_b))
print(sorted(class_a.union(class_b)))
```

## Intersection: items in both
`a & b` (or `a.intersection(b)`) gives only the items the two sets share.

```py
likes_tea = {"Ada", "Ben", "Chen"}
likes_coffee = {"Ben", "Chen", "Dara"}
print(sorted(likes_tea & likes_coffee))
```

## Difference: in one but not the other
`a - b` (or `a.difference(b)`) gives items in a that are not in b. The order matters.

```py
invited = {"Ada", "Ben", "Chen", "Dara"}
replied = {"Ben", "Dara"}
print("Still to reply:", sorted(invited - replied))
print(sorted(replied - invited))
```

## Symmetric difference: in exactly one
`a ^ b` gives items that are in one set or the other, but not both.

```py
monday = {"Ada", "Ben", "Chen"}
tuesday = {"Ben", "Chen", "Dara"}
print("Came only one day:", sorted(monday ^ tuesday))
```

## Subsets, supersets and disjoint sets
- `a.issubset(b)` (or `a <= b`): is every item of a also in b?
- `a.issuperset(b)` (or `a >= b`): does a contain every item of b?
- `a.isdisjoint(b)`: do they share nothing at all?

```py
needed = {"flour", "eggs"}
cupboard = {"flour", "eggs", "sugar", "milk"}
print(needed.issubset(cupboard))
print(cupboard.issuperset(needed))
print(needed <= cupboard)
print({"salt"}.isdisjoint(cupboard))
```

## Updating a set in place
The operators above make new sets. Each has an in-place version that changes the set itself: `|=`, `&=`, `-=` and `^=`.

```py
stock = {"apples", "pears", "plums"}
stock -= {"pears"}            # sold out
stock |= {"cherries"}         # new delivery
print(sorted(stock))
```

## Frozen sets
A `frozenset` is a set that cannot be changed, like a tuple is a list that cannot be changed. Sets can only contain unchangeable items, so a frozenset can go inside a set.

```py
weekend = frozenset(["Sat", "Sun"])
print("Sun" in weekend)
pairs = {frozenset(["Ada", "Ben"]), frozenset(["Ben", "Ada"])}
print(len(pairs))   # the same pair, so only one
```

## Putting it together
Comparing the words used in two sentences.

```py
a = "the cat sat on the mat".split()
b = "the dog sat on the log".split()
wa, wb = set(a), set(b)
print("Words in both:", sorted(wa & wb))
print("Only in the first:", sorted(wa - wb))
print("All words:", sorted(wa | wb))
print("Different words:", len(wa ^ wb))
```
