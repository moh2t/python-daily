## Why loops
A loop repeats a block of code. Instead of writing `print` a hundred times, you write it once inside a loop. Python has two loops: `while` repeats as long as a condition stays True, and `for` repeats once for each item in a collection.

## The while loop
`while` checks its condition, runs the indented block, then checks again, over and over. It stops as soon as the condition is False. Something inside the loop must change, or the condition will never become False and the loop runs forever.

```py
count = 1
while count <= 5:
    print("Count is", count)
    count += 1
print("Done")
```

Everyday example: saving money until you reach a target.

```py
savings = 0
weeks = 0
while savings < 100:
    savings += 15
    weeks += 1
print(f"It took {weeks} weeks to save £{savings}")
```

`while` is the right choice when you do not know in advance how many times to repeat, like halving a number until it gets small.

```py
n = 1000
steps = 0
while n > 1:
    n = n // 2
    steps += 1
print(steps, "halvings")
```

## while with else
A loop can have an `else` block. It runs once when the condition becomes False, but not if the loop was stopped early with `break`.

```py
n = 3
while n > 0:
    print(n)
    n -= 1
else:
    print("Lift off!")
```

## break and continue
- `break` stops the loop immediately and jumps to the first line after it.
- `continue` skips the rest of this round and goes straight to the next one.

```py
n = 0
while True:          # loops forever until break
    n += 1
    if n == 4:
        break
    print(n)
print("stopped at", n)
```

```py
n = 0
while n < 6:
    n += 1
    if n % 2 == 0:
        continue     # skip even numbers
    print(n)
```

## The for loop
`for item in collection:` runs the block once for every item, with `item` holding the current one. It works on strings, lists, tuples, sets, dictionaries and ranges.

```py
for letter in "Python":
    print(letter)
```

```py
for fruit in ["apple", "banana", "cherry"]:
    print("I like", fruit)
```

```py
for x in (10, 20, 30):
    print(x * 2)
```

```py
ages = {"Ada": 36, "Ben": 28}
for name in ages:
    print(name)
for name, age in ages.items():
    print(name, "is", age)
```

## range()
`range()` gives a series of whole numbers, perfect for repeating something a set number of times.

- `range(stop)` counts from 0 up to but not including stop
- `range(start, stop)` counts from start up to but not including stop
- `range(start, stop, step)` jumps by step each time, and a negative step counts down

```py
print(list(range(5)))
print(list(range(2, 7)))
print(list(range(0, 20, 5)))
print(list(range(10, 0, -2)))
```

```py
for i in range(3):
    print("Hip hip hooray!")
```

```py
for n in range(1, 6):
    print(n, "squared is", n ** 2)
```

## Adding things up with a loop
A very common pattern: start a total at 0 (or an empty list), and add to it on each round.

```py
total = 0
for n in range(1, 101):
    total += n
print("1 + 2 + ... + 100 =", total)
```

```py
prices = [2.50, 4.00, 1.25, 6.75]
total = 0
for p in prices:
    total += p
print(f"Total: £{total:.2f}")
```

```py
words = ["sun", "moon", "star"]
upper = []
for w in words:
    upper.append(w.upper())
print(upper)
```

## break and continue in for loops
They work just like in `while`. `break` is great for stopping as soon as you find what you are looking for.

```py
numbers = [4, 9, 15, 22, 7]
for n in numbers:
    if n > 10:
        print("First number over 10:", n)
        break
```

```py
for n in range(1, 11):
    if n % 3 == 0:
        continue
    print(n, end=" ")
print()
```

## for with else
The `else` of a `for` runs only if the loop finished without hitting `break`. It is a neat way to say "searched everything and did not find it".

```py
guests = ["Ada", "Ben", "Chen"]
looking_for = "Dara"
for g in guests:
    if g == looking_for:
        print("Found", g)
        break
else:
    print(looking_for, "is not on the list")
```

## Position and value together: enumerate()
`enumerate()` gives you a counter alongside each item, so you do not need to manage one yourself.

```py
podium = ["Ada", "Ben", "Chen"]
for position, name in enumerate(podium, start=1):
    print(position, name)
```

## Two lists side by side: zip()
`zip()` walks through two (or more) collections together, pairing up the items.

```py
names = ["Ada", "Ben", "Chen"]
scores = [91, 78, 85]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
```

## Nested loops
A loop inside a loop runs the inner loop completely for every round of the outer one. It is how you handle grids, tables and every pair of items.

```py
for row in range(1, 4):
    for col in range(1, 4):
        print(row * col, end="\t")
    print()
```

```py
for size in ["S", "M"]:
    for colour in ["red", "blue"]:
        print(size, colour)
```

```py
for i in range(1, 5):
    print("*" * i)
```

## pass
`pass` does nothing. It fills a block that Python needs but you have not written yet.

```py
for n in range(3):
    pass
print("loop finished, did nothing")
```

## Putting it together
A guessing game where the computer guesses a secret number by always trying the middle of what is left. This mixes `while`, conditions and `break`.

```py
secret = 37
low, high = 1, 100
tries = 0
while low <= high:
    guess = (low + high) // 2
    tries += 1
    if guess == secret:
        print(f"Got it: {guess} in {tries} tries")
        break
    elif guess < secret:
        print(guess, "is too low")
        low = guess + 1
    else:
        print(guess, "is too high")
        high = guess - 1
```

FizzBuzz, a classic: count from 1 to 15, but say Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for both.

```py
for n in range(1, 16):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)
```
