---
published: true
title: "SSH Port Forwarding"
date: 2023-04-25
tags: ["ssh"]
---

You can use SSH to forward ports! It's super handy for lots of stuff. Example:

```bash
H=example.com; ssh -nNTL 5555:$H:4444 $H
```

If your program only binds to `127.0.0.1` try this instead:

```bash
ssh -nNTL 5555:127.0.0.1:4444 example.com
```

Will take port `4444` on the remote host and make it available at `5555` on your local machine.

- `-nNT` work together to disable the interactive terminal that you'd normally get
- `-L` does the port forwarding
