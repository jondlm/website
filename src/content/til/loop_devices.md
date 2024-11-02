---
published: true
title: "Loop Devices"
date: 2023-03-08
tags: ["fs"]
---

When you run `mount files.sqfs some_dir` there's quite a bit that goes on behind the curtain. Using `strace` it's pretty clear what happens. The `mount` utility actually creates a "loop" device first, then mounts that device to `some_dir`. A loop device is way to take a file on disk and make it available as a mountable device.

I learned this while trying to figure out how to mount SquashFS files within our Firecracker sandbox using Go.

| cmd | desc |
| --- | --- |
| `losetup --list` | lists loop devices and what files they point to. typically `/dev/loop0`, etc |