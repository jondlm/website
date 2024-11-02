---
published: true
title: "SVG sprites"
date: 2022-08-12
tags: ["svg"]
---

Suppose you have `/sprite.svg`:
```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <symbol id="sprite-arrow-down" viewBox="0 0 24 24">
    <title>arrow-down</title>
    <path d="M7.41 7.84 12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
  </symbol>
</svg>
```

You can load it on your page with:
```
<svg role="img">
  <use href="/sprite.svg#sprite-arrow-down"></use>
</svg>
```

`xlink:hfref` is deprecated in favor of just `href`

More info: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use