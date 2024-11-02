---
published: true
title: "OverlayFS"
date: 2023-03-02
tags: ["fs"]
---

OverlayFS is a union filesystem that allows you layer a read/write file system in top of another read-only filesystem. That is really neat! Example

```sh
mount -t overlay overlay -o lowerdir=/lower,upperdir=/upper,workdir=/work /merged
#                                    ^ base read only dir
#                                                    ^ where writes will go
#                                                                   ^ must be empty
#                                                                         ^ actual mount point
```

More info: https://jvns.ca/blog/2019/11/18/how-containers-work--overlayfs/

Turns out it's possible to use this with squashfs. Here's an example:

```
├── files.sqfs
├── merged
│   ├── characters.txt  <- "link" to the squash file
│   └── upper_file      <- writes to this file will land in `upper/upper_file`
├── sqfs_mountpoint
│   └── characters.txt  <- real read-only file
├── upper
│   └── upper_file
└── work
    └── work [error opening dir]
```

Roughly done like this:
```sh
sudo su
mkdir sqfs_mountpoint merged upper work
mount files.sqfs sqfs_mountpoint
mount -t overlay overlay -o lowerdir=sqfs_mountpoint,upperdir=upper,workdir=work merged
```