+++
title       = "Open the GitHub Network Graph from the Command Line"
description = "A script to open the github network graph from the command line"
date        = "2014-09-08"
tags        = ["command-line", "github", "git"]
comments    = true
+++

One of the challenges of working with Git, or any source control for that
matter, is managing branches. The GitHub network graph helps you visualize
branches and how they fit together. I wrote a little command to open the webpage
from your command line. *Note:* this only works on Mac, though it could easily
be tweaked to work on linux.

![Network graph]({{ site.url }}/images/gn-network.png)

Put the following line in your `.bashrc` or `.zshrc`:

    alias gn="git remote -v | grep 'git@github' | sed 's/origin.*:\([^.]*\).*/\1/' | head -n1 | read GH; /usr/bin/open -a \"/Applications/Google Chrome.app\" \"https://github.com/\$GH/network\""

Type `gn` from the root directory of your git project and it will open the
GitHub network page inside of chrome.

