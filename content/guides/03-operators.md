## What an operator is
An operator is a symbol that does something with values. `+` is an operator: it takes the value on its left and the value on its right and adds them. The values are called operands. Python has several families of operators: arithmetic, assignment, comparison, logical, membership and identity.

## Arithmetic operators
These do maths. You met them in lesson 1; here they are all together with two numbers.

```py
a = 17
b = 5
print("a + b =", a + b)
print("a - b =", a - b)
print("a * b =", a * b)
print("a / b =", a / b)
print("a // b =", a // b)
print("a % b =", a % b)
print("a ** b =", a ** b)
```

`%` (remainder) is more useful than it looks. A number is even when dividing by 2 leaves nothing over, and the last digit of any number is its remainder after dividing by 10.

```py
print(10 % 2)     # 0, so 10 is even
print(7 % 2)      # 1, so 7 is odd
print(1234 % 10)  # last digit
print(1234 // 10) # everything except the last digit
```

Everyday example: turning a number of minutes into hours and minutes.

```py
total_minutes = 135
hours = total_minutes // 60
minutes = total_minutes % 60
print(hours, "hours and", minutes, "minutes")
```

## Operators with text and lists
Some operators also work on other types. `+` joins strings or lists together, and `*` repeats them.

```py
print("sun" + "flower")
print("ha" * 3)
print("-" * 20)
print([1, 2] + [3, 4])
print([0] * 5)
```

## Assignment operators
`=` stores a value. The combined operators change a variable using its current value. They save typing and show your intent clearly.

```py
x = 10
x += 3    # x = x + 3
print(x)
x -= 1    # x = x - 1
print(x)
x *= 2    # x = x * 2
print(x)
x /= 4    # x = x / 4
print(x)
x **= 2   # x = x ** 2
print(x)
x //= 4   # x = x // 4
print(x)
x %= 3    # x = x % 3
print(x)
```

## Booleans: True and False
A boolean is a value that is either `True` or `False`, with a capital first letter. Booleans are how programs make decisions: "is the user logged in?", "is the basket empty?".

```py
is_raining = True
has_umbrella = False
print(is_raining)
print(type(has_umbrella))
```

## Comparison operators
A comparison asks a question about two values and the answer is always True or False.

- `==` equal to (two equals signs; one `=` stores a value)
- `!=` not equal to
- `>` greater than, `<` less than
- `>=` greater than or equal to, `<=` less than or equal to

```py
print(5 == 5)
print(5 != 3)
print(5 > 8)
print(5 < 8)
print(5 >= 5)
print(4 <= 3)
```

Comparisons work on text too. `==` checks exact equality, including capital letters. `<` and `>` compare alphabetically (more exactly, by character code, so capital letters come before small ones).

```py
print("apple" == "apple")
print("apple" == "Apple")
print("apple" < "banana")
print("Zebra" < "apple")
print(len("cat") == len("dog"))
```

Python lets you chain comparisons the way you would in maths, which is very readable.

```py
age = 15
print(13 <= age <= 19)   # is age a teenager?
temp = 30
print(18 < temp < 25)    # is it a comfortable temperature?
```

## Logical operators: and, or, not
Logical operators combine True and False values.

- `and` is True only when both sides are True
- `or` is True when at least one side is True
- `not` flips True to False and False to True

```py
print(True and True)
print(True and False)
print(True or False)
print(False or False)
print(not True)
print(not False)
```

Everyday example: you can go to the cinema if you have a ticket and the film has not started, or if you are on the guest list.

```py
has_ticket = True
film_started = False
on_guest_list = False
can_enter = (has_ticket and not film_started) or on_guest_list
print(can_enter)
```

```py
age = 20
has_id = True
print(age >= 18 and has_id)
print(age < 13 or age > 65)
```

## Membership: in and not in
`in` asks "is this inside that?". It works on strings, lists, tuples, sets and dictionaries (where it checks the keys).

```py
print("a" in "apple")
print("pie" in "apple pie")
print(3 in [1, 2, 3])
print("kiwi" not in ["apple", "banana"])
print("name" in {"name": "Ada", "age": 36})
```

## Identity: is and is not
`is` checks whether two names point to the very same object, not just equal values. Use `==` to compare values. The main everyday use of `is` is checking for `None`, Python's value for "nothing here yet".

```py
a = [1, 2, 3]
b = [1, 2, 3]
c = a
print(a == b)    # same values
print(a is b)    # but two separate lists
print(a is c)    # c is just another name for a

result = None
print(result is None)
```

## Operator precedence
When several operators appear in one line, Python works them out in this order (highest first):

- `**`
- `*`, `/`, `//`, `%`
- `+`, `-`
- comparisons: `==`, `!=`, `<`, `>`, `<=`, `>=`, `in`, `is`
- `not`
- `and`
- `or`

```py
print(2 + 3 * 4 ** 2)          # 4 ** 2 first, then * 3, then + 2
print(10 > 5 and 3 > 4)        # comparisons first, then and
print(not 5 > 3)               # comparison first, then not
print(True or False and False) # and before or
```

Brackets beat everything, so when a line is hard to read, add them.

## Putting it together
Working out whether a year is a leap year uses arithmetic, comparison and logical operators together. A leap year divides by 4, except century years, which must also divide by 400.

```py
for year in [1900, 2000, 2024, 2026]:
    leap = (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
    print(year, leap)
```
