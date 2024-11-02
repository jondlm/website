---
published: true
title: "Migrations"
date: 2023-11-28
tags: ["advice"]
---

I'm in a training today with Aspect Dev learning about Bazel. Alex Eagle kicked off the session by giving high level advice for migrations. I want to record the high level bits of advice for furture reference:

- Incubate net promoters
- Don't disrupt workflows
- Change one thing at a time
- Ratchet mechanism
- Gradient ascent (always make things better, might not get to global maximum)
- Close the loop
- Leave the code alone
- Leave few fingerprints
- Patch and PR (eg pnpm's `patch`, most (?) bazel rules have `patch_args` where you can pass patch files)