+++
title       = "Common React Performance Issue"
description = "Learn about a common React performance pitfall and how to fix it"
date        = "2017-03-09"
tags        = ["react", "perf"]
+++

I've been working with React for a couple years. I started by writing user
facing applications and slowly moved into a role building [components we share
between applications][lucid]. I've written and read a lot of React code in that
time. One common issue with performance I've seen is using `.bind` or creating
anonymous functions inside `render` blocks. Essentially what happens is every
time `render` gets called a _new_ function will be created. This doesn't seem
so bad but it's really easy to get into a situation where `render` is being
called a lot, which is usually okay, but the accumulation of new functions
noticeably slows down the page. The problem is most often noticed on pages with
large tables or lists of items.

## Problem

Here's [a codepen with the performance problem][bad]. But let's take a look at
some psuedo react code highlighting the problem:

```javascript
const Component = React.createClass({

  ...

  handleSelect(id) {
    // do something with id
  },

  render() {
    return (
      ...

        {people.map(({ id }) => (
          ...
            <button onClick={() => { this.handleSelect(id); }} />
          ...
        ))}

      ...
    );
  }
});
```

## Solution

Here's [a codepen for the fixed code][good]. Let's look at some more pseudo
code highlighting the fix:

```javascript
const Component = React.createClass({

  ...

  handleSelect(event) {
    // do something with `event.currentTarget.dataset.id`
  },

  render() {
    return (
      ...

        {people.map(({ id }) => (
          ...
            <button data-id={id} onClick={this.handleSelect} />
          ...
        ))}

      ...
    );
  }
});
```

## Benchmark

I measured three things for my benchmarks: 1) initial render time, 2) first
selection click time, and 3) subsequent selection click time. Here are the
average results of my informal, manual testing (5 samples):

|                  | Initial Render (ms) | Initial Select (ms) | Subsequent Selects (ms) |
| ---------------- | ------------------- | ------------------- | ----------------------- |
| [**Bad**][bad]   | 381.166             | 2633.87             | 31.94                   |
| [**Good**][good] | 285.396             | 16.876              | 8.022                   |

By simply not creating an anonymous function in the `render`, we're able to
drastically improve the performance. Instead we can rely on a `data-foo`
attribute that we can then pluck off the event in the event handler. If this
seems subtle, it is. Thankfully there's an [eslint plugin][eslint] to help us
avoid this pitfall.

If you're looking for a deeper dive, be sure to check out the official [React
perf page][perf].

[bad]: http://codepen.io/jondlm/pen/BWpgry?editors=0010
[good]: http://codepen.io/jondlm/pen/wJgLVz?editors=0010
[lucid]: https://github.com/appnexus/lucid
[eslint]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
[perf]: https://facebook.github.io/react/docs/perf.html
