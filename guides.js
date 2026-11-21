// Built by tools/build_guides.py from content/guides/*.md. Edit those files, not this one.
window.GUIDES = {
"basics-1": [
{
"h": "What Python is",
"parts": [
{
"p": "Python is a programming language: a way of writing instructions that a computer can follow. It was created by Guido van Rossum and first released in 1991. Its big idea is that code should be easy to read, so Python looks a lot like plain English and uses very few symbols."
},
{
"p": "People use Python for websites, data analysis, automation (making the computer do boring jobs for you), science, machine learning and games. It is one of the most popular first languages because you can get useful results quickly."
},
{
"p": "When you press Run, Python reads your code from the top line to the bottom line and does each instruction in order. If something goes wrong on line 5, lines 1 to 4 have already run."
},
{
"code": "print(\"First this line runs\")\nprint(\"then this one\")\nprint(\"and finally this one\")",
"out": "First this line runs\nthen this one\nand finally this one"
}
]
},
{
"h": "Showing things with print()",
"parts": [
{
"p": "`print()` is a function: a named action you can use. You put what you want shown inside the brackets. Text must go inside quotes, either \"double\" or 'single'. Numbers do not need quotes."
},
{
"code": "print(\"Hello, world\")\nprint('Single quotes work too')\nprint(42)\nprint(3.5)",
"out": "Hello, world\nSingle quotes work too\n42\n3.5"
},
{
"p": "You can give `print()` several things at once, separated by commas. Python puts a space between them for you."
},
{
"code": "print(\"I am\", 25, \"years old\")\nprint(\"Total:\", 10 + 5)",
"out": "I am 25 years old\nTotal: 15"
},
{
"p": "Two useful extras: `sep` changes what goes between the items, and `end` changes what goes at the end of the line (normally a new line)."
},
{
"code": "print(\"2026\", \"11\", \"21\", sep=\"-\")\nprint(\"Loading\", end=\"...\")\nprint(\"done\")",
"out": "2026-11-21\nLoading...done"
},
{
"p": "Calling `print()` with nothing inside prints an empty line, which is handy for spacing out results."
},
{
"code": "print(\"Part one\")\nprint()\nprint(\"Part two\")",
"out": "Part one\n\nPart two"
}
]
},
{
"h": "Comments",
"parts": [
{
"p": "A comment starts with `#`. Python ignores everything after the `#` on that line. Comments are notes for people: they explain why the code does something, or remind you what you were thinking."
},
{
"code": "# This whole line is a comment, so nothing happens here\nprint(\"Comments are skipped\")  # a comment can also sit at the end of a line\n# print(\"This line will not run, because it is commented out\")",
"out": "Comments are skipped"
},
{
"p": "For a longer note you can use a string in triple quotes. Python does not print it; it just sits there as a note. You will see this style used to describe functions later."
},
{
"code": "\"\"\"\nThis program works out a shopping total.\nWritten while learning Python.\n\"\"\"\nprint(3 * 2.50)",
"out": "7.5"
}
]
},
{
"h": "Python as a calculator",
"parts": [
{
"p": "Python can do all the maths a calculator can. Here are the arithmetic operators:"
},
{
"ul": [
"`+` adds, `-` subtracts, `*` multiplies, `/` divides",
"`//` divides and throws away the decimal part (floor division)",
"`%` gives the remainder after dividing (called modulo)",
"`**` raises to a power, so `2 ** 3` means 2 × 2 × 2"
]
},
{
"code": "print(7 + 3)    # addition\nprint(7 - 3)    # subtraction\nprint(7 * 3)    # multiplication\nprint(7 / 3)    # division always gives a decimal\nprint(7 // 3)   # floor division: how many whole 3s fit in 7\nprint(7 % 3)    # remainder: what is left over\nprint(7 ** 2)   # 7 squared",
"out": "10\n4\n21\n2.3333333333333335\n2\n1\n49"
},
{
"p": "Everyday example: 17 sweets shared between 5 children. Each child gets `17 // 5` sweets, and `17 % 5` are left over."
},
{
"code": "sweets = 17\nchildren = 5\nprint(\"Each child gets\", sweets // children)\nprint(\"Left over:\", sweets % children)",
"out": "Each child gets 3\nLeft over: 2"
}
]
},
{
"h": "Order of operations",
"parts": [
{
"p": "Python follows the same order as maths at school: brackets first, then powers, then multiply and divide, then add and subtract. When in doubt, add brackets. They make the order obvious to anyone reading."
},
{
"code": "print(2 + 3 * 4)      # 3 * 4 happens first\nprint((2 + 3) * 4)    # brackets first\nprint(2 ** 3 * 2)     # power first: 8 * 2\nprint(10 - 4 - 3)     # left to right: (10 - 4) - 3",
"out": "14\n20\n16\n3"
}
]
},
{
"h": "Whole numbers and decimals",
"parts": [
{
"p": "Python has two main kinds of number. An `int` is a whole number like 7 or -20. A `float` is a number with a decimal point like 3.5. Dividing with `/` always gives a float, even if the answer is whole."
},
{
"code": "print(10 / 2)\nprint(type(10))\nprint(type(10 / 2))\nprint(type(3.5))",
"out": "5.0\n<class 'int'>\n<class 'float'>\n<class 'float'>"
},
{
"p": "Floats are stored in binary, so some decimals cannot be stored exactly. This tiny error is normal in every programming language. Use `round()` when you show money or measurements."
},
{
"code": "print(0.1 + 0.2)\nprint(round(0.1 + 0.2, 2))",
"out": "0.30000000000000004\n0.3"
},
{
"p": "Python can also handle huge whole numbers with no trouble, and complex numbers (used in engineering) written with a `j`."
},
{
"code": "print(2 ** 100)\nprint(type(3 + 4j))",
"out": "1267650600228229401496703205376\n<class 'complex'>"
}
]
},
{
"h": "Python's main data types",
"parts": [
{
"p": "Every value in Python has a type, which decides what you can do with it. You will meet each of these in its own lesson:"
},
{
"ul": [
"`int`: whole numbers, `5`",
"`float`: decimals, `2.5`",
"`complex`: complex numbers, `1 + 2j`",
"`str`: text (a string of characters), `\"hello\"`",
"`bool`: `True` or `False`",
"`list`: an ordered collection you can change, `[1, 2, 3]`",
"`tuple`: an ordered collection you cannot change, `(1, 2, 3)`",
"`set`: a collection with no duplicates, `{1, 2, 3}`",
"`dict`: key and value pairs, `{\"name\": \"Ada\"}`"
]
},
{
"p": "`type()` tells you the type of any value."
},
{
"code": "print(type(5))\nprint(type(2.5))\nprint(type(1 + 2j))\nprint(type(\"hello\"))\nprint(type(True))\nprint(type([1, 2, 3]))\nprint(type((1, 2, 3)))\nprint(type({1, 2, 3}))\nprint(type({\"name\": \"Ada\"}))",
"out": "<class 'int'>\n<class 'float'>\n<class 'complex'>\n<class 'str'>\n<class 'bool'>\n<class 'list'>\n<class 'tuple'>\n<class 'set'>\n<class 'dict'>"
}
]
},
{
"h": "Indentation and errors",
"parts": [
{
"p": "Python uses spaces at the start of a line (indentation) to group code. At this stage every line should start at the very left edge. If you add a space by mistake, Python complains."
},
{
"code": "print(\"fine\")\n print(\"one space too many\")",
"out": "IndentationError: unexpected indent",
"err": true
},
{
"p": "Error messages look scary at first, but they are helpful: the last line names the problem. Here Python says it did not expect the indent. Another common one is forgetting a closing quote or bracket."
},
{
"code": "print(\"Hello)",
"out": "SyntaxError: unterminated string literal (detected at line 1)",
"err": true
}
]
},
{
"h": "Try it yourself",
"parts": [
{
"p": "The best way to learn is to change the examples. Press \"Try it\" under any example to copy it into the Playground, change a number or some text, and press Run to see what happens. Breaking code on purpose and reading the error is a great way to learn."
}
]
}
],
"basics-2": [
{
"h": "What a variable is",
"parts": [
{
"p": "A variable is a name that points to a value. You make one with `=`, which in Python means \"store this\", not \"is equal to\". The name goes on the left and the value on the right."
},
{
"code": "city = \"Lagos\"\npopulation = 15_000_000\nprint(city)\nprint(population)",
"out": "Lagos\n15000000"
},
{
"p": "Think of a variable as a sticky label on a box. `city = \"Lagos\"` puts the text \"Lagos\" in a box and sticks the label city on it. Whenever you write `city`, Python looks inside that box."
},
{
"p": "Underscores inside a number, like `15_000_000`, are only there to make it easier to read. Python ignores them."
}
]
},
{
"h": "Changing a variable",
"parts": [
{
"p": "A variable can be given a new value at any time. The old value is replaced. You can even use the old value to work out the new one."
},
{
"code": "score = 10\nprint(score)\nscore = 15\nprint(score)\nscore = score + 5     # take the old score, add 5, store it back\nprint(score)",
"out": "10\n15\n20"
},
{
"p": "Adding to a variable is so common that Python has a shortcut: `score += 5` means `score = score + 5`. There are shortcuts for the other operators too: `-=`, `*=`, `/=`."
},
{
"code": "lives = 3\nlives -= 1\nprint(lives)\ncoins = 100\ncoins *= 2\nprint(coins)",
"out": "2\n200"
}
]
},
{
"h": "Naming rules",
"parts": [
{
"p": "A variable name:"
},
{
"ul": [
"can contain letters, digits and underscores (`_`)",
"cannot start with a digit (`2nd_place` is not allowed)",
"cannot contain spaces or dashes (`first-name` is not allowed)",
"cannot be one of Python's own words such as `if`, `for`, `class` or `True`",
"is case-sensitive, so `Name`, `name` and `NAME` are three different variables"
]
},
{
"p": "The Python style is called snake_case: all lower case, with underscores between words, like `first_name` or `total_price`. Pick names that say what the value means. `t` tells a reader nothing; `temperature_c` tells them everything."
},
{
"code": "first_name = \"Grace\"\nlast_name = \"Hopper\"\nyear_of_birth = 1906\nis_programmer = True\nprint(first_name, last_name, year_of_birth, is_programmer)",
"out": "Grace Hopper 1906 True"
},
{
"code": "2nd_place = \"Ben\"",
"out": "SyntaxError: invalid decimal literal",
"err": true
},
{
"code": "name = \"Ada\"\nprint(Name)",
"out": "NameError: name 'Name' is not defined",
"err": true
},
{
"p": "The last example fails because `Name` (capital N) was never created. Only `name` exists."
}
]
},
{
"h": "Several variables in one line",
"parts": [
{
"p": "You can set several variables at once by putting commas on both sides. Python matches them up in order. This also gives you a neat way to swap two values."
},
{
"code": "first_name, last_name, age = \"Alan\", \"Turing\", 41\nprint(first_name)\nprint(last_name)\nprint(age)\n\na, b = 1, 2\na, b = b, a      # swap\nprint(a, b)",
"out": "Alan\nTuring\n41\n2 1"
}
]
},
{
"h": "Data types",
"parts": [
{
"p": "Every value has a type. The four basic ones are:"
},
{
"ul": [
"`int` for whole numbers: `7`, `-3`, `2026`",
"`float` for decimals: `3.14`, `-0.5`, `9.81`",
"`str` for text: `\"hello\"`, `'42'`",
"`bool` for yes or no: `True`, `False`"
]
},
{
"p": "`type()` tells you which type a value has. Notice that `\"42\"` with quotes is text, not a number."
},
{
"code": "print(type(7))\nprint(type(3.14))\nprint(type(\"hello\"))\nprint(type(\"42\"))\nprint(type(True))",
"out": "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'str'>\n<class 'bool'>"
},
{
"p": "The type matters because it decides what operations make sense. Adding two numbers does maths; adding two strings joins them."
},
{
"code": "print(2 + 3)\nprint(\"2\" + \"3\")",
"out": "5\n23"
}
]
},
{
"h": "Converting between types (casting)",
"parts": [
{
"p": "Python will not guess what you mean when you mix types. Text and numbers cannot be added together."
},
{
"code": "age = 25\nprint(\"I am \" + age)",
"out": "TypeError: can only concatenate str (not \"int\") to str",
"err": true
},
{
"p": "To fix this, convert one value to the other's type. `int()`, `float()`, `str()` and `bool()` each make a new value of that type."
},
{
"code": "age = 25\nprint(\"I am \" + str(age))      # number to text\nprint(int(\"40\") + 2)          # text to whole number\nprint(float(\"2.5\") * 2)       # text to decimal\nprint(int(9.99))              # float to int cuts off the decimals (it does not round)\nprint(float(7))               # int to float",
"out": "I am 25\n42\n5.0\n9\n7.0"
},
{
"p": "Converting only works when the text really looks like a number."
},
{
"code": "print(int(\"twelve\"))",
"out": "ValueError: invalid literal for int() with base 10: 'twelve'",
"err": true
},
{
"p": "`bool()` turns a value into True or False. Zero, empty text and empty collections count as False; nearly everything else is True."
},
{
"code": "print(bool(0))\nprint(bool(5))\nprint(bool(\"\"))\nprint(bool(\"hi\"))\nprint(bool([]))",
"out": "False\nTrue\nFalse\nTrue\nFalse"
}
]
},
{
"h": "Getting input from the user",
"parts": [
{
"p": "`input()` asks the person running the program to type something, and gives you what they typed as a string. It cannot run inside these examples, but this is what it looks like. Remember to convert the answer if you need a number."
},
{
"code": "name = input(\"What is your name? \")\nage = int(input(\"How old are you? \"))\nprint(\"Hello\", name, \"next year you will be\", age + 1)"
}
]
},
{
"h": "Built-in functions",
"parts": [
{
"p": "Python comes with tools you can use straight away, called built-in functions. You have already met `print()`, `type()` and `input()`. Some more:"
},
{
"ul": [
"`len()` counts the items in something, or the characters in text",
"`abs()` gives the distance from zero (drops the minus sign)",
"`round()` rounds to the nearest whole number, or to a number of decimal places",
"`min()` and `max()` pick the smallest and largest",
"`sum()` adds up a collection of numbers",
"`pow(a, b)` is the same as `a ** b`"
]
},
{
"code": "print(len(\"Python\"))\nprint(abs(-7))\nprint(round(3.14159))\nprint(round(3.14159, 2))\nprint(min(4, 9, 2))\nprint(max(4, 9, 2))\nprint(sum([10, 20, 30]))\nprint(pow(2, 5))",
"out": "6\n7\n3\n3.14\n2\n9\n60\n32"
},
{
"p": "`help()` shows the documentation for any function, and `dir()` lists what a value can do. These are great for exploring."
},
{
"code": "print(dir(\"text\")[-5:])   # the last five things a string can do",
"out": "['swapcase', 'title', 'translate', 'upper', 'zfill']"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A small program that uses variables, conversion and built-in functions to work out a bill split between friends."
},
{
"code": "meal_cost = \"84.60\"        # arrived as text, perhaps from a form\ntip_percent = 10\npeople = 4\n\ntotal = float(meal_cost) * (1 + tip_percent / 100)\neach = total / people\nprint(\"Total with tip:\", round(total, 2))\nprint(\"Each person pays:\", round(each, 2))",
"out": "Total with tip: 93.06\nEach person pays: 23.27"
}
]
}
],
"basics-3": [
{
"h": "What an operator is",
"parts": [
{
"p": "An operator is a symbol that does something with values. `+` is an operator: it takes the value on its left and the value on its right and adds them. The values are called operands. Python has several families of operators: arithmetic, assignment, comparison, logical, membership and identity."
}
]
},
{
"h": "Arithmetic operators",
"parts": [
{
"p": "These do maths. You met them in lesson 1; here they are all together with two numbers."
},
{
"code": "a = 17\nb = 5\nprint(\"a + b =\", a + b)\nprint(\"a - b =\", a - b)\nprint(\"a * b =\", a * b)\nprint(\"a / b =\", a / b)\nprint(\"a // b =\", a // b)\nprint(\"a % b =\", a % b)\nprint(\"a ** b =\", a ** b)",
"out": "a + b = 22\na - b = 12\na * b = 85\na / b = 3.4\na // b = 3\na % b = 2\na ** b = 1419857"
},
{
"p": "`%` (remainder) is more useful than it looks. A number is even when dividing by 2 leaves nothing over, and the last digit of any number is its remainder after dividing by 10."
},
{
"code": "print(10 % 2)     # 0, so 10 is even\nprint(7 % 2)      # 1, so 7 is odd\nprint(1234 % 10)  # last digit\nprint(1234 // 10) # everything except the last digit",
"out": "0\n1\n4\n123"
},
{
"p": "Everyday example: turning a number of minutes into hours and minutes."
},
{
"code": "total_minutes = 135\nhours = total_minutes // 60\nminutes = total_minutes % 60\nprint(hours, \"hours and\", minutes, \"minutes\")",
"out": "2 hours and 15 minutes"
}
]
},
{
"h": "Operators with text and lists",
"parts": [
{
"p": "Some operators also work on other types. `+` joins strings or lists together, and `*` repeats them."
},
{
"code": "print(\"sun\" + \"flower\")\nprint(\"ha\" * 3)\nprint(\"-\" * 20)\nprint([1, 2] + [3, 4])\nprint([0] * 5)",
"out": "sunflower\nhahaha\n--------------------\n[1, 2, 3, 4]\n[0, 0, 0, 0, 0]"
}
]
},
{
"h": "Assignment operators",
"parts": [
{
"p": "`=` stores a value. The combined operators change a variable using its current value. They save typing and show your intent clearly."
},
{
"code": "x = 10\nx += 3    # x = x + 3\nprint(x)\nx -= 1    # x = x - 1\nprint(x)\nx *= 2    # x = x * 2\nprint(x)\nx /= 4    # x = x / 4\nprint(x)\nx **= 2   # x = x ** 2\nprint(x)\nx //= 4   # x = x // 4\nprint(x)\nx %= 3    # x = x % 3\nprint(x)",
"out": "13\n12\n24\n6.0\n36.0\n9.0\n0.0"
}
]
},
{
"h": "Booleans: True and False",
"parts": [
{
"p": "A boolean is a value that is either `True` or `False`, with a capital first letter. Booleans are how programs make decisions: \"is the user logged in?\", \"is the basket empty?\"."
},
{
"code": "is_raining = True\nhas_umbrella = False\nprint(is_raining)\nprint(type(has_umbrella))",
"out": "True\n<class 'bool'>"
}
]
},
{
"h": "Comparison operators",
"parts": [
{
"p": "A comparison asks a question about two values and the answer is always True or False."
},
{
"ul": [
"`==` equal to (two equals signs; one `=` stores a value)",
"`!=` not equal to",
"`>` greater than, `<` less than",
"`>=` greater than or equal to, `<=` less than or equal to"
]
},
{
"code": "print(5 == 5)\nprint(5 != 3)\nprint(5 > 8)\nprint(5 < 8)\nprint(5 >= 5)\nprint(4 <= 3)",
"out": "True\nTrue\nFalse\nTrue\nTrue\nFalse"
},
{
"p": "Comparisons work on text too. `==` checks exact equality, including capital letters. `<` and `>` compare alphabetically (more exactly, by character code, so capital letters come before small ones)."
},
{
"code": "print(\"apple\" == \"apple\")\nprint(\"apple\" == \"Apple\")\nprint(\"apple\" < \"banana\")\nprint(\"Zebra\" < \"apple\")\nprint(len(\"cat\") == len(\"dog\"))",
"out": "True\nFalse\nTrue\nTrue\nTrue"
},
{
"p": "Python lets you chain comparisons the way you would in maths, which is very readable."
},
{
"code": "age = 15\nprint(13 <= age <= 19)   # is age a teenager?\ntemp = 30\nprint(18 < temp < 25)    # is it a comfortable temperature?",
"out": "True\nFalse"
}
]
},
{
"h": "Logical operators: and, or, not",
"parts": [
{
"p": "Logical operators combine True and False values."
},
{
"ul": [
"`and` is True only when both sides are True",
"`or` is True when at least one side is True",
"`not` flips True to False and False to True"
]
},
{
"code": "print(True and True)\nprint(True and False)\nprint(True or False)\nprint(False or False)\nprint(not True)\nprint(not False)",
"out": "True\nFalse\nTrue\nFalse\nFalse\nTrue"
},
{
"p": "Everyday example: you can go to the cinema if you have a ticket and the film has not started, or if you are on the guest list."
},
{
"code": "has_ticket = True\nfilm_started = False\non_guest_list = False\ncan_enter = (has_ticket and not film_started) or on_guest_list\nprint(can_enter)",
"out": "True"
},
{
"code": "age = 20\nhas_id = True\nprint(age >= 18 and has_id)\nprint(age < 13 or age > 65)",
"out": "True\nFalse"
}
]
},
{
"h": "Membership: in and not in",
"parts": [
{
"p": "`in` asks \"is this inside that?\". It works on strings, lists, tuples, sets and dictionaries (where it checks the keys)."
},
{
"code": "print(\"a\" in \"apple\")\nprint(\"pie\" in \"apple pie\")\nprint(3 in [1, 2, 3])\nprint(\"kiwi\" not in [\"apple\", \"banana\"])\nprint(\"name\" in {\"name\": \"Ada\", \"age\": 36})",
"out": "True\nTrue\nTrue\nTrue\nTrue"
}
]
},
{
"h": "Identity: is and is not",
"parts": [
{
"p": "`is` checks whether two names point to the very same object, not just equal values. Use `==` to compare values. The main everyday use of `is` is checking for `None`, Python's value for \"nothing here yet\"."
},
{
"code": "a = [1, 2, 3]\nb = [1, 2, 3]\nc = a\nprint(a == b)    # same values\nprint(a is b)    # but two separate lists\nprint(a is c)    # c is just another name for a\n\nresult = None\nprint(result is None)",
"out": "True\nFalse\nTrue\nTrue"
}
]
},
{
"h": "Operator precedence",
"parts": [
{
"p": "When several operators appear in one line, Python works them out in this order (highest first):"
},
{
"ul": [
"`**`",
"`*`, `/`, `//`, `%`",
"`+`, `-`",
"comparisons: `==`, `!=`, `<`, `>`, `<=`, `>=`, `in`, `is`",
"`not`",
"`and`",
"`or`"
]
},
{
"code": "print(2 + 3 * 4 ** 2)          # 4 ** 2 first, then * 3, then + 2\nprint(10 > 5 and 3 > 4)        # comparisons first, then and\nprint(not 5 > 3)               # comparison first, then not\nprint(True or False and False) # and before or",
"out": "50\nFalse\nFalse\nTrue"
},
{
"p": "Brackets beat everything, so when a line is hard to read, add them."
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "Working out whether a year is a leap year uses arithmetic, comparison and logical operators together. A leap year divides by 4, except century years, which must also divide by 400."
},
{
"code": "for year in [1900, 2000, 2024, 2026]:\n    leap = (year % 4 == 0 and year % 100 != 0) or year % 400 == 0\n    print(year, leap)",
"out": "1900 False\n2000 True\n2024 True\n2026 False"
}
]
}
],
"basics-4": [
{
"h": "What a string is",
"parts": [
{
"p": "A string is a piece of text: a sequence of characters such as letters, digits, spaces and symbols. You write one by putting text inside quotes. Single and double quotes do exactly the same job; pick one and stay consistent."
},
{
"code": "greeting = \"Hello\"\nname = 'Amara'\nempty = \"\"\nprint(greeting, name)\nprint(len(greeting))\nprint(len(empty))",
"out": "Hello Amara\n5\n0"
},
{
"p": "Having two kinds of quote is useful when the text itself contains a quote."
},
{
"code": "print(\"It's a lovely day\")\nprint('She said \"hi\" to me')",
"out": "It's a lovely day\nShe said \"hi\" to me"
}
]
},
{
"h": "Multi-line strings",
"parts": [
{
"p": "Triple quotes (three single or three double) let a string run over several lines. The line breaks are kept."
},
{
"code": "poem = \"\"\"Roses are red,\nViolets are blue,\nPython is fun,\nAnd so are you.\"\"\"\nprint(poem)",
"out": "Roses are red,\nViolets are blue,\nPython is fun,\nAnd so are you."
}
]
},
{
"h": "Joining strings (concatenation)",
"parts": [
{
"p": "`+` joins strings together. It does not add spaces for you, so include them yourself. `*` repeats a string."
},
{
"code": "first = \"Ada\"\nlast = \"Lovelace\"\nfull = first + \" \" + last\nprint(full)\nprint(\"=\" * len(full))",
"out": "Ada Lovelace\n============"
},
{
"p": "You can only join strings to strings. Convert numbers with `str()` first, or use an f-string (below), which does it for you."
},
{
"code": "first = \"Ada\"\nage = 36\nprint(first + \" is \" + str(age))",
"out": "Ada is 36"
}
]
},
{
"h": "Escape sequences",
"parts": [
{
"p": "A backslash `\\` inside a string starts a special code called an escape sequence."
},
{
"ul": [
"`\\n` a new line",
"`\\t` a tab (a wide space, good for lining things up)",
"`\\\\` a real backslash",
"`\\'` and `\\\"` a quote that does not end the string"
]
},
{
"code": "print(\"Line one\\nLine two\")\nprint(\"Name\\tAge\")\nprint(\"Ada\\t36\")\nprint(\"C:\\\\Users\\\\Ada\")\nprint('It\\'s fine')",
"out": "Line one\nLine two\nName\tAge\nAda\t36\nC:\\Users\\Ada\nIt's fine"
}
]
},
{
"h": "Formatting with f-strings",
"parts": [
{
"p": "An f-string is a string with `f` in front of it. Anything inside curly brackets `{}` is worked out and dropped into the text. This is the modern, clearest way to build text from values."
},
{
"code": "name = \"Kofi\"\nage = 29\nprint(f\"My name is {name} and I am {age} years old.\")\nprint(f\"Next year I will be {age + 1}.\")\nprint(f\"My name has {len(name)} letters.\")",
"out": "My name is Kofi and I am 29 years old.\nNext year I will be 30.\nMy name has 4 letters."
},
{
"p": "After a colon inside the brackets you can control how a value looks. `:.2f` shows 2 decimal places, `:,` adds thousands separators, `:%` shows a percentage, and `:>10` or `:<10` pads to a width."
},
{
"code": "price = 4.5\nprint(f\"Price: £{price:.2f}\")\nprint(f\"Population: {8045311447:,}\")\nprint(f\"Score: {0.875:.1%}\")\nprint(f\"[{'left':<10}]\")\nprint(f\"[{'right':>10}]\")\nprint(f\"[{'middle':^10}]\")",
"out": "Price: £4.50\nPopulation: 8,045,311,447\nScore: 87.5%\n[left      ]\n[     right]\n[  middle  ]"
},
{
"p": "Older code uses `.format()` or the `%` operator for the same job. You will see them around, so it helps to recognise them."
},
{
"code": "print(\"I am {} and I am {} years old\".format(\"Kofi\", 29))\nprint(\"I am {name}, aged {age}\".format(name=\"Kofi\", age=29))\nprint(\"I am %s and I am %d years old\" % (\"Kofi\", 29))\nprint(\"Pi is about %.2f\" % 3.14159)",
"out": "I am Kofi and I am 29 years old\nI am Kofi, aged 29\nI am Kofi and I am 29 years old\nPi is about 3.14"
}
]
},
{
"h": "Strings are sequences: indexing",
"parts": [
{
"p": "Each character in a string has a position number called an index. Counting starts at 0, not 1. Negative indexes count from the end: `-1` is the last character."
},
{
"code": " P   y   t   h   o   n\n 0   1   2   3   4   5\n-6  -5  -4  -3  -2  -1",
"text": true
},
{
"code": "word = \"Python\"\nprint(word[0])\nprint(word[1])\nprint(word[5])\nprint(word[-1])\nprint(word[-2])\nprint(word[len(word) - 1])",
"out": "P\ny\nn\nn\no\nn"
},
{
"p": "Asking for a position that does not exist is an error."
},
{
"code": "word = \"Python\"\nprint(word[6])",
"out": "IndexError: string index out of range",
"err": true
}
]
},
{
"h": "Slicing",
"parts": [
{
"p": "A slice takes a piece of a string: `text[start:stop]`. It starts at index start and stops just before index stop. Leave out start to begin at the beginning, and leave out stop to go to the end."
},
{
"code": "word = \"Python\"\nprint(word[0:3])    # indexes 0, 1, 2\nprint(word[2:5])\nprint(word[:2])     # from the start\nprint(word[2:])     # to the end\nprint(word[-3:])    # the last three\nprint(word[:])      # a copy of the whole thing",
"out": "Pyt\ntho\nPy\nthon\nhon\nPython"
},
{
"p": "A third number is the step. `[::2]` takes every second character and `[::-1]` walks backwards, which reverses the string."
},
{
"code": "letters = \"abcdefghij\"\nprint(letters[::2])\nprint(letters[1::2])\nprint(letters[::-1])\nprint(\"racecar\" == \"racecar\"[::-1])   # a palindrome reads the same backwards",
"out": "acegi\nbdfhj\njihgfedcba\nTrue"
}
]
},
{
"h": "Unpacking and looping over characters",
"parts": [
{
"p": "Because a string is a sequence, you can loop over its characters or unpack them into variables."
},
{
"code": "for ch in \"hey\":\n    print(ch)\n\na, b, c = \"xyz\"\nprint(a, b, c)\nprint(list(\"hello\"))",
"out": "h\ne\ny\nx y z\n['h', 'e', 'l', 'l', 'o']"
}
]
},
{
"h": "Strings cannot be changed",
"parts": [
{
"p": "Strings are immutable: once made, a string cannot be changed in place. Methods like `upper()` do not change the original; they give you a new string. To keep the result, store it."
},
{
"code": "word = \"cat\"\nword[0] = \"b\"",
"out": "TypeError: 'str' object does not support item assignment",
"err": true
},
{
"code": "word = \"cat\"\nword = \"b\" + word[1:]\nprint(word)\nshout = word.upper()\nprint(word, shout)",
"out": "bat\nbat BAT"
}
]
},
{
"h": "Changing case",
"parts": [
{
"p": "These methods give you a copy of the string with the letters changed."
},
{
"code": "text = \"the quick BROWN fox\"\nprint(text.upper())\nprint(text.lower())\nprint(text.title())\nprint(text.capitalize())\nprint(text.swapcase())",
"out": "THE QUICK BROWN FOX\nthe quick brown fox\nThe Quick Brown Fox\nThe quick brown fox\nTHE QUICK brown FOX"
},
{
"p": "Lowering both sides is the usual way to compare text without caring about capitals."
},
{
"code": "answer = \"YES\"\nprint(answer.lower() == \"yes\")",
"out": "True"
}
]
},
{
"h": "Searching inside a string",
"parts": [
{
"ul": [
"`in` checks whether some text appears",
"`count()` counts how many times it appears",
"`find()` gives the index of the first match, or -1 if there is none",
"`index()` is like find but raises an error when there is no match",
"`startswith()` and `endswith()` check the beginning and end"
]
},
{
"code": "sentence = \"I love Python and Python loves me\"\nprint(\"Python\" in sentence)\nprint(sentence.count(\"Python\"))\nprint(sentence.find(\"Python\"))\nprint(sentence.rfind(\"Python\"))   # search from the right\nprint(sentence.find(\"Java\"))\nprint(sentence.startswith(\"I love\"))\nprint(\"photo.jpg\".endswith(\".jpg\"))",
"out": "True\n2\n7\n18\n-1\nTrue\nTrue"
}
]
},
{
"h": "Cleaning and replacing",
"parts": [
{
"p": "`strip()` removes spaces (and new lines) from both ends. `lstrip()` and `rstrip()` do one end only. `replace(old, new)` swaps every match."
},
{
"code": "messy = \"   hello world   \"\nprint(\"[\" + messy.strip() + \"]\")\nprint(\"[\" + messy.lstrip() + \"]\")\nprint(\"[\" + messy.rstrip() + \"]\")\nprint(\"I like cats. Cats are great.\".replace(\"cats\", \"dogs\"))\nprint(\"2026-11-21\".replace(\"-\", \"/\"))\nprint(\"$$$price$$$\".strip(\"$\"))",
"out": "[hello world]\n[hello world   ]\n[   hello world]\nI like dogs. Cats are great.\n2026/11/21\nprice"
}
]
},
{
"h": "Splitting and joining",
"parts": [
{
"p": "`split()` breaks a string into a list of pieces. With no argument it splits on any spaces. `join()` does the opposite: it glues a list of strings together, with the string you call it on placed between each piece."
},
{
"code": "sentence = \"Python is easy to read\"\nwords = sentence.split()\nprint(words)\nprint(len(words), \"words\")\nprint(\"apples,pears,plums\".split(\",\"))\nprint(\"-\".join([\"2026\", \"11\", \"21\"]))\nprint(\" \".join(reversed(words)))",
"out": "['Python', 'is', 'easy', 'to', 'read']\n5 words\n['apples', 'pears', 'plums']\n2026-11-21\nread to easy is Python"
}
]
},
{
"h": "Checking what a string contains",
"parts": [
{
"p": "These methods answer True or False about every character in the string."
},
{
"code": "print(\"12345\".isdigit())\nprint(\"12a45\".isdigit())\nprint(\"hello\".isalpha())\nprint(\"hello123\".isalnum())\nprint(\"hello world\".isalpha())   # the space is not a letter\nprint(\"HELLO\".isupper())\nprint(\"hello\".islower())\nprint(\"   \".isspace())\nprint(\"first_name\".isidentifier())   # could it be a variable name?",
"out": "True\nFalse\nTrue\nTrue\nFalse\nTrue\nTrue\nTrue\nTrue"
}
]
},
{
"h": "Lining text up",
"parts": [
{
"p": "`center()`, `ljust()` and `rjust()` pad text to a width, and `zfill()` pads a number with zeros."
},
{
"code": "print(\"menu\".center(20, \"*\"))\nprint(\"Tea\".ljust(10, \".\") + \"£2.00\")\nprint(\"Coffee\".ljust(10, \".\") + \"£2.50\")\nprint(\"7\".zfill(3))",
"out": "********menu********\nTea.......£2.00\nCoffee....£2.50\n007"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A small program that tidies a name typed by a user and builds a username from it."
},
{
"code": "raw = \"   ada LOVELACE  \"\nclean = raw.strip().title()\nfirst, last = clean.split()\nusername = (first[0] + last).lower()\nprint(f\"Name: {clean}\")\nprint(f\"Initials: {first[0]}.{last[0]}.\")\nprint(f\"Username: {username}\")\nprint(f\"Reversed: {clean[::-1]}\")",
"out": "Name: Ada Lovelace\nInitials: A.L.\nUsername: alovelace\nReversed: ecalevoL adA"
}
]
}
],
"basics-5": [
{
"h": "What a list is",
"parts": [
{
"p": "A list holds several values in order, inside square brackets and separated by commas. It is like a shopping list: items have a position, you can add and cross off items, and the same item can appear twice."
},
{
"code": "fruits = [\"banana\", \"orange\", \"mango\", \"lemon\"]\nnumbers = [4, 8, 15, 16, 23, 42]\nempty = []\nprint(fruits)\nprint(len(fruits))\nprint(len(empty))",
"out": "['banana', 'orange', 'mango', 'lemon']\n4\n0"
},
{
"p": "A list can hold any mix of types, even other lists."
},
{
"code": "mixed = [\"Ada\", 36, 1.65, True, [\"maths\", \"poetry\"]]\nprint(mixed)\nprint(type(mixed))",
"out": "['Ada', 36, 1.65, True, ['maths', 'poetry']]\n<class 'list'>"
},
{
"p": "You can also make a list from something else with `list()`, for example the characters of a string or a range of numbers."
},
{
"code": "print(list(\"abc\"))\nprint(list(range(5)))",
"out": "['a', 'b', 'c']\n[0, 1, 2, 3, 4]"
}
]
},
{
"h": "Reading items by index",
"parts": [
{
"p": "Like strings, list positions start at 0. Negative indexes count from the end."
},
{
"code": "fruits = [\"banana\", \"orange\", \"mango\", \"lemon\"]\nprint(fruits[0])\nprint(fruits[2])\nprint(fruits[-1])\nprint(fruits[-2])",
"out": "banana\nmango\nlemon\nmango"
},
{
"code": "fruits = [\"banana\", \"orange\", \"mango\", \"lemon\"]\nprint(fruits[4])",
"out": "IndexError: list index out of range",
"err": true
},
{
"p": "A list inside a list is reached with two sets of brackets: the first picks the inner list, the second picks an item from it."
},
{
"code": "grid = [[1, 2, 3],\n        [4, 5, 6],\n        [7, 8, 9]]\nprint(grid[0])\nprint(grid[1][2])\nprint(grid[-1][-1])",
"out": "[1, 2, 3]\n6\n9"
}
]
},
{
"h": "Unpacking a list",
"parts": [
{
"p": "You can pull items straight into variables. A name with `*` collects whatever is left over into a new list."
},
{
"code": "first, second, third = [\"gold\", \"silver\", \"bronze\"]\nprint(first, second, third)\n\nwinner, *others = [\"Amina\", \"Ben\", \"Chen\", \"Dara\"]\nprint(winner)\nprint(others)\n\nhead, *middle, tail = [1, 2, 3, 4, 5]\nprint(head, middle, tail)",
"out": "gold silver bronze\nAmina\n['Ben', 'Chen', 'Dara']\n1 [2, 3, 4] 5"
}
]
},
{
"h": "Slicing a list",
"parts": [
{
"p": "Slicing works exactly like strings and always gives you a new list."
},
{
"code": "nums = [10, 20, 30, 40, 50, 60]\nprint(nums[1:4])\nprint(nums[:3])\nprint(nums[3:])\nprint(nums[-2:])\nprint(nums[::2])\nprint(nums[::-1])",
"out": "[20, 30, 40]\n[10, 20, 30]\n[40, 50, 60]\n[50, 60]\n[10, 30, 50]\n[60, 50, 40, 30, 20, 10]"
}
]
},
{
"h": "Changing items",
"parts": [
{
"p": "Unlike strings, lists are mutable: you can change them in place."
},
{
"code": "fruits = [\"banana\", \"orange\", \"mango\"]\nfruits[0] = \"avocado\"\nfruits[-1] = \"papaya\"\nprint(fruits)\n\nnums = [1, 2, 3, 4, 5]\nnums[1:3] = [20, 30]     # replace a slice\nprint(nums)",
"out": "['avocado', 'orange', 'papaya']\n[1, 20, 30, 4, 5]"
}
]
},
{
"h": "Checking for an item",
"parts": [
{
"p": "`in` tells you whether a value is in the list."
},
{
"code": "fruits = [\"banana\", \"orange\", \"mango\"]\nprint(\"mango\" in fruits)\nprint(\"kiwi\" in fruits)\nprint(\"kiwi\" not in fruits)",
"out": "True\nFalse\nTrue"
}
]
},
{
"h": "Adding items",
"parts": [
{
"ul": [
"`append(x)` adds one item to the end",
"`insert(i, x)` puts an item at position i and shifts the rest along",
"`extend(other)` adds every item from another list"
]
},
{
"code": "basket = [\"bread\"]\nbasket.append(\"milk\")\nprint(basket)\nbasket.insert(0, \"eggs\")\nprint(basket)\nbasket.insert(2, \"jam\")\nprint(basket)\nbasket.extend([\"tea\", \"rice\"])\nprint(basket)",
"out": "['bread', 'milk']\n['eggs', 'bread', 'milk']\n['eggs', 'bread', 'jam', 'milk']\n['eggs', 'bread', 'jam', 'milk', 'tea', 'rice']"
},
{
"p": "A common mistake is using `append` with a list when you meant `extend`. `append` adds the whole list as one item."
},
{
"code": "a = [1, 2]\na.append([3, 4])\nprint(a)\nb = [1, 2]\nb.extend([3, 4])\nprint(b)",
"out": "[1, 2, [3, 4]]\n[1, 2, 3, 4]"
}
]
},
{
"h": "Removing items",
"parts": [
{
"ul": [
"`remove(x)` deletes the first item equal to x",
"`pop()` removes and gives back the last item; `pop(i)` does it for position i",
"`del` deletes by position or slice",
"`clear()` empties the list"
]
},
{
"code": "pets = [\"cat\", \"dog\", \"fish\", \"dog\", \"hamster\"]\npets.remove(\"dog\")         # only the first dog goes\nprint(pets)\n\nlast = pets.pop()\nprint(last, pets)\n\nfirst = pets.pop(0)\nprint(first, pets)\n\ndel pets[0]\nprint(pets)\n\npets.clear()\nprint(pets)",
"out": "['cat', 'fish', 'dog', 'hamster']\nhamster ['cat', 'fish', 'dog']\ncat ['fish', 'dog']\n['dog']\n[]"
},
{
"code": "pets = [\"cat\", \"dog\"]\npets.remove(\"parrot\")",
"out": "ValueError: list.remove(x): x not in list",
"err": true
}
]
},
{
"h": "Copying a list",
"parts": [
{
"p": "`b = a` does not copy a list. It gives the same list a second name, so changing one changes \"both\". Use `copy()` (or `a[:]` or `list(a)`) to get a real, separate copy."
},
{
"code": "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)      # a changed too\n\nc = a.copy()\nc.append(5)\nprint(a)      # a did not change this time\nprint(c)",
"out": "[1, 2, 3, 4]\n[1, 2, 3, 4]\n[1, 2, 3, 4, 5]"
}
]
},
{
"h": "Joining lists",
"parts": [
{
"p": "`+` joins lists into a new one, and `*` repeats a list."
},
{
"code": "veg = [\"carrot\", \"pea\"]\nfruit = [\"apple\", \"pear\"]\nfood = veg + fruit\nprint(food)\nprint([\"-\"] * 3)",
"out": "['carrot', 'pea', 'apple', 'pear']\n['-', '-', '-']"
}
]
},
{
"h": "Counting, finding and measuring",
"parts": [
{
"code": "marks = [7, 9, 5, 9, 10, 6, 9]\nprint(marks.count(9))      # how many 9s\nprint(marks.index(10))     # position of the first 10\nprint(len(marks))\nprint(min(marks), max(marks))\nprint(sum(marks))\nprint(sum(marks) / len(marks))   # the average",
"out": "3\n4\n7\n5 10\n55\n7.857142857142857"
}
]
},
{
"h": "Reversing and sorting",
"parts": [
{
"p": "`reverse()` and `sort()` change the list itself and give back nothing (`None`). `sorted()` and `reversed()` leave the original alone and give you a new result. Use the second pair when you want to keep the original order."
},
{
"code": "nums = [3, 1, 4, 1, 5, 9, 2]\nnums.sort()\nprint(nums)\nnums.sort(reverse=True)\nprint(nums)\nnums.reverse()\nprint(nums)",
"out": "[1, 1, 2, 3, 4, 5, 9]\n[9, 5, 4, 3, 2, 1, 1]\n[1, 1, 2, 3, 4, 5, 9]"
},
{
"code": "names = [\"Zoe\", \"adam\", \"Bea\"]\nprint(sorted(names))                  # capitals sort before small letters\nprint(sorted(names, key=str.lower))   # sort ignoring case\nprint(sorted(names, key=len))         # sort by length\nprint(list(reversed(names)))\nprint(names)                          # unchanged",
"out": "['Bea', 'Zoe', 'adam']\n['adam', 'Bea', 'Zoe']\n['Zoe', 'Bea', 'adam']\n['Bea', 'adam', 'Zoe']\n['Zoe', 'adam', 'Bea']"
},
{
"p": "A classic trap: `sort()` returns `None`, so do not store its result."
},
{
"code": "nums = [3, 1, 2]\nresult = nums.sort()\nprint(result)\nprint(nums)",
"out": "None\n[1, 2, 3]"
}
]
},
{
"h": "Looping over a list",
"parts": [
{
"p": "A `for` loop visits each item in turn. You will learn loops properly in lesson 10, but they are too useful with lists not to show here. `enumerate()` gives you the position as well."
},
{
"code": "todo = [\"wash up\", \"email Sam\", \"buy stamps\"]\nfor task in todo:\n    print(\"-\", task)\n\nfor i, task in enumerate(todo, start=1):\n    print(i, task)",
"out": "- wash up\n- email Sam\n- buy stamps\n1 wash up\n2 email Sam\n3 buy stamps"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "Keeping a running list of test scores, then reporting on it."
},
{
"code": "scores = []\nfor s in [72, 88, 95, 61, 88]:\n    scores.append(s)\n\nscores.sort()\nprint(\"All scores:\", scores)\nprint(\"Lowest:\", scores[0], \"Highest:\", scores[-1])\nprint(\"Middle score:\", scores[len(scores) // 2])\nprint(\"Average:\", round(sum(scores) / len(scores), 1))\nprint(\"Top three:\", sorted(scores, reverse=True)[:3])\nprint(\"How many 88s:\", scores.count(88))",
"out": "All scores: [61, 72, 88, 88, 95]\nLowest: 61 Highest: 95\nMiddle score: 88\nAverage: 80.8\nTop three: [95, 88, 88]\nHow many 88s: 2"
}
]
}
],
"basics-6": [
{
"h": "What a tuple is",
"parts": [
{
"p": "A tuple is an ordered collection, like a list, but it cannot be changed after it is made (it is immutable). You write it with round brackets. Use a tuple for a fixed group of values that belong together: the days of the week, a date, a map coordinate."
},
{
"code": "days = (\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\")\npoint = (3, 4)\nprint(days)\nprint(point)\nprint(type(point))\nprint(len(days))",
"out": "('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun')\n(3, 4)\n<class 'tuple'>\n7"
}
]
},
{
"h": "Making a tuple",
"parts": [
{
"p": "The commas make a tuple, not the brackets. That is why a tuple with one item needs a trailing comma; without it, the brackets are just ordinary maths brackets."
},
{
"code": "a = (5)\nb = (5,)\nc = 5, 6, 7\nprint(type(a))\nprint(type(b))\nprint(c, type(c))\nprint(tuple())                  # an empty tuple\nprint(tuple([\"x\", \"y\", \"z\"]))   # from a list\nprint(tuple(\"hey\"))             # from a string",
"out": "<class 'int'>\n<class 'tuple'>\n(5, 6, 7) <class 'tuple'>\n()\n('x', 'y', 'z')\n('h', 'e', 'y')"
}
]
},
{
"h": "Reading items",
"parts": [
{
"p": "Indexing and slicing work exactly the same as for lists and strings."
},
{
"code": "colours = (\"red\", \"green\", \"blue\", \"yellow\")\nprint(colours[0])\nprint(colours[-1])\nprint(colours[1:3])\nprint(colours[::-1])",
"out": "red\nyellow\n('green', 'blue')\n('yellow', 'blue', 'green', 'red')"
}
]
},
{
"h": "Tuples cannot be changed",
"parts": [
{
"p": "Trying to change, add or remove an item is an error. That is the whole point: it protects values that should stay fixed."
},
{
"code": "colours = (\"red\", \"green\", \"blue\")\ncolours[0] = \"pink\"",
"out": "TypeError: 'tuple' object does not support item assignment",
"err": true
},
{
"code": "colours = (\"red\", \"green\", \"blue\")\ncolours.append(\"pink\")",
"out": "AttributeError: 'tuple' object has no attribute 'append'",
"err": true
},
{
"p": "If you really need a changed version, turn it into a list, change that, and turn it back. You get a new tuple; the original is untouched."
},
{
"code": "colours = (\"red\", \"green\", \"blue\")\nas_list = list(colours)\nas_list.append(\"pink\")\ncolours = tuple(as_list)\nprint(colours)",
"out": "('red', 'green', 'blue', 'pink')"
}
]
},
{
"h": "Checking, counting and finding",
"parts": [
{
"p": "Tuples have only two methods, `count()` and `index()`, plus `in` and the usual built-ins."
},
{
"code": "rolls = (6, 2, 6, 3, 6, 1)\nprint(6 in rolls)\nprint(rolls.count(6))\nprint(rolls.index(3))\nprint(min(rolls), max(rolls), sum(rolls))\nprint(sorted(rolls))   # sorted() always gives back a list",
"out": "True\n3\n3\n1 6 24\n[1, 2, 3, 6, 6, 6]"
}
]
},
{
"h": "Joining tuples",
"parts": [
{
"p": "`+` joins tuples into a new tuple, and `*` repeats one."
},
{
"code": "front = (\"Ada\", \"Ben\")\nback = (\"Chen\", \"Dara\")\nteam = front + back\nprint(team)\nprint((\"ha\",) * 3)",
"out": "('Ada', 'Ben', 'Chen', 'Dara')\n('ha', 'ha', 'ha')"
}
]
},
{
"h": "Unpacking",
"parts": [
{
"p": "Unpacking pulls a tuple's values straight into named variables. This is one of the most useful things in Python and you will see it everywhere."
},
{
"code": "person = (\"Grace\", \"Hopper\", 1906)\nfirst, last, born = person\nprint(first)\nprint(last)\nprint(born)\n\nname, *rest = (\"Ada\", 36, \"London\", \"maths\")\nprint(name, rest)",
"out": "Grace\nHopper\n1906\nAda [36, 'London', 'maths']"
},
{
"p": "Swapping two variables is really tuple packing and unpacking: the right side builds a tuple, the left side unpacks it."
},
{
"code": "x, y = 1, 2\nx, y = y, x\nprint(x, y)",
"out": "2 1"
}
]
},
{
"h": "Returning several values from a function",
"parts": [
{
"p": "A function can hand back several values at once by returning a tuple, and the caller unpacks it. (Functions are lesson 11.)"
},
{
"code": "def min_and_max(numbers):\n    return min(numbers), max(numbers)\n\nlow, high = min_and_max([4, 9, 1, 7])\nprint(low, high)\nprint(min_and_max([4, 9, 1, 7]))",
"out": "1 9\n(1, 9)"
}
]
},
{
"h": "Looping over tuples",
"parts": [
{
"p": "Loops work like they do for lists. A list of tuples is a very common way to store simple records, and unpacking in the loop makes it read nicely."
},
{
"code": "scores = [(\"Ada\", 91), (\"Ben\", 78), (\"Chen\", 85)]\nfor name, score in scores:\n    print(f\"{name} scored {score}\")",
"out": "Ada scored 91\nBen scored 78\nChen scored 85"
}
]
},
{
"h": "Tuple or list?",
"parts": [
{
"ul": [
"Use a list when the collection will grow, shrink or change, like a to-do list.",
"Use a tuple when the values are fixed and belong together, like a date `(2026, 11, 21)` or an RGB colour `(255, 128, 0)`.",
"Tuples can be dictionary keys and set items; lists cannot, because they can change."
]
},
{
"code": "distances = {(\"London\", \"Paris\"): 344, (\"Paris\", \"Rome\"): 1106}\nprint(distances[(\"London\", \"Paris\")])",
"out": "344"
},
{
"code": "bad = {[\"London\", \"Paris\"]: 344}",
"out": "TypeError: unhashable type: 'list'",
"err": true
}
]
},
{
"h": "Deleting a tuple",
"parts": [
{
"p": "You cannot delete one item, but `del` can remove the whole variable."
},
{
"code": "colours = (\"red\", \"green\")\ndel colours\nprint(colours)",
"out": "NameError: name 'colours' is not defined",
"err": true
}
]
}
],
"basics-7": [
{
"h": "What a set is",
"parts": [
{
"p": "A set is a collection of unique items with no order. It is like a bag of name badges: each name can only be in the bag once, and the badges are not kept in any line. Sets are written with curly brackets."
},
{
"code": "colours = {\"red\", \"green\", \"blue\"}\nprint(colours)\nprint(len(colours))\nprint(type(colours))",
"out": "{'blue', 'green', 'red'}\n3\n<class 'set'>"
},
{
"p": "Duplicates simply disappear when a set is made."
},
{
"code": "rolls = {3, 6, 3, 1, 6, 6}\nprint(rolls)\nprint(len(rolls))",
"out": "{1, 3, 6}\n3"
}
]
},
{
"h": "Making a set",
"parts": [
{
"p": "An empty set must be made with `set()`, because `{}` makes an empty dictionary. `set()` can also turn any collection into a set."
},
{
"code": "print(type({}))\nprint(type(set()))\nprint(set(\"banana\"))\nprint(set([1, 2, 2, 3, 3, 3]))",
"out": "<class 'dict'>\n<class 'set'>\n{'a', 'b', 'n'}\n{1, 2, 3}"
}
]
},
{
"h": "No order, no indexes",
"parts": [
{
"p": "Because a set has no order, there is no first item and no `[0]`. The order Python prints a set in can look random and you should not rely on it."
},
{
"code": "colours = {\"red\", \"green\", \"blue\"}\nprint(colours[0])",
"out": "TypeError: 'set' object is not subscriptable",
"err": true
},
{
"p": "You can still loop over a set, or sort it into a list when you need an order."
},
{
"code": "colours = {\"red\", \"green\", \"blue\"}\nfor c in sorted(colours):\n    print(c)",
"out": "blue\ngreen\nred"
}
]
},
{
"h": "Checking membership",
"parts": [
{
"p": "This is what sets are best at. Checking `in` on a set is instant, even with millions of items, while a list has to look at each item in turn."
},
{
"code": "allowed = {\"ada\", \"ben\", \"chen\"}\nprint(\"ben\" in allowed)\nprint(\"zoe\" in allowed)\nprint(\"zoe\" not in allowed)",
"out": "True\nFalse\nTrue"
}
]
},
{
"h": "Adding items",
"parts": [
{
"p": "`add()` puts in one item; `update()` adds every item from another collection. Adding an item that is already there does nothing."
},
{
"code": "tags = {\"python\"}\ntags.add(\"beginner\")\ntags.add(\"python\")       # already there, no change\nprint(sorted(tags))\ntags.update([\"code\", \"learning\", \"beginner\"])\nprint(sorted(tags))",
"out": "['beginner', 'python']\n['beginner', 'code', 'learning', 'python']"
}
]
},
{
"h": "Removing items",
"parts": [
{
"ul": [
"`remove(x)` deletes x and raises an error if it is missing",
"`discard(x)` deletes x and quietly does nothing if it is missing",
"`pop()` removes and returns some item (you do not choose which)",
"`clear()` empties the set"
]
},
{
"code": "tags = {\"python\", \"code\", \"fun\"}\ntags.remove(\"fun\")\ntags.discard(\"not there\")   # no error\nprint(sorted(tags))\ntags.clear()\nprint(tags)",
"out": "['code', 'python']\nset()"
},
{
"code": "tags = {\"python\", \"code\"}\ntags.remove(\"java\")",
"out": "KeyError: 'java'",
"err": true
}
]
},
{
"h": "Removing duplicates from a list",
"parts": [
{
"p": "The most common everyday use of a set: turn a list into a set to remove repeats, then back into a list if you need one."
},
{
"code": "emails = [\"a@x.com\", \"b@x.com\", \"a@x.com\", \"c@x.com\", \"b@x.com\"]\nunique = list(set(emails))\nprint(len(emails), \"emails,\", len(unique), \"unique\")\nprint(sorted(unique))",
"out": "5 emails, 3 unique\n['a@x.com', 'b@x.com', 'c@x.com']"
},
{
"p": "If the original order matters, use `dict.fromkeys()` instead, which keeps the first appearance of each item."
},
{
"code": "visits = [\"home\", \"about\", \"home\", \"shop\", \"about\"]\nprint(list(dict.fromkeys(visits)))",
"out": "['home', 'about', 'shop']"
}
]
},
{
"h": "Union: everything in either set",
"parts": [
{
"p": "`a | b` (or `a.union(b)`) gives every item that is in a, in b, or in both."
},
{
"code": "class_a = {\"Ada\", \"Ben\", \"Chen\"}\nclass_b = {\"Chen\", \"Dara\", \"Eve\"}\nprint(sorted(class_a | class_b))\nprint(sorted(class_a.union(class_b)))",
"out": "['Ada', 'Ben', 'Chen', 'Dara', 'Eve']\n['Ada', 'Ben', 'Chen', 'Dara', 'Eve']"
}
]
},
{
"h": "Intersection: items in both",
"parts": [
{
"p": "`a & b` (or `a.intersection(b)`) gives only the items the two sets share."
},
{
"code": "likes_tea = {\"Ada\", \"Ben\", \"Chen\"}\nlikes_coffee = {\"Ben\", \"Chen\", \"Dara\"}\nprint(sorted(likes_tea & likes_coffee))",
"out": "['Ben', 'Chen']"
}
]
},
{
"h": "Difference: in one but not the other",
"parts": [
{
"p": "`a - b` (or `a.difference(b)`) gives items in a that are not in b. The order matters."
},
{
"code": "invited = {\"Ada\", \"Ben\", \"Chen\", \"Dara\"}\nreplied = {\"Ben\", \"Dara\"}\nprint(\"Still to reply:\", sorted(invited - replied))\nprint(sorted(replied - invited))",
"out": "Still to reply: ['Ada', 'Chen']\n[]"
}
]
},
{
"h": "Symmetric difference: in exactly one",
"parts": [
{
"p": "`a ^ b` gives items that are in one set or the other, but not both."
},
{
"code": "monday = {\"Ada\", \"Ben\", \"Chen\"}\ntuesday = {\"Ben\", \"Chen\", \"Dara\"}\nprint(\"Came only one day:\", sorted(monday ^ tuesday))",
"out": "Came only one day: ['Ada', 'Dara']"
}
]
},
{
"h": "Subsets, supersets and disjoint sets",
"parts": [
{
"ul": [
"`a.issubset(b)` (or `a <= b`): is every item of a also in b?",
"`a.issuperset(b)` (or `a >= b`): does a contain every item of b?",
"`a.isdisjoint(b)`: do they share nothing at all?"
]
},
{
"code": "needed = {\"flour\", \"eggs\"}\ncupboard = {\"flour\", \"eggs\", \"sugar\", \"milk\"}\nprint(needed.issubset(cupboard))\nprint(cupboard.issuperset(needed))\nprint(needed <= cupboard)\nprint({\"salt\"}.isdisjoint(cupboard))",
"out": "True\nTrue\nTrue\nTrue"
}
]
},
{
"h": "Updating a set in place",
"parts": [
{
"p": "The operators above make new sets. Each has an in-place version that changes the set itself: `|=`, `&=`, `-=` and `^=`."
},
{
"code": "stock = {\"apples\", \"pears\", \"plums\"}\nstock -= {\"pears\"}            # sold out\nstock |= {\"cherries\"}         # new delivery\nprint(sorted(stock))",
"out": "['apples', 'cherries', 'plums']"
}
]
},
{
"h": "Frozen sets",
"parts": [
{
"p": "A `frozenset` is a set that cannot be changed, like a tuple is a list that cannot be changed. Sets can only contain unchangeable items, so a frozenset can go inside a set."
},
{
"code": "weekend = frozenset([\"Sat\", \"Sun\"])\nprint(\"Sun\" in weekend)\npairs = {frozenset([\"Ada\", \"Ben\"]), frozenset([\"Ben\", \"Ada\"])}\nprint(len(pairs))   # the same pair, so only one",
"out": "True\n1"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "Comparing the words used in two sentences."
},
{
"code": "a = \"the cat sat on the mat\".split()\nb = \"the dog sat on the log\".split()\nwa, wb = set(a), set(b)\nprint(\"Words in both:\", sorted(wa & wb))\nprint(\"Only in the first:\", sorted(wa - wb))\nprint(\"All words:\", sorted(wa | wb))\nprint(\"Different words:\", len(wa ^ wb))",
"out": "Words in both: ['on', 'sat', 'the']\nOnly in the first: ['cat', 'mat']\nAll words: ['cat', 'dog', 'log', 'mat', 'on', 'sat', 'the']\nDifferent words: 4"
}
]
}
],
"basics-8": [
{
"h": "What a dictionary is",
"parts": [
{
"p": "A dictionary stores pairs: a key and its value. You look things up by key, the way you look up a word in a real dictionary to find its meaning, or a name in your phone to find a number. Dictionaries use curly brackets with a colon between each key and value."
},
{
"code": "person = {\n    \"first_name\": \"Ada\",\n    \"last_name\": \"Lovelace\",\n    \"age\": 36,\n    \"skills\": [\"maths\", \"writing\"],\n    \"is_married\": True,\n}\nprint(person)\nprint(len(person))   # number of pairs\nprint(type(person))",
"out": "{'first_name': 'Ada', 'last_name': 'Lovelace', 'age': 36, 'skills': ['maths', 'writing'], 'is_married': True}\n5\n<class 'dict'>"
},
{
"p": "Keys are usually strings, but any unchangeable value works: numbers or tuples too. Each key appears only once. Values can be anything, including lists and other dictionaries."
}
]
},
{
"h": "Other ways to make one",
"parts": [
{
"code": "empty = {}\nprint(empty)\nscores = dict(ada=91, ben=78)\nprint(scores)\npairs = dict([(\"x\", 1), (\"y\", 2)])\nprint(pairs)\nzeros = dict.fromkeys([\"a\", \"b\", \"c\"], 0)\nprint(zeros)",
"out": "{}\n{'ada': 91, 'ben': 78}\n{'x': 1, 'y': 2}\n{'a': 0, 'b': 0, 'c': 0}"
}
]
},
{
"h": "Reading values",
"parts": [
{
"p": "Square brackets with a key give you its value. If the key is not there, that is an error, so when a key might be missing use `get()`, which returns `None` (or a default you choose) instead."
},
{
"code": "person = {\"name\": \"Ada\", \"age\": 36}\nprint(person[\"name\"])\nprint(person.get(\"age\"))\nprint(person.get(\"city\"))\nprint(person.get(\"city\", \"unknown\"))",
"out": "Ada\n36\nNone\nunknown"
},
{
"code": "person = {\"name\": \"Ada\", \"age\": 36}\nprint(person[\"city\"])",
"out": "KeyError: 'city'",
"err": true
}
]
},
{
"h": "Adding and changing values",
"parts": [
{
"p": "Assigning to a key adds it if it is new, or replaces its value if it already exists."
},
{
"code": "stock = {\"apples\": 5}\nstock[\"pears\"] = 3       # new key\nstock[\"apples\"] = 8      # change an existing key\nstock[\"apples\"] += 2     # use the old value\nprint(stock)",
"out": "{'apples': 10, 'pears': 3}"
},
{
"p": "`update()` adds or changes several pairs at once from another dictionary."
},
{
"code": "settings = {\"theme\": \"light\", \"font\": 14}\nsettings.update({\"theme\": \"dark\", \"language\": \"en\"})\nprint(settings)",
"out": "{'theme': 'dark', 'font': 14, 'language': 'en'}"
},
{
"p": "`setdefault()` adds a key only if it is missing, and gives you the value either way."
},
{
"code": "counts = {\"a\": 1}\ncounts.setdefault(\"a\", 0)\ncounts.setdefault(\"b\", 0)\nprint(counts)",
"out": "{'a': 1, 'b': 0}"
}
]
},
{
"h": "Checking for a key",
"parts": [
{
"p": "`in` checks the keys, not the values. Use `.values()` to search the values."
},
{
"code": "capitals = {\"France\": \"Paris\", \"Kenya\": \"Nairobi\"}\nprint(\"Kenya\" in capitals)\nprint(\"Nairobi\" in capitals)\nprint(\"Nairobi\" in capitals.values())",
"out": "True\nFalse\nTrue"
}
]
},
{
"h": "Removing pairs",
"parts": [
{
"ul": [
"`pop(key)` removes a key and gives back its value",
"`popitem()` removes and gives back the last pair added",
"`del d[key]` removes a key",
"`clear()` empties the dictionary"
]
},
{
"code": "basket = {\"bread\": 1, \"milk\": 2, \"eggs\": 12, \"jam\": 1}\nmilk = basket.pop(\"milk\")\nprint(milk, basket)\nprint(basket.popitem(), basket)\ndel basket[\"bread\"]\nprint(basket)\nbasket.clear()\nprint(basket)",
"out": "2 {'bread': 1, 'eggs': 12, 'jam': 1}\n('jam', 1) {'bread': 1, 'eggs': 12}\n{'eggs': 12}\n{}"
},
{
"p": "`pop()` can take a default so a missing key is not an error."
},
{
"code": "basket = {\"bread\": 1}\nprint(basket.pop(\"cheese\", 0))",
"out": "0"
}
]
},
{
"h": "Keys, values and items",
"parts": [
{
"ul": [
"`keys()` gives the keys",
"`values()` gives the values",
"`items()` gives (key, value) pairs as tuples"
]
},
{
"p": "Wrap them in `list()` if you want a real list."
},
{
"code": "prices = {\"tea\": 2.0, \"coffee\": 2.5, \"cake\": 3.25}\nprint(list(prices.keys()))\nprint(list(prices.values()))\nprint(list(prices.items()))\nprint(sum(prices.values()))",
"out": "['tea', 'coffee', 'cake']\n[2.0, 2.5, 3.25]\n[('tea', 2.0), ('coffee', 2.5), ('cake', 3.25)]\n7.75"
}
]
},
{
"h": "Looping over a dictionary",
"parts": [
{
"p": "Looping over a dictionary gives you its keys. Looping over `.items()` with two names gives you both key and value, which is what you want most of the time. Since Python 3.7, dictionaries remember the order in which keys were added."
},
{
"code": "prices = {\"tea\": 2.0, \"coffee\": 2.5, \"cake\": 3.25}\nfor item in prices:\n    print(item)\nfor item, price in prices.items():\n    print(f\"{item:<8} £{price:.2f}\")",
"out": "tea\ncoffee\ncake\ntea      £2.00\ncoffee   £2.50\ncake     £3.25"
}
]
},
{
"h": "Counting with a dictionary",
"parts": [
{
"p": "A dictionary is perfect for counting things: the key is the thing and the value is how many you have seen."
},
{
"code": "text = \"the cat and the hat and the bat\"\ncounts = {}\nfor word in text.split():\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)\nprint(\"Most common:\", max(counts, key=counts.get))",
"out": "{'the': 3, 'cat': 1, 'and': 2, 'hat': 1, 'bat': 1}\nMost common: the"
}
]
},
{
"h": "Grouping with a dictionary",
"parts": [
{
"p": "The value can be a list, so you can group items by some feature."
},
{
"code": "names = [\"Ada\", \"Ben\", \"Amina\", \"Chen\", \"Bea\"]\nby_letter = {}\nfor name in names:\n    by_letter.setdefault(name[0], []).append(name)\nprint(by_letter)",
"out": "{'A': ['Ada', 'Amina'], 'B': ['Ben', 'Bea'], 'C': ['Chen']}"
}
]
},
{
"h": "Dictionaries inside dictionaries",
"parts": [
{
"p": "Nested dictionaries are a natural way to store records, and they look just like JSON data from the web. Chain the square brackets to reach inside."
},
{
"code": "users = {\n    \"ada\": {\"age\": 36, \"city\": \"London\", \"langs\": [\"en\", \"fr\"]},\n    \"ben\": {\"age\": 28, \"city\": \"Accra\", \"langs\": [\"en\"]},\n}\nprint(users[\"ada\"][\"city\"])\nprint(users[\"ben\"][\"langs\"][0])\nusers[\"ben\"][\"age\"] += 1\nprint(users[\"ben\"])",
"out": "London\nen\n{'age': 29, 'city': 'Accra', 'langs': ['en']}"
}
]
},
{
"h": "Copying",
"parts": [
{
"p": "As with lists, `b = a` gives the same dictionary two names. Use `copy()` to get a separate one."
},
{
"code": "original = {\"x\": 1}\nsame = original\ncopy = original.copy()\nsame[\"x\"] = 99\nprint(original)\nprint(copy)",
"out": "{'x': 99}\n{'x': 1}"
}
]
},
{
"h": "Sorting a dictionary",
"parts": [
{
"p": "A dictionary itself is not sorted, but you can loop over it in sorted order. `sorted()` on a dictionary gives sorted keys, and a `key` lets you sort by value."
},
{
"code": "scores = {\"Ben\": 78, \"Ada\": 91, \"Chen\": 85}\nfor name in sorted(scores):\n    print(name, scores[name])\nprint(sorted(scores.items(), key=lambda pair: pair[1], reverse=True))",
"out": "Ada 91\nBen 78\nChen 85\n[('Ada', 91), ('Chen', 85), ('Ben', 78)]"
}
]
},
{
"h": "Merging dictionaries",
"parts": [
{
"p": "`{**a, **b}` unpacks both into a new dictionary. Where the same key is in both, the one from b wins."
},
{
"code": "defaults = {\"theme\": \"light\", \"font\": 14}\nmine = {\"theme\": \"dark\"}\nfinal = {**defaults, **mine}\nprint(final)",
"out": "{'theme': 'dark', 'font': 14}"
}
]
},
{
"h": "Dictionary comprehension",
"parts": [
{
"p": "Just like list comprehension (lesson 13), you can build a dictionary in one line."
},
{
"code": "squares = {n: n * n for n in range(1, 6)}\nprint(squares)\nprices = {\"tea\": 2.0, \"cake\": 3.25}\nwith_vat = {item: round(p * 1.2, 2) for item, p in prices.items()}\nprint(with_vat)",
"out": "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n{'tea': 2.4, 'cake': 3.9}"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A small phone book: add contacts, look one up safely, and print the list in order."
},
{
"code": "phone_book = {}\nphone_book[\"Ada\"] = \"0700 111 222\"\nphone_book[\"Ben\"] = \"0700 333 444\"\nphone_book[\"Chen\"] = \"0700 555 666\"\n\nname = \"Dara\"\nprint(phone_book.get(name, f\"No number for {name}\"))\nphone_book[\"Ben\"] = \"0711 999 000\"   # Ben changed his number\ndel phone_book[\"Chen\"]\nfor name, number in sorted(phone_book.items()):\n    print(f\"{name}: {number}\")",
"out": "No number for Dara\nAda: 0700 111 222\nBen: 0711 999 000"
}
]
}
],
"basics-9": [
{
"h": "Making decisions",
"parts": [
{
"p": "So far every line of code has run, top to bottom. Conditionals let a program choose: run this block only if something is true. It is how a cash machine decides whether you have enough money, or a game decides whether you have won."
}
]
},
{
"h": "if",
"parts": [
{
"p": "`if` is followed by a condition (anything that comes out True or False) and a colon. The lines underneath that are indented by 4 spaces form the block that runs only when the condition is True. The first line that is not indented is outside the `if` and always runs."
},
{
"code": "temperature = 31\nif temperature > 30:\n    print(\"It's hot today\")\n    print(\"Drink plenty of water\")\nprint(\"This line always runs\")",
"out": "It's hot today\nDrink plenty of water\nThis line always runs"
},
{
"code": "temperature = 18\nif temperature > 30:\n    print(\"It's hot today\")\nprint(\"This line always runs\")",
"out": "This line always runs"
},
{
"p": "Forgetting the colon or the indent is a very common error."
},
{
"code": "age = 20\nif age >= 18\n    print(\"adult\")",
"out": "SyntaxError: expected ':'",
"err": true
},
{
"code": "age = 20\nif age >= 18:\nprint(\"adult\")",
"out": "IndentationError: expected an indented block after 'if' statement on line 2",
"err": true
}
]
},
{
"h": "if and else",
"parts": [
{
"p": "`else` gives a second block that runs when the condition is False. Exactly one of the two blocks runs, never both."
},
{
"code": "age = 15\nif age >= 18:\n    print(\"You can vote\")\nelse:\n    print(\"You can vote in\", 18 - age, \"years\")",
"out": "You can vote in 3 years"
},
{
"code": "number = 7\nif number % 2 == 0:\n    print(number, \"is even\")\nelse:\n    print(number, \"is odd\")",
"out": "7 is odd"
}
]
},
{
"h": "if, elif and else",
"parts": [
{
"p": "`elif` (short for \"else if\") lets you test several conditions in turn. Python checks them from the top and runs the first block whose condition is True, then skips the rest. `else` at the end catches everything that did not match."
},
{
"code": "score = 72\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelif score >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\nprint(\"Grade:\", grade)",
"out": "Grade: C"
},
{
"p": "Order matters. Because Python stops at the first match, put the most specific tests first. Here the second version is wrong: 95 is also `>= 60`, so it never reaches the A."
},
{
"code": "score = 95\nif score >= 60:\n    print(\"D\")\nelif score >= 90:\n    print(\"A\")",
"out": "D"
}
]
},
{
"h": "Conditions with and, or, not",
"parts": [
{
"p": "You can build bigger conditions with the logical operators from lesson 3."
},
{
"code": "age = 25\nhas_licence = True\nif age >= 17 and has_licence:\n    print(\"You can drive\")\nelse:\n    print(\"You cannot drive yet\")",
"out": "You can drive"
},
{
"code": "day = \"Sunday\"\nif day == \"Saturday\" or day == \"Sunday\":\n    print(\"Weekend!\")\nif day in (\"Saturday\", \"Sunday\"):      # a neater way to write the same test\n    print(\"Still the weekend\")",
"out": "Weekend!\nStill the weekend"
},
{
"code": "logged_in = False\nif not logged_in:\n    print(\"Please sign in\")",
"out": "Please sign in"
}
]
},
{
"h": "Truthy and falsy values",
"parts": [
{
"p": "A condition does not have to be a comparison. Python treats some values as False: `0`, `0.0`, empty text `\"\"`, empty collections `[]`, `{}`, `()`, `set()`, and `None`. Everything else counts as True. This lets you write short, natural checks like \"if the basket has anything in it\"."
},
{
"code": "basket = []\nif basket:\n    print(\"You have\", len(basket), \"items\")\nelse:\n    print(\"Your basket is empty\")\n\nname = \"Ada\"\nif name:\n    print(\"Hello\", name)",
"out": "Your basket is empty\nHello Ada"
}
]
},
{
"h": "Nested conditions",
"parts": [
{
"p": "An `if` can sit inside another `if`. Each level is indented a further 4 spaces. Nesting is fine, but deep nesting gets hard to read, and often `and` or `elif` can flatten it."
},
{
"code": "age = 20\nhas_ticket = True\nif age >= 18:\n    if has_ticket:\n        print(\"Enjoy the concert\")\n    else:\n        print(\"You need a ticket\")\nelse:\n    print(\"Sorry, adults only\")",
"out": "Enjoy the concert"
},
{
"code": "age = 20\nhas_ticket = True\nif age < 18:\n    print(\"Sorry, adults only\")\nelif not has_ticket:\n    print(\"You need a ticket\")\nelse:\n    print(\"Enjoy the concert\")",
"out": "Enjoy the concert"
}
]
},
{
"h": "The one-line if (conditional expression)",
"parts": [
{
"p": "When you just want to pick one of two values, Python has a short form: `value_if_true if condition else value_if_false`."
},
{
"code": "age = 16\nstatus = \"adult\" if age >= 18 else \"minor\"\nprint(status)\n\nn = 4\nprint(\"even\" if n % 2 == 0 else \"odd\")\nprint(f\"You have {n} item{'s' if n != 1 else ''}\")",
"out": "minor\neven\nYou have 4 items"
}
]
},
{
"h": "Comparing text in conditions",
"parts": [
{
"p": "Text comparison is exact, so a user typing \"Yes\" will not match \"yes\". Clean the text first with `strip()` and `lower()`."
},
{
"code": "answer = \"  Yes \"\nif answer.strip().lower() == \"yes\":\n    print(\"Great, let's continue\")\nelse:\n    print(\"Okay, stopping\")",
"out": "Great, let's continue"
}
]
},
{
"h": "pass: an empty block",
"parts": [
{
"p": "Python does not allow an empty block. If you want to write the `if` now and fill it in later, use `pass`, which does nothing."
},
{
"code": "level = 3\nif level > 5:\n    pass   # TODO: add a bonus later\nelse:\n    print(\"Keep going\")",
"out": "Keep going"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A small ticket price calculator that uses several kinds of condition."
},
{
"code": "def ticket_price(age, is_student, day):\n    if age < 5:\n        return 0\n    price = 12\n    if age < 16 or age >= 65:\n        price = 7\n    elif is_student:\n        price = 9\n    if day == \"Tuesday\":\n        price -= 2\n    return price\n\nprint(ticket_price(3, False, \"Friday\"))\nprint(ticket_price(10, False, \"Friday\"))\nprint(ticket_price(20, True, \"Tuesday\"))\nprint(ticket_price(40, False, \"Saturday\"))",
"out": "0\n7\n7\n12"
},
{
"p": "Another everyday example: is a number positive, negative or zero, and is it small or large?"
},
{
"code": "for n in [-12, 0, 7, 450]:\n    if n > 0:\n        size = \"large\" if n > 100 else \"small\"\n        print(n, \"is positive and\", size)\n    elif n < 0:\n        print(n, \"is negative\")\n    else:\n        print(n, \"is zero\")",
"out": "-12 is negative\n0 is zero\n7 is positive and small\n450 is positive and large"
}
]
}
],
"basics-10": [
{
"h": "Why loops",
"parts": [
{
"p": "A loop repeats a block of code. Instead of writing `print` a hundred times, you write it once inside a loop. Python has two loops: `while` repeats as long as a condition stays True, and `for` repeats once for each item in a collection."
}
]
},
{
"h": "The while loop",
"parts": [
{
"p": "`while` checks its condition, runs the indented block, then checks again, over and over. It stops as soon as the condition is False. Something inside the loop must change, or the condition will never become False and the loop runs forever."
},
{
"code": "count = 1\nwhile count <= 5:\n    print(\"Count is\", count)\n    count += 1\nprint(\"Done\")",
"out": "Count is 1\nCount is 2\nCount is 3\nCount is 4\nCount is 5\nDone"
},
{
"p": "Everyday example: saving money until you reach a target."
},
{
"code": "savings = 0\nweeks = 0\nwhile savings < 100:\n    savings += 15\n    weeks += 1\nprint(f\"It took {weeks} weeks to save £{savings}\")",
"out": "It took 7 weeks to save £105"
},
{
"p": "`while` is the right choice when you do not know in advance how many times to repeat, like halving a number until it gets small."
},
{
"code": "n = 1000\nsteps = 0\nwhile n > 1:\n    n = n // 2\n    steps += 1\nprint(steps, \"halvings\")",
"out": "9 halvings"
}
]
},
{
"h": "while with else",
"parts": [
{
"p": "A loop can have an `else` block. It runs once when the condition becomes False, but not if the loop was stopped early with `break`."
},
{
"code": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nelse:\n    print(\"Lift off!\")",
"out": "3\n2\n1\nLift off!"
}
]
},
{
"h": "break and continue",
"parts": [
{
"ul": [
"`break` stops the loop immediately and jumps to the first line after it.",
"`continue` skips the rest of this round and goes straight to the next one."
]
},
{
"code": "n = 0\nwhile True:          # loops forever until break\n    n += 1\n    if n == 4:\n        break\n    print(n)\nprint(\"stopped at\", n)",
"out": "1\n2\n3\nstopped at 4"
},
{
"code": "n = 0\nwhile n < 6:\n    n += 1\n    if n % 2 == 0:\n        continue     # skip even numbers\n    print(n)",
"out": "1\n3\n5"
}
]
},
{
"h": "The for loop",
"parts": [
{
"p": "`for item in collection:` runs the block once for every item, with `item` holding the current one. It works on strings, lists, tuples, sets, dictionaries and ranges."
},
{
"code": "for letter in \"Python\":\n    print(letter)",
"out": "P\ny\nt\nh\no\nn"
},
{
"code": "for fruit in [\"apple\", \"banana\", \"cherry\"]:\n    print(\"I like\", fruit)",
"out": "I like apple\nI like banana\nI like cherry"
},
{
"code": "for x in (10, 20, 30):\n    print(x * 2)",
"out": "20\n40\n60"
},
{
"code": "ages = {\"Ada\": 36, \"Ben\": 28}\nfor name in ages:\n    print(name)\nfor name, age in ages.items():\n    print(name, \"is\", age)",
"out": "Ada\nBen\nAda is 36\nBen is 28"
}
]
},
{
"h": "range()",
"parts": [
{
"p": "`range()` gives a series of whole numbers, perfect for repeating something a set number of times."
},
{
"ul": [
"`range(stop)` counts from 0 up to but not including stop",
"`range(start, stop)` counts from start up to but not including stop",
"`range(start, stop, step)` jumps by step each time, and a negative step counts down"
]
},
{
"code": "print(list(range(5)))\nprint(list(range(2, 7)))\nprint(list(range(0, 20, 5)))\nprint(list(range(10, 0, -2)))",
"out": "[0, 1, 2, 3, 4]\n[2, 3, 4, 5, 6]\n[0, 5, 10, 15]\n[10, 8, 6, 4, 2]"
},
{
"code": "for i in range(3):\n    print(\"Hip hip hooray!\")",
"out": "Hip hip hooray!\nHip hip hooray!\nHip hip hooray!"
},
{
"code": "for n in range(1, 6):\n    print(n, \"squared is\", n ** 2)",
"out": "1 squared is 1\n2 squared is 4\n3 squared is 9\n4 squared is 16\n5 squared is 25"
}
]
},
{
"h": "Adding things up with a loop",
"parts": [
{
"p": "A very common pattern: start a total at 0 (or an empty list), and add to it on each round."
},
{
"code": "total = 0\nfor n in range(1, 101):\n    total += n\nprint(\"1 + 2 + ... + 100 =\", total)",
"out": "1 + 2 + ... + 100 = 5050"
},
{
"code": "prices = [2.50, 4.00, 1.25, 6.75]\ntotal = 0\nfor p in prices:\n    total += p\nprint(f\"Total: £{total:.2f}\")",
"out": "Total: £14.50"
},
{
"code": "words = [\"sun\", \"moon\", \"star\"]\nupper = []\nfor w in words:\n    upper.append(w.upper())\nprint(upper)",
"out": "['SUN', 'MOON', 'STAR']"
}
]
},
{
"h": "break and continue in for loops",
"parts": [
{
"p": "They work just like in `while`. `break` is great for stopping as soon as you find what you are looking for."
},
{
"code": "numbers = [4, 9, 15, 22, 7]\nfor n in numbers:\n    if n > 10:\n        print(\"First number over 10:\", n)\n        break",
"out": "First number over 10: 15"
},
{
"code": "for n in range(1, 11):\n    if n % 3 == 0:\n        continue\n    print(n, end=\" \")\nprint()",
"out": "1 2 4 5 7 8 10 "
}
]
},
{
"h": "for with else",
"parts": [
{
"p": "The `else` of a `for` runs only if the loop finished without hitting `break`. It is a neat way to say \"searched everything and did not find it\"."
},
{
"code": "guests = [\"Ada\", \"Ben\", \"Chen\"]\nlooking_for = \"Dara\"\nfor g in guests:\n    if g == looking_for:\n        print(\"Found\", g)\n        break\nelse:\n    print(looking_for, \"is not on the list\")",
"out": "Dara is not on the list"
}
]
},
{
"h": "Position and value together: enumerate()",
"parts": [
{
"p": "`enumerate()` gives you a counter alongside each item, so you do not need to manage one yourself."
},
{
"code": "podium = [\"Ada\", \"Ben\", \"Chen\"]\nfor position, name in enumerate(podium, start=1):\n    print(position, name)",
"out": "1 Ada\n2 Ben\n3 Chen"
}
]
},
{
"h": "Two lists side by side: zip()",
"parts": [
{
"p": "`zip()` walks through two (or more) collections together, pairing up the items."
},
{
"code": "names = [\"Ada\", \"Ben\", \"Chen\"]\nscores = [91, 78, 85]\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}\")",
"out": "Ada: 91\nBen: 78\nChen: 85"
}
]
},
{
"h": "Nested loops",
"parts": [
{
"p": "A loop inside a loop runs the inner loop completely for every round of the outer one. It is how you handle grids, tables and every pair of items."
},
{
"code": "for row in range(1, 4):\n    for col in range(1, 4):\n        print(row * col, end=\"\\t\")\n    print()",
"out": "1\t2\t3\t\n2\t4\t6\t\n3\t6\t9\t"
},
{
"code": "for size in [\"S\", \"M\"]:\n    for colour in [\"red\", \"blue\"]:\n        print(size, colour)",
"out": "S red\nS blue\nM red\nM blue"
},
{
"code": "for i in range(1, 5):\n    print(\"*\" * i)",
"out": "*\n**\n***\n****"
}
]
},
{
"h": "pass",
"parts": [
{
"p": "`pass` does nothing. It fills a block that Python needs but you have not written yet."
},
{
"code": "for n in range(3):\n    pass\nprint(\"loop finished, did nothing\")",
"out": "loop finished, did nothing"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A guessing game where the computer guesses a secret number by always trying the middle of what is left. This mixes `while`, conditions and `break`."
},
{
"code": "secret = 37\nlow, high = 1, 100\ntries = 0\nwhile low <= high:\n    guess = (low + high) // 2\n    tries += 1\n    if guess == secret:\n        print(f\"Got it: {guess} in {tries} tries\")\n        break\n    elif guess < secret:\n        print(guess, \"is too low\")\n        low = guess + 1\n    else:\n        print(guess, \"is too high\")\n        high = guess - 1",
"out": "50 is too high\n25 is too low\nGot it: 37 in 3 tries"
},
{
"p": "FizzBuzz, a classic: count from 1 to 15, but say Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for both."
},
{
"code": "for n in range(1, 16):\n    if n % 15 == 0:\n        print(\"FizzBuzz\")\n    elif n % 3 == 0:\n        print(\"Fizz\")\n    elif n % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(n)",
"out": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"
}
]
}
],
"basics-11": [
{
"h": "What a function is",
"parts": [
{
"p": "A function is a named, reusable piece of code. You write it once and use (call) it as many times as you like. Think of a recipe: you write the steps for pancakes once, and whenever you want pancakes you follow the recipe, perhaps with different amounts."
},
{
"p": "Functions keep code short, stop you repeating yourself, and let you give a name to an idea, so `calculate_tax(price)` explains itself."
}
]
},
{
"h": "Defining and calling a function",
"parts": [
{
"p": "`def` starts a function, followed by its name, brackets and a colon. The indented lines are its body. Defining a function does not run it; calling it by name with brackets does."
},
{
"code": "def say_hello():\n    print(\"Hello!\")\n    print(\"Welcome to Python\")\n\nsay_hello()\nsay_hello()",
"out": "Hello!\nWelcome to Python\nHello!\nWelcome to Python"
},
{
"p": "A function must be defined before the line that calls it."
},
{
"code": "greet()\ndef greet():\n    print(\"hi\")",
"out": "NameError: name 'greet' is not defined",
"err": true
}
]
},
{
"h": "Parameters: giving a function input",
"parts": [
{
"p": "Names inside the brackets are parameters. They act like variables that get their values when you call the function. The values you pass in are called arguments."
},
{
"code": "def greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Ada\")\ngreet(\"Ben\")",
"out": "Hello, Ada!\nHello, Ben!"
},
{
"code": "def describe_pet(animal, name):\n    print(f\"I have a {animal} called {name}.\")\n\ndescribe_pet(\"dog\", \"Rex\")\ndescribe_pet(\"cat\", \"Mittens\")",
"out": "I have a dog called Rex.\nI have a cat called Mittens."
},
{
"p": "Passing the wrong number of arguments is an error."
},
{
"code": "def describe_pet(animal, name):\n    print(f\"I have a {animal} called {name}.\")\n\ndescribe_pet(\"dog\")",
"out": "TypeError: describe_pet() missing 1 required positional argument: 'name'",
"err": true
}
]
},
{
"h": "Returning a value",
"parts": [
{
"p": "`return` hands a value back to whoever called the function, so they can store or use it. `print` only shows something on the screen; `return` gives you something you can keep working with. This difference is one of the most important ideas in programming."
},
{
"code": "def add(a, b):\n    return a + b\n\ntotal = add(3, 4)\nprint(total)\nprint(add(10, 20) * 2)\nprint(add(add(1, 2), add(3, 4)))",
"out": "7\n60\n10"
},
{
"code": "def shout(text):\n    print(text.upper())      # shows it, but returns nothing\n\nresult = shout(\"hi\")\nprint(result)                # None: there was nothing to keep",
"out": "HI\nNone"
},
{
"p": "`return` also ends the function straight away. Any code after it does not run."
},
{
"code": "def check_age(age):\n    if age < 0:\n        return \"That is not a real age\"\n    if age < 18:\n        return \"Minor\"\n    return \"Adult\"\n\nprint(check_age(-3))\nprint(check_age(12))\nprint(check_age(40))",
"out": "That is not a real age\nMinor\nAdult"
}
]
},
{
"h": "Returning several values",
"parts": [
{
"p": "Return several values separated by commas, and they come back as a tuple that you can unpack."
},
{
"code": "def stats(numbers):\n    return min(numbers), max(numbers), sum(numbers) / len(numbers)\n\nlow, high, average = stats([4, 8, 15, 16, 23, 42])\nprint(low, high, average)",
"out": "4 42 18.0"
}
]
},
{
"h": "Keyword arguments",
"parts": [
{
"p": "You can name the arguments when you call a function. Then the order no longer matters, and the call is easier to read."
},
{
"code": "def describe_pet(animal, name):\n    print(f\"I have a {animal} called {name}.\")\n\ndescribe_pet(name=\"Polly\", animal=\"parrot\")\ndescribe_pet(\"hamster\", name=\"Nibbles\")",
"out": "I have a parrot called Polly.\nI have a hamster called Nibbles."
}
]
},
{
"h": "Default values",
"parts": [
{
"p": "A parameter can have a default value, used when the caller leaves it out. Parameters with defaults must come after those without."
},
{
"code": "def greet(name, greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"\n\nprint(greet(\"Ada\"))\nprint(greet(\"Ben\", \"Good morning\"))\nprint(greet(\"Chen\", greeting=\"Hi\"))",
"out": "Hello, Ada!\nGood morning, Ben!\nHi, Chen!"
},
{
"code": "def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(5))\nprint(power(2, 10))",
"out": "25\n1024"
}
]
},
{
"h": "Any number of arguments: *args",
"parts": [
{
"p": "A parameter with one star collects any number of positional arguments into a tuple. `print()` itself works like this, which is why it takes as many values as you give it."
},
{
"code": "def total(*numbers):\n    print(\"Got\", numbers)\n    return sum(numbers)\n\nprint(total(1, 2))\nprint(total(5, 10, 15, 20))\nprint(total())",
"out": "Got (1, 2)\n3\nGot (5, 10, 15, 20)\n50\nGot ()\n0"
},
{
"code": "def make_sentence(first_word, *more_words):\n    return first_word.capitalize() + \" \" + \" \".join(more_words) + \".\"\n\nprint(make_sentence(\"python\", \"is\", \"really\", \"fun\"))",
"out": "Python is really fun."
}
]
},
{
"h": "Any number of named arguments: **kwargs",
"parts": [
{
"p": "Two stars collect any named arguments into a dictionary."
},
{
"code": "def profile(name, **details):\n    print(\"Name:\", name)\n    for key, value in details.items():\n        print(f\"  {key}: {value}\")\n\nprofile(\"Ada\", age=36, city=\"London\", job=\"mathematician\")",
"out": "Name: Ada\n  age: 36\n  city: London\n  job: mathematician"
}
]
},
{
"h": "Unpacking when you call",
"parts": [
{
"p": "The stars also work the other way round: `*` spreads a list into separate arguments, and `**` spreads a dictionary into named arguments."
},
{
"code": "def add_three(a, b, c):\n    return a + b + c\n\nnums = [1, 2, 3]\nprint(add_three(*nums))\ninfo = {\"a\": 10, \"b\": 20, \"c\": 30}\nprint(add_three(**info))",
"out": "6\n60"
}
]
},
{
"h": "Variables inside functions (scope)",
"parts": [
{
"p": "Variables made inside a function exist only inside it. They are local. Outside the function they do not exist, and two functions can each have their own variable with the same name without any clash."
},
{
"code": "def make_secret():\n    secret = 42\n    return secret\n\nmake_secret()\nprint(secret)",
"out": "NameError: name 'secret' is not defined",
"err": true
},
{
"code": "counter = 10           # a global variable\n\ndef show():\n    print(\"Inside:\", counter)   # a function can read a global\n\nshow()\nprint(\"Outside:\", counter)",
"out": "Inside: 10\nOutside: 10"
},
{
"p": "Rather than changing global variables from inside a function, pass values in and return the result. That keeps each function easy to understand and test."
},
{
"code": "def add_point(score):\n    return score + 1\n\nscore = 0\nscore = add_point(score)\nscore = add_point(score)\nprint(score)",
"out": "2"
}
]
},
{
"h": "Docstrings",
"parts": [
{
"p": "A string straight after the `def` line describes what the function does. It is called a docstring, and `help()` shows it."
},
{
"code": "def area_of_circle(radius):\n    \"\"\"Return the area of a circle with the given radius.\"\"\"\n    return 3.14159 * radius ** 2\n\nprint(area_of_circle(2))\nprint(area_of_circle.__doc__)",
"out": "12.56636\nReturn the area of a circle with the given radius."
}
]
},
{
"h": "Functions are values too",
"parts": [
{
"p": "A function can be stored in a variable, put in a list, or passed into another function. This is the idea behind lesson 14, higher order functions."
},
{
"code": "def double(x):\n    return x * 2\n\ndef triple(x):\n    return x * 3\n\ndef apply(func, value):\n    return func(value)\n\nprint(apply(double, 5))\nprint(apply(triple, 5))\nfor f in [double, triple]:\n    print(f.__name__, f(10))",
"out": "10\n15\ndouble 20\ntriple 30"
}
]
},
{
"h": "Lambda: tiny one-line functions",
"parts": [
{
"p": "`lambda` makes a small function without a name, in one line: `lambda inputs: result`. It is mostly used when passing a quick function to something like `sorted()`."
},
{
"code": "square = lambda x: x * x\nprint(square(6))\nadd = lambda a, b: a + b\nprint(add(2, 3))\npeople = [(\"Ada\", 36), (\"Ben\", 28), (\"Chen\", 41)]\nprint(sorted(people, key=lambda p: p[1]))",
"out": "36\n5\n[('Ben', 28), ('Ada', 36), ('Chen', 41)]"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A set of small functions that work together, each doing one job."
},
{
"code": "def c_to_f(celsius):\n    \"\"\"Convert Celsius to Fahrenheit.\"\"\"\n    return celsius * 9 / 5 + 32\n\ndef describe(celsius):\n    if celsius < 5:\n        return \"cold\"\n    if celsius < 20:\n        return \"mild\"\n    return \"warm\"\n\ndef report(city, celsius):\n    return f\"{city}: {celsius}°C ({c_to_f(celsius):.0f}°F), {describe(celsius)}\"\n\nfor city, temp in [(\"Oslo\", -2), (\"London\", 12), (\"Lagos\", 31)]:\n    print(report(city, temp))",
"out": "Oslo: -2°C (28°F), cold\nLondon: 12°C (54°F), mild\nLagos: 31°C (88°F), warm"
},
{
"p": "A recursive function calls itself on a smaller problem until it reaches a simple case. Factorial is the classic example: 5! = 5 × 4 × 3 × 2 × 1."
},
{
"code": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\nprint(factorial(10))",
"out": "120\n3628800"
}
]
}
],
"basics-12": [
{
"h": "What a module is",
"parts": [
{
"p": "A module is a file of Python code (functions, variables, classes) that you can use in other programs. Python comes with a big standard library of modules for maths, randomness, dates, files and much more, so you rarely have to build these tools yourself. It is like a toolbox: you do not make a hammer, you take one out when you need it."
}
]
},
{
"h": "import",
"parts": [
{
"p": "`import name` loads a module. You then reach the tools inside with a dot: `module.tool`."
},
{
"code": "import math\nprint(math.pi)\nprint(math.sqrt(81))\nprint(math.floor(4.7))\nprint(math.ceil(4.2))",
"out": "3.141592653589793\n9.0\n4\n5"
}
]
},
{
"h": "Importing just what you need",
"parts": [
{
"p": "`from module import name` brings in specific tools, so you can use them without the module name in front. You can import several at once."
},
{
"code": "from math import sqrt, pi\nprint(sqrt(16))\nprint(pi * 2)",
"out": "4.0\n6.283185307179586"
},
{
"p": "`import *` brings in everything. It is quick, but it makes it hard to tell where each name came from, so it is best avoided in real programs."
},
{
"code": "from math import *\nprint(floor(9.99), factorial(5))",
"out": "9 120"
}
]
},
{
"h": "Renaming with as",
"parts": [
{
"p": "`as` gives a module or function a shorter or clearer name. Some short names are so common that everyone uses them, like `import numpy as np`."
},
{
"code": "import statistics as st\nprint(st.mean([2, 4, 6, 8]))\n\nfrom math import factorial as fact\nprint(fact(6))",
"out": "5\n720"
}
]
},
{
"h": "The math module",
"parts": [
{
"p": "`math` has functions and constants for maths beyond the basic operators."
},
{
"code": "import math\nprint(math.sqrt(2))\nprint(math.pow(2, 8))        # always gives a float\nprint(math.floor(-2.5), math.ceil(-2.5))\nprint(math.factorial(6))\nprint(math.gcd(24, 36))      # greatest common divisor\nprint(math.isclose(0.1 + 0.2, 0.3))\nprint(round(math.sin(math.pi / 2), 3))\nprint(round(math.log10(1000)))\nprint(math.hypot(3, 4))      # length of the long side of a right triangle\nprint(math.inf > 10 ** 100)",
"out": "1.4142135623730951\n256.0\n-3 -2\n720\n12\nTrue\n1.0\n3\n5.0\nTrue"
}
]
},
{
"h": "The random module",
"parts": [
{
"p": "`random` makes random choices: dice, shuffling, picking winners. Each run gives different results. `random.seed()` makes the results repeatable, which is handy for testing; the outputs below use seed 1."
},
{
"code": "import random\nrandom.seed(1)\nprint(random.randint(1, 6))           # a whole number from 1 to 6, both included\nprint(random.random())                # a float from 0 up to (not including) 1\nprint(random.choice([\"rock\", \"paper\", \"scissors\"]))\nprint(random.uniform(1.5, 2.5))\ncards = [\"A\", \"K\", \"Q\", \"J\"]\nrandom.shuffle(cards)                 # shuffles the list itself\nprint(cards)\nprint(random.sample(range(1, 50), 6)) # 6 different numbers",
"out": "2\n0.5692038748222122\nrock\n1.7550690257394217\n['A', 'Q', 'K', 'J']\n[42, 25, 14, 7, 32, 2]"
},
{
"code": "import random\nrandom.seed(7)\nrolls = [random.randint(1, 6) for _ in range(10)]\nprint(rolls)\nprint(\"Sixes rolled:\", rolls.count(6))",
"out": "[3, 2, 4, 6, 1, 1, 5, 1, 3, 5]\nSixes rolled: 1"
}
]
},
{
"h": "The statistics module",
"parts": [
{
"p": "`statistics` works out averages and spread for a list of numbers."
},
{
"code": "import statistics\nages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25]\nprint(\"mean:\", statistics.mean(ages))\nprint(\"median:\", statistics.median(ages))\nprint(\"mode:\", statistics.mode(ages))\nprint(\"range:\", max(ages) - min(ages))\nprint(\"stdev:\", round(statistics.stdev(ages), 2))",
"out": "mean: 29.125\nmedian: 27.0\nmode: 27\nrange: 13\nstdev: 3.83"
}
]
},
{
"h": "The string module",
"parts": [
{
"p": "`string` holds handy ready-made groups of characters."
},
{
"code": "import string\nprint(string.ascii_lowercase)\nprint(string.ascii_uppercase)\nprint(string.digits)\nprint(string.punctuation)",
"out": "abcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n0123456789\n!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
},
{
"p": "Together with `random` they can make a random password."
},
{
"code": "import random, string\nrandom.seed(3)\nchars = string.ascii_letters + string.digits\npassword = \"\".join(random.choice(chars) for _ in range(10))\nprint(password)",
"out": "pLIix6MEOL"
}
]
},
{
"h": "The os and sys modules",
"parts": [
{
"p": "`os` talks to the operating system: folders and files. `sys` tells you about Python itself. (In this app Python runs inside your browser, so the folder is a small pretend one.)"
},
{
"code": "import os, sys\nhere = os.getcwd()                # the current folder, as text\nprint(type(here))\nprint(sys.version_info.major)     # the main Python version number\nos.makedirs(\"demo_folder\", exist_ok=True)\nprint(\"demo_folder\" in os.listdir(\".\"))\nprint(os.path.join(\"photos\", \"2026\", \"beach.jpg\"))",
"out": "<class 'str'>\n3\nTrue\nphotos/2026/beach.jpg"
}
]
},
{
"h": "The collections module",
"parts": [
{
"p": "`collections` has upgraded containers. `Counter` counts things for you, and `defaultdict` gives missing keys a starting value."
},
{
"code": "from collections import Counter, defaultdict\nvotes = [\"red\", \"blue\", \"red\", \"green\", \"red\", \"blue\"]\ntally = Counter(votes)\nprint(tally)\nprint(tally.most_common(1))\n\ngroups = defaultdict(list)\nfor word in [\"apple\", \"avocado\", \"banana\", \"blueberry\", \"cherry\"]:\n    groups[word[0]].append(word)\nprint(dict(groups))",
"out": "Counter({'red': 3, 'blue': 2, 'green': 1})\n[('red', 3)]\n{'a': ['apple', 'avocado'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}"
}
]
},
{
"h": "Making your own module",
"parts": [
{
"p": "Any `.py` file is a module. Save functions in `helpers.py` and another file in the same folder can `import helpers`. This example writes a tiny module to a file and then imports it, so you can see it work."
},
{
"code": "code = '''\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nPI = 3.14159\n'''\nwith open(\"helpers.py\", \"w\") as f:\n    f.write(code)\n\nimport sys\nsys.path.insert(0, \".\")\nimport helpers\nprint(helpers.greet(\"Ada\"))\nprint(helpers.PI)",
"out": "Hello, Ada!\n3.14159"
},
{
"p": "On your own computer you would just create the file in your editor:"
},
{
"code": "# helpers.py\ndef greet(name):\n    return f\"Hello, {name}!\"\n\n# main.py (in the same folder)\nimport helpers\nprint(helpers.greet(\"Ada\"))"
}
]
},
{
"h": "if __name__ == \"__main__\"",
"parts": [
{
"p": "When a file is run directly, Python sets its `__name__` to `\"__main__\"`. When it is imported, `__name__` is the module's name. Putting test or start-up code under this check means it runs when you run the file, but not when someone imports it."
},
{
"code": "def main():\n    print(\"Running the program\")\n\nprint(\"My name is\", __name__)\nif __name__ == \"__main__\":\n    main()",
"out": "My name is __main__\nRunning the program"
}
]
},
{
"h": "Finding out what a module has",
"parts": [
{
"p": "`dir()` lists the names inside a module, and `help()` explains them."
},
{
"code": "import random\nnames = [n for n in dir(random) if not n.startswith(\"_\")]\nprint(names[:12])",
"out": "['BPF', 'LOG4', 'NV_MAGICCONST', 'RECIP_BPF', 'Random', 'SG_MAGICCONST', 'SystemRandom', 'TWOPI', 'betavariate', 'binomialvariate', 'choice', 'choices']"
}
]
},
{
"h": "Installing more modules",
"parts": [
{
"p": "Beyond the standard library there are hundreds of thousands of packages on PyPI (the Python Package Index), installed on your computer with `pip`. Examples are `requests` for the web and `pandas` for data. You type this in a terminal, not in Python:"
},
{
"code": "pip install requests",
"text": true
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A dice game using `random`, `statistics` and `collections` together."
},
{
"code": "import random\nimport statistics\nfrom collections import Counter\n\nrandom.seed(42)\nrolls = [random.randint(1, 6) + random.randint(1, 6) for _ in range(1000)]\ncounts = Counter(rolls)\nprint(\"Average total:\", round(statistics.mean(rolls), 2))\nprint(\"Most common totals:\", counts.most_common(3))\nfor total in range(2, 13):\n    print(f\"{total:>2} {'#' * (counts[total] // 10)}\")",
"out": "Average total: 7.09\nMost common totals: [(7, 160), (8, 136), (6, 124)]\n 2 ###\n 3 #####\n 4 #######\n 5 ############\n 6 ############\n 7 ################\n 8 #############\n 9 ###########\n10 #########\n11 #####\n12 ###"
}
]
}
],
"basics-13": [
{
"h": "What a list comprehension is",
"parts": [
{
"p": "A list comprehension builds a new list in one line by describing what each item should be. It is a short way of writing the \"start with an empty list, loop, append\" pattern."
},
{
"p": "Here is the long way and the comprehension way side by side. Both make the same list."
},
{
"code": "squares = []\nfor n in range(1, 6):\n    squares.append(n * n)\nprint(squares)\n\nsquares = [n * n for n in range(1, 6)]\nprint(squares)",
"out": "[1, 4, 9, 16, 25]\n[1, 4, 9, 16, 25]"
},
{
"p": "Read it from the middle out: \"for each n in range(1, 6), give me n * n\"."
}
]
},
{
"h": "The basic shape",
"parts": [
{
"p": "`[expression for item in collection]`. The expression can be anything: maths, a method call, a function, even a tuple."
},
{
"code": "words = [\"sun\", \"moon\", \"star\"]\nprint([w.upper() for w in words])\nprint([len(w) for w in words])\nprint([w[0] for w in words])\nprint([(w, len(w)) for w in words])\nprint([c for c in \"hello\"])",
"out": "['SUN', 'MOON', 'STAR']\n[3, 4, 4]\n['s', 'm', 's']\n[('sun', 3), ('moon', 4), ('star', 4)]\n['h', 'e', 'l', 'l', 'o']"
},
{
"code": "prices = [2.0, 4.5, 10.0]\nwith_tax = [round(p * 1.2, 2) for p in prices]\nprint(with_tax)",
"out": "[2.4, 5.4, 12.0]"
},
{
"code": "text = \"3 14 15 92 65\"\nnumbers = [int(x) for x in text.split()]\nprint(numbers, sum(numbers))",
"out": "[3, 14, 15, 92, 65] 189"
}
]
},
{
"h": "Filtering with if",
"parts": [
{
"p": "Add `if condition` at the end to keep only some items."
},
{
"code": "nums = range(1, 21)\nprint([n for n in nums if n % 2 == 0])\nprint([n for n in nums if n % 3 == 0])\nprint([n * n for n in nums if n > 15])",
"out": "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n[3, 6, 9, 12, 15, 18]\n[256, 289, 324, 361, 400]"
},
{
"code": "names = [\"Ada\", \"ben\", \"Chen\", \"dara\", \"Eve\"]\nprint([n for n in names if n[0].isupper()])\nprint([n.title() for n in names if len(n) > 3])",
"out": "['Ada', 'Chen', 'Eve']\n['Chen', 'Dara']"
},
{
"code": "temps = [-3, 4, 12, -1, 20, 0]\nprint([t for t in temps if t < 0])",
"out": "[-3, -1]"
}
]
},
{
"h": "Choosing between two values with if and else",
"parts": [
{
"p": "To transform every item but in two different ways, put a one-line if/else in the expression part, before the `for`. Note the position: a filter `if` goes at the end; an if/else that picks a value goes at the front."
},
{
"code": "nums = [1, 2, 3, 4, 5, 6]\nprint([\"even\" if n % 2 == 0 else \"odd\" for n in nums])\nprint([n if n > 0 else 0 for n in [-2, 5, -7, 3]])",
"out": "['odd', 'even', 'odd', 'even', 'odd', 'even']\n[0, 5, 0, 3]"
},
{
"code": "scores = [45, 82, 67, 91, 38]\nprint([\"pass\" if s >= 50 else \"fail\" for s in scores])",
"out": "['fail', 'pass', 'pass', 'pass', 'fail']"
}
]
},
{
"h": "Nested loops in a comprehension",
"parts": [
{
"p": "You can have more than one `for`. They run in the same order as nested loops written out in full: the first `for` is the outer loop."
},
{
"code": "pairs = [(x, y) for x in [1, 2, 3] for y in [\"a\", \"b\"]]\nprint(pairs)\n\npairs = []\nfor x in [1, 2, 3]:\n    for y in [\"a\", \"b\"]:\n        pairs.append((x, y))\nprint(pairs)",
"out": "[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b'), (3, 'a'), (3, 'b')]\n[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b'), (3, 'a'), (3, 'b')]"
},
{
"p": "Flattening a list of lists into one list is a common use."
},
{
"code": "grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflat = [n for row in grid for n in row]\nprint(flat)",
"out": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
},
{
"p": "A comprehension can also build a list of lists, like a multiplication table."
},
{
"code": "table = [[r * c for c in range(1, 5)] for r in range(1, 5)]\nfor row in table:\n    print(row)",
"out": "[1, 2, 3, 4]\n[2, 4, 6, 8]\n[3, 6, 9, 12]\n[4, 8, 12, 16]"
}
]
},
{
"h": "Dictionary and set comprehensions",
"parts": [
{
"p": "The same idea works for dictionaries (with `key: value` in curly brackets) and sets (curly brackets without a colon)."
},
{
"code": "words = [\"apple\", \"kiwi\", \"banana\"]\nprint({w: len(w) for w in words})\nprint({n: n ** 2 for n in range(1, 6)})\nprint({len(w) for w in words})",
"out": "{'apple': 5, 'kiwi': 4, 'banana': 6}\n{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n{4, 5, 6}"
},
{
"code": "prices = {\"tea\": 2.0, \"cake\": 3.5, \"soup\": 4.0}\ncheap = {k: v for k, v in prices.items() if v < 4}\nprint(cheap)\nswapped = {v: k for k, v in prices.items()}\nprint(swapped)",
"out": "{'tea': 2.0, 'cake': 3.5}\n{2.0: 'tea', 3.5: 'cake', 4.0: 'soup'}"
}
]
},
{
"h": "Generator expressions",
"parts": [
{
"p": "With round brackets instead of square ones you get a generator. It makes the values one at a time instead of building the whole list in memory, which is ideal when you only need to add them up or check them once."
},
{
"code": "print(sum(n * n for n in range(1, 101)))\nprint(max(len(w) for w in [\"a\", \"abc\", \"ab\"]))\nprint(any(n > 10 for n in [3, 7, 12]))\nprint(all(n > 0 for n in [3, 7, 12]))",
"out": "338350\n3\nTrue\nTrue"
}
]
},
{
"h": "When not to use one",
"parts": [
{
"p": "Comprehensions are for building collections. If a line gets long or needs several conditions, a normal loop is clearer. Readable beats short."
},
{
"code": "# Clear as a comprehension\nevens = [n for n in range(10) if n % 2 == 0]\nprint(evens)\n\n# Clearer as a loop: several steps for each item\nreport = []\nfor n in range(1, 6):\n    label = \"big\" if n > 3 else \"small\"\n    report.append(f\"{n} is {label}\")\nprint(report)",
"out": "[0, 2, 4, 6, 8]\n['1 is small', '2 is small', '3 is small', '4 is big', '5 is big']"
}
]
},
{
"h": "Lambda functions",
"parts": [
{
"p": "A lambda is a tiny function written in one line: `lambda inputs: result`. It has no name and no `return`; the result is whatever the expression gives. These two do the same thing:"
},
{
"code": "def add(a, b):\n    return a + b\nprint(add(2, 3))\n\nadd = lambda a, b: a + b\nprint(add(2, 3))",
"out": "5\n5"
},
{
"code": "square = lambda x: x ** 2\nis_even = lambda n: n % 2 == 0\nfull_name = lambda first, last: f\"{first.title()} {last.title()}\"\nprint(square(7))\nprint(is_even(10), is_even(7))\nprint(full_name(\"ada\", \"lovelace\"))",
"out": "49\nTrue False\nAda Lovelace"
}
]
},
{
"h": "Where lambdas shine",
"parts": [
{
"p": "Lambdas are most useful as a quick function passed into another one, especially as the `key` for sorting, `min()` or `max()`."
},
{
"code": "people = [(\"Ada\", 36), (\"Ben\", 28), (\"Chen\", 41)]\nprint(sorted(people, key=lambda p: p[1]))\nprint(max(people, key=lambda p: p[1]))\nwords = [\"banana\", \"Kiwi\", \"apple\", \"Cherry\"]\nprint(sorted(words, key=lambda w: w.lower()))\nprint(sorted(words, key=lambda w: len(w)))",
"out": "[('Ben', 28), ('Ada', 36), ('Chen', 41)]\n('Chen', 41)\n['apple', 'banana', 'Cherry', 'Kiwi']\n['Kiwi', 'apple', 'banana', 'Cherry']"
}
]
},
{
"h": "A lambda inside a function",
"parts": [
{
"p": "A function can build and return a lambda. Here `power(2)` makes a \"square\" function and `power(3)` makes a \"cube\" function."
},
{
"code": "def power(exponent):\n    return lambda base: base ** exponent\n\nsquare = power(2)\ncube = power(3)\nprint(square(5))\nprint(cube(5))",
"out": "25\n125"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "Processing a small list of products with comprehensions and lambdas."
},
{
"code": "products = [\n    {\"name\": \"pen\", \"price\": 1.20, \"stock\": 30},\n    {\"name\": \"notebook\", \"price\": 3.50, \"stock\": 0},\n    {\"name\": \"bag\", \"price\": 25.00, \"stock\": 4},\n    {\"name\": \"ruler\", \"price\": 0.90, \"stock\": 12},\n]\nin_stock = [p[\"name\"] for p in products if p[\"stock\"] > 0]\nprint(\"In stock:\", in_stock)\nvalue = sum(p[\"price\"] * p[\"stock\"] for p in products)\nprint(f\"Stock value: £{value:.2f}\")\nlabels = [f\"{p['name']}: {'cheap' if p['price'] < 2 else 'pricey'}\" for p in products]\nprint(labels)\nprint(\"Most expensive:\", max(products, key=lambda p: p[\"price\"])[\"name\"])",
"out": "In stock: ['pen', 'bag', 'ruler']\nStock value: £146.80\n['pen: cheap', 'notebook: pricey', 'bag: pricey', 'ruler: cheap']\nMost expensive: bag"
}
]
}
],
"basics-14": [
{
"h": "What a higher order function is",
"parts": [
{
"p": "In Python a function is a value, just like a number or a string. You can store it in a variable, pass it to another function, and return it from a function. A higher order function is one that takes a function as input, gives one back, or both."
},
{
"code": "def shout(text):\n    return text.upper() + \"!\"\n\nyell = shout          # no brackets: the function itself, not a call\nprint(yell(\"hello\"))\nprint(shout.__name__) # the function knows its own name",
"out": "HELLO!\nshout"
}
]
},
{
"h": "Passing a function as an argument",
"parts": [
{
"p": "This lets you write one general function and plug in different behaviour."
},
{
"code": "def apply_to_all(func, items):\n    return [func(x) for x in items]\n\ndef double(x):\n    return x * 2\n\ndef negate(x):\n    return -x\n\nnums = [1, 2, 3]\nprint(apply_to_all(double, nums))\nprint(apply_to_all(negate, nums))\nprint(apply_to_all(str, nums))\nprint(apply_to_all(lambda x: x ** 3, nums))",
"out": "[2, 4, 6]\n[-1, -2, -3]\n['1', '2', '3']\n[1, 8, 27]"
},
{
"code": "def calculate(func, a, b):\n    return func(a, b)\n\nprint(calculate(lambda a, b: a + b, 6, 3))\nprint(calculate(lambda a, b: a * b, 6, 3))\nprint(calculate(max, 6, 3))",
"out": "9\n18\n6"
}
]
},
{
"h": "Returning a function",
"parts": [
{
"p": "A function can build a new function and hand it back. The inner function is made fresh each time."
},
{
"code": "def make_multiplier(n):\n    def multiply(x):\n        return x * n\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\nprint(double(10))\nprint(triple(10))",
"out": "20\n30"
},
{
"code": "def greeter(greeting):\n    def greet(name):\n        return f\"{greeting}, {name}!\"\n    return greet\n\nmorning = greeter(\"Good morning\")\nevening = greeter(\"Good evening\")\nprint(morning(\"Ada\"))\nprint(evening(\"Ben\"))",
"out": "Good morning, Ada!\nGood evening, Ben!"
}
]
},
{
"h": "Closures",
"parts": [
{
"p": "In the examples above, the inner function remembers the values from the outer function (`n`, `greeting`) even after the outer function has finished. That remembered environment is called a closure. Closures can even keep state between calls, using `nonlocal` to change the remembered value."
},
{
"code": "def make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\n\nclicks = make_counter()\nprint(clicks())\nprint(clicks())\nprint(clicks())\nother = make_counter()   # a separate counter with its own count\nprint(other())",
"out": "1\n2\n3\n1"
}
]
},
{
"h": "Decorators",
"parts": [
{
"p": "A decorator is a function that takes a function and returns an improved version of it, adding something before or after it runs, without changing its code. Writing `@decorator` above a `def` applies it."
},
{
"code": "def loud(func):\n    def wrapper():\n        result = func()\n        return result.upper()\n    return wrapper\n\n@loud\ndef greet():\n    return \"hello there\"\n\nprint(greet())",
"out": "HELLO THERE"
},
{
"p": "The `@loud` line is just a shortcut for `greet = loud(greet)`."
},
{
"code": "def loud(func):\n    def wrapper():\n        return func().upper()\n    return wrapper\n\ndef greet():\n    return \"hello there\"\n\ngreet = loud(greet)\nprint(greet())",
"out": "HELLO THERE"
}
]
},
{
"h": "Decorators for functions with arguments",
"parts": [
{
"p": "To decorate any function, whatever its arguments, have the wrapper accept `*args` and `**kwargs` and pass them through."
},
{
"code": "def announce(func):\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__} with {args} {kwargs}\")\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} returned {result}\")\n        return result\n    return wrapper\n\n@announce\ndef add(a, b):\n    return a + b\n\n@announce\ndef greet(name, punctuation=\".\"):\n    return \"Hello \" + name + punctuation\n\nadd(2, 3)\ngreet(\"Ada\", punctuation=\"!\")",
"out": "Calling add with (2, 3) {}\nadd returned 5\nCalling greet with ('Ada',) {'punctuation': '!'}\ngreet returned Hello Ada!"
},
{
"p": "Here is a useful real-world decorator: timing how long a function takes."
},
{
"code": "import time\n\ndef timed(func):\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        took = time.perf_counter() - start\n        print(f\"{func.__name__} finished in under {took + 0.01:.2f} seconds\")\n        return result\n    return wrapper\n\n@timed\ndef add_up(n):\n    return sum(range(n))\n\nprint(add_up(100000))",
"out": "add_up finished in under 0.01 seconds\n4999950000"
}
]
},
{
"h": "Stacking decorators",
"parts": [
{
"p": "Several decorators can be applied to one function. The one closest to the `def` is applied first."
},
{
"code": "def exclaim(func):\n    def wrapper():\n        return func() + \"!\"\n    return wrapper\n\ndef upper(func):\n    def wrapper():\n        return func().upper()\n    return wrapper\n\n@exclaim\n@upper\ndef greet():\n    return \"welcome\"\n\nprint(greet())",
"out": "WELCOME!"
}
]
},
{
"h": "Decorators that take settings",
"parts": [
{
"p": "To give a decorator its own argument, add one more outer layer that takes the setting and returns the real decorator."
},
{
"code": "def repeat(times):\n    def decorator(func):\n        def wrapper(*args):\n            for _ in range(times):\n                func(*args)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef cheer(name):\n    print(\"Go\", name)\n\ncheer(\"team\")",
"out": "Go team\nGo team\nGo team"
}
]
},
{
"h": "map(): change every item",
"parts": [
{
"p": "`map(func, items)` runs the function on each item. It gives back a map object, so wrap it in `list()` to see the results."
},
{
"code": "nums = [1, 2, 3, 4]\nprint(list(map(lambda x: x * 10, nums)))\nprint(list(map(str, nums)))\nprint(list(map(int, [\"7\", \"8\", \"9\"])))\nprint(list(map(str.title, [\"ada\", \"ben\"])))\nprint(list(map(lambda a, b: a + b, [1, 2, 3], [10, 20, 30])))",
"out": "[10, 20, 30, 40]\n['1', '2', '3', '4']\n[7, 8, 9]\n['Ada', 'Ben']\n[11, 22, 33]"
}
]
},
{
"h": "filter(): keep some items",
"parts": [
{
"p": "`filter(func, items)` keeps only the items for which the function returns True."
},
{
"code": "nums = range(1, 16)\nprint(list(filter(lambda n: n % 2 == 0, nums)))\nprint(list(filter(lambda n: n % 5 == 0, nums)))\nwords = [\"apple\", \"\", \"kiwi\", \"\", \"fig\"]\nprint(list(filter(None, words)))    # None keeps only truthy items\nprint(list(filter(str.isdigit, [\"12\", \"a\", \"7\", \"x9\"])))",
"out": "[2, 4, 6, 8, 10, 12, 14]\n[5, 10, 15]\n['apple', 'kiwi', 'fig']\n['12', '7']"
}
]
},
{
"h": "reduce(): combine everything into one value",
"parts": [
{
"p": "`reduce` lives in the `functools` module. It combines items two at a time: the first two, then that result with the third, and so on, until one value is left."
},
{
"code": "from functools import reduce\nnums = [1, 2, 3, 4, 5]\nprint(reduce(lambda a, b: a + b, nums))       # ((((1+2)+3)+4)+5)\nprint(reduce(lambda a, b: a * b, nums))       # 5 factorial\nprint(reduce(lambda a, b: a if a > b else b, [3, 9, 2, 7]))\nprint(reduce(lambda a, b: a + \" \" + b, [\"Python\", \"is\", \"fun\"]))",
"out": "15\n120\n9\nPython is fun"
}
]
},
{
"h": "Built-ins that take a key function",
"parts": [
{
"p": "`sorted()`, `min()` and `max()` accept a `key` function that says what to compare. This is higher order functions in everyday use."
},
{
"code": "cities = [(\"Lagos\", 15.4), (\"Cairo\", 22.6), (\"Accra\", 2.6)]\nprint(sorted(cities, key=lambda c: c[1]))\nprint(min(cities, key=lambda c: c[1]))\nprint(max([\"pear\", \"banana\", \"fig\"], key=len))",
"out": "[('Accra', 2.6), ('Lagos', 15.4), ('Cairo', 22.6)]\n('Accra', 2.6)\nbanana"
}
]
},
{
"h": "map and filter or a comprehension?",
"parts": [
{
"p": "A list comprehension can do the same jobs as `map` and `filter`, and many Python programmers find it easier to read. Use whichever reads more clearly to you."
},
{
"code": "nums = [1, 2, 3, 4, 5, 6]\nprint(list(map(lambda n: n * n, filter(lambda n: n % 2 == 0, nums))))\nprint([n * n for n in nums if n % 2 == 0])",
"out": "[4, 16, 36]\n[4, 16, 36]"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "Cleaning up a list of messy prices with map, filter and reduce."
},
{
"code": "from functools import reduce\nraw = [\" 4.50\", \"free\", \"12.00 \", \"\", \"3.25\", \"n/a\"]\n\ndef looks_like_price(s):\n    return s.strip().replace(\".\", \"\", 1).isdigit()\n\nprices = list(map(float, filter(looks_like_price, raw)))\nprint(\"Prices:\", prices)\ntotal = reduce(lambda a, b: a + b, prices, 0)\nprint(f\"Total: £{total:.2f}\")\nprint(\"Over £4:\", list(filter(lambda p: p > 4, prices)))",
"out": "Prices: [4.5, 12.0, 3.25]\nTotal: £19.75\nOver £4: [4.5, 12.0]"
}
]
}
],
"basics-15": [
{
"h": "Errors are normal",
"parts": [
{
"p": "Every programmer sees errors all day. An error is Python telling you exactly what went wrong and where. When code fails, Python prints a traceback; the most useful part is the last line, which names the kind of error and gives a short description. Learning to read that line is one of the best skills you can have."
},
{
"code": "numbers = [1, 2, 3]\nprint(numbers[10])",
"out": "IndexError: list index out of range",
"err": true
},
{
"p": "The examples below show the most common errors, what causes each, and how to fix it."
}
]
},
{
"h": "SyntaxError",
"parts": [
{
"p": "The code is not valid Python, so it cannot even start. Usual causes: a missing colon, bracket or quote, or a typo in a keyword."
},
{
"code": "if 5 > 3\n    print(\"yes\")",
"out": "SyntaxError: expected ':'",
"err": true
},
{
"code": "print(\"hello\"",
"out": "SyntaxError: '(' was never closed",
"err": true
},
{
"p": "Fix: look at the line Python points to, and the line just before it. Here the colon and closing bracket were missing."
},
{
"code": "if 5 > 3:\n    print(\"yes\")\nprint(\"hello\")",
"out": "yes\nhello"
}
]
},
{
"h": "IndentationError",
"parts": [
{
"p": "The spaces at the start of a line do not match what Python expects."
},
{
"code": "def greet():\nprint(\"hi\")",
"out": "IndentationError: expected an indented block after function definition on line 1",
"err": true
},
{
"p": "Fix: indent the body of every `if`, `for`, `while`, `def` and `class` by 4 spaces."
}
]
},
{
"h": "NameError",
"parts": [
{
"p": "You used a name that does not exist (yet). Usual causes: a typo, wrong capital letters, or using a variable before you create it."
},
{
"code": "age = 20\nprint(Age)",
"out": "NameError: name 'Age' is not defined",
"err": true
},
{
"code": "print(total)\ntotal = 10",
"out": "NameError: name 'total' is not defined",
"err": true
},
{
"p": "Fix: check the spelling, and make sure the variable is created above the line that uses it."
}
]
},
{
"h": "TypeError",
"parts": [
{
"p": "You used a value in a way its type does not allow, like adding text to a number, or calling a function with the wrong number of arguments."
},
{
"code": "print(\"Age: \" + 25)",
"out": "TypeError: can only concatenate str (not \"int\") to str",
"err": true
},
{
"code": "print(len(5))",
"out": "TypeError: object of type 'int' has no len()",
"err": true
},
{
"code": "def add(a, b):\n    return a + b\nadd(1)",
"out": "TypeError: add() missing 1 required positional argument: 'b'",
"err": true
},
{
"p": "Fix: convert types where needed (`str(25)`), or use an f-string, and pass the right arguments."
},
{
"code": "print(\"Age: \" + str(25))\nprint(f\"Age: {25}\")",
"out": "Age: 25\nAge: 25"
}
]
},
{
"h": "ValueError",
"parts": [
{
"p": "The type is right, but the value is not acceptable, like turning \"hello\" into a number."
},
{
"code": "print(int(\"hello\"))",
"out": "ValueError: invalid literal for int() with base 10: 'hello'",
"err": true
},
{
"code": "import math\nprint(math.sqrt(-1))",
"out": "ValueError: math domain error",
"err": true
},
{
"code": "a, b = [1, 2, 3]",
"out": "ValueError: too many values to unpack (expected 2)",
"err": true
}
]
},
{
"h": "IndexError",
"parts": [
{
"p": "You asked for a position that a list, tuple or string does not have."
},
{
"code": "colours = [\"red\", \"green\"]\nprint(colours[2])",
"out": "IndexError: list index out of range",
"err": true
},
{
"p": "Fix: remember indexes start at 0, so the last index is `len(x) - 1`. Using `-1` always gets the last item safely."
},
{
"code": "colours = [\"red\", \"green\"]\nprint(colours[len(colours) - 1], colours[-1])",
"out": "green green"
}
]
},
{
"h": "KeyError",
"parts": [
{
"p": "You asked a dictionary for a key it does not have."
},
{
"code": "person = {\"name\": \"Ada\"}\nprint(person[\"age\"])",
"out": "KeyError: 'age'",
"err": true
},
{
"p": "Fix: check with `in`, or use `get()` with a default."
},
{
"code": "person = {\"name\": \"Ada\"}\nprint(person.get(\"age\", \"unknown\"))\nif \"age\" in person:\n    print(person[\"age\"])\nelse:\n    print(\"No age stored\")",
"out": "unknown\nNo age stored"
}
]
},
{
"h": "AttributeError",
"parts": [
{
"p": "You used a method or attribute that this type of value does not have. Often it is the right method on the wrong type, like calling a string method on a list."
},
{
"code": "nums = [3, 1, 2]\nnums.upper()",
"out": "AttributeError: 'list' object has no attribute 'upper'",
"err": true
},
{
"code": "result = None\nresult.append(1)",
"out": "AttributeError: 'NoneType' object has no attribute 'append'",
"err": true
}
]
},
{
"h": "ZeroDivisionError",
"parts": [
{
"p": "Dividing by zero is impossible in maths, so Python stops."
},
{
"code": "print(10 / 0)",
"out": "ZeroDivisionError: division by zero",
"err": true
},
{
"code": "scores = []\nprint(sum(scores) / len(scores))",
"out": "ZeroDivisionError: division by zero",
"err": true
},
{
"p": "Fix: check before dividing."
},
{
"code": "scores = []\naverage = sum(scores) / len(scores) if scores else 0\nprint(average)",
"out": "0"
}
]
},
{
"h": "ModuleNotFoundError and ImportError",
"parts": [
{
"p": "`ModuleNotFoundError` means Python cannot find the module you asked for (a typo, or a package that is not installed). `ImportError` means the module exists but does not have the name you asked for."
},
{
"code": "import maths",
"out": "ModuleNotFoundError: No module named 'maths'",
"err": true
},
{
"code": "from math import squareroot",
"out": "ImportError: cannot import name 'squareroot' from 'math'",
"err": true
}
]
},
{
"h": "Handling errors with try and except",
"parts": [
{
"p": "Sometimes errors are expected: a user types text instead of a number, or a file is missing. `try` and `except` let your program deal with the problem instead of crashing. Python runs the `try` block; if an error happens, it jumps to the matching `except` block."
},
{
"code": "text = \"abc\"\ntry:\n    number = int(text)\n    print(\"You typed\", number)\nexcept ValueError:\n    print(f\"'{text}' is not a whole number\")\nprint(\"The program keeps going\")",
"out": "'abc' is not a whole number\nThe program keeps going"
}
]
},
{
"h": "Catching specific errors",
"parts": [
{
"p": "Name the errors you expect. You can have several `except` blocks, or catch several types in one with a tuple. `as e` gives you the error itself, so you can show its message."
},
{
"code": "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"cannot divide by zero\"\n    except TypeError as e:\n        return f\"bad input: {e}\"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide(10, \"two\"))",
"out": "5.0\ncannot divide by zero\nbad input: unsupported operand type(s) for /: 'int' and 'str'"
},
{
"code": "for value in [\"5\", \"x\", None]:\n    try:\n        print(int(value) * 2)\n    except (ValueError, TypeError) as e:\n        print(\"Skipped\", repr(value), \"because:\", type(e).__name__)",
"out": "10\nSkipped 'x' because: ValueError\nSkipped None because: TypeError"
},
{
"p": "Avoid a bare `except:` with no error name. It also catches mistakes you did not expect, which hides bugs."
}
]
},
{
"h": "else and finally",
"parts": [
{
"ul": [
"`else` runs only if the `try` block had no error.",
"`finally` always runs, error or not. It is for tidying up, like closing a file."
]
},
{
"code": "def read_age(text):\n    try:\n        age = int(text)\n    except ValueError:\n        print(\"Not a number:\", text)\n    else:\n        print(\"Age is\", age)\n    finally:\n        print(\"Finished checking\", repr(text))\n\nread_age(\"30\")\nread_age(\"thirty\")",
"out": "Age is 30\nFinished checking '30'\nNot a number: thirty\nFinished checking 'thirty'"
}
]
},
{
"h": "Asking again until the input is good",
"parts": [
{
"p": "A loop with `try` is the standard way to keep asking until the user gives a valid answer. Here a list stands in for what the user types."
},
{
"code": "typed = [\"ten\", \"\", \"-5\", \"7\"]\nfor answer in typed:\n    try:\n        n = int(answer)\n        if n < 0:\n            raise ValueError(\"must not be negative\")\n    except ValueError as e:\n        print(f\"{answer!r} rejected: {e}\")\n        continue\n    print(\"Accepted\", n)\n    break",
"out": "'ten' rejected: invalid literal for int() with base 10: 'ten'\n'' rejected: invalid literal for int() with base 10: ''\n'-5' rejected: must not be negative\nAccepted 7"
}
]
},
{
"h": "Raising your own errors",
"parts": [
{
"p": "`raise` lets your own functions signal a problem, the same way Python does. Pick the error type that fits and write a clear message."
},
{
"code": "def set_age(age):\n    if age < 0:\n        raise ValueError(\"age cannot be negative\")\n    return age\n\nset_age(-4)",
"out": "ValueError: age cannot be negative",
"err": true
},
{
"code": "def withdraw(balance, amount):\n    if amount > balance:\n        raise ValueError(f\"cannot take {amount}, only {balance} available\")\n    return balance - amount\n\ntry:\n    withdraw(50, 80)\nexcept ValueError as e:\n    print(\"Problem:\", e)",
"out": "Problem: cannot take 80, only 50 available"
}
]
},
{
"h": "Making your own error types",
"parts": [
{
"p": "For bigger programs you can define your own error class (classes are lesson 19). It makes errors easy to recognise and catch."
},
{
"code": "class OutOfStock(Exception):\n    pass\n\ndef buy(item, stock):\n    if stock.get(item, 0) == 0:\n        raise OutOfStock(f\"{item} is out of stock\")\n    stock[item] -= 1\n    return \"bought \" + item\n\nstock = {\"tea\": 1}\nfor attempt in [\"tea\", \"tea\"]:\n    try:\n        print(buy(attempt, stock))\n    except OutOfStock as e:\n        print(\"Sorry:\", e)",
"out": "bought tea\nSorry: tea is out of stock"
}
]
},
{
"h": "Unpacking, packing and spreading",
"parts": [
{
"p": "The 30 Days course covers these alongside exceptions. You met them in lessons 5, 6 and 11; here is a reminder in one place. `*` unpacks a list into separate values and packs extra values into a list; `**` does the same for dictionaries."
},
{
"code": "def area(width, height):\n    return width * height\n\nsize = [3, 4]\nprint(area(*size))                       # unpack a list into arguments\nprint(area(**{\"width\": 5, \"height\": 2})) # unpack a dictionary\nfirst, *rest = [1, 2, 3, 4]\nprint(first, rest)                       # pack the rest into a list\na = [1, 2]\nb = [3, 4]\nprint([*a, *b, 5])                       # spread lists into a new one\nprint({**{\"x\": 1}, **{\"y\": 2}})          # spread dictionaries",
"out": "12\n10\n1 [2, 3, 4]\n[1, 2, 3, 4, 5]\n{'x': 1, 'y': 2}"
}
]
},
{
"h": "enumerate and zip",
"parts": [
{
"p": "Two built-ins that the course also covers here, which you have met in loops."
},
{
"code": "fruits = [\"apple\", \"pear\", \"fig\"]\nprices = [0.5, 0.75, 1.2]\nfor i, fruit in enumerate(fruits):\n    print(i, fruit)\nfor fruit, price in zip(fruits, prices):\n    print(f\"{fruit}: £{price}\")\nprint(dict(zip(fruits, prices)))",
"out": "0 apple\n1 pear\n2 fig\napple: £0.5\npear: £0.75\nfig: £1.2\n{'apple': 0.5, 'pear': 0.75, 'fig': 1.2}"
}
]
}
],
"basics-16": [
{
"h": "The datetime module",
"parts": [
{
"p": "Python handles dates and times with the `datetime` module. It has a few main types:"
},
{
"ul": [
"`date` for a calendar day: year, month, day",
"`time` for a time of day: hour, minute, second",
"`datetime` for both together",
"`timedelta` for a length of time, like \"3 days\" or \"2 hours\""
]
},
{
"code": "from datetime import date, time, datetime, timedelta\nprint(date(2026, 11, 21))\nprint(time(9, 30))\nprint(datetime(2026, 11, 21, 9, 30))\nprint(timedelta(days=3, hours=2))",
"out": "2026-11-21\n09:30:00\n2026-11-21 09:30:00\n3 days, 2:00:00"
}
]
},
{
"h": "Today and now",
"parts": [
{
"p": "`date.today()` gives today's date and `datetime.now()` gives the current date and time. The output changes every time you run them, so this example only shows their types; press Try it to see your own date."
},
{
"code": "from datetime import date, datetime\ntoday = date.today()\nnow = datetime.now()\nprint(type(today).__name__, type(now).__name__)\nprint(today.year > 2000)",
"out": "date datetime\nTrue"
}
]
},
{
"h": "Reading the parts of a date",
"parts": [
{
"p": "Every date and datetime has its parts as attributes."
},
{
"code": "from datetime import datetime\nmoment = datetime(2026, 11, 21, 14, 5, 30)\nprint(moment.year)\nprint(moment.month)\nprint(moment.day)\nprint(moment.hour)\nprint(moment.minute)\nprint(moment.second)\nprint(moment.weekday())      # Monday is 0, Sunday is 6\nprint(moment.isoweekday())   # Monday is 1, Sunday is 7\nprint(moment.date())\nprint(moment.time())",
"out": "2026\n11\n21\n14\n5\n30\n5\n6\n2026-11-21\n14:05:30"
}
]
},
{
"h": "Formatting dates with strftime",
"parts": [
{
"p": "`strftime()` (\"string from time\") turns a date into text in the format you choose. You build the format from codes that start with `%`:"
},
{
"ul": [
"`%Y` year (2026), `%y` short year (26)",
"`%m` month number (11), `%B` month name (November), `%b` short name (Nov)",
"`%d` day of the month (21)",
"`%A` weekday name (Saturday), `%a` short weekday (Sat)",
"`%H` hour 00-23, `%I` hour 01-12, `%M` minutes, `%S` seconds, `%p` AM or PM"
]
},
{
"code": "from datetime import datetime\nmoment = datetime(2026, 11, 21, 14, 5, 30)\nprint(moment.strftime(\"%d/%m/%Y\"))\nprint(moment.strftime(\"%Y-%m-%d\"))\nprint(moment.strftime(\"%A %d %B %Y\"))\nprint(moment.strftime(\"%a %d %b, %I:%M %p\"))\nprint(moment.strftime(\"%H:%M:%S\"))\nprint(f\"{moment:%d %B %Y}\")   # f-strings understand the same codes",
"out": "21/11/2026\n2026-11-21\nSaturday 21 November 2026\nSat 21 Nov, 02:05 PM\n14:05:30\n21 November 2026"
}
]
},
{
"h": "Reading dates from text with strptime",
"parts": [
{
"p": "`strptime()` (\"string parse time\") does the opposite: it reads text and makes a datetime. The format must match the text exactly."
},
{
"code": "from datetime import datetime\nd = datetime.strptime(\"21/11/2026\", \"%d/%m/%Y\")\nprint(d)\nprint(d.strftime(\"%A\"))\nt = datetime.strptime(\"2026-11-21 18:45\", \"%Y-%m-%d %H:%M\")\nprint(t.hour, t.minute)",
"out": "2026-11-21 00:00:00\nSaturday\n18 45"
},
{
"code": "from datetime import datetime\ndatetime.strptime(\"2026/11/21\", \"%d-%m-%Y\")",
"out": "ValueError: time data '2026/11/21' does not match format '%d-%m-%Y'",
"err": true
},
{
"p": "For the standard `YYYY-MM-DD` format there is a shortcut, `fromisoformat()`, and `isoformat()` goes back the other way."
},
{
"code": "from datetime import date\nd = date.fromisoformat(\"2026-12-25\")\nprint(d, d.isoformat())",
"out": "2026-12-25 2026-12-25"
}
]
},
{
"h": "Differences between dates",
"parts": [
{
"p": "Subtracting one date from another gives a `timedelta`. Its `.days` tells you how many days apart they are."
},
{
"code": "from datetime import date\nstart = date(2026, 1, 1)\nend = date(2026, 12, 25)\ngap = end - start\nprint(gap)\nprint(gap.days, \"days\")\nprint(type(gap).__name__)",
"out": "358 days, 0:00:00\n358 days\ntimedelta"
},
{
"code": "from datetime import datetime\nstart = datetime(2026, 11, 21, 9, 15)\nfinish = datetime(2026, 11, 21, 17, 45)\nworked = finish - start\nprint(worked)\nprint(worked.total_seconds() / 3600, \"hours\")",
"out": "8:30:00\n8.5 hours"
}
]
},
{
"h": "Adding and subtracting time",
"parts": [
{
"p": "Add or subtract a `timedelta` to move a date forward or back. Python handles month lengths and leap years for you."
},
{
"code": "from datetime import date, timedelta\nd = date(2026, 11, 21)\nprint(d + timedelta(days=10))\nprint(d - timedelta(weeks=2))\nprint(date(2028, 2, 28) + timedelta(days=1))   # 2028 is a leap year\nprint(date(2026, 12, 31) + timedelta(days=1))",
"out": "2026-12-01\n2026-11-07\n2028-02-29\n2027-01-01"
},
{
"code": "from datetime import datetime, timedelta\nmeeting = datetime(2026, 11, 21, 14, 0)\nreminder = meeting - timedelta(minutes=15)\nprint(reminder.strftime(\"%H:%M\"))",
"out": "13:45"
}
]
},
{
"h": "Comparing dates",
"parts": [
{
"p": "Dates compare with the usual operators: earlier dates are \"less than\" later ones. You can sort them and find the earliest with `min()`."
},
{
"code": "from datetime import date\ndeadline = date(2026, 12, 1)\ntoday = date(2026, 11, 21)\nprint(today < deadline)\nprint(\"Days left:\", (deadline - today).days)\ndates = [date(2026, 5, 1), date(2025, 9, 3), date(2027, 1, 15)]\nprint(min(dates))\nprint(sorted(dates))",
"out": "True\nDays left: 10\n2025-09-03\n[datetime.date(2025, 9, 3), datetime.date(2026, 5, 1), datetime.date(2027, 1, 15)]"
}
]
},
{
"h": "Working out an age",
"parts": [
{
"p": "A practical example: how old is someone on a given day? Take the year difference, then subtract one if their birthday has not come yet this year."
},
{
"code": "from datetime import date\n\ndef age_on(birthday, on_day):\n    years = on_day.year - birthday.year\n    if (on_day.month, on_day.day) < (birthday.month, birthday.day):\n        years -= 1\n    return years\n\nprint(age_on(date(1990, 12, 3), date(2026, 11, 21)))\nprint(age_on(date(1990, 6, 3), date(2026, 11, 21)))",
"out": "35\n36"
}
]
},
{
"h": "Calendars and the day of the week",
"parts": [
{
"p": "The `calendar` module can print a month, and tell you about leap years."
},
{
"code": "import calendar\nprint(calendar.month(2026, 11))\nprint(calendar.isleap(2028))\nprint(calendar.day_name[calendar.weekday(2026, 12, 25)])",
"out": "   November 2026\nMo Tu We Th Fr Sa Su\n                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30\n\nTrue\nFriday"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "Counting down to several events from a fixed day, and printing them in order."
},
{
"code": "from datetime import date\ntoday = date(2026, 11, 21)\nevents = {\n    \"New Year\": date(2027, 1, 1),\n    \"Christmas\": date(2026, 12, 25),\n    \"Course ends\": date(2026, 12, 12),\n}\nfor name, day in sorted(events.items(), key=lambda e: e[1]):\n    days = (day - today).days\n    print(f\"{name:<12} {day:%a %d %b}  in {days} days ({days // 7} weeks)\")",
"out": "Course ends  Sat 12 Dec  in 21 days (3 weeks)\nChristmas    Fri 25 Dec  in 34 days (4 weeks)\nNew Year     Fri 01 Jan  in 41 days (5 weeks)"
}
]
}
],
"basics-17": [
{
"h": "What a regular expression is",
"parts": [
{
"p": "A regular expression (regex) is a small pattern that describes text you want to find. Instead of searching for one exact word, you can search for \"any phone number\", \"every word starting with a capital letter\" or \"anything that looks like an email\". Python's regex tools are in the `re` module."
},
{
"code": "import re\ntext = \"Call 0201 555 123 or 0302 999 888 today\"\nprint(re.findall(r\"\\d{4} \\d{3} \\d{3}\", text))",
"out": "['0201 555 123', '0302 999 888']"
},
{
"p": "Patterns are usually written as raw strings, with `r` before the quote. That stops Python treating backslashes as escape codes, so `r\"\\d\"` reaches the regex exactly as typed."
}
]
},
{
"h": "The main functions",
"parts": [
{
"ul": [
"`re.search(pattern, text)` finds the first match anywhere",
"`re.match(pattern, text)` only matches at the very start of the text",
"`re.fullmatch(pattern, text)` matches only if the whole text fits",
"`re.findall(pattern, text)` gives a list of every match",
"`re.sub(pattern, replacement, text)` replaces every match",
"`re.split(pattern, text)` splits the text wherever the pattern matches"
]
}
]
},
{
"h": "search and match",
"parts": [
{
"p": "`search` and `match` give back a match object, or `None` if nothing matched. The match object's `group()` is the matched text and `span()` is where it was."
},
{
"code": "import re\ntext = \"I love Python and Python loves me\"\nm = re.search(r\"Python\", text)\nprint(m.group())\nprint(m.span())\nprint(m.start(), m.end())\nprint(re.match(r\"Python\", text))   # None: text does not start with Python\nprint(re.match(r\"I love\", text).group())",
"out": "Python\n(7, 13)\n7 13\nNone\nI love"
},
{
"p": "Always check for `None` before using the result."
},
{
"code": "import re\nfor word in [\"cat\", \"dog\"]:\n    m = re.search(word, \"the cat sat\")\n    if m:\n        print(word, \"found at\", m.start())\n    else:\n        print(word, \"not found\")",
"out": "cat found at 4\ndog not found"
}
]
},
{
"h": "findall",
"parts": [
{
"p": "`findall` is often all you need: it returns every match as a list of strings."
},
{
"code": "import re\ntext = \"Prices: £4, £12, £150 and £7\"\nprint(re.findall(r\"£\\d+\", text))\nprint(re.findall(r\"\\d+\", text))\nprint(len(re.findall(r\"a\", \"banana\")))",
"out": "['£4', '£12', '£150', '£7']\n['4', '12', '150', '7']\n3"
}
]
},
{
"h": "Ignoring case",
"parts": [
{
"p": "The flag `re.I` (short for `re.IGNORECASE`) makes the match ignore capital letters."
},
{
"code": "import re\ntext = \"Python, python, PYTHON\"\nprint(re.findall(r\"python\", text))\nprint(re.findall(r\"python\", text, re.I))",
"out": "['python']\n['Python', 'python', 'PYTHON']"
}
]
},
{
"h": "Replacing with sub",
"parts": [
{
"p": "`re.sub` swaps every match for the replacement."
},
{
"code": "import re\nprint(re.sub(r\"\\d\", \"#\", \"Card 1234 5678\"))\nprint(re.sub(r\"\\s+\", \" \", \"too    many     spaces\"))\nprint(re.sub(r\"colou?r\", \"shade\", \"colour or color\"))\nprint(re.sub(r\"[aeiou]\", \"\", \"regular expressions\"))",
"out": "Card #### ####\ntoo many spaces\nshade or shade\nrglr xprssns"
}
]
},
{
"h": "Splitting with split",
"parts": [
{
"p": "`re.split` is like `str.split`, but the separator can be a pattern."
},
{
"code": "import re\nprint(re.split(r\"[,;]\\s*\", \"apples, pears;plums,  figs\"))\nprint(re.split(r\"\\s+\", \"one   two\\tthree\\nfour\"))\nprint(re.split(r\"\\d\", \"a1b2c3d\"))",
"out": "['apples', 'pears', 'plums', 'figs']\n['one', 'two', 'three', 'four']\n['a', 'b', 'c', 'd']"
}
]
},
{
"h": "Character classes",
"parts": [
{
"p": "Square brackets match any one of the characters inside. A dash gives a range, and `^` at the start means \"anything except these\"."
},
{
"ul": [
"`[aeiou]` one vowel",
"`[a-z]` one lower-case letter, `[A-Z]` one capital, `[0-9]` one digit",
"`[a-zA-Z0-9]` one letter or digit",
"`[^0-9]` one character that is not a digit"
]
},
{
"code": "import re\ntext = \"Apple banana Cherry 42\"\nprint(re.findall(r\"[aeiou]\", text))\nprint(re.findall(r\"[A-Z]\", text))\nprint(re.findall(r\"[0-9]\", text))\nprint(re.findall(r\"[^a-zA-Z ]\", text))",
"out": "['e', 'a', 'a', 'a', 'e']\n['A', 'C']\n['4', '2']\n['4', '2']"
}
]
},
{
"h": "Shorthand classes",
"parts": [
{
"p": "These are so common they have short codes:"
},
{
"ul": [
"`\\d` a digit, `\\D` anything but a digit",
"`\\w` a word character (letter, digit or underscore), `\\W` anything else",
"`\\s` whitespace (space, tab, new line), `\\S` anything else",
"`.` any character except a new line",
"`\\b` a word boundary: the edge between a word and a non-word character"
]
},
{
"code": "import re\ntext = \"Room 101, floor 3_b!\"\nprint(re.findall(r\"\\d\", text))\nprint(re.findall(r\"\\w+\", text))\nprint(re.findall(r\"\\s\", text))\nprint(re.findall(r\"r..m\", \"room roam rum\"))\nprint(re.findall(r\"\\bcat\\b\", \"cat catalogue bobcat cat\"))",
"out": "['1', '0', '1', '3']\n['Room', '101', 'floor', '3_b']\n[' ', ' ', ' ']\n['room', 'roam']\n['cat', 'cat']"
}
]
},
{
"h": "Escaping special characters",
"parts": [
{
"p": "Characters like `. + * ? ( ) [ ] { } ^ $ |` have special meanings. To match one literally, put a backslash in front."
},
{
"code": "import re\nprint(re.findall(r\".\", \"a.b\"))       # . matches anything\nprint(re.findall(r\"\\.\", \"a.b\"))      # \\. matches only a full stop\nprint(re.findall(r\"\\$\\d+\", \"It costs $40 or $55\"))\nprint(re.findall(r\"\\(\\d+\\)\", \"call (020) now\"))",
"out": "['a', '.', 'b']\n['.']\n['$40', '$55']\n['(020)']"
}
]
},
{
"h": "How many times: quantifiers",
"parts": [
{
"p": "A quantifier after something says how many times it may repeat."
},
{
"ul": [
"`+` one or more",
"`*` zero or more",
"`?` zero or one (makes it optional)",
"`{3}` exactly 3, `{2,4}` between 2 and 4, `{2,}` 2 or more"
]
},
{
"code": "import re\nprint(re.findall(r\"\\d+\", \"7 cats, 42 dogs, 365 days\"))\nprint(re.findall(r\"ab*\", \"a ab abb abbb\"))\nprint(re.findall(r\"colou?r\", \"color colour colouur\"))\nprint(re.findall(r\"\\b\\d{3}\\b\", \"1 12 123 1234\"))\nprint(re.findall(r\"\\b\\w{6,}\\b\", \"a short list of longer words\"))",
"out": "['7', '42', '365']\n['a', 'ab', 'abb', 'abbb']\n['color', 'colour']\n['123']\n['longer']"
}
]
},
{
"h": "Greedy and lazy",
"parts": [
{
"p": "Quantifiers are greedy: they grab as much as they can. Adding `?` after them makes them lazy, taking as little as possible."
},
{
"code": "import re\nhtml = \"<b>bold</b> and <i>italic</i>\"\nprint(re.findall(r\"<.+>\", html))    # greedy: one big match\nprint(re.findall(r\"<.+?>\", html))   # lazy: each tag separately",
"out": "['<b>bold</b> and <i>italic</i>']\n['<b>', '</b>', '<i>', '</i>']"
}
]
},
{
"h": "Start and end: ^ and $",
"parts": [
{
"p": "`^` matches the start of the text and `$` matches the end. Together they check that the whole text has a certain shape, which is great for validating input."
},
{
"code": "import re\nfor code in [\"AB12\", \"ab12\", \"AB123\", \"XY99\"]:\n    ok = re.search(r\"^[A-Z]{2}\\d{2}$\", code)\n    print(code, \"valid\" if ok else \"invalid\")",
"out": "AB12 valid\nab12 invalid\nAB123 invalid\nXY99 valid"
}
]
},
{
"h": "Either or: |",
"parts": [
{
"p": "`|` means \"this or that\"."
},
{
"code": "import re\ntext = \"I have a cat, a dog and a parrot\"\nprint(re.findall(r\"cat|dog\", text))\nprint(re.findall(r\"\\b(?:Mon|Tues|Wednes)day\\b\", \"Monday Tuesday Friday\"))",
"out": "['cat', 'dog']\n['Monday', 'Tuesday']"
}
]
},
{
"h": "Groups: capturing parts of a match",
"parts": [
{
"p": "Round brackets make a group. You can then pull out just that part. With groups, `findall` returns the groups instead of the whole match."
},
{
"code": "import re\nm = re.search(r\"(\\d{4})-(\\d{2})-(\\d{2})\", \"Due on 2026-11-21, thanks\")\nprint(m.group())\nprint(m.group(1), m.group(2), m.group(3))\nprint(m.groups())",
"out": "2026-11-21\n2026 11 21\n('2026', '11', '21')"
},
{
"code": "import re\ntext = \"Ada: 91, Ben: 78, Chen: 85\"\nprint(re.findall(r\"(\\w+): (\\d+)\", text))\nscores = {name: int(n) for name, n in re.findall(r\"(\\w+): (\\d+)\", text)}\nprint(scores)",
"out": "[('Ada', '91'), ('Ben', '78'), ('Chen', '85')]\n{'Ada': 91, 'Ben': 78, 'Chen': 85}"
},
{
"p": "Groups can be named with `(?P<name>...)`, which makes the code easier to read."
},
{
"code": "import re\nm = re.search(r\"(?P<user>\\w+)@(?P<domain>[\\w.]+)\", \"Write to ada@example.com\")\nprint(m.group(\"user\"))\nprint(m.group(\"domain\"))",
"out": "ada\nexample.com"
},
{
"p": "In `sub`, `\\1`, `\\2` put the groups back into the replacement, so you can rearrange text."
},
{
"code": "import re\nprint(re.sub(r\"(\\d{4})-(\\d{2})-(\\d{2})\", r\"\\3/\\2/\\1\", \"2026-11-21\"))",
"out": "21/11/2026"
}
]
},
{
"h": "compile: reusing a pattern",
"parts": [
{
"p": "`re.compile` turns a pattern into an object you can use many times. It is tidy when the same pattern is used in several places."
},
{
"code": "import re\nword = re.compile(r\"\\b[A-Z][a-z]+\\b\")\nprint(word.findall(\"Ada met Ben in London\"))\nprint(bool(word.search(\"no capitals here\")))",
"out": "['Ada', 'Ben', 'London']\nFalse"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "Pulling useful information out of a block of text."
},
{
"code": "import re\nnotes = \"\"\"Meeting on 2026-11-21 with ada@example.com and ben.k@mail.org.\nCall Ada on 0201-555-123. Budget: £1,250. Next meeting 2026-12-05.\"\"\"\n\nemails = re.findall(r\"[\\w.]+@[\\w]+\\.\\w+\", notes)\ndates = re.findall(r\"\\d{4}-\\d{2}-\\d{2}\", notes)\nphones = re.findall(r\"\\d{4}-\\d{3}-\\d{3}\", notes)\nmoney = re.findall(r\"£[\\d,]+\", notes)\nwords = re.findall(r\"\\b[a-zA-Z]+\\b\", notes)\nprint(\"Emails:\", emails)\nprint(\"Dates:\", dates)\nprint(\"Phones:\", phones)\nprint(\"Money:\", money)\nprint(\"Word count:\", len(words))",
"out": "Emails: ['ada@example.com', 'ben.k@mail.org']\nDates: ['2026-11-21', '2026-12-05']\nPhones: ['0201-555-123']\nMoney: ['£1,250']\nWord count: 17"
}
]
}
],
"basics-18": [
{
"h": "Why files",
"parts": [
{
"p": "Variables disappear when a program ends. Files keep data: notes, settings, scores, logs. Python can read and write any text file, and has modules for common formats like JSON and CSV."
},
{
"p": "In this app Python runs inside your browser and has its own small pretend disk, so you can safely write and read files in the examples. They vanish when you reload the page."
}
]
},
{
"h": "Opening a file",
"parts": [
{
"p": "`open(name, mode)` opens a file. The mode says what you want to do:"
},
{
"ul": [
"`\"r\"` read (the default); error if the file does not exist",
"`\"w\"` write; creates the file, or empties it first if it exists",
"`\"a\"` append; adds to the end, creating the file if needed",
"`\"x\"` create; error if the file already exists"
]
},
{
"p": "The best way to open a file is with `with`. It closes the file for you automatically when the block ends, even if an error happens."
},
{
"code": "with open(\"hello.txt\", \"w\") as f:\n    f.write(\"Hello, file!\\n\")\n    f.write(\"A second line\\n\")\n\nwith open(\"hello.txt\") as f:\n    print(f.read())",
"out": "Hello, file!\nA second line"
}
]
},
{
"h": "Writing text",
"parts": [
{
"p": "`write()` writes exactly what you give it. It does not add a new line, so include `\\n` yourself. `writelines()` writes a list of strings. You can also `print()` into a file."
},
{
"code": "lines = [\"apples\\n\", \"pears\\n\", \"plums\\n\"]\nwith open(\"shopping.txt\", \"w\") as f:\n    f.writelines(lines)\n    print(\"figs\", file=f)\n\nwith open(\"shopping.txt\") as f:\n    print(f.read())",
"out": "apples\npears\nplums\nfigs"
},
{
"p": "`write()` only takes strings, so convert numbers first."
},
{
"code": "with open(\"score.txt\", \"w\") as f:\n    f.write(42)",
"out": "TypeError: write() argument must be str, not int",
"err": true
}
]
},
{
"h": "Reading a file",
"parts": [
{
"p": "There are several ways to read, depending on what you need:"
},
{
"ul": [
"`read()` gives the whole file as one string",
"`readline()` gives one line at a time",
"`readlines()` gives a list of lines (each still ending in `\\n`)",
"`read().splitlines()` gives a list of lines without the `\\n`"
]
},
{
"code": "with open(\"poem.txt\", \"w\") as f:\n    f.write(\"Roses are red\\nViolets are blue\\nPython is fun\\n\")\n\nwith open(\"poem.txt\") as f:\n    print(repr(f.readline()))\n    print(repr(f.readline()))\n\nwith open(\"poem.txt\") as f:\n    print(f.readlines())\n\nwith open(\"poem.txt\") as f:\n    print(f.read().splitlines())",
"out": "'Roses are red\\n'\n'Violets are blue\\n'\n['Roses are red\\n', 'Violets are blue\\n', 'Python is fun\\n']\n['Roses are red', 'Violets are blue', 'Python is fun']"
}
]
},
{
"h": "Looping over lines",
"parts": [
{
"p": "The simplest and most memory-friendly way to process a file is to loop over it directly. Each round gives one line. `strip()` removes the new line from the end."
},
{
"code": "with open(\"poem.txt\", \"w\") as f:\n    f.write(\"Roses are red\\nViolets are blue\\nPython is fun\\n\")\n\nwith open(\"poem.txt\") as f:\n    for number, line in enumerate(f, start=1):\n        print(number, line.strip())",
"out": "1 Roses are red\n2 Violets are blue\n3 Python is fun"
},
{
"code": "with open(\"poem.txt\", \"w\") as f:\n    f.write(\"Roses are red\\nViolets are blue\\nPython is fun\\n\")\n\nwith open(\"poem.txt\") as f:\n    text = f.read()\nprint(\"Lines:\", len(text.splitlines()))\nprint(\"Words:\", len(text.split()))\nprint(\"Characters:\", len(text))",
"out": "Lines: 3\nWords: 9\nCharacters: 45"
}
]
},
{
"h": "Appending",
"parts": [
{
"p": "Mode `\"a\"` adds to the end without wiping what is there. It is perfect for logs and diaries."
},
{
"code": "with open(\"log.txt\", \"w\") as f:\n    f.write(\"Day 1: started Python\\n\")\n\nwith open(\"log.txt\", \"a\") as f:\n    f.write(\"Day 2: learned loops\\n\")\n    f.write(\"Day 3: wrote a function\\n\")\n\nwith open(\"log.txt\") as f:\n    print(f.read())",
"out": "Day 1: started Python\nDay 2: learned loops\nDay 3: wrote a function"
}
]
},
{
"h": "When a file is missing",
"parts": [
{
"p": "Reading a file that does not exist raises `FileNotFoundError`. Catch it, or check first with `os.path.exists()`."
},
{
"code": "with open(\"no_such_file.txt\") as f:\n    print(f.read())",
"out": "FileNotFoundError: [Errno 2] No such file or directory: 'no_such_file.txt'",
"err": true
},
{
"code": "import os\nname = \"settings.txt\"\nif os.path.exists(name):\n    print(\"found it\")\nelse:\n    print(name, \"does not exist yet\")\n\ntry:\n    with open(name) as f:\n        data = f.read()\nexcept FileNotFoundError:\n    data = \"\"\n    print(\"Using empty settings\")",
"out": "settings.txt does not exist yet\nUsing empty settings"
}
]
},
{
"h": "Deleting and renaming files",
"parts": [
{
"p": "The `os` module can remove and rename files."
},
{
"code": "import os\nwith open(\"old.txt\", \"w\") as f:\n    f.write(\"temporary\")\nos.rename(\"old.txt\", \"new.txt\")\nprint(os.path.exists(\"old.txt\"), os.path.exists(\"new.txt\"))\nos.remove(\"new.txt\")\nprint(os.path.exists(\"new.txt\"))",
"out": "False True\nFalse"
}
]
},
{
"h": "JSON: saving structured data",
"parts": [
{
"p": "JSON is a text format for data, used all over the web. It looks almost exactly like Python dictionaries and lists. The `json` module converts between the two:"
},
{
"ul": [
"`json.dumps(data)` turns Python data into a JSON string",
"`json.loads(text)` turns a JSON string into Python data",
"`json.dump(data, file)` and `json.load(file)` do the same with files"
]
},
{
"code": "import json\nperson = {\"name\": \"Ada\", \"age\": 36, \"langs\": [\"en\", \"fr\"], \"married\": True}\ntext = json.dumps(person)\nprint(text)\nprint(type(text).__name__)\nprint(json.dumps(person, indent=2))",
"out": "{\"name\": \"Ada\", \"age\": 36, \"langs\": [\"en\", \"fr\"], \"married\": true}\nstr\n{\n  \"name\": \"Ada\",\n  \"age\": 36,\n  \"langs\": [\n    \"en\",\n    \"fr\"\n  ],\n  \"married\": true\n}"
},
{
"p": "Notice the small differences: JSON uses `true` and `false` in lower case and always uses double quotes."
},
{
"code": "import json\ntext = '{\"city\": \"Accra\", \"population\": 2500000, \"coastal\": true, \"areas\": [\"Osu\", \"Labadi\"]}'\ndata = json.loads(text)\nprint(data)\nprint(data[\"areas\"][0])\nprint(type(data).__name__)",
"out": "{'city': 'Accra', 'population': 2500000, 'coastal': True, 'areas': ['Osu', 'Labadi']}\nOsu\ndict"
}
]
},
{
"h": "Saving and loading JSON files",
"parts": [
{
"p": "This is the easiest way to save a program's data and load it again next time."
},
{
"code": "import json\nscores = {\"Ada\": [91, 88], \"Ben\": [78, 82]}\nwith open(\"scores.json\", \"w\") as f:\n    json.dump(scores, f, indent=2)\n\nwith open(\"scores.json\") as f:\n    loaded = json.load(f)\nloaded[\"Chen\"] = [85]\nprint(loaded)\nfor name, marks in loaded.items():\n    print(name, sum(marks) / len(marks))",
"out": "{'Ada': [91, 88], 'Ben': [78, 82], 'Chen': [85]}\nAda 89.5\nBen 80.0\nChen 85.0"
}
]
},
{
"h": "CSV: tables of data",
"parts": [
{
"p": "CSV (comma-separated values) is how spreadsheets are often saved: each line is a row, and commas separate the columns. The `csv` module handles the details, like commas inside quotes."
},
{
"code": "import csv\nrows = [\n    [\"name\", \"country\", \"score\"],\n    [\"Ada\", \"UK\", 91],\n    [\"Kofi\", \"Ghana\", 85],\n    [\"Mei\", \"China\", 88],\n]\nwith open(\"results.csv\", \"w\", newline=\"\") as f:\n    csv.writer(f).writerows(rows)\n\nwith open(\"results.csv\") as f:\n    print(f.read())",
"out": "name,country,score\nAda,UK,91\nKofi,Ghana,85\nMei,China,88"
},
{
"p": "`csv.DictReader` reads each row as a dictionary, using the first line as the keys. That is usually the most convenient way to work with a table. Every value comes in as text, so convert numbers."
},
{
"code": "import csv\nwith open(\"results.csv\", \"w\", newline=\"\") as f:\n    f.write(\"name,country,score\\nAda,UK,91\\nKofi,Ghana,85\\nMei,China,88\\n\")\n\nwith open(\"results.csv\", newline=\"\") as f:\n    people = list(csv.DictReader(f))\nprint(people[0])\nbest = max(people, key=lambda p: int(p[\"score\"]))\nprint(\"Best:\", best[\"name\"], best[\"score\"])\nprint(\"Average:\", sum(int(p[\"score\"]) for p in people) / len(people))",
"out": "{'name': 'Ada', 'country': 'UK', 'score': '91'}\nBest: Ada 91\nAverage: 88.0"
}
]
},
{
"h": "Other file types",
"parts": [
{
"ul": [
"Excel (`.xlsx`) files need an extra package such as `openpyxl` or `pandas`, installed with pip on your computer.",
"XML files can be read with the built-in `xml.etree.ElementTree` module."
]
},
{
"code": "import xml.etree.ElementTree as ET\nxml = \"<people><person name='Ada' age='36'/><person name='Ben' age='28'/></people>\"\nroot = ET.fromstring(xml)\nfor p in root:\n    print(p.get(\"name\"), p.get(\"age\"))",
"out": "Ada 36\nBen 28"
}
]
},
{
"h": "Text encoding",
"parts": [
{
"p": "Files store characters as bytes using an encoding. UTF-8 handles every language and emoji, and it is the safe choice. Passing `encoding=\"utf-8\"` makes your program behave the same on every computer."
},
{
"code": "with open(\"hello_world.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, こんにちは, مرحبا, Ẹ n lẹ\\n\")\nwith open(\"hello_world.txt\", encoding=\"utf-8\") as f:\n    print(f.read())",
"out": "Hello, こんにちは, مرحبا, Ẹ n lẹ"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A tiny to-do app that keeps its list in a JSON file between runs."
},
{
"code": "import json, os\n\nFILE = \"todo.json\"\n\ndef load():\n    if not os.path.exists(FILE):\n        return []\n    with open(FILE) as f:\n        return json.load(f)\n\ndef save(tasks):\n    with open(FILE, \"w\") as f:\n        json.dump(tasks, f)\n\ntasks = load()\ntasks.append({\"task\": \"buy milk\", \"done\": False})\ntasks.append({\"task\": \"learn files\", \"done\": True})\nsave(tasks)\n\nfor t in load():\n    print((\"[x] \" if t[\"done\"] else \"[ ] \") + t[\"task\"])",
"out": "[ ] buy milk\n[x] learn files"
},
{
"p": "Counting the most common words in a text file."
},
{
"code": "from collections import Counter\nwith open(\"story.txt\", \"w\") as f:\n    f.write(\"The cat sat. The cat ran. A dog sat with the cat.\\n\")\n\nwith open(\"story.txt\") as f:\n    words = f.read().lower().replace(\".\", \"\").split()\nprint(Counter(words).most_common(3))",
"out": "[('the', 3), ('cat', 3), ('sat', 2)]"
}
]
}
],
"basics-19": [
{
"h": "What classes and objects are",
"parts": [
{
"p": "Everything in Python is an object: numbers, strings, lists, functions. Each object has a type, and that type is defined by a class. A class is a blueprint, and an object is a thing built from that blueprint. A house plan is a class; the actual houses built from it are objects. Each house has the same layout but its own paint colour and its own family."
},
{
"code": "print(type(5))\nprint(type(\"hi\"))\nprint(type([1, 2]))\nprint(\"hi\".upper())    # upper is a method that every str object has",
"out": "<class 'int'>\n<class 'str'>\n<class 'list'>\nHI"
},
{
"p": "Writing your own classes lets you bundle data and the actions that go with it into one tidy thing."
}
]
},
{
"h": "Creating a class and an object",
"parts": [
{
"p": "`class` starts a class. By convention class names use CapitalWords. Calling the class like a function creates an object (also called an instance)."
},
{
"code": "class Dog:\n    pass\n\nrex = Dog()\nfido = Dog()\nprint(type(rex).__name__)\nprint(rex is fido)    # two separate objects",
"out": "Dog\nFalse"
}
]
},
{
"h": "The constructor: __init__",
"parts": [
{
"p": "`__init__` is a special method that runs automatically when an object is created. It sets up the object's starting data. The first parameter, `self`, is the object being built; `self.name = name` stores a value on that object. Values stored on `self` are called attributes."
},
{
"code": "class Dog:\n    def __init__(self, name, breed, age):\n        self.name = name\n        self.breed = breed\n        self.age = age\n\nrex = Dog(\"Rex\", \"collie\", 4)\nbella = Dog(\"Bella\", \"poodle\", 2)\nprint(rex.name, rex.breed, rex.age)\nprint(bella.name, bella.age)",
"out": "Rex collie 4\nBella 2"
},
{
"p": "Attributes can be read and changed with a dot."
},
{
"code": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nrex = Dog(\"Rex\", 4)\nrex.age += 1\nprint(rex.name, \"is now\", rex.age)",
"out": "Rex is now 5"
}
]
},
{
"h": "Methods: actions an object can do",
"parts": [
{
"p": "A method is a function defined inside a class. It always takes `self` first, so it can use the object's own attributes. You call it with a dot, and Python passes `self` for you."
},
{
"code": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        return f\"{self.name} says woof!\"\n\n    def human_years(self):\n        return self.age * 7\n\nrex = Dog(\"Rex\", 4)\nprint(rex.bark())\nprint(rex.human_years())",
"out": "Rex says woof!\n28"
},
{
"p": "Methods can take extra arguments and change the object."
},
{
"code": "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            return \"Not enough money\"\n        self.balance -= amount\n        return \"OK\"\n\nacc = BankAccount(\"Ada\", 100)\nacc.deposit(50)\nprint(acc.withdraw(30))\nprint(acc.withdraw(500))\nprint(acc.owner, acc.balance)",
"out": "OK\nNot enough money\nAda 120"
}
]
},
{
"h": "Default values",
"parts": [
{
"p": "Like functions, `__init__` parameters can have defaults."
},
{
"code": "class Player:\n    def __init__(self, name, level=1, lives=3):\n        self.name = name\n        self.level = level\n        self.lives = lives\n\na = Player(\"Ada\")\nb = Player(\"Ben\", level=5)\nprint(a.name, a.level, a.lives)\nprint(b.name, b.level, b.lives)",
"out": "Ada 1 3\nBen 5 3"
}
]
},
{
"h": "Attributes that start empty and grow",
"parts": [
{
"p": "A common pattern is an attribute that starts as an empty list and fills up through a method."
},
{
"code": "class Playlist:\n    def __init__(self, name):\n        self.name = name\n        self.songs = []\n\n    def add(self, song):\n        self.songs.append(song)\n\n    def summary(self):\n        return f\"{self.name}: {len(self.songs)} songs\"\n\nmix = Playlist(\"Road trip\")\nmix.add(\"Song A\")\nmix.add(\"Song B\")\nprint(mix.summary())\nprint(mix.songs)",
"out": "Road trip: 2 songs\n['Song A', 'Song B']"
},
{
"p": "Do not use a mutable default like `songs=[]` in `__init__`'s parameters: every object would share the same list. Create the list inside, as above."
}
]
},
{
"h": "Class attributes",
"parts": [
{
"p": "An attribute defined directly in the class (not on `self`) is shared by every object of that class. It is good for constants and counters."
},
{
"code": "class Circle:\n    pi = 3.14159\n    count = 0\n\n    def __init__(self, radius):\n        self.radius = radius\n        Circle.count += 1\n\n    def area(self):\n        return round(Circle.pi * self.radius ** 2, 2)\n\nsmall = Circle(1)\nbig = Circle(10)\nprint(small.area(), big.area())\nprint(\"Circles made:\", Circle.count)",
"out": "3.14 314.16\nCircles made: 2"
}
]
},
{
"h": "Printing an object nicely: __str__ and __repr__",
"parts": [
{
"p": "Printing an object normally shows something unhelpful. Define `__str__` to choose what `print()` and `str()` show, and `__repr__` for a developer-friendly version (shown in lists and in the console)."
},
{
"code": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\nb = Book(\"Things Fall Apart\", \"Chinua Achebe\")\nprint(str(b).split(\" at \")[0])   # the default: not very useful",
"out": "<__main__.Book object"
},
{
"code": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\n    def __str__(self):\n        return f\"{self.title} by {self.author}\"\n\n    def __repr__(self):\n        return f\"Book({self.title!r}, {self.author!r})\"\n\nb = Book(\"Things Fall Apart\", \"Chinua Achebe\")\nprint(b)\nprint([b])",
"out": "Things Fall Apart by Chinua Achebe\n[Book('Things Fall Apart', 'Chinua Achebe')]"
}
]
},
{
"h": "Other special methods",
"parts": [
{
"p": "Methods with double underscores on both sides (called dunder methods) let your objects work with Python's built-in operators and functions: `__len__` for `len()`, `__eq__` for `==`, `__lt__` for `<` (and so sorting), `__add__` for `+`."
},
{
"code": "class Money:\n    def __init__(self, pounds):\n        self.pounds = pounds\n\n    def __add__(self, other):\n        return Money(self.pounds + other.pounds)\n\n    def __eq__(self, other):\n        return self.pounds == other.pounds\n\n    def __lt__(self, other):\n        return self.pounds < other.pounds\n\n    def __repr__(self):\n        return f\"£{self.pounds:.2f}\"\n\na, b = Money(5), Money(2.5)\nprint(a + b)\nprint(a == Money(5))\nprint(sorted([a, b, Money(1)]))",
"out": "£7.50\nTrue\n[£1.00, £2.50, £5.00]"
}
]
},
{
"h": "Inheritance",
"parts": [
{
"p": "A class can inherit from another class: it gets all of the parent's attributes and methods, and can add its own. Put the parent's name in brackets. This avoids repeating code shared by similar things."
},
{
"code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def eat(self):\n        return f\"{self.name} is eating\"\n\nclass Cat(Animal):\n    def meow(self):\n        return f\"{self.name} says meow\"\n\ntom = Cat(\"Tom\")\nprint(tom.eat())      # inherited from Animal\nprint(tom.meow())     # Cat's own method\nprint(isinstance(tom, Cat), isinstance(tom, Animal))",
"out": "Tom is eating\nTom says meow\nTrue True"
}
]
},
{
"h": "super(): building on the parent",
"parts": [
{
"p": "When a child needs extra setup, its `__init__` calls `super().__init__(...)` so the parent still does its part."
},
{
"code": "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def intro(self):\n        return f\"I am {self.name}, {self.age}\"\n\nclass Student(Person):\n    def __init__(self, name, age, school):\n        super().__init__(name, age)\n        self.school = school\n\ns = Student(\"Amara\", 19, \"Unilag\")\nprint(s.intro())\nprint(s.school)",
"out": "I am Amara, 19\nUnilag"
}
]
},
{
"h": "Overriding a method",
"parts": [
{
"p": "A child class can replace a parent's method with its own version. It can still call the parent's version through `super()`."
},
{
"code": "class Person:\n    def __init__(self, name):\n        self.name = name\n\n    def intro(self):\n        return f\"Hi, I am {self.name}\"\n\nclass Teacher(Person):\n    def __init__(self, name, subject):\n        super().__init__(name)\n        self.subject = subject\n\n    def intro(self):\n        return super().intro() + f\" and I teach {self.subject}\"\n\nfor p in [Person(\"Ben\"), Teacher(\"Ms Okafor\", \"maths\")]:\n    print(p.intro())",
"out": "Hi, I am Ben\nHi, I am Ms Okafor and I teach maths"
},
{
"p": "Because every object knows its own `intro`, the loop above works on both kinds without checking which is which. This idea is called polymorphism."
},
{
"code": "class Shape:\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w, self.h = w, h\n    def area(self):\n        return self.w * self.h\n\nshapes = [Square(3), Rectangle(2, 5), Square(1)]\nprint([s.area() for s in shapes])\nprint(\"Total area:\", sum(s.area() for s in shapes))",
"out": "[9, 10, 1]\nTotal area: 20"
}
]
},
{
"h": "Dataclasses: less typing for data",
"parts": [
{
"p": "For classes that mostly hold data, the `dataclasses` module writes `__init__`, `__repr__` and `__eq__` for you."
},
{
"code": "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(3, 4)\nprint(p)\nprint(p.x + p.y)\nprint(p == Point(3, 4))",
"out": "Point(x=3, y=4)\n7\nTrue"
}
]
},
{
"h": "Putting it together",
"parts": [
{
"p": "A small library system with two classes working together."
},
{
"code": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n        self.on_loan = False\n\n    def __str__(self):\n        status = \"on loan\" if self.on_loan else \"available\"\n        return f\"{self.title} ({self.author}) - {status}\"\n\nclass Library:\n    def __init__(self):\n        self.books = []\n\n    def add(self, book):\n        self.books.append(book)\n\n    def lend(self, title):\n        for book in self.books:\n            if book.title == title and not book.on_loan:\n                book.on_loan = True\n                return f\"You borrowed {title}\"\n        return f\"{title} is not available\"\n\n    def available(self):\n        return [b.title for b in self.books if not b.on_loan]\n\nlib = Library()\nlib.add(Book(\"Half of a Yellow Sun\", \"Chimamanda Ngozi Adichie\"))\nlib.add(Book(\"The Hobbit\", \"J. R. R. Tolkien\"))\nprint(lib.lend(\"The Hobbit\"))\nprint(lib.lend(\"The Hobbit\"))\nfor b in lib.books:\n    print(b)\nprint(\"Available:\", lib.available())",
"out": "You borrowed The Hobbit\nThe Hobbit is not available\nHalf of a Yellow Sun (Chimamanda Ngozi Adichie) - available\nThe Hobbit (J. R. R. Tolkien) - on loan\nAvailable: ['Half of a Yellow Sun']"
}
]
}
]
};
