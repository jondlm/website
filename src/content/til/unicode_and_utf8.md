---
published: true
title: "Unicode and UTF8"
date: 2023-10-06
tags: ["encoding"]
---

I was curious today about how utf8 encoding actually works. It's really interesting actually and not terrible complicated if you break it down. utf8 is backward compatible with the ASCII encoding. utf8 uses a variable number of bytes to represent different characters. I'll keep this brief and give a few examples:

```
Dec      Hex    Chr
63       3F     ?   <- ASCII goes from 0 to 127 (dec)
128161   1F4A1  💡  <- Unicode extends beyond 127, also expressed as a "codepoint": `U+1F4A1` which is just hex
```
Some symbols require _two_ characters using something called "variation sequences": http://unicode.org/faq/vs.html

```
Decimal: 9724   65039
Hex:     25FC   FE0F
Chr:     ◼️            <- black medium square
```

You can know how many bytes are used in a character by looking at the binary. Let's take 💡 as an example:
```
Decimal: 128161
Hex:     1F4A1
Bytes:   F0          9F         92         A1
Binary:  11110000    10011111   10010010   10100001
         |           |
         |           |> leading 10 is used for the children bytes in a sequence
         |
         |> the leading 11110 marks it as a 4 byte sequence
```
