+++
title       = "Modern Web Development Journey"
description = "A introductory post about the basics of HTML, CSS, and JavaScript. And a little about how I got into it."
date        = "2013-06-20"
tags        = [ "html", "css", "javascript" ]
comments    = true
+++

About 6 months ago I began a new endeavor. I decided that HTML5 was cool, and I
was determined to learn it. At that time, I didn't realize what HTML5 even
meant. Since then, I've learned a lot; I'd like to share some of that with you.


### First Steps

My professional background in technology related primarily to data
visualization and business intelligence. Those are fancy words for charts and
graphs. For the first year and a half of my career, I was engrossed in the
Microsoft SQL Server stack. I learned to happily live within the limits those
tools imposed. I would frequently have ideas that eventually became dead ends
because of tool limitations. I'm not saying that the Microsoft BI tools don't
provide a lot of value, they simply weren't flexible enough to satisfy my
creativity.

After much frustration, I became determined to learn to use the "modern web" as
way to express my data creativity. The first thing I did was refresh my latent
knowledge of HTML and CSS. Secondly I dove head first into a lovable, yet
quirky, language known as JavaScript. I knew that HTML and CSS are the basic
building blocks of the web, but what exactly are they, and how do they relate?

### HTML

HTML defines the **content** of a web page. In a perfect world, the HTML simply
tells the web page what elements should be found on the page, how they are
arranged hierarchically, and what the contents of those elements are. Stylistic
things, like color and font size, shouldn't (notice I didn't say *can't*) be
found in your HTML. It's also important to note that written within your HTML
documents are the links to CSS and JavaScript files.

```html
<!-- I'm a comment -->

<div class="poobar">
  Ahoy there! I'm HTML. Nice to meet you.
</div>
```

### CSS

CSS files are a way of defining the **style** of your pages in a re-usable
manner. CSS isn't a requirement. It's possible to put all your styling in your
HTML pages. But what about when you want all your headers to be styled the
same? You'll have to copy and paste the style information to each header in
every single spot in your HTML where you have a header. Not fun.

CSS makes life easier by allowing you to rip out all that styling information
and put it in a separate file that you simply "hook up" to your HTML pages.
Once the link is established, your HTML page automatically uses the CSS to make
things pretty and consistent. Don't be fooled, CSS may be a relatively small
language, but it gets complicated really quickly.

```css
/* I'm a comment */

.poobar {
  font-size: 20px;
  color: blue;
}
```


### JavaScript

JavaScript is crazy. It is **not** related to Java. Its real name is
ECMAScript, but don't worry about that, almost no one calls it that.

For the first few months of learning JS, I felt like my brain was going to
explode. There are MANY different styles of writing JS that make it really
confusing for a newbie. One of the most interesting aspects of JavaScript is
its flexibility. You can define and redefine stuff willy nilly and it usually
won't yell at you. Also, because of its flexibility, people have become very
clever at thinking up new, sneaky ways to write code. 

JavaScript pretty much does all the **doing** for web pages. Need to talk to a
server and get some data without reloading the page? JavaScript. Need
variables? JavaScript. Etc...

Old browsers do some pretty funky things with JavaScript. Libraries like
`jQuery` mitigate these issues by providing you a consistent way of writing
your JavaScript. Personally I've chosen to mostly ignore older browsers in the
hopes that they will disappear shortly. That's how it works, right?!

```javascript
// I'm a comment

var thingy = document.querySelector('.poobar');
thingy.innerText = 'Changing the content of the HTML with JavaScript.';
```

### Boom

My future posts will be less milk and more meat on these subjects. I suggest
[Code Academy](http://www.codecademy.com/) as a good place to start learning
this stuff.

