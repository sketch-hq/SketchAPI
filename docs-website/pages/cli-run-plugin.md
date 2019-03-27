---
title: Run a plugin
section: cli
chapter: Commands
permalink: /cli/run-plugin

order: 200
---

SketchTool can tell Sketch to launch and run a plugin. This is very useful if you're testing a plugin on a continuous integration system, or you need to automate boring tasks.

Imagine we have a plugin with this code:

```
context.document.showMessage("Remote plugin running!")
```

We save it as 'Remote Plugin' from the _Run Script…_ panel, and run this:

```
sketchtool run ~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/Remote\ Plugin.sketchplugin com.bohemiancoding.sketch.runscriptidentifier
```

Note that `com.bohemiancoding.sketch.runscriptidentifier` is the default command identifier Sketch uses when saving a plugin, but it may be different in your case. If you just want to run the first command in the bundle, you can use `""` instead of an identifier.

SketchTool will now launch Sketch, wait for a document to open, and run our plugin. Sketch will become the frontmost application, but if you want it to remain in the background (say, you're running a test from your code editor and don't want Sketch to steal the focus) you can use the `--without-activating` option.

The plugin you can run with SketchTool does not need to be installed by the user, it can be bundled in your app and executed from there. You can also install the plugin by copying to the plugin folder (`~/Library/Application Support/com.bohemiancoding.sketch3/Plugins`) if necessary.
