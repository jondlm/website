---
layout: post
title: Tmux Cheat Sheet
description: "My personal Tmux cheat sheet"
modified: 2014-04-07
tags: [cheat-sheet,tmux,linux]
image:
  feature: abstract-6.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
comments: true
share: true
---

Tmux is a terminal program that allows you have windows and persistent sessions.
Let's put that a bit simpler. Have you ever been working on the command line and
wished that you could open up two panes side by side? Have you ever accidentally
closed the command line terminal and lost your work? Tmux solves both those
problems, and a whole lot more. It's a indispensable tool for anyone who works
on the command line and it has a suppier. Learning the keyboard commands is a
challenge


################################################################################

Vim is hard. Vim is scary. So was Git the first time I used it. If you stick
with it, you'll never want to use another text editor.

General

- `:edit` reloads the current file

Line breaking

- `gqq` breaks lines so they don't exceed 80 characters, AWESOME!
- `:set textwidth=80` super handy for auto line breaking, use with `gqq` too

Sorting

- `:sort` sort all lines by string, works over visual selects too
- `:sort n` sort by number
- `:sort /*.\~/` sort by anything after the first instance of `~`

Folding

- `zM` fold everything
- `zR` unfold everything

Searching

- `:set smartcase` case sensitive if you use caps, otherwise not **recommended**
- `:set ignorecase` makes searching case insensitive by default
- `:set number` shows line numbers
- `:noh` clears you last `/` search

Indentation

- `:set expandtab=false` use real tabs
- `:set expandtab=true` use spaces instead of tabs
- `:set tabstop=2` my personal favorites
- `:set shiftwidth=2` my personal favorites
- `:retab` change existing tab characters to spaces depending on `expandtab`

Copy / paste

- `"ay` yanks your selection into register `a`
- `"ap` pastes the contents of register `a`
- `:reg` displays the contents of named registers

Key binding

- `imap ii <esc>` bind the key combo `ii` to the escape key

Screen movement

- `zz` center the screen on your cursor
- `zb` make the bottom of your screen flush with your cursor
- `zt` make the top of your screen flush with your cursor

Etcetera

add `autocmd BufNewFile,BufRead *.jade set filetype=jade` to `.vimrc` to ensure
.jade files have their type set correctly. Works for other stuff too.

