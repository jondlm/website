---
layout: post
title: The Ultimate Mac, Vim, and Tmux setup
description: "My personal mac setup"
modified: 2014-08-08
tags: [mac,vim,tmux,iterm2,zsh,solarized,homebrew]
image:
  feature: abstract-7.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
comments: true
share: true
---

I grew up using Macs, was forced back to Windows for a job, worked on Ubuntu
for a while, and now have finally landed back in the Mac realm. After having
been around the block on just about every platform, I can safely argue that
Mac's are better for a developer who’s serious about Linux but doesn't want to
sacrifice a quality UI.

One of the hardest things about setting up a new box is figuring out all the
quirky setup nuances that make your box shine. This post is the chronicle of my
most recent, most ultimate setup yet.

This was all performed on a fresh MacBook Air, but really anything running
Mavericks works.

# Ingredients

- [iTerm2](http://www.iterm2.com/#/section/home) replaces the stock *Terminal*
  app
- [Alfred](http://www.alfredapp.com/) replaces the default Mac *Spotlight*
- [Homebrew](http://brew.sh/) manages all your command line packages
- [Solarized Colors](http://ethanschoonover.com/solarized/files/solarized.zip)
  makes your command line pretty
- [Vim](http://en.wikipedia.org/wiki/Vim_(text_editor)) the best, and hardest,
  text editor and IDE that is worth learning if you are serious about computers
- [jVim](http://github.com/jondlm/jvim) my personal vim, and extras, setup
- [Tmux](http://en.wikipedia.org/wiki/Tmux) manages windows within your
  terminal. It lets you open up and resize several terminal windows without
  leaving the keyboard and reaching for that dirty mouse.
- [Zsh](http://en.wikipedia.org/wiki/Z_shell) a better shell that is bash
  backwards compatible
- [Oh my zsh](https://github.com/robbyrussell/oh-my-zsh) some nice default
  settings and themes for zsh

# Getting Started

## Installing

Start by downloading and install iTerm, Alfred, Homebrew, and Solarized
(imported into iTerm2 from [this file][solar-file]). Once you have that done,
setup your iTerm2 profile to use your newly imported *Solarized Dark* theme.
Also make sure your “Report terminal type” is set to `xterm-256color`. Then
let’s keep going on the installation by hopping into iTerm2 and running some
shizz.

Homebrew installs stuff in `/usr/local/bin` so let’s add it to our path by
modifying `~/.bashrc` and `~/.zshrc`

    echo “PATH=/usr/local/bin:/usr/local/sbin:$PATH" | tee ~/.bashrc ~/.zshrc

Install zsh, vim, tmux, and something to connect your Mac's clipboard to Vim:

    brew install zsh tmux vim reattach-to-user-namespace

Tell your mac to permit your custom shell:

    echo “/usr/local/bin/zsh” | sudo tee -a /etc/shells

Change your default shell:

    chsh -s /usr/local/bin/zsh $USER

Move a folder to account for some Mac bug:

    sudo mv /etc/{zshenv,zshrc}

Install oh-my-zsh:

    curl -L http://install.ohmyz.sh | sh

Install jVim to your home directory:

    git clone https://github.com/jondlm/jvim.git ~/.jvim
    cd ~/.jvim
    git submodule update --init --recursive
    ./install.sh bonus

Restart iTerm2.

Install some more stuff with `brew`:

    brew install vim tmux reattach-to-user-namespace

Fire up Tmux:

    tmux

Setup vim:

    vim
    # ignore errors for now
    :BundleInstall

## Interlude...

To be honest, I started writing this article several months ago and never
finished it. I suspect these steps are correct, but your mileage may vary.

Fin.

[solar-file]: https://github.com/altercation/solarized/blob/master/iterm2-colors-solarized/Solarized%20Dark.itermcolors


