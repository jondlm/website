+++
title       = "Linux Cheat Sheet"
description = "My personal Linux cheat sheet, mostly Ubuntu"
date        = "2016-04-13"
tags        = ["cheat-sheet", "linux", "ubuntu"]
comments    = true
+++

Linux is hard. Really hard. I didn't start getting good at it until I started
writing **everything** I learned down. Maybe this stuff will help someone else.

## Terminal

- `ctrl-u` delete all left of the cursor
- `ctrl-k` delete all right of the cursor
- `ctrl-w` delete word left of the cursor
- `ctrl-y` paste
- `ctrl-l` clear
- `watch -n 2 date` run the `date` command every 2 seconds and show the results as they happen fullscreen
- `tput colors` display number of colors your terminal supports
- `echo $TERM` shows what terminal you are using
- `watch -n 2 "dmesg | tail -30"` continually watch the kernel messages for debugging
- `history | sed 's/^\s\+//' | cut -f 1 -d ' ' --complement | sed 's/^\s\+//'|
  sort | uniq -c | sort -r | head -n 20` top 20 commands you've run

### Recording sessions

- `script terminal_session.txt` starts recording all the output from your terminal to a file
- `ctrl-d` ends the recording session
- `less -R terminal_session.txt` displays the session in its "raw" form for coloring, etc

## File system

- `mv {,new.}somefile.txt` moves `somefile.txt` to `new.somefile.txt` using a bash feature called "brace expansion”
- `df -ah` shows all your mounted disks and their free space
- `df -ih` shows your inode information, can be useful when processes [aren't
  releasing files properly][inode-issue]
