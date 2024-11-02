---
published: true
title: "Get script URL"
date: 2023-08-25
tags: ["js","dom"]
---

There's a _really_ handy little DOM api that gives you the URL for the currently loaded script. It's `document.currentScript.src`. [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript).

Example when used:
```js
console.log(document.currentScript.src);
// => "http://localhost:3000/_next/static/chunks/src_components_Workspace_tsx.js"
```

You can then parse that URL with `new URL(...)` and pluck out all the useful stuff you might need.