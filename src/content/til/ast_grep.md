---
published: true
title: "Powerful refactoring with ast-grep"
date: 2025-01-03
tags: ["tools"]
---

I recently learned about a tool called ast-grep. It's a powerful CLI tool that can find and replace bits of code based on their ASTs. In unix terms it's a superior grep and/or sed for code. It's backed by tree sitter giving it support for a dizzying number of languages.

This week I'm migrating an old codebase from Node 14 to 22. Some of the packages were using an old package [esm](https://www.npmjs.com/package/esm) that added support for [ECMAScript modules](https://nodejs.org/api/esm.html) before Node had native support for them. I had to remove the package because it doesn't work on Node 22 anymore. As part of moving to Node's native es modules I had to rewrite a bunch of imports to include the full path and extension. For example if we previously had `import utils from './utils'` it now needed to be `import utils from './utils.js'` because the old way was ambiguous.

Here's an example showing how to find import statements for local files that start with `./` or `../`:

```yaml
language: js
rule:
  regex: "^[\\.]{1,2}/.*$"
  kind: string_fragment
  any:
    - inside:
        stopBy: end
        kind: import_statement
```

You can include a top level `fix:` property to perform replacements but I left it out of my example. If you do include a fix you can run the rule like this:

```sh
sg scan --interactive --rule some_rule.yaml
```
It'll helpfully prompt you for each file modification.
