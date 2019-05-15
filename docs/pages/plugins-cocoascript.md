---
title: CocoaScript
section: plugins
chapter: Concepts
permalink: /plugins/cocoascript

# Previous developer documentation
redirect_from:
  - /introduction/cocoascript/
  - /guides/cocoascript/

summary: Further details on using CocoaScript

order: 203
excerpt: CocoaScript is a bridge providing access to the internal Sketch APIs and macOS frameworks in JavaScript
---

[CocoaScript](https://github.com/ccgus/CocoaScript) is a bridge providing access to the internal Sketch APIs and macOS frameworks in JavaScript.

From CocoaScript’s `README`:

> CocoaScript is built on top of Apple’s JavaScriptCore, the same JavaScript engine that powers Safari. So when you write in CocoaScript, you are really writing JavaScript.
>
> CocoaScript also includes a bridge which lets you access Apple’s Cocoa frameworks from JavaScript. This means you have a ton wonderful classes and functions you can use in addition to the standard JavaScript library.

## Syntax

The square bracket syntax of Objective-C is converted to dot-syntax in JavaScript. Internally, CocoaScript creates opaque JavaScript proxy objects which have the following attributes:

- Objective-C properties are exported to JavaScript:
  - Getter: `object.name()`
  - Setter: `object.name = 'Sketch'`
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

## Pointers

Some Objective-C selectors require pointer parameters. Since JavaScript does not support passing objects by reference CocoaScript provides `MOPointer`, a proxy object to create references from variables.

```js
let str = NSMutableString.alloc().init()
let pointer = MOPointer.alloc().initWithValue(str)

str.setString('Hello Sketch')
console.log(pointer.value())

str.appendString(' 👋')
console.log(pointer.value())
```

## Use macOS Frameworks

To use a macOS framework, it needs to be imported first. Please note that _Foundation_ and _CoreGraphics_ are imported by default.

```js
framework('AVFoundation')

let url = NSURL.alloc().initWithString(
  'https://cdn.sketchapp.com/assets/pages/home/prototyping-video1.mp4'
)
let asset = AVAsset.assetWithURL_(url)

console.log(asset)
```

## Related resources

Read more about how to use CocoaScript and macOS frameworks.

- [Mocha `README`](https://github.com/logancollins/Mocha), please note that Mocha is now included in CocoaScript but the documentation remained on the original repository.
- [Apple Developer Documentation](https://developer.apple.com/documentation)
- [Not a hotdog — how to build an AI powered plugin for Sketch 🌭](https://blog.sketchapp.com/not-a-hotdog-how-to-build-an-ai-powered-plugin-for-sketch-463ea43c9464)
