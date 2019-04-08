---
title: CocoaScript
section: plugins
chapter: Internal API
permalink: /plugins/cocoascript

# Previous developer documentation
redirect_from:
  - /introduction/cocoascript/
  - /guides/cocoascript/

summary: Some more details on how to use CocoaScript

order: 203
---

[CocoaScript](https://github.com/ccgus/CocoaScript) is a bridge providing access to the internal Sketch APIs and macOS frameworks in JavaScript.

From CocoaScript’s `README`:

> CocoaScript is built on top of Apple’s JavaScriptCore, the same JavaScript engine that powers Safari. So when you write in CocoaScript, you are really writing JavaScript.
>
> CocoaScript also includes a bridge which lets you access Apple’s Cocoa frameworks from JavaScript. This means you have a ton wonderful classes and functions you can use in addition to the standard JavaScript library.

## Syntax

The square bracket syntax of Objective-C is converted to dot-syntax in JavaScript. Internally CocoaScript creates opaque JavaScript proxy objects which have the following attributes.

- Objective-C properties are also JavaScript properties.
- Objective-C selectors are exposed as methods of the JavaScript proxy.
- `:` are converted to `_`, the last underscore is optional.
- Each component of the selector is concatenated into a single string with no separation.

### Objective-C

```obj-c
[executeOperation:withObject:error:]
```

### JavaScript

```js
executeOperation_withObject_error()
```

For example, if you want to open a File Picker panel, you can use the [NSOpenPanel](https://developer.apple.com/documentation/appkit/nsopenpanel?language=objc) class:

```js
var openPanel = NSOpenPanel.openPanel()
openPanel.setCanChooseDirectories(false)
openPanel.setCanChooseFiles(true)
openPanel.setCanCreateDirectories(false)
openPanel.setDirectoryURL(NSURL.fileURLWithPath('~/Documents/'))

openPanel.setTitle('Choose a file')
openPanel.setPrompt('Choose')
openPanel.runModal()
```

If you need more information about Cocoa, check the [Resources](/resources/) section.

## A few specific globals

### Pointer

For some Obj-C selectors, you might need to pass a pointer. That doesn't exist in JavaScript so there is a global method to create one:

```js
var ptr = MOPointer.alloc().init()
var ptrToSomething = MOPointer.alloc().initWithValue(something)
```

### Long running script

If your script is doing something asynchronous, we will need to tell Sketch to keep it around and to not garbage collect it.

You can do so by accessing `COScript`:

```js
COScript.currentCOScript().shouldKeepAround = true
```

When the script has finished its work, don't forget to release it:

```js
COScript.currentCOScript().shouldKeepAround = false
```

## Next Steps

For more information about how the bridge really works, take a look at the [Mocha Readme](https://github.com/logancollins/Mocha), it is really complete (but requires some notion of Obj-C).
