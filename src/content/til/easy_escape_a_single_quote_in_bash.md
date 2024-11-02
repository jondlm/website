---
published: true
title: "Easy escape a single quote in bash"
date: 2022-07-27
tags: ["bash"]
---

Bash (and zsh) has a handy `$'string'` syntax with sane escape sequences.

Here's an example of how to print a single quote using this technique:
```
printf $'\''
```
More info: https://stackoverflow.com/a/16605140