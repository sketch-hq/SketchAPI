---
title: Debug a plugin
section: plugins
chapter: Guides
permalink: /plugins/debugging

# Previous developer documentation
redirect_from:
  - /guides/debugging-plugins/
  - /guides/preferences/
  - /introduction/preferences/

order: 103
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

If you spend non-trivial amounts of time developing Plugins for Sketch, there are some improvements you can make to your workflow using these preferences.

Since not all Sketch users are Plugin developers, it didn't make sense to give these preferences a UI in the Preferences panel. You'll need to use Terminal.app to enable / disable them.

## Disable safe mode reload behavior when your plugin crashes Sketch

If a plugin crashes sketch, we disable plugins when relaunching sketch to make sure users don't end up in an infinite crashing loop. When developing a plugin, it might crash Sketch before you fix the bug and this behavior can become annoying as you need to go to the plugin menu to re-enable you plugin. You can use `defaults write com.bohemiancoding.sketch3 disableAutomaticSafeMode true` to disable that behavior.

If you’re using the Beta version, you’ll need to run `defaults write com.bohemiancoding.sketch3.beta disableAutomaticSafeMode true`.

If you want to restore the default behavior, run `defaults delete com.bohemiancoding.sketch3 disableAutomaticSafeMode`.

## Listen to all actions in the Action API

<p class="warning">
  <strong>Warning:</strong> This is an extremely expensive operation, and will impact Sketch’s performance. Please use this <em>on your development system only</em> and <strong>never enable this on a customer’s computer</strong>.
</p>

When working with the new [Action API](/reference/action/) you might want to listen to multiple events (specially when trying to find _which_ event is the one you want to use).

To do that, use the `actionWildcardsAllowed` preference. If set to `YES`, scripts are allowed to register a wildcard handler for events. This is off by default, and it could have a bad effect on performance, so handle it with care.

```shell
defaults write com.bohemiancoding.sketch3 actionWildcardsAllowed -bool YES
```

Once you do that, you can tell your Plugin to call a method for every action by adding a `*` key to your `handlers.actions` object in `manifest.json`:

```diff
{
  ...
  "handlers": {
+    "actions": {
+      "*": "onActionHandler"
+    }
  }
  ...
}
```

## Always reload scripts before running

For performance reasons, Sketch caches the contents of the Plugins folder. This is very convenient for users, since Plugins run very fast, but makes your life hard if you’re a developer. That’s why we added a preference to disable this caching mechanism and force Sketch to always reload a Plugin’s code from disk:

```shell
defaults write com.bohemiancoding.sketch3 AlwaysReloadScript -bool YES
```

If you enable this, as soon as you save your script it will be ready for testing in Sketch (bye bye relaunching it just to test a small change!)

Please note that this setting determines whether the source of the script is reloaded from disc whenever Sketch makes a new javascript context for the script. If it’s `NO`, the source is cached, if it’s `YES`, the source is always reloaded from disc.

What it doesn’t do, however, is change when a new JavaScript context is made. For long-running scripts, the same context is held in memory (it has to be — the running script is using it) until the script exits. So if you’re testing a long-running script, you will still have to find a way to stop the script, so that the context gets thrown away (that usually means relaunching Sketch, or setting `coscript.setShouldKeepAround(false)`).

### Always restarting sketch after changes to plugin JavaScript

If you find yourself in the latter category, of needing to restart long-running JavaScript contexts regularly during development, the unix utility [`entr`](http://entrproject.org/) may come in handy. Given a list of files on stdin, it will run a command (or restart a long-running process given `-r`) every time one of those files is modified:

`find /your/plugin/build/dest -name '*js' | entr -r /Applications/Sketch.app/Contents/MacOS/Sketch`

#### In conjunction with WebView JavaScript

And if you so happen to also have WebView JavaScript that doesn't require rebooting Sketch (because right-click + reload is fine), just make sure to avoid passing those files to `entr`:

`find ... | grep -v 'web\.js' | entr ...`

## Inspect a WebView

If your plugin is using a WebView, chances are that you will need to inspect it at some point.

To do so, you need to add the preference:

```shell
defaults write com.bohemiancoding.sketch3 WebKitDeveloperExtras -bool true
```

Then you can simply right-click on your web-view and click on `Inspect`. The inspector should show up.

### Troubleshooting

So you've followed all the steps, and your plugin is still not updating? Try these:

- Remove the `PluginsWarehouse` folder that lives in `~/Library/Application Support/com.bohemiancoding.sketch3/`. This is where we cache plugin downloads, and if you've been testing different versions of your appcast, you probably have some old stuff there that's worth cleaning.
- Make sure the `manifest.json` in your downloaded ZIP has a version number that matches the one in your appcast. If the appcast says the ZIP contains v1.2, but the actual ZIP says it's v1.1, the installation will not work.
