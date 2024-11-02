---
published: true
title: "Bash substring check"
date: 2022-08-29
tags: ["bash"]
---

There's a simple, but non obvious, trick to check for substrings in bash:
```bash
if [[ "sally" == *"sal"* ]]; then
  printf "sal is in sally!"
fi
```