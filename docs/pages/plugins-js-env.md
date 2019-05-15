---
title: JavaScript environment
section: plugins
chapter: Concepts
permalink: /plugins/javascript-environment

order: 202
excerpt: Sketch runs JavaScript code in JavaScriptCore, the JavaScript engine that powers Safari, with full ES6 support
---

Sketch runs JavaScript code in [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore), the JavaScript engine that powers Safari, with full [ES6 support](https://webkit.org/blog/6756/es6-feature-complete/).

## Polyfills

For network, I/O operations and other operations there are Node.js compatible polyfills available. Many of these modules come preinstalled with Sketch.

- [`child_process`](https://github.com/skpm/child_process)
- [`console`](https://github.com/skpm/console)
- [`events`](https://github.com/skpm/events)
- [`fetch`](https://github.com/skpm/sketch-polyfill-fetch)
- [`fs`](https://github.com/skpm/fs)
- [`os`](https://github.com/skpm/os)
- [`process`](https://github.com/skpm/process)
- [`querystring`](https://github.com/skpm/querystring)
- [`stream`](https://github.com/skpm/stream)
- [`string_decoder`](https://github.com/skpm/string_decoder)
- [`timers`](https://github.com/skpm/timers)
- [`util`](https://github.com/skpm/util)

You can find all the official polyfills [on GitHub](https://github.com/search?q=topic%3Apolyfill+org%3Askpm&type=Repositories).

> To see which modules are installed for a specific Sketch version, 50 and later, head to [`core-modules/package.json`](https://github.com/BohemianCoding/SketchAPI/blob/develop/core-modules/package.json) within the Sketch API and select the release branch for the version e.g. `release/53.2`.

## Use macOS frameworks and dynamic Sketch runtime

All macOS frameworks and the internal Sketch APIs are made available to JavaScript by CocoaScript. For a more detailed overview see the [CocoaScript documentation](/plugins/cocoascript).

## Asyncronous operations

The JavaScript context of a Sketch plugin is short-lived. Whenever a plugin is run, a new JavaScript environment is initialized and destroyed as soon as the script finished. To run and wait for asynchronous operations to complete, use fibers to keep the JavaScript environment alive.

```js
let fiber = require('sketch/async').createFiber()

longRunningAsyncTask(function(res) {
  // after completion, tell the fiber we're done
  fiber.cleanup()
})
```
