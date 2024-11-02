---
published: true
title: "Use `sed` to print a specific line"
date: 2023-10-25
tags: ["sed"]
---

Here's a simple `sed` command to print a specific line from a file:
```bash
sed -n '5p' <file>
```

By default sed will print all lines of the input file. The `-n` suppresses that behavior and only prints modified lines. Or, in our case just the printed line.