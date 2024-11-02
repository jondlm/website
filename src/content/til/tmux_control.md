---
published: true
title: "Tmux Control"
date: 2023-03-09
tags: ["tmux","terminal"]
---

I never realized how powerful it could be to issue `tmux` commands directly. For example, I wrote this amazingly useful script called `lgo` that spins up a Golang playground. It automatically opens a new tmux window and sets up the watcher and neovim.

I'd like to setup these scripts for other languages too when I need a quick sandbox to test out an idea or validate some possible garbage I got from chat GPT :)

```bash
#!/usr/bin/env bash
set -euo pipefail

DIR="$HOME/learn/golang/$1"

mkdir "$DIR"
pushd "$DIR"

go mod init "jdlm/learn/$1"

cat << EOF > main.go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello world.")
}
EOF

cat << EOF > watch
#!/usr/bin/env bash
watchexec --clear --watch . --exts go -- go run .
EOF

chmod +x watch

tmux new-window -n "lgo-$1" -c "$DIR" "nvim main.go"
tmux split-window -v -c "$DIR" "./watch"
tmux select-pane -U
```
