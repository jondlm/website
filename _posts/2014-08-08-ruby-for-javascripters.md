---
layout: post
title: Ruby for JavaScripters
description: "A post for people who know JavaScript and are learning Ruby"
modified: 2014-08-08
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
language. I'm using Ruby 2.0+.

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

=begin
  another way
  to do multi-line
=end
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
var obj = {
  one: 1,
  two: 2
};

for (var key in obj) {
  // see http://bit.ly/1krXmjL for explanation
  if(obj.hasOwnProperty(key)){
    console.log(key + ': ' + obj[key]);
  }
}

obj.hasOwnProperty('one'); // true

{% endhighlight %}


{% highlight ruby %}
obj = {
  one: 1,
  two: 2
}

obj.each {|key, value|
  puts "#{key}: #{value}"
}

obj.has_key? # true
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

{% highlight javascript %}
function Car(year, brand) {
  this.year = year;
  this.brand = brand;
}

Car.prototype.dispayInfo = function() {
  return this.year + ' ' + this.brand;
};

var civic = new Car(2005, 'honda');
civic.dispayInfo(); // 2005 honda
{% endhighlight %}

{% highlight ruby %}
class Car
  attr_accessor :year, :brand

  def initialize(year, brand)
    @year = year
    @brand = brand
  end

  def display_info
    "#{year} #{brand}"
  end
end

honda = Car.new(2005, 'honda')
honda.display_info # 2005 honda

{% endhighlight %}

## Credits

Here's a page this inspired some of the content of my post:

- [Agent Cooper's Js Ruby Comparison](http://agentcooper.github.io/js-ruby-comparison/)

