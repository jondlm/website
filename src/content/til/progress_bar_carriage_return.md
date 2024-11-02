---
published: true
title: "Carriage returns for progress bars"
date: 2021-08-25
tags: ["terminal"]
---
`\r` is a carriage return and you can prepend your `printf` with it to write
over the current line.

Example that will print 1 to 100:
```bash
for n in `seq 1 100`; do sleep 1; printf "\r$n"; done
```

I've long wondered specifically which control characters were used to produce
progress bars on the terminal. Today I learned it's really easy! Neat!

**Caveat** it's only replacing characters. If your previous string was longer
than the current one you'll have hangovers. You can see it with this command:

```bash
for n in longer med s; do printf "\r$n"; sleep 2; done
```

