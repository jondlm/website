---
published: true
title: "Unref node timers"
date: 2021-08-26
tags: ["node"]
---

It's possible to mark a timeout/interval as "unref"ed which means it won't
prevent Node from exiting even if the timer hasn't finished yet. By default
timers will keep the node process alive until they complete.

```js
setTimeout(() => {}, 10000).unref()
// process can exit
```
