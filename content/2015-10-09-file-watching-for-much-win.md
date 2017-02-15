+++
title       = "File Watching for Much Win"
description = "How to use fswatch for much win"
date        = "2015-10-09"
tags        = ["fswatch"] 
comments    = true
+++

## File Watching for Much Win

Throughout my career as a developer I've used lots of different file watching
tools. It's really handy to have something invoke your code every time you save
the file. Some of them work well, but most do not. I recently discovered
[fswatch](https://github.com/emcrisostomo/fswatch), and I couldn't be happier.

`fswatch` is a binary you can install with homebrew. Just run `brew install
fswatch`. It's a pretty low level tool, but using the right combination of
pipes and other unix commands, you can achieve pretty much any task you need
file watching for. I had quite a bit of trouble getting some of the flags
working that `fswatch` supports; perhaps I was misunderstanding how to use
them. Below are examples I've found to work flawlessly on my Mac.

## Examples

```bash
fswatch *.go -l 0.2 | xargs -n1 go run
```

Watch all `.go` files in the current directory and `go run` them. The `-n1`
tells `xargs` to run for every new file name that gets piped to it. The `-l
0.2` makes `fswatch` decrease the latency while watching. That number feels
right to be, but feel free to tweak it to your liking.

<br> <br>

```bash
fswatch . -l 0.1 | egrep --line-buffered '\.(js)$' | xargs -n1 node
```

Recursively watch all `.js` files in the current directory and run them with
`node`.

<br> <br>

```bash
fswatch . -l 0.1 | egrep --line-buffered '\.(js|jsx)$' | xargs -n1 -I{} echo "a javascript file was saved"
```

Recursively watch all `.js` or `.jsx` files in the current directory and echo
every time one is modified. The `-I{}` allows you to ignore the name of the
file that is piped to `xargs`. In this example we don't care what specific file
was saved.

