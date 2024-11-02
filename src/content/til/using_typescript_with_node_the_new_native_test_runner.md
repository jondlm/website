---
published: true
title: "Using TypeScript with Node & the New Native Test Runner"
date: 2023-06-09
tags: ["node","typescript"]
---

I learned about a project called [`tsx`](https://github.com/esbuild-kit/tsx). It uses `esbuild` to allow Node to "natively" use TypeScript files. It's like a much nicer version of `ts-node`. I found it much better to use.

Here's an example of using it to run TypeScript tests that use the new native test runner built into Node:

package.json
```json
"scripts": {
  "test": "find src -name '*.test.*' | xargs tsx --test",
  "test:watch": "find src -name '*.test.*' | xargs tsx --test --watch"
}
```

I had to use `find` because the shell expansion wasn't working like normal in the script.

Here's an example test:
```typescript
import assert from "node:assert/strict";
import test from "node:test";

test("test", () => {
  assert(false);
});
```