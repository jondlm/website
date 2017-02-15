+++
title       = "For Pitfall in Javascript"
description = "A brief explanation of some of the pitfalls possible when using the Javascript 'for in' statement"
date        = "2013-12-09"
tags        = ["javascript", "tips"]
comments    = true
+++

There are plenty of *fun* and quirky features in Javascript. Beginners
typically have trouble with the `for in` statement. In most other programming
languages, a `for in` statement lets you loop through each of the items in an
array or list. Javascript won't yell at you if you try to use `for in` on an
array, but the result will be really weird. In javascript, `for in` is meant to
loop through each of the properties of an object. Let's look at a bad example,
followed by a good one.

### Bad

```javascript
var arr = [1,2,3,4,5];
var sum = 0;

for (item in arr) { sum += item; }

console.log(sum); // "001234" // WTF?!
```

I won't go into the details of [why this is
bad](http://stackoverflow.com/a/500531/895558), just **don't** use `for in`
with arrays. You should be using `forEach` or a simple `for` loop instead.

### Good

```javascript
var jon = {
  name: 'Jon',
  age: 25
};

for (item in jon) {
  console.log(item + ' ' + jon[item]);
}   // name Jon
    // age 25
```

## Prototype Pollution Problem

Even if you use `for in` correctly, you can still sometimes get unexpected
results. It happens when you make changes to the prototype of an object. Let's
look at another example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

var jon = new Person('Jon');

console.log(jon.getName()); // "Jon"

for (item in jon) {
  console.log(item + ' ' + jon[item]);
}   // name Jon
    // getName function .... // WTF?!
```

The latest version of javascript allows you to specify if you want a prototype
method to be *enumerable*. I won't go into the details of that. Rather, here is
a good way to exclude prototype methods:

```javascript
for (item in jon) {
  if (jon.hasOwnProperty(item))
    console.log(item + ' ' + jon[item]);
}   // name Jon
```

