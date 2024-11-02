---
published: true
title: "Datamash"
date: 2024-07-18
tags: ["shell", "stats"]
---

I often need to gather rudimentary statistics on a sampling of numbers. For
example I recently was working on performance optimizations for a Rust swc
plugin I was writing at Stripe. I had a file with numbers like this that
represented the number of miliseconds it took to transform a single file:

Given a file `stats.txt`:
```
40.478041
40.72755
40.788834
40.847896
40.90488
41.224775
41.336781
41.581588
41.73413
```

Turns out there's a GNU tool called `datamash` that you can install with `apt`
or `brew`. You use it like this:

```bash
datamash --header-out count 1 min 1 max 1 mean 1 median 1 < ~/stats | column -t
```

The `column` part prints it nicely using the tab separators.

The output looks like this:
```
count(field-1)  min(field-1)  max(field-1)  mean(field-1)    median(field-1)
120             38.635759     69.312647     49.238020183333  46.318816
```
