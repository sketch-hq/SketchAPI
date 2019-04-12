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

Use logs, Safari Web Inspector and the Sketch DevTools plugin to inspect and debug your plugin.

## Logs

Use [`console`](https://developer.mozilla.org/en-US/docs/Web/API/console) to log anything in JavaScript. The resulting logs can be viewed in:

- Safari Web Inspector Console
- macOS _Console.app_ located in _Applications_ › _Utilities_
- Sketch log file `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Log.log`

> **Quick tip:** If you're using `skpm` run `skpm log -f` to stream logs on the command-line.

## Safari Web Inspector

Connect the Safari Web Inspector to your plugin to debug your plugin. Sketch plugins are by default using a short-lived `JSContext`. For the debugger to connect

<img src="/images/developer/safari-develop-menu-inspector.png"
     alt="Enable Safari Web Inspector and Debugger"
     width="726" />

> **Note:** The _Develop_ menu in Safari is not shown by default. To enable it, make sure to check the _Show Develop menu in menu bar_ option within _Preferences_ › _Advanced_.

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

## Troubleshooting

### Reload scripts

By default, Sketch caches plugins for performance reasons. Changes to plugins are therefor not automatically recognized. To force Sketch to always reload a plugin before running it set the following value in the user defaults.

```sh
defaults write com.bohemiancoding.sketch3 AlwaysReloadScript -bool YES
```

Sketch only reloads a plugin directly before it gets invoked. For scripts using a long-running JavaScript context Sketch must be restarted. If you are still using `coscript.setShouldKeepAround(false)` we encourage you to instead use [`fibers`](https://developer.sketch.com/reference/api/#async) which provide more granular control over the lifecycle of a JavaScript context.

> **Note:** If you use `skpm`, the `AlwaysReloadScript` user default will be set to `YES` automatically.

### Automatically restart Sketch after plugin changes

If your plugin uses a long-running JavaScript context it can be useful during development to restart Sketch every time a change is made. This can be done automatically using the Unix utility [`entr`](http://entrproject.org).

Install `entr` manually or using Homebrew.

```sh
brew install entr
```

Watch the plugin bundle for changes in any of the scripts and provide the path to Sketch.

```sh
find /path/to/my-plugin.sketchplugin -name '*js' | entr \
  -r /Applications/Sketch.app/Contents/MacOS/Sketch
```

### Clear plugin cache manually

The plugin cache contains the current and previously installed versions of plugins. To clear the cache remove the folder for a specific plugin or the entire cache `PluginsWarehouse` from:

```sh
~/Library/Application Support/com.bohemiancoding.sketch3/PluginsWarehouse
```

Sketch will recreate the cache next time a plugin gets initialized.

### Ensure matching version number in `manifest.json` and appcast

A plugin installation fails if the plugin version specified in the appcast does not match the version number in `manifest.json`.

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
