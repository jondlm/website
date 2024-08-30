---
layout: post
title: File Watching for Much Win
description: "How to use fswatch for much win"
modified: 2015-08-28
tags: [fswatch]
image:
  feature: abstract-5.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
comments: true
share: true
---

## File Watching for Much Win

File watching is a pretty neat tool.

    fswatch . -l 0.1 | egrep --line-buffered '\.(js|jsx)$' | xargs -n1 -I{} node index.js
    fswatch *.go -l 0.2 | xargs -n1 go run
    fswatch . -l 0.2 | egrep --line-buffered '\.(go)$' | xargs -n1 go run
    fswatch . -l 0.2 | xargs -n1 -I{} echo "a file was saved"
    fswatch . -l 0.2 | xargs -n1 -I{} echo "a file was saved"
    fswatch . -l 0.1 | egrep --line-buffered '\.(js)$' | xargs -n1 -I{} echo "a javascript file was saved"

