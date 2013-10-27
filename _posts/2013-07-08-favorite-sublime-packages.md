---
layout: post
title: Favorite SublimeText Packages
description: "SublimeText is a popular text and code editor. Come see what packages make it shine even brighter."
modified: 2013-07-08
tags: [tips apps sublimetext2]
image:
  feature: abstract-9.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
comments: true
share: true

# Favorite SublimeText Packages

First off, if you don't use SublimeText, [get it](http://sublimetext.com). It's by far the best text editor I've encountered. I use it as a general purpose editor and as a place to write code. SublimeText rocks on its own, but it **really** starts to shine once you install [Will Bond's Package Control](http://wbond.net/sublime_packages/package_control#Features). See my [StackOverflow post](http://stackoverflow.com/questions/15819354/how-to-enable-code-hinting-for-css-in-sublime-text-2/15819607#15819607) for instructions on installing Package Control.

Once you have Package Control installed, getting new packages, that augment SublimeText, is a snap. This article contains my favorite packages, and reasons why I use and love them. Links are *not* included because once you have Package Control, you don't need links, just the package names; it handles all the installing for you.

## Alignment

Alignment helps me keep things tidy when I am writing code. I am especially fond of it when I need to write SQL queries, or other strangely aligned code. Here is an example of what it can do in few keystrokes:

```sql
SELECT
  FirstColumn as alias1,
  SecondColumn as alias2,
  ThirdColumn as alias3
FROM Table
```

to

```sql
SELECT
  FirstColumn   as alias1,
  SecondColumn  as alias2,
  ThirdColumn   as alias3
FROM Table
```

## DocBlokr

Makes formatting comments a breeze.

```javascript
///////////////////////////
// This is comment block //
///////////////////////////
```

## Emmet

Emmet is the newest iteration of a thing previously called Zen Coding. It makes writing HTML really nice.

```html
ul>li*5
```

to 

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

## EasyMotion

EasyMotion is hard to explain, it should rather been seen, [here](https://github.com/tednaleid/sublime-EasyMotion). It basically helps you move your cursor somewhere on the page, super fast.

## Markdown Preview

I am using this right now! It allows you to preview markdown in your browser. It even works with LiveReload, a browser plugin, to refresh on save.

## LiveReload

This one does just what you think it might, reloads HTML pages without having to refresh. On the backend, it's using websockets. I've had some trouble with this one on Windows, but I hear it works swell on Macs.

## SublimeLinter

This package will lint your code as you write it. In other words, it will give you code suggestions and validation. Very handy when working in dynamic languages like JavasScript. Configuring this one with Node.js takes a small amount of work up front.

## SidebarEnhancements

Adds a bunch of functionality to the side bar of sublime. A must have.

<br> Thanks for reading. Have a lovely `dayOrNight`.

