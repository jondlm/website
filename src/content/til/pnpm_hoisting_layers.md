---
published: true
title: "pnpm has two layers of hoisting"
date: 2022-06-09
tags: ["pnpm","js"]
---

Turns out pnpm, by default, hoists everything to `node_modules/.pnpm/node_modules`
meaning that deps can access each other's deps willy nilly. This is different
from the "public hoist pattern" which also hoists them to be available to
application code.

