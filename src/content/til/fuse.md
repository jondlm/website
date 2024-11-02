---
published: true
title: "FUSE"
date: 2023-02-06
tags: ["fs"]
---

Recently I've been learning about FUSE: filesystem in userspace. It's a way of writing a program to handle filesystem calls with a custom program. It allows the kernel to delegate file handling logic to a user space app.

Apparently it _can_ be quite a bit slower than normal file syscalls because of context switches between the kernel and userspace.

Here are some links:
- Interesting presentation on performance [here](https://events19.linuxfoundation.org/wp-content/uploads/2017/11/When-eBPF-Meets-FUSE-Improving-Performance-of-User-File-Systems-Ashish-Bijlani-Georgia-Tech.pdf). Talks about the ext
- Writing a fust filesystem in Rust [here](https://github.com/cberner/fuser)
- Bazel wrote a rust FUSE module for sandboxing that might be useful for the kind of testing I've been thinking about

It would be really interesting to create an optimized fuse system for `node_modules`. Who cares about windows amiright?