---
title: Plugins, Scripts, and Commands
summary: An introduction to writing plugin scripts.
permalink: /guides/plugin-scripts/
redirect_from: /introduction/plugin-scripts/
order: 300
---

A Plugin in Sketch defines one or more commands, which Sketch will display menu items for.

Each of these commands is actually implemented as a JavaScript function (we call them handlers), located in a script file in the bundle.

Each script can contain as many handlers as you need, and each command can be implemented by a different handler, so it’s up to you whether you arrange things with one script per command, or put all the command handlers in a single script file.

So to find out how to make Plugins, you first need to know how to write Sketch scripts.

Teaching you how to write JavaScript code is beyond the scope of these pages, so we’re going to assume that you already know that bit. If not, there are lots of good [learning resources](/resources/) on the internet!

## Script Syntax

Scripts in Sketch are written using [CocoaScript](https://github.com/ccgus/CocoaScript).

This is a bridge that lets you write JavaScript scripts that can call native Objective-C/Cocoa.

Using it, you can write the logic of your Plugin in JavaScript, but can call the actual classes and methods that implement Sketch itself when you want to make it do something.

The basics are as follows:

- you write your JavaScript code as you normally would
- using the bridge, you can obtain Objective-C objects from the host application (in this case Sketch), or from the system itself
- basic Objective-C objects that have a JavaScript equivalent (such as strings and numbers), can typically be used in the same way as their JS versions
- you can read and write properties on custom Objective-C objects as you would in JS
- you can call methods on custom Objective-C objects, using either the familiar JavaScript syntax, or the Objective-C square bracket syntax.

(See the [More On CocoaScript](/guides/cocoascript/) page for more details.)

When your script is called by Sketch, you are passed some _context_, including the Objective-C objects representing the current Sketch document and selection.

You can then read properties, perform calculations, and call methods on these objects, to accomplish your script’s purpose.

## Script Context

When a user selects a Plugin menu command, Sketch looks up which handler (CocoaScript function) to call, and which script file to call it in.

When the handler is called, it is passed a single _context_ variable. This contains some important properties that you can use to access the objects that you’ll need.

For example, the selection property gives you a list of the selected layers in the current document:

```js
var onRun = function(context) {
  var selection = context.selection
  for (var i = 0; i < selection.count(); i++) {
    var layer = selection[i]
    log('layer ' + layer.name + ' is selected.')
  }
}
```

All Plugins in Sketch have access to the following default variables:

- **command**: an [`MSPluginCommand`](/reference/class/MSPluginCommand/) object representing the script command currently executing
- **document**: an [`MSDocument`](/reference/class/MSDocument/) object representing the current document
- **plugin**: an [`MSPluginBundle`](/reference/class/MSPluginBundle/) object representing the plugin bundle containing the currently executing script
- **scriptPath**: an `NSString` containing the full path to the currently executing script
- **scriptURL**: like **scriptPath**, but as an NSURL object
- **selection**, an `NSArray` of the layer(s) that are selected in the current document; each item of this array is an [`MSLayer`](/reference/class/MSLayer/) object

## Trying Out Scripts

The easiest way to try out simple scripts is via the **Plugins › Run Script…** menu item.

This gives you a text field into which you can type your script.

Hitting the **Run** button will execute the script and display any output or errors in the lower panel.

You can use this interface to explore and experiment.

## Creating a Plugin

Once you have a script that you want to develop into a proper Plugin, you can use the **Save…** button in the **Run Custom Script…** sheet.

This will create a Plugin folder (known as a [Plugin Bundle](/guides/plugin-bundles/)) and save your script into it.

The resulting Plugin will have a single command and a single script file. Executing the command will call the `onRun` function in the script, which will contain the code you entered.

From this starting point, you can expand your Plugin by editing the files in the folder directly.

You can add more code to your `onRun` function, add more functions, and even more script files.

By editing the `manifest.json` file in the Plugin folder, you can customise the name of the command, enter a description, and even expand the Plugin to define multiple commands.

For more information on this, see [Plugin Bundles](/guides/plugin-bundles/).
