+++
title       = "Functional Fifteen"
description = "My strategy for 2015"
date        = "2015-01-23"
tags        = ["functional", "inspirational", "javascript", "haskell"] 
comments    = true
+++

"Perfecting oneself is as much unlearning as it is learning."
- Edsger Dijkstra

{{ .Site.BaseURL }}

Functional programming is all the rage these days. It's hard to go to a
conference, the water cooler, or your grandmas house without hearing about it.
To initiates it's an insurmountable wall containing droves of intellectual
giants and the answers to all your bugs. To learners it's the great mind twist
that forces them to revisit and rethink many of the premises on which they
learned the craft. Beyond that stage I can only surmise. Is programming nirvana
really found in functional programming? I honestly don't know yet, but I'm
making 2015 the year I find out.

In school I learned object oriented programming in languages like Java and C#.
Once I joined the work force, I landed a job that demanded SQL chops almost
exclusively. SQL quickly became a gateway drug back into real programming and
that's when I relearned JavaScript. JavaScript was one of the best decisions I
made early in my career. Not because it's a particularly elegant language, but
because it's a melting pot of ideas.

In JavaScript you're constantly bombarded with new approaches, libraries, and
frameworks. There is a certain stamina needed to keep your sanity. The moment
you find yourself comfortable with something, it gets replaced with something
better (sometimes). For many, that is the primary complaint about web
programming. For me, and many of the people I've worked with, it's what gets us
up in the morning. There is an underlying attitude that is frequently willing
to approach problems from new angles, a constant quest for perfection.

JavaScript helped introduce me to lots of the fundamental concepts of
functional programming. While JavaScript can be written in a very functional
style, it's still a very imperative language. To get around this issue people
have written lots of libraries that help you write in a more functional style.
My plan for this year is pretty simple:

1. Learn Haskell
1. Build two trivial command line applications in Haskell
1. Use functional techniques and libraries to improve my company's web application

I am focussing on Haskell because I constantly hear it referred to as the model
functional programming language. So much of the language doesn't compromise and
forces you to learn the truly functional approach. I want to fully embrace the
paradigm shift and Haskell will beat me over the head until I do.

Let's be real here. There's not enough time for me this year to get beyond
writing trivial applications in Haskell. So, I'm setting the bar pretty low by
trying to write a couple relatively simple command line applications.

My last goal integrates best with my day job. One of the challenges with the
web application I work on is its rampant state mutation. The biggest offender
is the DOM. People modify DOM willy nilly jQuery style and it makes our
application incredibly complex. My goal is to find out if a less state based
approach will improve the maintenance of our application. I dearly want to put
a `debugger` statement in **one** place and observe everything that is
modifying the DOM.

The end goal is to make my life easier. I want to make it easier to maintain
the applications I build. I have a strong feeling that functional is going to
make that happen. I don't think it's the silver bullet, but perhaps its better
than object oriented. Stay tuned for more updates on how this year's goals are
going. Most of my posts this year will be related to JavaScript.

Feel free to reach out to me on twitter @jondelamotte.

