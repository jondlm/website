---
published: true
title: "Debugging Rust with LLDB"
date: 2023-08-28
tags: ["rust","lldb","debug"]
---

Context: while looking into a [Parcel bug](https://github.com/parcel-bundler/parcel/issues/9140) I found myself needing to debug some of the Rust code that uses swc.

Turns out we can use common tools that C/C++ developers use as long as the Rust code was compiled with debug symbols. By default cargo, and napi, do this so it's actually quite easy to do.

The first trick is to put the following into the Rust code so you can have some time to attach the debugger:

```rust
println!(
  "Sleeping for 60s. Run the following to attach a debugger:\nrust-lldb --attach-pid {}",
  std::process::id()
);
std::thread::sleep(std::time::Duration::from_secs(60));
```

Then run `rust-lldb --attach-pid <pid>` which should drop you into the repl debugger.

You should see something like this:
```
Process 76274 stopped
* thread #1, queue = 'com.apple.main-thread', stop reason = signal SIGSTOP
    frame #0: 0x000000018157f50c libsystem_kernel.dylib`__semwait_signal + 8
libsystem_kernel.dylib`:
->  0x18157f50c <+8>:  b.lo   0x18157f52c               ; <+40>
    0x18157f510 <+12>: pacibsp
    0x18157f514 <+16>: stp    x29, x30, [sp, #-0x10]!
    0x18157f518 <+20>: mov    x29, sp
Target 0: (node) stopped.
Executable module set to "/Users/jdlm/.nodenv/versions/18.14.0/bin/node".
Architecture set to: arm64e-apple-macosx-.
(lldb)
```

In this case I'm debugging a Rust program that's fed to node.js via napi. The JS has a `require('./some-binary-file.node')` that contains the compiled Rust code.


Here are some operations I have found useful so far once I'm in the attached `(lldb)` repl:

| cmd              | desc                                                                                          |
| ---              | ---                                                                                           |
| `bt`             | **Start here**: show backtrace. Useful to find the source file names for setting breakpoints. |
| `b file.rs:123`  | Set breakpoint in `file.rs` at line `123`                                                     |
| `b`              | List all breakpoints                                                                          |
| `c`              | Continue exectuion                                                                            |
| `v`              | List variables                                                                                |
| `f`              | Show current position (frame)                                                                 |
| `p some_var`     | Print a variable. Might need `*some_var` to deference pointers                                |
| `p *node->span`  | Print a specific field on a variable                                                          |
| `n`              | Step over                                                                                     |
| `s`              | Step into                                                                                     |
| `finish`         | Step out. Can also provide a number of frames to step out of.                                 |
| `frame select N` | Lets you move up and down the stack by selecting frame number `N`                             |
| `kill`           | Kills the attached process                                                                    |
| `help`           | 🙏                                                                                            |

Once you have a breakpoint set, use `c` to continue execution to that point.
