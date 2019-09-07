+++
title       = "Converting a large React component library to TypeScript"
description = ""
date        = "2019-08-31"
tags        = ["react", "typescript", "diagrams"]
+++

## Summary

For the last few months I've been deep diving into TypeScript. I've been
working with team to convert [lucid][l] over to TypeScript. As it turns out
converting a large, pre-existing React component library can be a challenge. At
the onset of the project I naively assumed we weren't relying too much on the
crazier sides of JavaScript. I was wrong. Turns out people tend to use features
if they're available in all kinds of crazy ways (myself included).

Here are a few of my key take aways from the project so far:

### Learning React's types and when to use them is challenging

Common issues:

- Am I supposed to be using a `ReactNode` or a `ReactElement` here?

### Don't assume your types are sound just cause your code compiled

I've written a decent amount of code in other more "sound" languages such as
Haskell, Rust, Elm, etc. Adding types to an existing code base with TypeScript
is a different beast.

Common issues:

- Ugh, this thing shouldn't be `nullable` but I thought it could be

### Visual regressions are important to monitor

### Getting your .tsconfig "correct" is tough

### Exporting declarations can break differently than normal compilation

### Linting can change significantly

Adding the TypeScript compiler to your setup likely means your linting
landscape is going to shift significantly. The TypeScript compiler is able to
handle many of the things you might have previously leaned on eslint for.
However, it does also mean that you're going to have to sift through a whole
heap of eslint rules and plugins again.

### Default props are kinda busted with functional components

### Plan your attack

Use webpack to learn about the shape of your dependencies and work from the
leaves toward the root.

### Time to learn generics

You'll probably need to get familiar with TypeScript's [utility types][ut].

### No need to mix your API documentation with your component stories

We spent a bunch of time trying to get react docgen and storybook to integrate
nicely with our shiny types but it ended up being a big waste of time. Instead
we've decided to lean on TypeDoc and people's IDE's to give them good API
documentation and instead leave our storybook examples more "story" like.

[l]: https://github.com/appnexus/lucid
[ut]: https://www.typescriptlang.org/docs/handbook/utility-types.html
