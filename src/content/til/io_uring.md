---
published: true
title: "io_uring"
date: 2022-08-29
tags: ["performance"]
---

There is a whole new, high performance, async way of performing linux syscalls
that is taking shape and is widely available already.

> Put simply, io_uring is a system call interface for Linux. It was first
> introduced in upstream Linux Kernel version 5.1 in 2019 [1]. It enables an
> application to initiate system calls that can be performed asynchronously.
> Initially, io_uring just supported simple I/O system calls like read() and
> write(), but support for more is continually growing, and rapidly. It may
> eventually have support for most system calls
- [source](https://www.graplsecurity.com/post/iou-ring-exploiting-the-linux-kernel)

This could have large implications for a high performance package manager.

Go lang kinda sucks for using io_uring at the moment. Let's check on rust...

Rust looks a little better but still pretty nascent.

- [scylla article about it](https://www.scylladb.com/2020/05/05/how-io_uring-and-ebpf-will-revolutionize-programming-in-linux/)
- [go lang article](https://developers.mattermost.com/blog/hands-on-iouring-go/) - uses cgo 8(
