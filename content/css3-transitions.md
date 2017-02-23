+++
title       = "CSS3 Transitions and Images"
description = "Learn about a mistake I ran into when first using CSS transitions"
date        = "2013-08-15"
tags        = ["tips", "css", "animation"]
comments    = true
+++

<style type="text/css">
  #kittydiv {
    min-height: 300px;
  }
  #kitty{
    transition-property: width, height;
    transition-timing-function: ease;
    transition-duration: 1s;
  }
  #kitty:hover {
    height: 200px;
    width: 200px;
  }
  #kittydiv2 {
    min-height: 300px;
  }
  #kitty2 {
    margin-right: 50px;
    transition-property: width, height;
    transition-timing-function: ease;
    transition-duration: 1s;
    width: 300px;
    height: 300px;
  }
  #kitty2:hover {
    width: 200px;
    height: 200px;
  }
</style>

If used tastefully, CSS transitions and animations are a great way to spice up
modern web sites. Today I learned about one of the pitfalls. It's a subtle
nuance, but once you know it you should be ready to pimp your site.

Transitions work mostly like you think they would. Here's my general work flow:

1. Pick a CSS property, or properties. There is [a list](https://developer.mozilla.org/en-US/docs/CSS/CSS_animated_properties) Mozilla maintains of properties are animatable.
2. Pick which timing function you want the transition to use. You'll probably want either `ease` or `linear`.
3. Pick how long you want the transition to take written with an `s` suffix meaning "seconds".


```css
#kitty{
  transition-property: width, height;
  transition-timing-function: ease;
  transition-duration: 1s;
}
```

## The Hiccup

All that seemed well and good, but I found one caveat. If you are animating `width` for instance, you **must** make sure the element has a pre-defined `width` before you animate it to something else, otherwise browsers can do some funky things. I'll show you a bad example followed by a good one. I'm leaving out vendor prefixes for brevity. Tip: hover over the images to see the example. I hope you aren't on a mobile device...

### Wrong

```css
img {
  transition-property: width, height;
  transition-timing-function: ease;
  transition-duration: 1s;
}

img:hover {
  width: 200px;
  height: 200px;
}
```

<div id="kittydiv">
  <img id="kitty" src='http://placekitten.com/300/300'>
</div>

In chrome, the effect is startling. The image disappears into a tiny dot before reappearing. Strange.

### Right

```css
img {
  transition-property: width, height;
  transition-timing-function: ease;
  transition-duration: 1s;
  width: 300px;
  height: 300px;
}

img:hover {
  width: 200px;
  height: 200px;
}
```

<div id="kittydiv2">
  <img id="kitty2" src='http://placekitten.com/300/300'>
</div>

The solution is to make sure you explicitly define a `width` and `height` before you change them.

Happy trails.


