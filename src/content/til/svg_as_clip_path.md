---
published: true
title: "SVG as clip-path"
date: 2024-09-30
tags: ["svg","html","css"]
---

You can use an svg path as the `clip-path` to clip an image:

```html
<img class="clip-svg" src="foo.jpg">

<svg width="0" height="0">
  <defs>
    <clipPath id="myClip">
      <circle cx="100" cy="100" r="40" />
      <circle cx="60" cy="60" r="40" />
    </clipPath>
  </defs>
</svg>
```

```css
.clip-svg {
  clip-path: url(#myClip);
}
```

More info here: https://css-tricks.com/clipping-masking-css/#aa-using-clip-path-with-an-svg-defined-clippath