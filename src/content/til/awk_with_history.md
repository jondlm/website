---
published: true
title: "awk with `history`"
date: 2023-02-01
tags: ["awk"]
---

Here's a handy one-liner with awk to get a clean history of commands on a machine:

```
history | awk '{$1="";$2="";$3="";print $0}' | sed -E 's/^[ ]+//'
```

The trick I learned is that you can just set `$1` and friends to an empty string to effectively skip fields.