- `du -sh *` shows the file sizes for all files and folders in the current folder
- `tail -f` shows the tail of a file and "follows" and outputs any changes made to that file
- `mv ~/Linux/Old/!(Tux.png|Tux2.png) ~/Linux/New/` move all files except one
- `tree` shows current directory as tree (usually doesn't come with stock OS)
- `tree -H http://jondelamotte.com` outputs an HTML tree of a site with a base href
- `pushd .` pushes your current directory into a temporary array
- `pushd` switch between current director and the one on the top of your stack, like `alt-tab` on windows
- `popd` recalls the last stored directory and sends you there
- `diff folder1 folder2 -q` runs a diff on two folds and gives the brief differences
- `diff file1 file2` diff two files
- `chmod g+rw srv` add read and write permissions for the group to the srv folder
- `chmod 600 file` grant read and write privileges to the file owner
- `chmod 666 file` grant read and write privileges to the owner, the group, and everyone
- `chmod 777 some_dir` when chmodding a directory, make sure you use `7` instead of `6`, execute on
  a directory doesn't mean the same thing as a file
- `for f in *.log; do echo -n "$f: "; cat $f | grep 'something' | wc -l; done;`
  search through files in the current directory and count the number of lines
  containing "something"
- `find . -type f | sed -e 's%^\(\./[^/]*/\).*$%\1%' -e 's%^\.\/[^/]*$%./%' |
  sort | uniq -c` recursively count files in sub directories of the current
  directory

## Disk management

- `fdisk -l` list available devices
- `lsblk` list available devices, easier to read, less detail

### [`fswatch`][fswatch]

- `fswatch -l 0.2 -r src/**/*.spec.* | xargs -n1 program` watch all `.spec.` files and run them through `program` every time you save with a 200ms delay
- `fswatch -l 0.2 -r src/**/*.js | xargs -n1 -I{} ` watch all `.js` files and run `program` every time you save with a 200ms delay
- `fswatch -l 0.2 src | egrep --line-buffered '\.(js|jsx)$' | xargs -n1 -I{} flow` a non shell expansion version

## Archiving and compression

- `tar -zcvf test.tar.gz /home/jon/test` create a compressed archive and store it to a new file called `test.tar.gz`
- `tar -xvf test.tar.gz` uncompress and extract an existing archive
- `tar -zcvf test.tar.gz -C /home/jon/test .` create a compress archive without an extra folder in it

## Finding stuff

Search the root directory for anything with 'something' in it and pipe that to less:

- `find / -name 'something' | less`
- `find / -iname '*something*'` case insensitive with wildcard matching
- `find / | grep something 2>/dev/nul` another way of doing the same thing, ignore errors
- `grep -rn 'something'` recursively grep through files in the current dir, show the line numbers
- `grep -rn 'something' --exclude-dir=node_modules` exclude a directory from your search
- `grep -rin contact_bg ./ | cut -f 1,2 -d:` case insensitive search for "contact_bg" in current directory, split the results on colons and only show the first two columns from the result, basically hide the contents of the result
- `dpkg —get-selections` lists packages that are installed
- `which man` or `which node` find where your binary is located on the file system

## Utilities

- `git tag | sort -V -r | head` find the latest git tag versions, the `-V` is a version sort for gnu sort

## Editing Files

- `cat /tmp/files.txt | xargs gsed -i "1i import React from 'react';\n"` add an import line to a bunch of files

## Networking

- `/etc/hosts` is a file that is like a personal DNS. You can map custom IPs to hostnames in it
- `sudo netstat -tulpn` display all the open ports on your machine

- `ssh -i ~/.ssh/id_rsa jon@10.10.10.10` log into the `10.10.10.10` machine with
  the user `jon` using the private key file `~/.ssh/id_rsa`

- `curl http://www.jondelamotte.com` perform a GET to www.jondelamotte.com
- `curl -I http://jondelamotte.com` perform a HEAD against jondelamotte.com,
  shows status and other useful info without requesting the body

- `tcpdump -s 0 -A 'tcp dst port 80 and (tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354)'`
  see all HTTP POSTs coming into your box including their payloads
- `sudo tcpdump -A -s 10240 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)' | egrep --line-buffered "^........(GET |HTTP\/|POST |HEAD )|^[A-Za-z0-9-]+: " | sed -r 's/^........(GET |HTTP\/|POST |HEAD )/\n\1/g'`
  see all HTTP headers on port 80. Credit to an [SO post](http://serverfault.com/a/633452).
- `tcpdump -lvi any "udp port 53"` view dns traffic

- `ngrep` is a really nice alternative to `tcpdump` especially for tcp traffic like HTTP
- `ngrep -W byline HTTP` watch tcp traffic for unencrypted HTTP packets and print them out in a readable fashion

- `dig jondelamotte.com` get dns info for a domain, better than the deprecated `nslookup`
- `dig jondelamotte.com ANY` get all dns records for a domain
- `dig jondelamotte.com +short` just show record value
- `dig -x 192.30.252.153` reverse lookup

## User management

- `usermod -a -G youre_mobile jon` add existing user to existing group
- Check the `/etc/group` file for group information
- The `/etc/sudoers` file let's you map groups or users to have sudo privileges

### Release and renew IP

1. `sudo dhclient -r`
2. `sudo dhclient`
3. `sudo ifdown eth0`
4. `sudo ifup eth0`

## Compiling programs

1. `./configure`
2. `make`
3. `sudo make install` install as root

## Environment Variables

- `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile` adds a folder to your path for the bash shell
- `env` list out all your environment variables
- `export SOMETHING="la la la la"` set an environment variable
- `unset SOMETHING` remove an env variable
- `echo $SOMETHING` print out an env variable

## Time

- `date —iso8601=seconds -u` displays iso 8601 date time for UTC. Some version of linux don't have this flag, see below
- `date +%FT%T%z` displays iso 8601 local and works with all versions of `date`
- `date -d '4 days ago'` relative dates
- `date -d @1433177641` convert from epoch to human readable
- `cal` show the current month's calendar
- `cal 12 1999` show the calendar for December 1999

### Set time zone

1. `sudo rm /etc/localtime`
2. `sudo ln -s /usr/share/zoneinfo/US/Pacific /etc/localtime`

## Security

### Generating a new ssh key

For the best security, you should be using one SSH key per device you use. An
SSH key can optionally be password protected for extra security. When you
generate a key, two files are created. One is the private key (don't give it to
anyone), the other is the public key, which is meant to be public.

1. Make sure you don't already have an ssh key you can use, check `~/.ssh`
2. `ssh-keygen -t rsa -C "your_email@example.com"`
3. `ssh-add ~/.ssh/id_rsa`

Using `ssh-add` puts your private key into `ssh-agent` that stores your password
and private key while your machine is running

Make sure your `ssh-agent` is running with `ssh-agent bash`

## System info

- `cat /etc/*-release` to figure out what distro you are running
- `uname -a` to show kernal information
- `lsmod` list drivers
- `modinfo <name>` more information about a driver

## Ubuntu unity

- `ctrl + alt + num5` hit any of the numpad numbers to align the windows
- `hold super key` for keyboard shortcuts

## Compilation

- `make -j16` number of threads, 2x your number of cores makes sense"

[inode-issue]: http://www.linuxquestions.org/questions/linux-general-1/different-results-in-du-and-df-841145/
[fswatch]: https://github.com/emcrisostomo/fswatch

