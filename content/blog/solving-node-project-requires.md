+++
title       = "Solving Nodejs Relative Requires"
description = "A solution to the relative require problem with node"
date        = "2015-03-03"
tags        = ["javascript", "node", "tips", "command-line"]
comments    = true
+++

Have you ever seen this in your code?

```javascript
var thingy = require('../../../../thingy.js');
```

There are lots of "solutions" to this problem. There is even a [gist outlining
seven of them][gist]. To be frank, all seven of them have issues. I've spent a
stupid amount of time trying to solve this problem. I wanted a solution where I
could simply `require` a module that would return a string of the absolute path
to the base of my project. That way you could simply do:


```javascript
var __base = require('__base');
var thingy = require(__base + 'lib/thingy.js');
```

Originally I built the [project-base] npm package that worked. The problem is
that it relies on the fact that npm installs your modules into the
`node_modules` directory that lives directly below the base of your project.
Recently npm optimized its dependency algorithm to flatten the dependency tree
for duplicate modules. That broke the underlying assumption of _project-base_.

All that to say, I found a work around. Add the following `postinstall` to the
`scripts` section of your `package.json`:

```javascript
{
  ...
  "scripts": {
    ...
    "postinstall": "mkdir -p ./node_modules/__base && echo \"module.exports = require('path').resolve(__dirname + '/../../') + '/';\" > ./node_modules/__base/index.js"
  },
}
```

This will create a file in `node_modules/__base` that does exactly what you
would expect, returns the absolute path to the base of your project. Problem
solved!

Feel free to reach out to me on twitter [@jondelamotte][twitter].

[twitter]: https://twitter.com/jondelamotte
[gist]: https://gist.github.com/branneman/8048520
[project-base]: https://github.com/jondlm/project-base

