## What a list is
A list holds several values in order, inside square brackets and separated by commas. It is like a shopping list: items have a position, you can add and cross off items, and the same item can appear twice.

```py
fruits = ["banana", "orange", "mango", "lemon"]
numbers = [4, 8, 15, 16, 23, 42]
empty = []
print(fruits)
print(len(fruits))
print(len(empty))
```

A list can hold any mix of types, even other lists.

```py
mixed = ["Ada", 36, 1.65, True, ["maths", "poetry"]]
print(mixed)
print(type(mixed))
```

You can also make a list from something else with `list()`, for example the characters of a string or a range of numbers.

```py
print(list("abc"))
print(list(range(5)))
```

## Reading items by index
Like strings, list positions start at 0. Negative indexes count from the end.

```py
fruits = ["banana", "orange", "mango", "lemon"]
print(fruits[0])
print(fruits[2])
print(fruits[-1])
print(fruits[-2])
```

```py error
fruits = ["banana", "orange", "mango", "lemon"]
print(fruits[4])
```

A list inside a list is reached with two sets of brackets: the first picks the inner list, the second picks an item from it.

```py
grid = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]
print(grid[0])
print(grid[1][2])
print(grid[-1][-1])
```

## Unpacking a list
You can pull items straight into variables. A name with `*` collects whatever is left over into a new list.

```py
first, second, third = ["gold", "silver", "bronze"]
print(first, second, third)

winner, *others = ["Amina", "Ben", "Chen", "Dara"]
print(winner)
print(others)

head, *middle, tail = [1, 2, 3, 4, 5]
print(head, middle, tail)
```

## Slicing a list
Slicing works exactly like strings and always gives you a new list.

```py
nums = [10, 20, 30, 40, 50, 60]
print(nums[1:4])
print(nums[:3])
print(nums[3:])
print(nums[-2:])
print(nums[::2])
print(nums[::-1])
```

## Changing items
Unlike strings, lists are mutable: you can change them in place.

```py
fruits = ["banana", "orange", "mango"]
fruits[0] = "avocado"
fruits[-1] = "papaya"
print(fruits)

nums = [1, 2, 3, 4, 5]
nums[1:3] = [20, 30]     # replace a slice
print(nums)
```

## Checking for an item
`in` tells you whether a value is in the list.

```py
fruits = ["banana", "orange", "mango"]
print("mango" in fruits)
print("kiwi" in fruits)
print("kiwi" not in fruits)
```

## Adding items
- `append(x)` adds one item to the end
- `insert(i, x)` puts an item at position i and shifts the rest along
- `extend(other)` adds every item from another list

```py
basket = ["bread"]
basket.append("milk")
print(basket)
basket.insert(0, "eggs")
print(basket)
basket.insert(2, "jam")
print(basket)
basket.extend(["tea", "rice"])
print(basket)
```

A common mistake is using `append` with a list when you meant `extend`. `append` adds the whole list as one item.

```py
a = [1, 2]
a.append([3, 4])
print(a)
b = [1, 2]
b.extend([3, 4])
print(b)
```

## Removing items
- `remove(x)` deletes the first item equal to x
- `pop()` removes and gives back the last item; `pop(i)` does it for position i
- `del` deletes by position or slice
- `clear()` empties the list

```py
pets = ["cat", "dog", "fish", "dog", "hamster"]
pets.remove("dog")         # only the first dog goes
print(pets)

last = pets.pop()
print(last, pets)

first = pets.pop(0)
print(first, pets)

del pets[0]
print(pets)

pets.clear()
print(pets)
```

```py error
pets = ["cat", "dog"]
pets.remove("parrot")
```

## Copying a list
`b = a` does not copy a list. It gives the same list a second name, so changing one changes "both". Use `copy()` (or `a[:]` or `list(a)`) to get a real, separate copy.

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)      # a changed too

c = a.copy()
c.append(5)
print(a)      # a did not change this time
print(c)
```

## Joining lists
`+` joins lists into a new one, and `*` repeats a list.

```py
veg = ["carrot", "pea"]
fruit = ["apple", "pear"]
food = veg + fruit
print(food)
print(["-"] * 3)
```

## Counting, finding and measuring
```py
marks = [7, 9, 5, 9, 10, 6, 9]
print(marks.count(9))      # how many 9s
print(marks.index(10))     # position of the first 10
print(len(marks))
print(min(marks), max(marks))
print(sum(marks))
print(sum(marks) / len(marks))   # the average
```

## Reversing and sorting
`reverse()` and `sort()` change the list itself and give back nothing (`None`). `sorted()` and `reversed()` leave the original alone and give you a new result. Use the second pair when you want to keep the original order.

```py
nums = [3, 1, 4, 1, 5, 9, 2]
nums.sort()
print(nums)
nums.sort(reverse=True)
print(nums)
nums.reverse()
print(nums)
```

```py
names = ["Zoe", "adam", "Bea"]
print(sorted(names))                  # capitals sort before small letters
print(sorted(names, key=str.lower))   # sort ignoring case
print(sorted(names, key=len))         # sort by length
print(list(reversed(names)))
print(names)                          # unchanged
```

A classic trap: `sort()` returns `None`, so do not store its result.

```py
nums = [3, 1, 2]
result = nums.sort()
print(result)
print(nums)
```

## Looping over a list
A `for` loop visits each item in turn. You will learn loops properly in lesson 10, but they are too useful with lists not to show here. `enumerate()` gives you the position as well.

```py
todo = ["wash up", "email Sam", "buy stamps"]
for task in todo:
    print("-", task)

for i, task in enumerate(todo, start=1):
    print(i, task)
```

## Putting it together
Keeping a running list of test scores, then reporting on it.

```py
scores = []
for s in [72, 88, 95, 61, 88]:
    scores.append(s)

scores.sort()
print("All scores:", scores)
print("Lowest:", scores[0], "Highest:", scores[-1])
print("Middle score:", scores[len(scores) // 2])
print("Average:", round(sum(scores) / len(scores), 1))
print("Top three:", sorted(scores, reverse=True)[:3])
print("How many 88s:", scores.count(88))
```
