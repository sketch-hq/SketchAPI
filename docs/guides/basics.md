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

<div class="embed-container">
  <iframe src="https://www.youtube.com/embed/TlSfoGN6WRw?rel=0&amp;showinfo=0&amp;color=white" frameborder="0" allowfullscreen=""></iframe>
</div>

## Terminology

Before we get any further, let’s define a bit of terminology.

- *Plugin*: a collection of *Scripts*, *Commands* and other resources grouped together as a discrete unit
- *Plugin Bundle*: the folder on disk containing the files that make up the *Plugin*
- *Action*: something the user does (selecting a menu, or changing the document) which triggers a *Command*
- *Command*: a Plugin can define more than one command; typically each one is associated with a different menu or keyboard shortcut, and causes a different *Handler* to be executed.
- *Handler*: a function which executes some code to implement a *Command*.
- *Script*: a JavaScript file containing one or more *Handlers* which implement one or more *Commands*.

## How do I make a plugin?

By now, probably you’re wondering how to get started writing your own.

The easiest way to get started with Plugins is to open Sketch, open a document and hit `control + shift + k` to open the `Run Script` panel. You don’t need to install anything; you can just open it and experiment there. If you’d rather use a real development environment (which you will need to in order to distribute your plugin), check out the [Development Environment](/guides/preferences) page.

The smallest plugin example looks like this:

```js
export default function (context) {
  context.document.showMessage('Hello, world!')
}
```

It renders a toast saying “Hello, world!” at the bottom of the Sketch document.

The next few guides will gradually introduce you to the inner workings of Plugins. We will examine the building blocks of plugins: [manifest](/guides/plugin-bundles/) and scripts. Once you master them, you can create complex plugins!

## A note on JavaScript

Sketch plugin are written in JavaScript, and so we assume that you have a basic understanding of the JavaScript language. If you don’t feel very confident, we recommend [refreshing your JavaScript knowledge](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) so you can follow along more easily.

We also use some of the ES6 syntax in the examples. We try to use it sparingly because it’s still relatively new, but we encourage you to get familiar with [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) statements.

The script doesn't run in a browser or node environment but in a [special environment](/guides/cocoascript/) in which every native MacOS and Sketch API are exposed. It is a bit advanced but necessary to truly understand how to build more advanced stuff.
