+++
title       = "Text Is the New Black"
description = "Learn how I rekindled my love for the command line and in turn discovered the power of a text based workflow. I'll be discussing my use of Vim, Tmux, and Linux."
date        = "2013-10-29"
tags        = ["vim", "tmux", "linux", "command-line", "productivity"]
comments    = true
+++

A few months ago a [friend of mine][3] got me setup with an account on his
Linux box. This meant I had to relearn a ton of basic Linux commands I hadn't
used since high school. At first I was pretty frustrated. It was hard to get
anything done. But I liked the idea of a slim development machine running in
the cloud. One that I could leave on as long as I wanted. One that I could
connect to from any machine (even and iPhone in a pinch). Since most of my
development is just fancy text editing, I knew I had to step up me game.

**Warning, generalization:** a big epiphany for me as a programmer was
understanding that all programs essentially start out as a bunch of text files
sitting on a hard disk. There are a myriad of different file extensions, but
most of them can still be opened with good old [notepad++][1]. Files that
appear as a bunch of weird character typically mean that they have already been
compiled and you need a special program to interpret them. Reason would follow
that 20+ years of text based terminal systems would lead to pretty advanced
tooling. Turns out that's very true.

Anyway, let's explore the things I needed to learn before I could be productive
in a text only environment:

## Vim

Step one was to learn Vim. Vim is a text editor that you can practically turn
into an IDE. It's modal, meaning that the same keyboard shortcuts do different
things depending on what "mode" you are in. That is probably one of the biggest
barriers to entry. What I didn't realize was that Vim was the answer to *all*
my problems with writing text, whether it be code or a blog post. In summary,
if you want to be a text editing and code writing wizard, learn Vim. It's worth
every painful hour learning.

### Learning Resources

- [Vim incremental cheat sheets][4]: Print them out, paste them to your wall, fall in love
- [Vim Adventures][2]: an in-browser game that helps you learn the keyboard
  commands
- [Blog post][tb-blog-vim]: a post about the Vim learning curve

## Tmux and SSH

If you're using a mac, you won't need to use SSH because OSX is built on Unix.
Meaning you can run Unix commands and programs from the *Terminal* app. For us
folks still stuck on Windows, we need to be able to remote into another machine
running Linux; that's what SSH is for. Once you are connected to a Linux box,
you need something the manage your sessions. Tmux is a well know application
for Linux that stands for "terminal multiplexer". This is a fancy way of
saying, "it manages multiple windows and keeps your sessions running even when
you disconnect from the machine". It does other stuff too, but those are the
highlights. It's hard to understate how much more productive Tmux makes you
when working in a text environment. I tried using both [GNU Screen](screen) and
Tmux, I like Tmux much better. Here's me using Tmux to write this post:

![using Tmux](/images/tmux.png)

### Learning Resources

- [Blog post][tb-blog-tmux]: a Tmux crash course
- [Blog post][tb-blog-tmux2]: more great beginner Tmux tips

Look, I know this stuff is scary. I thought I'd never be able to learn it. But,
with a bit of patience and perseverance, you'll fall in love with the text way
of life.


  [1]: http://notepad-plus-plus.org/
  [2]: http://vim-adventures.com/
  [3]: https://twitter.com/s5fs
  [4]: http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
  [screen]: https://www.gnu.org/software/screen/
  [tb-blog-tmux]: http://robots.thoughtbot.com/a-tmux-crash-course
  [tb-blog-vim]: http://robots.thoughtbot.com/the-vim-learning-curve-is-a-myth
  [tb-blog-tmux2]: http://robots.thoughtbot.com/love-hate-tmux


