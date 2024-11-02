---
published: true
title: "One-line Python HTTP server"
date: 2023-10-03
tags: ["http"]
---

I use this one a lot to serve static files. It's very handy! You may need to
bind to `127.0.0.1` if your machine doesn't have a `localhost` entry for its
loopback device.

```bash
python3 -m http.server -b localhost 8000
```
