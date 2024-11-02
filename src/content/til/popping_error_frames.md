---
published: true
title: "Popping error stack frames"
date: 2021-09-07
tags: ["js"]
---

If you're throwing an `Error` you can set `framesToPop` to make the trace clearer:

```js
function throwError() {
  const e = new Error();
  e.framesToPop = 1; // skip this frame
  throw e;
}
```

