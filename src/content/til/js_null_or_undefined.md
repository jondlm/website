---
published: true
title: "Check for null or undefined in JS"
date: 2021-09-01
tags: ["js"]
---

While working on the [metro](https://github.com/facebook/metro) codebase I
found a curious convention enforced by their linter:

```js
let foo = null;
let bar = undefined;
let baz = "";

foo == null; // => true
bar == null; // => true
baz == null; // => false
```

`== null` checks for `null`or `undefined` which is incredibly common in JS. Notice
it's just two equal signs `==` which normally folks learn to avoid. I can't
believe I didn't know this one.
