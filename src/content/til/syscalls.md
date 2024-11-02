---
published: false
title: "Syscalls"
date: 2023-03-09
tags: ["linux"]
---

I asked GPT to describe how syscalls work:

> Syscalls (short for system calls) are the interface between user-space programs and the operating system kernel in Linux. They are the means by which a user-level program can request a service from the kernel, such as file I/O, network communication, process management, and memory allocation.
>
> When a program wants to make a syscall, it first needs to load the appropriate syscall number into a register. The exact number varies depending on the specific syscall being invoked. The program also needs to load any necessary arguments into other registers or onto the stack.
>
> Once the program has prepared the necessary registers and/or memory locations, it issues a software interrupt using the "int" instruction, which transfers control to the kernel. The kernel then examines the syscall number and arguments, and performs the requested operation.
>
> If the syscall is successful, the kernel returns the results to the program via the appropriate registers or memory locations. If the syscall fails, the kernel returns an error code to indicate the reason for the failure.
>
> After the syscall has completed, control is returned to the calling program, which can then proceed with its normal execution.
>
> In summary, syscalls provide a way for user-level programs to interact with the kernel and perform various operations that require kernel-level privileges or resources. They are an essential component of the Linux operating system and enable a wide range of functionality for user-level programs.

Combine that with this handy little snippet I snagged from stackoverflow:
```sh
printf SYS_stat | gcc -include sys/syscall.h -E -
```

That returns the "number" assigned to a system call (along with a bunch of other stuff before the final line). Then you need to lookup docs on that... I don't know how...

Then I asked GPT about how that intersects with glibc:

> glibc (GNU C Library) is a library of C programming language functions that provide a high-level interface to the Linux kernel system calls. glibc is designed to be used by applications written in C and C++.
>
> When a program written using glibc makes a syscall, the glibc function responsible for that syscall is called. This function performs the necessary setup of the syscall arguments, loads the syscall number into the appropriate register, and issues the software interrupt to transfer control to the kernel.
>
> Once the syscall has completed, control is returned to the glibc function, which examines the result and performs any necessary error handling. The glibc function then returns the result to the calling program in a form that is compatible with the higher-level interface provided by glibc.
>
> In some cases, glibc may also provide additional functionality that goes beyond the basic system call interface provided by the kernel. For example, glibc provides functions for string manipulation, memory management, and other common programming tasks that are not directly related to system calls.
>
> In summary, glibc acts as an intermediary between user-level programs and the kernel system calls. It provides a high-level interface to the system calls that makes it easier for programmers to write applications that interact with the operating system.
