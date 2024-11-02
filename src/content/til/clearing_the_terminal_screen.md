---
published: true
title: "Clearing the terminal screen"
date: 2023-02-10
tags: ["terminal"]
---

`printf '\033[2J'` clears the screen. Use double buffering to avoid flicker: https://unix.stackexchange.com/a/126153