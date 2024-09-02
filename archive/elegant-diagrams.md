+++
title       = "Elegant Diagrams"
description = "An intro to Graphviz"
date        = "2015-02-09"
tags        = ["graphviz", "diagrams"]
comments    = true
+++

Diagrams. Everyone loves them, and I hate to make them. That changed recently
when I discovered a nifty tool called *graphviz*. Think of it like markdown for
diagrams. It's an old command line binary tool that basically acts as a
compiler for your graph code. We're talking old school here. The docs are hard
to read, the website looks like it was made in the 90s, and there are very few
examples on the web that I could find. But once I waded through the initial
learning curve, I found a hidden gem.

From what I've learned, *graphviz* has lots of features and can render a ton of
different formats. The one that I found actually useful is the "DOT language".
DOT is a mini-language for describing how your diagrams should look. You run
your `.dot` files through `graphviz` and out comes some pretty graphs in png,
svg, you name it. You simply declare all the "nodes" and their relationships,
and let *graphviz* take care of drawing and lining everything up. It's freeing to
not have to spend time fiddling with the layout and spend more time thinking
about the components and their relationships.

## Installation

These instructions are for people with Macs and homebrew. It's probably a
similar process for Linux. All you need to do is install the *graphviz*
homebrew package. This will make available a suite of command line tools. We're
interested in `dot`.

```bash
brew install graphviz
```

## Learn by example

There are two main types of graphs I have explored so far: `digraph` and
`graph`. The first is for graphs that have pointy arrows to connect nodes, and
the other is for direction agnostic connection. This should make sense once you
see a few examples.

To make a new graph, simply save a text file with the extension `.dot`. You
don't technically need the extension, but it helps keep things orderly. To
render the graph to svg (my personal favorite format) use a command like this:

```bash
dot -o myfile.svg myfile.dot -Tsvg
```

Rather than explain all the details of the dot language. Let's take a look at
a bunch of examples and leave it to your fine brain to work out the rest. Look
below each diagram for their corresponding DOT code.

## Basics

![something](/images/posts/elegant-diagrams/1.svg)
```
graph my_graph {
  joe   [label = "Joe"];
  sally [label = "Sally"];
  frank [label = "Frank"];
  susan [label = "Susan"];
}
```

![something](/images/posts/elegant-diagrams/2.svg)
```
graph my_graph {
  node  [shape = box];

  joe   [label = "Joe"];
  sally [label = "Sally"];
  frank [label = "Frank"];
  susan [label = "Susan"];
}
```

![something](/images/posts/elegant-diagrams/3.svg)
```
graph my_graph {
  joe   [label = "Joe", shape = box];
  sally [label = "Sally"];
  frank [label = "Frank"];
  susan [label = "Susan"];
}
```

![something](/images/posts/elegant-diagrams/4.svg)
```
graph my_graph {
  joe   [label = "Joe"];
  sally [label = "Sally"];
  frank [label = "Frank"];
  susan [label = "Susan"];

  joe   -- sally;
  joe   -- frank;
  frank -- susan;
  sally -- frank;
  sally -- susan;
}
```

![something](/images/posts/elegant-diagrams/4.1.svg)
```
graph my_graph {
  joe   [label = "Joe"];
  sally [label = "Sally"];
  frank [label = "Frank"];
  susan [label = "Susan"];

  joe   -- sally;
  joe   -- frank [label = "strong dislike"];
  frank -- susan;
  sally -- frank;
  sally -- susan;
}
```

![something](/images/posts/elegant-diagrams/5.svg)
```
digraph my_graph {
  joe   [label = "Joe"];
  sally [label = "Sally"];
  frank [label = "Frank"];
  susan [label = "Susan"];

  joe   -> sally;
  joe   -> frank;
  frank -> susan;
  sally -> frank;
  sally -> susan;
}
```

![something](/images/posts/elegant-diagrams/6.svg)
```
digraph my_graph {
  rankdir = LR; // alternatively TB, BT, or RL

  joe   [label = "Joe"];
  sally [label = "Sally"];
  frank [label = "Frank"];
  susan [label = "Susan"];

  joe   -> sally;
  joe   -> frank;
  frank -> susan;
  sally -> frank;
  sally -> susan;
}
```

## Clusters

![something](/images/posts/elegant-diagrams/7.svg)
```
digraph my_graph {
  rankdir = LR;

  // the "cluster" prefix is required
  subgraph cluster_boys {
    joe   [label = "Joe"];
    frank [label = "Frank"];
  }

  // the "cluster" prefix is required
  subgraph cluster_girls {
    sally [label = "Sally"];
    susan [label = "Susan"];
  }

  joe   -> sally;
  joe   -> frank;
  frank -> susan;
  sally -> frank;
  sally -> susan;
}
```

![something](/images/posts/elegant-diagrams/8.svg)
```
digraph my_graph {
  rankdir = LR;

  // the "cluster" prefix is required
  subgraph cluster_boys {
    label = "Boys";

    joe   [label = "Joe"];
    frank [label = "Frank"];
  }

  // the "cluster" prefix is required
  subgraph cluster_girls {
    label = "Girls";
    labeljust = right;

    sally [label = "Sally"];
    susan [label = "Susan"];
  }

  joe   -> sally;
  joe   -> frank;
  frank -> susan;
  sally -> frank;
  sally -> susan;
}
```

## Records

![something](/images/posts/elegant-diagrams/9.svg)
```
digraph my_graph {
  node [shape = record];
  rankdir = LR;

  people [label = "<people> people | <id> id | <name> name | <car_id> car_id"]
  cars   [label = "<cars> cars | <id> id"]
}
```

![something](/images/posts/elegant-diagrams/10.svg)
```
digraph my_graph {
  node [shape = record];
  rankdir = LR;

  people [label = "<people> people | <id> id | <name> name | <car_id> car_id"]
  cars   [label = "<cars> cars | <id> id"]

  people:car_id -> cars:id;
}
```

## Further reading

I may update this post in the future as I learn more about graphiz. Here are a
couple links I've found useful:

- [http://www.graphviz.org/doc/info/attrs.html](http://www.graphviz.org/doc/info/attrs.html)
- [http://www.graphviz.org/pdf/dotguide.pdf](http://www.graphviz.org/pdf/dotguide.pdf)

Feel free to reach out to me on twitter @jondelamotte

