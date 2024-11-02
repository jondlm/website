---
published: true
title: "Script `type=\"module\"`"
date: 2024-01-23
tags: ["javascript","html"]
---

Today I learned it's really important to specify `type="module"` on your `<script` tags if you want to use any dynamic [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) statements. If you don't, you'll likely see some cryptic error like:

```
TypeError: Failed to resolve module specifier './de-DE.09c74a0d.js'. The base URL is about:blank because import() is called from a CORS-cross-origin script.
```

That example is what we saw in the wild when it was missing within an iframe.
