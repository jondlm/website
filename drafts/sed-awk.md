+++
title       = "cut sed awk Cheat Sheet"
description = "Some cut, sed, and awk snippets I find useful"
date        = "2017-06-13"
tags        = ["sed", "awk"]
+++

## sed

## awk

- `awk 'NR >= 50 && NR <= 100'` print lines 50 through 100
- `cat data | awk '/something/ {print $2}'` filter data then print the second column
- `cat animals.txt | awk '{ cnts[$0] += 1 } END { for (v in cnts) print cnts[v], v }'` performs a unique count

