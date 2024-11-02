---
published: true
title: "Playing with websockets over dev tools"
date: 2021-09-01
tags: ["js", "websocket"]
---

The easiest way to play with a websocket (there isn't really a curl equivalent)
is to just use dev tools to connect and send/receive data:

```js
var ws = new WebSocket("ws://127.0.0.1:8080/tweets");

ws.onclose = () =>   { /*...*/ };
ws.onerror = () =>   { /*...*/ };
ws.onmessage = () => { /*...*/ };
ws.onopen = () =>    { /*...*/ };

ws.send("Hello World");
```
