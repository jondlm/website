+++
title       = "Nearing Real-Time"
description = "The demand for high speed web applications is on the rise. Learn about one of the main technologies that is making it possible."
date        = "2013-06-29"
tags        = ["websockets","real-time"]
comments    = true
+++

> "It is, unfortunately, one of the chief characteristics of modern business to
> be always in a hurry."
>
> _The Medical Record_ - 1884 from [XKCD](http://xkcd.com/1227/)

Some things never change. But, it's safe to say that since 1884 the pace of
business has quantifiably increased; we would know, cause we measure
everything. Advances in personal technology, such as social media, have
particularly raised the definition of "fast" when it comes to delivering data.
As technologists, we are tasked with staying up-to-date on emerging
technologies. As I've found, this can be a daunting task. Let's skim the
surface on one of the most recent web technologies that's changing the way you
get data to your web browser. It's an invisible hero slaving away in your
browser and on the server.

## Enter Websockets

I hope I haven't scared any non-techies away. Let's attempt to explore this new
technology without too much jargon. Websockets is a new web communication
feature that changes the way web browsers can talk to servers. Simply put,
websockets do two main things:

- Make data move much faster
- Allow the server to send messages to the client without the client explicitly
  asking for it

## Traditional

First let's examine what a typical web page request looks like:

![A server and client connecting without websockets]({{ site.url }}/images/oldschool.gif)

The key to remember in this scenario is that the server does not have the
ability to talk to the web browser unless the web browser asks for something.
"Do not speak unless spoken to," one might say.

## With Websockets

Using websockets, the server breaks out of this mold and finds a faster, more
open method of communication with the web browser that functions more like a
"phone call."

![A server and a client connection with websockets]({{ site.url }}/images/websockets.gif)

As you can see, once this "phone call" is established, it allows the server to
send messages to the web browser with being asked for anything; this is a big
win when you need to push data to a client. Another good thing about websockets
is that they mostly "just work" through firewalls.

## But WHY?

Websockets will dramatically increase the speed and efficiency of browser based
stuff like real-time dashboards, chat clients, multi-player games, and much
more. Websockets are already implemented on "all" major browsers. Visit this
[demo](http://html5demos.com/web-socket) to see if your browser can connect
using websockets.

