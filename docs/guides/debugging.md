---
title: Debugging
summary: How to debug a sketch plugin
permalink: /guides/debugging-plugins/
order: 130
---

When developing a Sketch plugin, chances are you will need some ways to know what is happening when your code is running.

## Logs

The most common way to debug a JavaScript code is to put a bunch of `console.log` at key steps. Unfortunately, JavaScriptCore (the [context in which a Sketch plugin is running](/guides/cocoascript/)) doesn't provide `console`. Instead, a special method called `log` is available.

There are several options to see those logs:

- Open Console.app and look for the sketch logs
- Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file
- Run `skpm log` which will output the file above (`skpm log -f` to stream the logs)

`skpm` will polyfill `console` so that you can use `console.log` as usual. In addition to using the `log` method behind the scene, it will also forward the logs to [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools).

## `debugger` and variable inspection

When a plugin is running, Sketch creates a JavaScript context associated to it. It is possible to inspect this context using Safari.

In Safari, go to `Develop` > _`name of your machine`_ > `Automatically Show Web Inspector for JSContexts`. And you probably want to enable `Automatically Pause Connecting to JSContext` otherwise the inspector will close before you can interact with it (the context is destroyed when the script has finished running).

Now you can use breakpoints in your code, inspect the value of variables at runtime, etc.

## Objective-C classes introspection

The plugin system in Sketch gives you full access to the app's internals and the core frameworks in macOS. Sketch is built using Objective-C and its classes are bridged to JavaScript. It is often useful to know what classes you are dealing with and what methods are defined on it.

You can access those information with some introspection methods defined by the bridge. For example:

```js
String(context.document.class()) // MSDocument

var mocha = context.document.class().mocha()

mocha.properties() // array of MSDocument specific properties defined on a MSDocument instance
mocha.propertiesWithAncestors() // array of all the properties defined on a MSDocument instance

mocha.instanceMethods() // array of methods defined on a MSDocument instance
mocha.instanceMethodsWithAncestors()

mocha.classMethods() // array of methods defined on the MSDocument class
mocha.classMethodsWithAncestors()

mocha.protocols() // array of protocols the MSDocument class inherits from
mocha.protocolsWithAncestors()
```

## Sketch-dev-tools

We created a small Sketch specific tool to help you with debugging your plugins and hopefully make your life easier. It takes the form of a Sketch plugin that you can download [here](https://github.com/skpm/sketch-dev-tools/releases/latest) and launch with `cmd + option + j`.
