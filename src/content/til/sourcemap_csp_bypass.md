---
published: true
title: "sourceMappingURL bypasses CSP"
date: 2021-09-07
tags: ["js","security","sourcemap"]
---

Apparently `sourceMappingURL` (the little comment at the end of compiled JS
files) bypasses CSP and can be used to detect if the devtools are open. There's
this whole "anti debugging" area of interest that's [outlined
here][anti_debugging].

[anti_debugging]: https://medium.com/@weizmangal/javascript-anti-debugging-some-next-level-sh-t-part-2-abusing-chromium-devtools-scope-pane-b2796c00331d
