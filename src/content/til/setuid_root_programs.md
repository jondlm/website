---
published: true
title: "setuid root programs"
date: 2023-02-08
tags: ["fs"]
---

It's possible for a binary to be "setuid root" meaning it has root privileges. `fusermount` is an example of this. If you run `stat -c %a <file>` you'll see something like this:
```
4755
^^^^
||||
||||- all users read + exec
|||- group read + exec
||- owner read + write + exec
|- setuid
```

The first octet determines a few things:
```
001 = sticky bit (changes the way deletes work, i dont totally get it, usually set on /tmp to prevent folks from stepping on each other)
010 = setgid (something to do with groups, dont know)
100 = setuid (allows the binary to act as root, very dangerous if not used safely)
```