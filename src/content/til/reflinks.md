---
published: true
title: "Reflinks"
date: 2022-04-13
tags: ["filesystem"]
---

Reflinks are a new type of link similar to hard links. The big difference is
when you edit a file, it's copied and the original file is left untouched! It's
also known as "copy on write" (COW).

It's only supported on some file systems right now:

- Linux
  - BTRFS
  - XFS
  - OCFS2
- Mac OS X
  - APFS
