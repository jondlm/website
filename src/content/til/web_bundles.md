---
published: true
title: "Web bundles"
date: 2021-09-01
tags: ["web"]
---

Chrome is piloting a new feature in which multiple HTTP resources can be
bundled together into a single "binary" file. They are touting it as a way to
make offline apps better but I'm more interested in how it could affect our app
performance which loads lots of bundles.

I hope this becomes a thing eventually.

**Update (2024-07-26)**: Looks like this has largely stalled out. There are a lot of good ideas, POCs, etc in [this repo](https://github.com/WICG/webpackage) but folks are rightly concerned about breaking the security model of the web.
