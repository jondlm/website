---
published: true
title: "Macs don't always rely on /etc/resolv.conf"
date: 2021-09-22
tags: ["mac", "dns"]
---

Turns out you can't rely on `/etc/resolv.conf` alone to determine which DNS
servers your Mac is using. You need to use `scutil --dns` to find the "hidden"
resolvers (e.g. defined by VPN magic).

