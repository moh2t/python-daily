## What a dictionary is
A dictionary stores pairs: a key and its value. You look things up by key, the way you look up a word in a real dictionary to find its meaning, or a name in your phone to find a number. Dictionaries use curly brackets with a colon between each key and value.

```py
person = {
    "first_name": "Ada",
    "last_name": "Lovelace",
    "age": 36,
    "skills": ["maths", "writing"],
    "is_married": True,
}
print(person)
print(len(person))   # number of pairs
print(type(person))
```

Keys are usually strings, but any unchangeable value works: numbers or tuples too. Each key appears only once. Values can be anything, including lists and other dictionaries.

## Other ways to make one
```py
empty = {}
print(empty)
scores = dict(ada=91, ben=78)
print(scores)
pairs = dict([("x", 1), ("y", 2)])
print(pairs)
zeros = dict.fromkeys(["a", "b", "c"], 0)
print(zeros)
```

## Reading values
Square brackets with a key give you its value. If the key is not there, that is an error, so when a key might be missing use `get()`, which returns `None` (or a default you choose) instead.

```py
person = {"name": "Ada", "age": 36}
print(person["name"])
print(person.get("age"))
print(person.get("city"))
print(person.get("city", "unknown"))
```

```py error
person = {"name": "Ada", "age": 36}
print(person["city"])
```

## Adding and changing values
Assigning to a key adds it if it is new, or replaces its value if it already exists.

```py
stock = {"apples": 5}
stock["pears"] = 3       # new key
stock["apples"] = 8      # change an existing key
stock["apples"] += 2     # use the old value
print(stock)
```

`update()` adds or changes several pairs at once from another dictionary.

```py
settings = {"theme": "light", "font": 14}
settings.update({"theme": "dark", "language": "en"})
print(settings)
```

`setdefault()` adds a key only if it is missing, and gives you the value either way.

```py
counts = {"a": 1}
counts.setdefault("a", 0)
counts.setdefault("b", 0)
print(counts)
```

## Checking for a key
`in` checks the keys, not the values. Use `.values()` to search the values.

```py
capitals = {"France": "Paris", "Kenya": "Nairobi"}
print("Kenya" in capitals)
print("Nairobi" in capitals)
print("Nairobi" in capitals.values())
```

## Removing pairs
- `pop(key)` removes a key and gives back its value
- `popitem()` removes and gives back the last pair added
- `del d[key]` removes a key
- `clear()` empties the dictionary

```py
basket = {"bread": 1, "milk": 2, "eggs": 12, "jam": 1}
milk = basket.pop("milk")
print(milk, basket)
print(basket.popitem(), basket)
del basket["bread"]
print(basket)
basket.clear()
print(basket)
```

`pop()` can take a default so a missing key is not an error.

```py
basket = {"bread": 1}
print(basket.pop("cheese", 0))
```

## Keys, values and items
- `keys()` gives the keys
- `values()` gives the values
- `items()` gives (key, value) pairs as tuples

Wrap them in `list()` if you want a real list.

```py
prices = {"tea": 2.0, "coffee": 2.5, "cake": 3.25}
print(list(prices.keys()))
print(list(prices.values()))
print(list(prices.items()))
print(sum(prices.values()))
```

## Looping over a dictionary
Looping over a dictionary gives you its keys. Looping over `.items()` with two names gives you both key and value, which is what you want most of the time. Since Python 3.7, dictionaries remember the order in which keys were added.

```py
prices = {"tea": 2.0, "coffee": 2.5, "cake": 3.25}
for item in prices:
    print(item)
for item, price in prices.items():
    print(f"{item:<8} £{price:.2f}")
```

## Counting with a dictionary
A dictionary is perfect for counting things: the key is the thing and the value is how many you have seen.

```py
text = "the cat and the hat and the bat"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
print("Most common:", max(counts, key=counts.get))
```

## Grouping with a dictionary
The value can be a list, so you can group items by some feature.

```py
names = ["Ada", "Ben", "Amina", "Chen", "Bea"]
by_letter = {}
for name in names:
    by_letter.setdefault(name[0], []).append(name)
print(by_letter)
```

## Dictionaries inside dictionaries
Nested dictionaries are a natural way to store records, and they look just like JSON data from the web. Chain the square brackets to reach inside.

```py
users = {
    "ada": {"age": 36, "city": "London", "langs": ["en", "fr"]},
    "ben": {"age": 28, "city": "Accra", "langs": ["en"]},
}
print(users["ada"]["city"])
print(users["ben"]["langs"][0])
users["ben"]["age"] += 1
print(users["ben"])
```

## Copying
As with lists, `b = a` gives the same dictionary two names. Use `copy()` to get a separate one.

```py
original = {"x": 1}
same = original
copy = original.copy()
same["x"] = 99
print(original)
print(copy)
```

## Sorting a dictionary
A dictionary itself is not sorted, but you can loop over it in sorted order. `sorted()` on a dictionary gives sorted keys, and a `key` lets you sort by value.

```py
scores = {"Ben": 78, "Ada": 91, "Chen": 85}
for name in sorted(scores):
    print(name, scores[name])
print(sorted(scores.items(), key=lambda pair: pair[1], reverse=True))
```

## Merging dictionaries
`{**a, **b}` unpacks both into a new dictionary. Where the same key is in both, the one from b wins.

```py
defaults = {"theme": "light", "font": 14}
mine = {"theme": "dark"}
final = {**defaults, **mine}
print(final)
```

## Dictionary comprehension
Just like list comprehension (lesson 13), you can build a dictionary in one line.

```py
squares = {n: n * n for n in range(1, 6)}
print(squares)
prices = {"tea": 2.0, "cake": 3.25}
with_vat = {item: round(p * 1.2, 2) for item, p in prices.items()}
print(with_vat)
```

## Putting it together
A small phone book: add contacts, look one up safely, and print the list in order.

```py
phone_book = {}
phone_book["Ada"] = "0700 111 222"
phone_book["Ben"] = "0700 333 444"
phone_book["Chen"] = "0700 555 666"

name = "Dara"
print(phone_book.get(name, f"No number for {name}"))
phone_book["Ben"] = "0711 999 000"   # Ben changed his number
del phone_book["Chen"]
for name, number in sorted(phone_book.items()):
    print(f"{name}: {number}")
```
