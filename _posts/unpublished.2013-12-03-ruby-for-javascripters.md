---
layout: post
title: Ruby for JavaScripters
description: "A post for people who know JavaScript and are learning Ruby"
modified: 2013-12-03
tags: [ruby,javascript,learning]
image:
  feature: abstract-7.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
comments: true
share: true
---

This post was created primarily for me, and secondarily for the few people out
there who are learning ruby and come from a javascript background. Here are
some categorized code samples that basically do the same thing in either
language.

## Comments

{% highlight javascript %}
// this is a single line comment

/* this is a
   multi-line comment */
{% endhighlight %}

{% highlight ruby %}
# this is a single line comment

# this is a
# multi-line comment
{% endhighlight %}

## Variables

In javascript people tend to name their variables starting with a lowercase
letter then camel case after that (ie `thisIsMyVariable`). In ruby, people tend
to use all lowercase letters and underscores for separators (ex
`this_is_my_variable`).

{% highlight javascript %}
var myVariable = "hello there";
{% endhighlight %}

{% highlight ruby %}
my_variable = "hello there"
{% endhighlight %}

## Arrays
{% highlight javascript %}
var arr = [1,2,3,4];

arr.push(5);

arr = arr.map(function(a) {
  return a * 2;
});

{% endhighlight %}

{% highlight ruby %}
arr = [1,2,3,4]

arr.push(5)

arr.map! {|i| i * 2} # the `!` saves the result back to the variable

{% endhighlight %}


## Hashes (objects)


{% highlight javascript %}
{% endhighlight %}


{% highlight ruby %}
{% endhighlight %}

## Functions

{% highlight javascript %}
function multiply(a, b) {
  return a * b;
}

function addOne(a) {
  return (a || 0) + 1;
}

console.log(multiply(5,10)) // 50

console.log(addOne())       // 1
console.log(addOne(5))      // 6
{% endhighlight %}

{% highlight ruby %}
def multiply(a, b)
  return a * b
end

def add_one(a = 0)
  return a + 1
end

puts multiply(5,10)  # 50
puts multiply 5,10   # 50

puts add_one         # 1
puts add_one 5       # 6
{% endhighlight %}

## Classes

## Credits

Here are some links I used in my research:

- [Agent Cooper's Js Ruby Comparison](http://agentcooper.github.io/js-ruby-comparison/)

