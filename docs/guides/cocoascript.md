---
title: More on CocoaScript
permalink: /guides/cocoascript/
redirect_from: /introduction/cocoascript/
summary: Some more details on how to use CocoaScript
order: 500
---

Sketch Plugins are made possible by [Mocha](https://github.com/logancollins/Mocha) and [CocoaScript](https://github.com/ccgus/CocoaScript), a bridge that lets you use Objective-C/Cocoa code from an external script written in JavaScript. The bridge takes care of the translation between JavaScript and Cocoa, so you can concentrate on the important parts (namely, making Sketch do awesome stuff).

From CocoaScript’s README:

> CocoaScript is built on top of Apple’s JavaScriptCore, the same JavaScript engine that powers Safari. So when you write in CocoaScript, you are really writing JavaScript.
>
> CocoaScript also includes a bridge which lets you access Apple’s Cocoa frameworks from JavaScript. This means you have a ton wonderful classes and functions you can use in addition to the standard JavaScript library.

## JavaScript environment

Your plugin's script does not run in a browser but in a JavaScriptCore context. Hence the JavaScript environment it is running in is a bit uncommon.

- The [JavaScript standard library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) is available.
- Every thing else isn't. That means that `setTimeout`, `fetch`, `console` etc. are not available.
- NodeJS core modules are not available.

That being said, if you use `skpm`, it will automatically polyfill some things for you: [`console`](https://github.com/skpm/sketch-polyfill-console),[`setTimeout`](https://github.com/skpm/sketch-polyfill-setTimeout), [`setInterval`](https://github.com/skpm/sketch-polyfill-setInterval) and [`fetch`](https://github.com/skpm/sketch-polyfill-fetch).

## Accessing Cocoa and Sketch APIs

You can access all Cocoa and Sketch APIs from CocoaScript.

Objective-C properties behave as they should on the JavaScript side of the bridge.

Objective-C methods are exposed as properties of the object's opaque JavaScript proxy.

The following steps are taken when converting a selector name to the JavaScript property name:

- All colons are converted to underscores (the latest underscore is optional).
- Each component of the selector is concatenated into a single string with no separation.

As such, a selector such as `executeOperation:withObject:error:` is converted to the function name `executeOperation_withObject_error()`.

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
