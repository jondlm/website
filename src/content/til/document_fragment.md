---
published: true
title: "DocumentFragment"
date: 2021-08-12
tags: ["frontend"]
---

A [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) is a detached DOM node that can be manipulated without
causing the page to re-render. It's primarily a performance optimization
strategy but can be useful if you need to make a lot of DOM manipulations and
you don't want to cause a reflow on each change.

