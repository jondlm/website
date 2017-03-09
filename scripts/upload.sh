#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

# Clear out the old docs if they exist
rm -rf public

# Build the new docs
hugo

# Clear out temp dir if it exists
rm -rf /tmp/hugo-build
cp -r public /tmp/hugo-build
cp CNAME /tmp/hugo-build

pushd /tmp/hugo-build
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force git@github.com:jondlm/website.git master:gh-pages

