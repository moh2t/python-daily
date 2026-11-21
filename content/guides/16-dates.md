## The datetime module
Python handles dates and times with the `datetime` module. It has a few main types:

- `date` for a calendar day: year, month, day
- `time` for a time of day: hour, minute, second
- `datetime` for both together
- `timedelta` for a length of time, like "3 days" or "2 hours"

```py
from datetime import date, time, datetime, timedelta
print(date(2026, 11, 21))
print(time(9, 30))
print(datetime(2026, 11, 21, 9, 30))
print(timedelta(days=3, hours=2))
```

## Today and now
`date.today()` gives today's date and `datetime.now()` gives the current date and time. The output changes every time you run them, so this example only shows their types; press Try it to see your own date.

```py
from datetime import date, datetime
today = date.today()
now = datetime.now()
print(type(today).__name__, type(now).__name__)
print(today.year > 2000)
```

## Reading the parts of a date
Every date and datetime has its parts as attributes.

```py
from datetime import datetime
moment = datetime(2026, 11, 21, 14, 5, 30)
print(moment.year)
print(moment.month)
print(moment.day)
print(moment.hour)
print(moment.minute)
print(moment.second)
print(moment.weekday())      # Monday is 0, Sunday is 6
print(moment.isoweekday())   # Monday is 1, Sunday is 7
print(moment.date())
print(moment.time())
```

## Formatting dates with strftime
`strftime()` ("string from time") turns a date into text in the format you choose. You build the format from codes that start with `%`:

- `%Y` year (2026), `%y` short year (26)
- `%m` month number (11), `%B` month name (November), `%b` short name (Nov)
- `%d` day of the month (21)
- `%A` weekday name (Saturday), `%a` short weekday (Sat)
- `%H` hour 00-23, `%I` hour 01-12, `%M` minutes, `%S` seconds, `%p` AM or PM

```py
from datetime import datetime
moment = datetime(2026, 11, 21, 14, 5, 30)
print(moment.strftime("%d/%m/%Y"))
print(moment.strftime("%Y-%m-%d"))
print(moment.strftime("%A %d %B %Y"))
print(moment.strftime("%a %d %b, %I:%M %p"))
print(moment.strftime("%H:%M:%S"))
print(f"{moment:%d %B %Y}")   # f-strings understand the same codes
```

## Reading dates from text with strptime
`strptime()` ("string parse time") does the opposite: it reads text and makes a datetime. The format must match the text exactly.

```py
from datetime import datetime
d = datetime.strptime("21/11/2026", "%d/%m/%Y")
print(d)
print(d.strftime("%A"))
t = datetime.strptime("2026-11-21 18:45", "%Y-%m-%d %H:%M")
print(t.hour, t.minute)
```

```py error
from datetime import datetime
datetime.strptime("2026/11/21", "%d-%m-%Y")
```

For the standard `YYYY-MM-DD` format there is a shortcut, `fromisoformat()`, and `isoformat()` goes back the other way.

```py
from datetime import date
d = date.fromisoformat("2026-12-25")
print(d, d.isoformat())
```

## Differences between dates
Subtracting one date from another gives a `timedelta`. Its `.days` tells you how many days apart they are.

```py
from datetime import date
start = date(2026, 1, 1)
end = date(2026, 12, 25)
gap = end - start
print(gap)
print(gap.days, "days")
print(type(gap).__name__)
```

```py
from datetime import datetime
start = datetime(2026, 11, 21, 9, 15)
finish = datetime(2026, 11, 21, 17, 45)
worked = finish - start
print(worked)
print(worked.total_seconds() / 3600, "hours")
```

## Adding and subtracting time
Add or subtract a `timedelta` to move a date forward or back. Python handles month lengths and leap years for you.

```py
from datetime import date, timedelta
d = date(2026, 11, 21)
print(d + timedelta(days=10))
print(d - timedelta(weeks=2))
print(date(2028, 2, 28) + timedelta(days=1))   # 2028 is a leap year
print(date(2026, 12, 31) + timedelta(days=1))
```

```py
from datetime import datetime, timedelta
meeting = datetime(2026, 11, 21, 14, 0)
reminder = meeting - timedelta(minutes=15)
print(reminder.strftime("%H:%M"))
```

## Comparing dates
Dates compare with the usual operators: earlier dates are "less than" later ones. You can sort them and find the earliest with `min()`.

```py
from datetime import date
deadline = date(2026, 12, 1)
today = date(2026, 11, 21)
print(today < deadline)
print("Days left:", (deadline - today).days)
dates = [date(2026, 5, 1), date(2025, 9, 3), date(2027, 1, 15)]
print(min(dates))
print(sorted(dates))
```

## Working out an age
A practical example: how old is someone on a given day? Take the year difference, then subtract one if their birthday has not come yet this year.

```py
from datetime import date

def age_on(birthday, on_day):
    years = on_day.year - birthday.year
    if (on_day.month, on_day.day) < (birthday.month, birthday.day):
        years -= 1
    return years

print(age_on(date(1990, 12, 3), date(2026, 11, 21)))
print(age_on(date(1990, 6, 3), date(2026, 11, 21)))
```

## Calendars and the day of the week
The `calendar` module can print a month, and tell you about leap years.

```py
import calendar
print(calendar.month(2026, 11))
print(calendar.isleap(2028))
print(calendar.day_name[calendar.weekday(2026, 12, 25)])
```

## Putting it together
Counting down to several events from a fixed day, and printing them in order.

```py
from datetime import date
today = date(2026, 11, 21)
events = {
    "New Year": date(2027, 1, 1),
    "Christmas": date(2026, 12, 25),
    "Course ends": date(2026, 12, 12),
}
for name, day in sorted(events.items(), key=lambda e: e[1]):
    days = (day - today).days
    print(f"{name:<12} {day:%a %d %b}  in {days} days ({days // 7} weeks)")
```
