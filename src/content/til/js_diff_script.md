---
published: true
title: "JS diff script"
date: 2024-02-29
tags: ["shell","javascript"]
---

I wrote a handy little script to diff two JS files. It uses `prettier` and `bat`. Here it is:

```bash
#!/usr/bin/env bash
set -euo pipefail

before=$(realpath "$1")
after=$(realpath "$2")
dir="$HOME/diffs/$(date "+%Y-%m-%dT%H:%M:%S")/"

mkdir -p "$dir"

cp "$before" "$dir"/before.js
cp "$after" "$dir"/after.js

printf "before: %s\n" "$before" >> "$dir/info.txt"
printf "after:  %s\n" "$after" >> "$dir/info.txt"

cd "$dir"

prettier --write before.js after.js >/dev/null
diff -u --color before.js after.js > result.diff || true
bat "$PWD/result.diff"
```