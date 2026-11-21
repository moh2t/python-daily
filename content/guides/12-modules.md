## What a module is
A module is a file of Python code (functions, variables, classes) that you can use in other programs. Python comes with a big standard library of modules for maths, randomness, dates, files and much more, so you rarely have to build these tools yourself. It is like a toolbox: you do not make a hammer, you take one out when you need it.

## import
`import name` loads a module. You then reach the tools inside with a dot: `module.tool`.

```py
import math
print(math.pi)
print(math.sqrt(81))
print(math.floor(4.7))
print(math.ceil(4.2))
```

## Importing just what you need
`from module import name` brings in specific tools, so you can use them without the module name in front. You can import several at once.

```py
from math import sqrt, pi
print(sqrt(16))
print(pi * 2)
```

`import *` brings in everything. It is quick, but it makes it hard to tell where each name came from, so it is best avoided in real programs.

```py
from math import *
print(floor(9.99), factorial(5))
```

## Renaming with as
`as` gives a module or function a shorter or clearer name. Some short names are so common that everyone uses them, like `import numpy as np`.

```py
import statistics as st
print(st.mean([2, 4, 6, 8]))

from math import factorial as fact
print(fact(6))
```

## The math module
`math` has functions and constants for maths beyond the basic operators.

```py
import math
print(math.sqrt(2))
print(math.pow(2, 8))        # always gives a float
print(math.floor(-2.5), math.ceil(-2.5))
print(math.factorial(6))
print(math.gcd(24, 36))      # greatest common divisor
print(math.isclose(0.1 + 0.2, 0.3))
print(round(math.sin(math.pi / 2), 3))
print(round(math.log10(1000)))
print(math.hypot(3, 4))      # length of the long side of a right triangle
print(math.inf > 10 ** 100)
```

## The random module
`random` makes random choices: dice, shuffling, picking winners. Each run gives different results. `random.seed()` makes the results repeatable, which is handy for testing; the outputs below use seed 1.

```py
import random
random.seed(1)
print(random.randint(1, 6))           # a whole number from 1 to 6, both included
print(random.random())                # a float from 0 up to (not including) 1
print(random.choice(["rock", "paper", "scissors"]))
print(random.uniform(1.5, 2.5))
cards = ["A", "K", "Q", "J"]
random.shuffle(cards)                 # shuffles the list itself
print(cards)
print(random.sample(range(1, 50), 6)) # 6 different numbers
```

```py
import random
random.seed(7)
rolls = [random.randint(1, 6) for _ in range(10)]
print(rolls)
print("Sixes rolled:", rolls.count(6))
```

## The statistics module
`statistics` works out averages and spread for a list of numbers.

```py
import statistics
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25]
print("mean:", statistics.mean(ages))
print("median:", statistics.median(ages))
print("mode:", statistics.mode(ages))
print("range:", max(ages) - min(ages))
print("stdev:", round(statistics.stdev(ages), 2))
```

## The string module
`string` holds handy ready-made groups of characters.

```py
import string
print(string.ascii_lowercase)
print(string.ascii_uppercase)
print(string.digits)
print(string.punctuation)
```

Together with `random` they can make a random password.

```py
import random, string
random.seed(3)
chars = string.ascii_letters + string.digits
password = "".join(random.choice(chars) for _ in range(10))
print(password)
```

## The os and sys modules
`os` talks to the operating system: folders and files. `sys` tells you about Python itself. (In this app Python runs inside your browser, so the folder is a small pretend one.)

```py
import os, sys
here = os.getcwd()                # the current folder, as text
print(type(here))
print(sys.version_info.major)     # the main Python version number
os.makedirs("demo_folder", exist_ok=True)
print("demo_folder" in os.listdir("."))
print(os.path.join("photos", "2026", "beach.jpg"))
```

## The collections module
`collections` has upgraded containers. `Counter` counts things for you, and `defaultdict` gives missing keys a starting value.

```py
from collections import Counter, defaultdict
votes = ["red", "blue", "red", "green", "red", "blue"]
tally = Counter(votes)
print(tally)
print(tally.most_common(1))

groups = defaultdict(list)
for word in ["apple", "avocado", "banana", "blueberry", "cherry"]:
    groups[word[0]].append(word)
print(dict(groups))
```

## Making your own module
Any `.py` file is a module. Save functions in `helpers.py` and another file in the same folder can `import helpers`. This example writes a tiny module to a file and then imports it, so you can see it work.

```py
code = '''
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159
'''
with open("helpers.py", "w") as f:
    f.write(code)

import sys
sys.path.insert(0, ".")
import helpers
print(helpers.greet("Ada"))
print(helpers.PI)
```

On your own computer you would just create the file in your editor:

```py norun
# helpers.py
def greet(name):
    return f"Hello, {name}!"

# main.py (in the same folder)
import helpers
print(helpers.greet("Ada"))
```

## if __name__ == "__main__"
When a file is run directly, Python sets its `__name__` to `"__main__"`. When it is imported, `__name__` is the module's name. Putting test or start-up code under this check means it runs when you run the file, but not when someone imports it.

```py
def main():
    print("Running the program")

print("My name is", __name__)
if __name__ == "__main__":
    main()
```

## Finding out what a module has
`dir()` lists the names inside a module, and `help()` explains them.

```py
import random
names = [n for n in dir(random) if not n.startswith("_")]
print(names[:12])
```

## Installing more modules
Beyond the standard library there are hundreds of thousands of packages on PyPI (the Python Package Index), installed on your computer with `pip`. Examples are `requests` for the web and `pandas` for data. You type this in a terminal, not in Python:

```text
pip install requests
```

## Putting it together
A dice game using `random`, `statistics` and `collections` together.

```py
import random
import statistics
from collections import Counter

random.seed(42)
rolls = [random.randint(1, 6) + random.randint(1, 6) for _ in range(1000)]
counts = Counter(rolls)
print("Average total:", round(statistics.mean(rolls), 2))
print("Most common totals:", counts.most_common(3))
for total in range(2, 13):
    print(f"{total:>2} {'#' * (counts[total] // 10)}")
```
