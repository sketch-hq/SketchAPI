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
excerpt: Debug and inspect your plugin with the help of logs, Safari Web Inspector and the Sketch DevTools plugin
---

Debug and inspect your plugin with the help of logs, Safari Web Inspector and the Sketch DevTools plugin.

## Logs

Use [`console`](https://developer.mozilla.org/en-US/docs/Web/API/console) to log anything in JavaScript. The resulting logs can be viewed in:

- Safari Web Inspector Console
- macOS _Console.app_ located in _Applications_ › _Utilities_
- Sketch log file `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Log.log`

> **Quick tip:** If you're using `skpm` run `skpm log -f` to stream logs on the command-line.

## Safari Web Inspector

When a plugin is run, Sketch initializes a new [JavaScript runtime environment](/plugins/javascript-environment) for it. By default this `JSContext` is short-lived and destroyed once the plugin command is completed. However, it is still possible to attach the debugger provided by the _Safari Web Inspector_. From the submenu matching you computer name in the _Develop_ menu, select:

1. _Automatically Show Web Inspector for JSContexts_
2. _Automatically Pause Connecting to JSContexts_ to set breakpoints in your source code.

<img src="/images/developer/safari-develop-menu-inspector.png"
     alt="Enable Safari Web Inspector and Debugger"
     width="726" />

Once done with debugging you may want to deselect these options again or Safari will open the Web Inspector for any plugin run within Sketch or other applications using `JSContext`.

> **Note:** The _Develop_ menu in Safari is not shown by default. To enable it, make sure to check the _Show Develop menu in menu bar_ option within _Preferences_ › _Advanced_.

## Introspect the Objective-C runtime

Native Sketch objects are bridged from Objective-C to JavaScript. Query information about properties, class and instance methods as well as protocols using Mocha.

```js
let mocha = context.document.class().mocha()
console.log(mocha.properties())
```

See the [Mocha documentation](https://github.com/logancollins/Mocha#introspecting-the-objective-c-runtime) for a complete list of available introspection methods.

## Inspect Sketch documents with Sketch DevTools

[Sketch DevTools](https://github.com/skpm/sketch-dev-tools) is a Sketch plugin that lets you inspect elements within a document without writing code.

## Inspect a plugin's webview

To inspect plugin user interfaces built using a webview you need to set a user default.

```sh
defaults write com.bohemiancoding.sketch3 WebKitDeveloperExtras -bool YES
```

If you're using a Beta version of Sketch make sure to use the correct application bundle identifier.

```sh
defaults write com.bohemiancoding.sketch3.beta WebKitDeveloperExtras -bool YES
```

DOM elements can be inspected by right-clicking inside the webview and select _Inspect Element_ which brings up the Safari Web Inspector. If you have JavaScript code supressing the context menu you can still inspect elements by selecting them directly within _Elements_ in Safari Web Inspector.

> **Note:** If you're using `skpm`, the `WebKitDeveloperExtras` user default will be set to `YES` automatically.

## Troubleshooting

### Reload scripts

By default, Sketch caches plugins for performance reasons. Changes to plugins are therefor not automatically recognized. To force Sketch to always reload a plugin before running it set the following value in the user defaults.

```sh
defaults write com.bohemiancoding.sketch3 AlwaysReloadScript -bool YES
```

Sketch only reloads a plugin directly before it gets invoked. For scripts using a long-running JavaScript context Sketch must be restarted. If you are still using `coscript.setShouldKeepAround(false)` we encourage you to instead use [`fibers`](https://developer.sketch.com/reference/api/#async) which provide more granular control over the lifecycle of a JavaScript context.

> **Note:** If you're using `skpm`, the `AlwaysReloadScript` user default will be set to `YES` automatically.

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

### Disable Safe Mode after plugin crashing Sketch

If a plugin causes Sketch to crash, Sketch uses _Safe Mode_ by default and disables all plugins next time it's launched. This behaviour can be disabled by setting a user default.

```sh
defaults write com.bohemiancoding.sketch3 disableAutomaticSafeMode YES
```

If you’re using the Beta version, you’ll need to run:

```sh
defaults write com.bohemiancoding.sketch3.beta disableAutomaticSafeMode YES
```

To restore the default behavior, delete the user default.

```sh
defaults delete com.bohemiancoding.sketch3 disableAutomaticSafeMode
```

### Handle all actions

For development purposes it can be helpful to subscribe to all [actions](/reference/action/). By default Sketch only forwards actions that have been explicitely specified in the plugin manifest. Set the `actionWildcardsAllowed` user default to `YES` to forward all actions.

```sh
defaults write com.bohemiancoding.sketch3 actionWildcardsAllowed -bool YES
```

Update the manifest to include a generic action handler by specifying a action wildcard.

```diff
  "handlers": {
+    "actions": {
+      "*": "onAction"
+    }
  }
```

> **Note:** Use wildcard action handlers for development and debugging only as they impact Sketch' performance negatively.
