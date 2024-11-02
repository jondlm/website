---
published: true
title: "Find disk usage excluding hardlinks"
date: 2021-08-30
tags: ["filesystem"]
---
I recently started working with pnpm and I was curious to find the size of my
node_modules. I first tried a naive `du` but that appeared to be the same size
as the equivalent `yarn` copy. Then I found you can use `find . -type f -links
1` which will exclude hard links. Turned out it was only a few 100KiB of files!

