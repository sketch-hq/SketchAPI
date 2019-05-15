---
title: Plugins
section: plugins
permalink: /plugins/

redirect_from:
  - /resources/
  - /guides/installing-plugins/

order: 1
---

Write a Sketch plugin in JavaScript. Take advantage of ES6, access macOS frameworks and use the Sketch APIs without learning Objective-C or Swift.

## APIs

Plugins can make use of the following APIs:

- [Public JavaScript API](/plugins/javascript-api), officially maintained and supported by Sketch
- [Internal API](/plugins/internal-api) for full access to the Sketch Objective-C runtime

## Plugin location

Plugins are stored as folders within the user's home folder. Sketch scans this plugin location on launch for installed plugins.

```sh
~/Library/Application Support/com.bohemiancoding.sketch3/Plugins
```

When a plugin was updated, previously installed versions are kept in a separate folder.

```sh
~/Library/Application Support/com.bohemiancoding.sketch3/PluginsWarehouse
```

> **Quick tip:** You can access the plugins folder by holding `alt` while opening the _Plugins_ menu in Sketch and then choose 'Reveal Plugins Folder'.

### Install a plugin

See the [Sketch documentation](https://sketch.com/docs/plugins/) on how to install plugins.

For development

### Installing Plugins

If you double-click a `.sketchplugin` file, Sketch will copy it into the Plugins folder for you. Any commands that it implements should immediately show up in the **Plugins** menu.

Alternatively, you can install plugins by simply moving them into the Plugins folder yourself.

_Note: Sketch also supports using aliases and links to individual Plugins, or to the Plugins folder itself. This allows you to place them elsewhere (for example, a Dropbox folder to keep multiple installs of Sketch synced)._

### Uninstall Plugins

To remove a Plugin, just select the **Plugins › Manage Plugins…** menu option, select the Plugin you want to remove from the list, and either right click the plugin or click the gear icon and select _Uninstall "Plugin Name"_:

<img src="/images/developer/plugin-uninstall.png"
     alt="Uninstall a plugin in Sketch Preferences using the context menu"
     width="626" />

Any commands that the Plugin provided will be removed from the **Plugins** menu immediately.

Alternatively, you can just uncheck any Plugin on the list to disable it without uninstalling it.

## Examples

Explore some [sample plugins](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/) built by Sketch.

## Find plugins

- [Sketch Plugins](https://sketch.com/extensions/plugins)
- [Awesome Sketch Plugins](http://awesome-sket.ch)
- [Sketchpacks](http://www.sketchpacks.com)
- [Sketchrunner](https://sketchrunner.com)

## Resources

### JavaScript

- [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Introduction to JavaScript at Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
- [Learn JavaScript at MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

#### Books

- [Eloquent JavaScript](http://eloquentjavascript.net)
- [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)

### Cocoa

- [AppKit](https://developer.apple.com/documentation/appkit?language=objc), one the main Apple frameworks that Sketch is built on.
- [Foundation](https://developer.apple.com/documentation/foundation?language=objc), more essential Apple classes and services.

### CocoaScript

- [Sketch Plugins Cookbook](https://github.com/turbobabr/Sketch-Plugins-Cookbook), an amazing collection of tips and information, from [Andrey Shakhmin](https://github.com/turbobabr)
- [Sketch Plugin Snippets for Plugin Developers](https://medium.com/sketch-app-sources/sketch-plugin-snippets-for-plugin-developers-e9e1d2ab6827#.a3xn6hth6)
- [I made a Sketch Plugin. You can too](https://medium.com/sketch-app-sources/i-made-a-sketch-plugin-you-can-too-58a28b7277f1#.52umaxe3i)
- [Debugging Sketch Plugins](https://sketchplugindev.james.ooo/debugging-sketch-plugins-11cafc86df87#.64891ewop)
- [How I made a Sketch Plugin for my team without knowing code](http://hackingui.com/design/how-to-create-a-sketch-plugin/)
- [Programmers Design Differently: Why I Built a CSS Plugin for Sketch 3](https://medium.com/sketch-app-sources/programmers-design-differently-why-i-built-a-css-plugin-for-sketch-3-52a1246305a4#.v0qjvzsfd)
- [Sketch Runner](https://medium.com/sketch-app-sources/runner-speed-up-your-sketch-workflow-fba470ed43c1#.bgdpr68wy)

## Tools

- [SketchTool](https://sketch.com/tool) - An OS X command-line app for exporting Pages and Slices out of .sketch documents.
- [Sketch Scripter](https://github.com/timuric/sketchapp-scripter), by Timur Carpeev. an Atom package for running Sketch scripts from the Atom editor.
- [class-dump](http://stevenygard.com/projects/class-dump/). We do our best to document everything, but if you are of the adventurous type, you’ll probably want to play with this.
- [Sketchpacks Relay](https://github.com/apps/sketchpacks-relay/), by [Sketchpacks](https://sketchpacks.com). Publish your Sketch plugins to the Sketchpacks Plugin Registry. Automatically [serve your Appcast Feeds](https://docs.sketchpacks.com/developers/publishing/appcast.html) for native plugin updates.
- [Sketch Plugin Manager](https://skpm.io) - A utility to create, build and publish sketch plugins.
