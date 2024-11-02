---
published: true
title: "tty"
date: 2022-09-09
tags: ["tty","terminal"]
---

You can use `tty` to determine which pseudo-teletype slave you're using to
interface to the master multiplexer. You can echo stuff to it and have it
appear in stdout!

```
$ tty
/dev/ttys008
$ echo hello > /dev/ttys008
```
