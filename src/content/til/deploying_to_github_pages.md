---
published: true
title: "Deploying to GitHub pages"
date: 2023-08-15
tags: ["github"]
---

GitHub pages is a really nice static site option for small projects. It took me some time to get this right, but here's [a little script](https://github.com/jondlm/graph/blob/8ea246598bdff602d48171f1df4dd60ddddb0fe1/scripts/deploy-gh-pages) that can deploy a project easily from my laptop:
```bash
#!/usr/bin/env bash

# `x` prints every command the script runs.
set -euox pipefail

if ! git diff; then
  printf "Please clean up your git state as this script needs to checkout the gh-pages branch.\n"
  exit 1
fi

TEMP_DIR=$(mktemp -d)

# Defer cleanup.
cleanup() {
  ls "$TEMP_DIR"
  rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

# Clear previous `dist`.
if [ -d dist ]; then
  rm -rf dist
fi

# Writes new files to `dist`.
pnpm build
cp -r dist/* "$TEMP_DIR"

# Checkout `gh-pages` if it exists. Might not need this `if` check
if git show-ref --quiet refs/heads/gh-pages; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
fi

# Remove all git tracked files.
git rm -rf .
git checkout main -- .gitignore

# Copy over the new assets.
cp -r "$TEMP_DIR"/* .

# Add, commit, push.
git add -A
git commit -m "gh-pages deploy"
git push

# Return to the main branch.
git checkout main
```

Briefly, it:
1. Ensures your `git diff` is clear since it needs to checkout the `gh-pages` branch later
1. Clears out any previous `dist` directory
1. Runs `pnpm build` and copies all the output to a temporary dir
1. Checks out the orphan `gh-pages` branch. An orphaned branch has its own separate history from the other branches which is helpful for cases like GH pages.
1. Deletes all the files normally tracked by git
1. Restores the `.gitignore` since that's still useful here
1. Copies over the built files from the temporary directory
1. Stages all the built files and commits the built files
1. Pushes the commit
1. Checks out the main branch again to restore the previous state

**Using Parcel?** Make sure you add this to your `package.json` that matches your GH repo name:
```json
  "targets": {
    "default": {
      "publicUrl": "/my-repo-name"
    }
  },
```

**Using Astro?** Be sure to define `site` and `base` in your `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://jondlm.github.io/website/",
  base: "website",
});
```
