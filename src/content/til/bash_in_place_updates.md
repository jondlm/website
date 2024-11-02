---
published: true
title: "In place file updates in Bash"
date: 2021-09-09
tags: ["bash"]
---

I've learned this one several times over the years so I'm finally writing it
down. And this time I learned about a GNU utility called `sponge` that addresses
this exact problem. It's not always available though.

This doesn't work:
```bash
echo test > foo
cat foo > foo
```

You'll end up with an empty file. The solution is to either write to a temp
file and write over the original, or use `sponge`:

```bash
echo test > foo
cat foo | sponge foo
```

You can get sponge (and some other [goodies](https://joeyh.name/code/moreutils/)) on a Mac with:

```bash
brew install moreutils
```
