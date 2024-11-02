---
published: true
title: "Inspect environment variables of running process"
date: 2023-10-19
tags: ["linux"]
---

Turns out there's a way to inspect the environment variables of a running process. Neat! Scary? There's a file you can `cat` in `/proc` that has a null terminated string. Here's a nice way to do it:

```bash
sudo cat /proc/<pid>/environ | tr '\000' '\n'
```

`tr` helps replace nulls with linebreaks.
