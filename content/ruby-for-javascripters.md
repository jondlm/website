+++
title       = "Ruby for JavaScripters"
description = "A post for people who know JavaScript and are learning Ruby"
date        = "2014-08-08"
tags        = ["ruby", "javascript", "learning"]
comments    = true
+++

This post was created primarily for me, and secondarily for the few people out
there who are learning ruby and come from a javascript background. Here are
some categorized code samples that basically do the same thing in either
language. I'm using Ruby 2.0+.

## Comments

```javascript
// this is a single line comment

/* this is a
   multi-line comment */
```

```ruby
# this is a single line comment

# this is a
# multi-line comment

=begin
  another way
  to do multi-line
=end
```

## Variables

In javascript people tend to name their variables starting with a lowercase
letter then camel case after that (ie `thisIsMyVariable`). In ruby, people tend
to use all lowercase letters and underscores for separators (ex
`this_is_my_variable`).

```javascript
var myVariable = "hello there";
```

```ruby
my_variable = "hello there"
```

## Arrays
```javascript
var arr = [1,2,3,4];

arr.push(5);

arr = arr.map(function(a) {
  return a * 2;
});

```

```ruby
arr = [1,2,3,4]

arr.push(5)

arr.map! {|i| i * 2} # the `!` saves the result back to the variable

```


## Hashes (objects)


```javascript
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

```


```ruby
obj = {
  one: 1,
  two: 2
}

obj.each {|key, value|
  puts "#{key}: #{value}"
}

obj.has_key? # true
```

## Functions

```javascript
function multiply(a, b) {
  return a * b;
}

function addOne(a) {
  return (a || 0) + 1;
}

console.log(multiply(5,10)) // 50

console.log(addOne())       // 1
console.log(addOne(5))      // 6
```

```ruby
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
```

## Classes

```javascript
function Car(year, brand) {
  this.year = year;
  this.brand = brand;
}

Car.prototype.dispayInfo = function() {
  return this.year + ' ' + this.brand;
};

var civic = new Car(2005, 'honda');
civic.dispayInfo(); // 2005 honda
```

```ruby
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
```

## Credits

Here's a page this inspired some of the content of my post:

- [Agent Cooper's Js Ruby Comparison](http://agentcooper.github.io/js-ruby-comparison/)

