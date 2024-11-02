---
published: true
title: "Linux memory page size"
date: 2023-02-09
tags: ["kernel"]
---

Linux has a page size of 4096 bytes as defined in the [linux kernel](https://github.com/torvalds/linux/blob/e544a07438522ab3688416e6e2e34bf0ee6d8755/include/asm-generic/page.h#L20). Some tools, like the OOM killer, report memory stats in page sizes so it's useful to keep this handy.

Sounds like it's possible for different architectures to have different values. I don't completely understand that since `asm-generic` seems... generic.
