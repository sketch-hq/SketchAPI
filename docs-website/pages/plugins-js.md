---
title: Overview
section: plugins
chapter: JavaScript API
permalink: /plugins/javascript

order: 300
---

https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

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

A Plugin is a collection of one or more **scripts**. Each script defines one or more **commands** which extend Sketch in some way.

On disk, a Plugin is a folder with the `.sketchplugin` file extension, containing files and sub-folders.

Strictly speaking, a Plugin is actually an [OS X package](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/DocumentPackages/DocumentPackages.html#//apple_ref/doc/uid/10000123i-CH106-SW1), arranged as an [OS X bundle](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/AboutBundles/AboutBundles.html#//apple_ref/doc/uid/10000123i-CH100-SW1).

A package is any directory that the Finder presents to the user as if it were a single file (you can use the **Reveal Package Contents** command in the Finder to look inside).

A bundle is a directory with a standardized hierarchical structure that holds executable code and the resources used by that code.

Sketch Plugins don’t allow native compiled code, but we do use the standard bundle layout (resources, for example, live in the Resources/ folder in the bundle), with the plugin-specific files located in a Sketch/ directory.

## Handlers

Plugin commands are implemented by handlers.

These are simply JavaScript functions which live in a `.js` file in the Plugin bundle, and which take a single parameter containing some context.

Here’s a simple example:

```js
export function doMyCommand(context) {
  context.document.currentPage().deselectAllLayers()
}
```

In the manifest file, you specify a dictionary describing each command that the Plugin defines.

In this dictionary, _script_ and _handler_ keys tell Sketch which script file to look in, and which handler to run.

You are free to put each command implementation into its own script file, or to put them all in a single file.

You must specify the _script_ key for each command.

If you put each command in its own script file, you can omit the _handler_ key. In this case, Sketch will default to calling the `export default function () {}` handler.
