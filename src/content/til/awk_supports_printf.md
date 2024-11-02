---
published: true
title: "Awk supports printf"
date: 2023-02-16
tags: ["awk"]
---

`printf` works in `awk` and makes it really nice for doing things like this:

```sh
while true; do x=$(ps -x -o pid,rss,command | grep -E "[t]sserver" | awk '{printf "%-8s %5d MiB -> %s\n", $1, $2 / 1024, $0}'); printf '\033[2J\n%s' "$x"; sleep 1; done
```

That's a command that'll get the RSS memory for `tsserver` printed nicely.