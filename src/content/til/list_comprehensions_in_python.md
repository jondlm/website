---
published: true
title: "List comprehensions in Python"
date: 2023-02-17
tags: ["python"]
---

I've learned these before but it's been many years. Here's a helpful little snippet that clicked for my brain:

```
new_list = [expression for member in iterable]
```

Example:
```python
l = [1,2,3]

[n for n in l] #=> [1, 2, 3]
[n * n for n in l] #=> [1, 4, 9]
```