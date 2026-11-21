## Making decisions
So far every line of code has run, top to bottom. Conditionals let a program choose: run this block only if something is true. It is how a cash machine decides whether you have enough money, or a game decides whether you have won.

## if
`if` is followed by a condition (anything that comes out True or False) and a colon. The lines underneath that are indented by 4 spaces form the block that runs only when the condition is True. The first line that is not indented is outside the `if` and always runs.

```py
temperature = 31
if temperature > 30:
    print("It's hot today")
    print("Drink plenty of water")
print("This line always runs")
```

```py
temperature = 18
if temperature > 30:
    print("It's hot today")
print("This line always runs")
```

Forgetting the colon or the indent is a very common error.

```py error
age = 20
if age >= 18
    print("adult")
```

```py error
age = 20
if age >= 18:
print("adult")
```

## if and else
`else` gives a second block that runs when the condition is False. Exactly one of the two blocks runs, never both.

```py
age = 15
if age >= 18:
    print("You can vote")
else:
    print("You can vote in", 18 - age, "years")
```

```py
number = 7
if number % 2 == 0:
    print(number, "is even")
else:
    print(number, "is odd")
```

## if, elif and else
`elif` (short for "else if") lets you test several conditions in turn. Python checks them from the top and runs the first block whose condition is True, then skips the rest. `else` at the end catches everything that did not match.

```py
score = 72
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print("Grade:", grade)
```

Order matters. Because Python stops at the first match, put the most specific tests first. Here the second version is wrong: 95 is also `>= 60`, so it never reaches the A.

```py
score = 95
if score >= 60:
    print("D")
elif score >= 90:
    print("A")
```

## Conditions with and, or, not
You can build bigger conditions with the logical operators from lesson 3.

```py
age = 25
has_licence = True
if age >= 17 and has_licence:
    print("You can drive")
else:
    print("You cannot drive yet")
```

```py
day = "Sunday"
if day == "Saturday" or day == "Sunday":
    print("Weekend!")
if day in ("Saturday", "Sunday"):      # a neater way to write the same test
    print("Still the weekend")
```

```py
logged_in = False
if not logged_in:
    print("Please sign in")
```

## Truthy and falsy values
A condition does not have to be a comparison. Python treats some values as False: `0`, `0.0`, empty text `""`, empty collections `[]`, `{}`, `()`, `set()`, and `None`. Everything else counts as True. This lets you write short, natural checks like "if the basket has anything in it".

```py
basket = []
if basket:
    print("You have", len(basket), "items")
else:
    print("Your basket is empty")

name = "Ada"
if name:
    print("Hello", name)
```

## Nested conditions
An `if` can sit inside another `if`. Each level is indented a further 4 spaces. Nesting is fine, but deep nesting gets hard to read, and often `and` or `elif` can flatten it.

```py
age = 20
has_ticket = True
if age >= 18:
    if has_ticket:
        print("Enjoy the concert")
    else:
        print("You need a ticket")
else:
    print("Sorry, adults only")
```

```py
age = 20
has_ticket = True
if age < 18:
    print("Sorry, adults only")
elif not has_ticket:
    print("You need a ticket")
else:
    print("Enjoy the concert")
```

## The one-line if (conditional expression)
When you just want to pick one of two values, Python has a short form: `value_if_true if condition else value_if_false`.

```py
age = 16
status = "adult" if age >= 18 else "minor"
print(status)

n = 4
print("even" if n % 2 == 0 else "odd")
print(f"You have {n} item{'s' if n != 1 else ''}")
```

## Comparing text in conditions
Text comparison is exact, so a user typing "Yes" will not match "yes". Clean the text first with `strip()` and `lower()`.

```py
answer = "  Yes "
if answer.strip().lower() == "yes":
    print("Great, let's continue")
else:
    print("Okay, stopping")
```

## pass: an empty block
Python does not allow an empty block. If you want to write the `if` now and fill it in later, use `pass`, which does nothing.

```py
level = 3
if level > 5:
    pass   # TODO: add a bonus later
else:
    print("Keep going")
```

## Putting it together
A small ticket price calculator that uses several kinds of condition.

```py
def ticket_price(age, is_student, day):
    if age < 5:
        return 0
    price = 12
    if age < 16 or age >= 65:
        price = 7
    elif is_student:
        price = 9
    if day == "Tuesday":
        price -= 2
    return price

print(ticket_price(3, False, "Friday"))
print(ticket_price(10, False, "Friday"))
print(ticket_price(20, True, "Tuesday"))
print(ticket_price(40, False, "Saturday"))
```

Another everyday example: is a number positive, negative or zero, and is it small or large?

```py
for n in [-12, 0, 7, 450]:
    if n > 0:
        size = "large" if n > 100 else "small"
        print(n, "is positive and", size)
    elif n < 0:
        print(n, "is negative")
    else:
        print(n, "is zero")
```
