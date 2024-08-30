+++
title       = "Git Cheat Sheet"
description = "My personal Git cheat sheet"
date        = "2014-03-18"
tags        = ["cheat-sheet", "git"]
comments    = true
+++

I haven't been able to write many blog posts lately. I've been very busy and
have lots to share, but for the time being I am going to release a series of
cheat sheets I've been compiling for my own reference. Theses posts will
continually be updated as I find more useful commands. I'll kick the series off
with Git; the best source control on the planet.

## General

- `git show HEAD~5:file.txt` shows a file from 5 commits ago
- `git diff HEAD^ — file.txt` diff `file.txt` to the last commit
- `git diff master..remotes/origin/master` compares local master to remote origin master
- `git diff --stat` summary of changes by file and line number changes
- `git rebase -i` interactively rebase your commits, for example to squash commits into one before pushing
- `git reset --hard HEAD` WARNING: reset your directory to the HEAD state
- `git init` initalize a repo
- `git add --all` stage all changes
- `git commit -m "the first commit"` commit the changes
- `git checkout master -- file.html` checkout a file from another branch
- `git checkout HEAD -- file.html` checkout a file from HEAD
- `git log -L 100,100:path/to/a/file.txt` history for a single line (e.g. line 100) in a file

## Merge conflicts

- `git checkout --ours something.txt`
- `git checkout --theirs something.txt`

