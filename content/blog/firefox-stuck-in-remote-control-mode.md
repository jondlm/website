+++
title       = "Firefox Stuck in Remote Control Mode"
description = "A small post about what to do when Firefox thinks it's stuck in remote control mode"
date        = "2020-01-15"
tags        = ["firefox"]
+++

Recently I tried out selenium-webdriver with Firefox 71. One of the important
steps in the setup process is browing to `about:profiles` in Firefox and
creating a new profile for use for "remote control". I did that but somewhere
along the way I accidentally used my default profile which got the browser
stuck in "remote control mode" despite my best efforts to make sure everything
was turned off. It was really bugging me because I didn't want the process to
keep listening on some port waiting to be taken over even if the chance was
slim. It also made the address bar orange and obnoxious. It looked like this
with a little tooltip that read "Browser is under remote control":

<p class="center">
  <img src="/images/posts/firefox-stuck-in-remote-control-mode/firefox-remote-control-bar.png" alt="The Firefox address bar when it's in remote control mode">
</p>

Naturally I googled the issue but I couldn't find anything. So I'm writing this
short post in the off chance someone else runs into this. I proceeded to find
and download the [source code][s] for my version of Firefox (72.0.1) which took
about 3 minutes to untar. Armed with the source code I began spelunking. Among
other things I learned that Firefox uses html/css to render the address bar
which is pretty cool. But the real solution was finding a hidden config option
that's accessible through the `about:config` address. It's called
`marionette.enabled` and in my case it was set to `true`. There are some other
potentially relevant config options that have the word "remote" in them as well
that you may find useful. As soon as I toggled the value my address bar
returned to normal and my process stopped listening on port 2828. Turns out
[marionette][m] is "is an automation driver for Mozilla’s Gecko engine".

Hopefully this short post helps someone else out someday when they find
themselves stuck with a case of orangeaddressbaritis.

[m]: https://firefox-source-docs.mozilla.org/testing/marionette/Intro.html
[s]: https://archive.mozilla.org/pub/firefox/releases/72.0.1/source/
