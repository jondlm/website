+++
title       = "Vim Cheat Sheet"
description = "My personal Vim cheat sheet"
date        = "2014-04-02"
tags        = ["cheat-sheet", "linux", "vim"]
comments    = true
+++

Vim is hard. Vim is scary. So was Git the first time I used it. If you stick
with it, you'll never want to use another text editor. Also see my [vimrc] if
you're into that kind of thing.

General

- `:edit` reloads the current file
- `ctrl-e` open/close NERDTree sidebar

Selecting

- `vip` visually select the current paragraph

Line breaking

- `gqq` breaks lines so they don't exceed 80 characters, AWESOME!
- `gqip` break lines for the current paragraph
- `:set textwidth=80` super handy for auto line breaking, use with `gqq` too

Sorting

- `:sort` sort all lines by string, works over visual selects too
- `:sort n` sort by number
- `:sort /*.\~/` sort by anything after the first instance of `~`

Folding

- `:set foldmethod=indent` turn on folding by indentation
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

Add `autocmd BufNewFile,BufRead *.jade set filetype=jade` to `.vimrc` to ensure
.jade files have their type set correctly. Works for other stuff too.

[vimrc]: https://github.com/jondlm/jvim/blob/master/.vimrc

