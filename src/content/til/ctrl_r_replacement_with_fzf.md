---
published: true
title: "CTRL-R replacement with fzf"
date: 2024-02-23
tags: ["shell"]
---

Add this to `.bashrc`:

```bash
fzf_history() {
	READLINE_LINE=$(history | sed 's/^.\{27\}//' | fzf)
	READLINE_POINT=${#READLINE_LINE}
}

bind -x '"\C-r": fzf_history'
```

And here's one for zsh:

```zsh
fzf_history() {
  BUFFER=$(history | sed 's/^.\{7\}//' | fzf)
  CURSOR=$#BUFFER
  zle reset-prompt
}

zle -N fzf_history
bindkey '^R' fzf_history
```

That assumes 27 characters of leading junk in the `history` command. I've found this to be variable on different machines.

This works because of the features provided by Bash's Readline library.

1. `READLINE_LINE`: This special variable determines the contents of the line. When you set `READLINE_LINE=$(history | sed 's/^.\{27\}//' | fzf)`, it changes the contents of the current input line to the result of the command inside `$()` which is the command you select from `fzf`.
2. `READLINE_POINT`: This special variable specifies the position of the cursor. When you run `READLINE_POINT=${#READLINE_LINE}`, it sets the cursor position to the end of the current input line.
3. `bind -x '"\C-r": fzf_history'`: this binds `Ctrl-r` to the function `fzf_history`. The `-x` option allows bound functions to execute shell commands, in this case changing the `READLINE_LINE` and `READLINE_POINT` variables.

When `Ctrl-r` is pressed, it triggers the `fzf_history` function that runs the `fzf` interface to choose a command from history and places it on the command line. The cursor is moved to the end of the line, ready for you to press Enter to execute the command or modify it if needed.
