## What classes and objects are
Everything in Python is an object: numbers, strings, lists, functions. Each object has a type, and that type is defined by a class. A class is a blueprint, and an object is a thing built from that blueprint. A house plan is a class; the actual houses built from it are objects. Each house has the same layout but its own paint colour and its own family.

```py
print(type(5))
print(type("hi"))
print(type([1, 2]))
print("hi".upper())    # upper is a method that every str object has
```

Writing your own classes lets you bundle data and the actions that go with it into one tidy thing.

## Creating a class and an object
`class` starts a class. By convention class names use CapitalWords. Calling the class like a function creates an object (also called an instance).

```py
class Dog:
    pass

rex = Dog()
fido = Dog()
print(type(rex).__name__)
print(rex is fido)    # two separate objects
```

## The constructor: __init__
`__init__` is a special method that runs automatically when an object is created. It sets up the object's starting data. The first parameter, `self`, is the object being built; `self.name = name` stores a value on that object. Values stored on `self` are called attributes.

```py
class Dog:
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age

rex = Dog("Rex", "collie", 4)
bella = Dog("Bella", "poodle", 2)
print(rex.name, rex.breed, rex.age)
print(bella.name, bella.age)
```

Attributes can be read and changed with a dot.

```py
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

rex = Dog("Rex", 4)
rex.age += 1
print(rex.name, "is now", rex.age)
```

## Methods: actions an object can do
A method is a function defined inside a class. It always takes `self` first, so it can use the object's own attributes. You call it with a dot, and Python passes `self` for you.

```py
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says woof!"

    def human_years(self):
        return self.age * 7

rex = Dog("Rex", 4)
print(rex.bark())
print(rex.human_years())
```

Methods can take extra arguments and change the object.

```py
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            return "Not enough money"
        self.balance -= amount
        return "OK"

acc = BankAccount("Ada", 100)
acc.deposit(50)
print(acc.withdraw(30))
print(acc.withdraw(500))
print(acc.owner, acc.balance)
```

## Default values
Like functions, `__init__` parameters can have defaults.

```py
class Player:
    def __init__(self, name, level=1, lives=3):
        self.name = name
        self.level = level
        self.lives = lives

a = Player("Ada")
b = Player("Ben", level=5)
print(a.name, a.level, a.lives)
print(b.name, b.level, b.lives)
```

## Attributes that start empty and grow
A common pattern is an attribute that starts as an empty list and fills up through a method.

```py
class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []

    def add(self, song):
        self.songs.append(song)

    def summary(self):
        return f"{self.name}: {len(self.songs)} songs"

mix = Playlist("Road trip")
mix.add("Song A")
mix.add("Song B")
print(mix.summary())
print(mix.songs)
```

Do not use a mutable default like `songs=[]` in `__init__`'s parameters: every object would share the same list. Create the list inside, as above.

## Class attributes
An attribute defined directly in the class (not on `self`) is shared by every object of that class. It is good for constants and counters.

```py
class Circle:
    pi = 3.14159
    count = 0

    def __init__(self, radius):
        self.radius = radius
        Circle.count += 1

    def area(self):
        return round(Circle.pi * self.radius ** 2, 2)

small = Circle(1)
big = Circle(10)
print(small.area(), big.area())
print("Circles made:", Circle.count)
```

## Printing an object nicely: __str__ and __repr__
Printing an object normally shows something unhelpful. Define `__str__` to choose what `print()` and `str()` show, and `__repr__` for a developer-friendly version (shown in lists and in the console).

```py
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

b = Book("Things Fall Apart", "Chinua Achebe")
print(str(b).split(" at ")[0])   # the default: not very useful
```

```py
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f"{self.title} by {self.author}"

    def __repr__(self):
        return f"Book({self.title!r}, {self.author!r})"

b = Book("Things Fall Apart", "Chinua Achebe")
print(b)
print([b])
```

## Other special methods
Methods with double underscores on both sides (called dunder methods) let your objects work with Python's built-in operators and functions: `__len__` for `len()`, `__eq__` for `==`, `__lt__` for `<` (and so sorting), `__add__` for `+`.

```py
class Money:
    def __init__(self, pounds):
        self.pounds = pounds

    def __add__(self, other):
        return Money(self.pounds + other.pounds)

    def __eq__(self, other):
        return self.pounds == other.pounds

    def __lt__(self, other):
        return self.pounds < other.pounds

    def __repr__(self):
        return f"£{self.pounds:.2f}"

a, b = Money(5), Money(2.5)
print(a + b)
print(a == Money(5))
print(sorted([a, b, Money(1)]))
```

## Inheritance
A class can inherit from another class: it gets all of the parent's attributes and methods, and can add its own. Put the parent's name in brackets. This avoids repeating code shared by similar things.

```py
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        return f"{self.name} is eating"

class Cat(Animal):
    def meow(self):
        return f"{self.name} says meow"

tom = Cat("Tom")
print(tom.eat())      # inherited from Animal
print(tom.meow())     # Cat's own method
print(isinstance(tom, Cat), isinstance(tom, Animal))
```

## super(): building on the parent
When a child needs extra setup, its `__init__` calls `super().__init__(...)` so the parent still does its part.

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def intro(self):
        return f"I am {self.name}, {self.age}"

class Student(Person):
    def __init__(self, name, age, school):
        super().__init__(name, age)
        self.school = school

s = Student("Amara", 19, "Unilag")
print(s.intro())
print(s.school)
```

## Overriding a method
A child class can replace a parent's method with its own version. It can still call the parent's version through `super()`.

```py
class Person:
    def __init__(self, name):
        self.name = name

    def intro(self):
        return f"Hi, I am {self.name}"

class Teacher(Person):
    def __init__(self, name, subject):
        super().__init__(name)
        self.subject = subject

    def intro(self):
        return super().intro() + f" and I teach {self.subject}"

for p in [Person("Ben"), Teacher("Ms Okafor", "maths")]:
    print(p.intro())
```

Because every object knows its own `intro`, the loop above works on both kinds without checking which is which. This idea is called polymorphism.

```py
class Shape:
    def area(self):
        return 0

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return self.w * self.h

shapes = [Square(3), Rectangle(2, 5), Square(1)]
print([s.area() for s in shapes])
print("Total area:", sum(s.area() for s in shapes))
```

## Dataclasses: less typing for data
For classes that mostly hold data, the `dataclasses` module writes `__init__`, `__repr__` and `__eq__` for you.

```py
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p = Point(3, 4)
print(p)
print(p.x + p.y)
print(p == Point(3, 4))
```

## Putting it together
A small library system with two classes working together.

```py
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.on_loan = False

    def __str__(self):
        status = "on loan" if self.on_loan else "available"
        return f"{self.title} ({self.author}) - {status}"

class Library:
    def __init__(self):
        self.books = []

    def add(self, book):
        self.books.append(book)

    def lend(self, title):
        for book in self.books:
            if book.title == title and not book.on_loan:
                book.on_loan = True
                return f"You borrowed {title}"
        return f"{title} is not available"

    def available(self):
        return [b.title for b in self.books if not b.on_loan]

lib = Library()
lib.add(Book("Half of a Yellow Sun", "Chimamanda Ngozi Adichie"))
lib.add(Book("The Hobbit", "J. R. R. Tolkien"))
print(lib.lend("The Hobbit"))
print(lib.lend("The Hobbit"))
for b in lib.books:
    print(b)
print("Available:", lib.available())
```
