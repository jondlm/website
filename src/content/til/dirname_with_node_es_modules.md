---
published: true
title: "`__dirname` with Node ES modules"
date: 2023-11-16
tags: ["node"]
---

When using ES modules with node you can't access the old `__dirname` to get the path of the current file. There is a workaround however:

```js
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Under the hood `import.meta.url` looks something like this: `file:///Users/jon/foo.mjs`. The `fileURLToPath` converts the `file` protocol'd path like so:

```shell
> const {fileURLToPath} = require('url')
undefined

> fileURLToPath('file:///foo/bar')
'/foo/bar'

> fileURLToPath('http://foo/bar')
Uncaught TypeError [ERR_INVALID_URL_SCHEME]: The URL must be of scheme file
    at __node_internal_captureLargerStackTrace (node:internal/errors:490:5)
    at new NodeError (node:internal/errors:399:5)
    at fileURLToPath (node:internal/url:1492:11) {
  code: 'ERR_INVALID_URL_SCHEME'
}
```
