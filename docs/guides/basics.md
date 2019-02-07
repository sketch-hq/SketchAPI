---
title: Plugin Basics
summary: Basic concepts for plugin users.
permalink: /guides/
redirect_from: /introduction/
order: 100
---

On disk, a Plugin is just a folder arranged in a specific layout.

It contains one or more scripts. Each script defines one or more commands which extend Sketch in some way. It can also contain any other optional resources (such as images) that the commands make use of to do whatever they do.

Plugin scripts are written using JavaScript.

## Terminology

Before we get any further, let’s define a bit of terminology.

- _Plugin_: a collection of _Scripts_, _Commands_ and other resources grouped together as a discrete unit
- _Plugin Bundle_: the folder on disk containing the files that make up the _Plugin_
- _Action_: something the user does (selecting a menu, or changing the document) which triggers a _Command_
- _Command_: a Plugin can define more than one command; typically each one is associated with a different menu or keyboard shortcut, and causes a different _Handler_ to be executed.
- _Handler_: a function which executes some code to implement a _Command_.
- _Script_: a JavaScript file containing one or more _Handlers_ which implement one or more _Commands_.

## How do I make a plugin?

By now, probably you’re wondering how to get started writing your own.

The easiest way to get started with Plugins is to open Sketch, open a document and hit `control + shift + k` to open the `Run Script` panel. You don’t need to install anything; you can just open it and experiment there.

The smallest handler implementation looks like this:

```js
const sketch = require('sketch')

sketch.UI.message('Hello, world!')
```

It renders a toast saying “Hello, world!” at the bottom of the Sketch document. You can run a handler implementation directly in the `Run Script` panel, try it!

## A note on JavaScript

Sketch plugins are written in JavaScript, and so we assume that you have a basic understanding of the JavaScript language. If you don’t feel very confident, we recommend [refreshing your JavaScript knowledge](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) so you can follow along more easily.

We also use some of the ES6 syntax in the examples. We try to use it sparingly because it’s still relatively new, but we encourage you to get familiar with [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) statements.

The script doesn't run in a browser or Nodejs environment but in a [special environment](/guides/cocoascript/) in which every native MacOS and Sketch API are exposed. It is an advanced topic but necessary to truly understand how to build more advanced stuff.

## Next steps

We've seen how to run a small script directly in Sketch but all the plugins you know and love comes in the form of a `.sketchplugin` file that exposes one or more scripts and that you can easily share.

The [next guide](/first-plugin/) will help you get started creating such a file.
