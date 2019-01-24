---
title: 3rd Party Apps Integrations
permalink: /guides/third-party-apps-integrations/
summary: Information about how to integrate Sketch into a 3rd party app
order: 610
---

A Sketch plugin is not the only way you can interact with Sketch. You might have built a new app and want to integrate it with Sketch. Here are a couple of ways to have a seamless workflow between your app and Sketch.

## Using the JSON file format

A Sketch file is just a zip file containing a bunch of JSON files. Your app can unzip it, modify some of the files and zip it back. You don't even need Sketch at all! You can even create a Sketch file from scratch. The [`sketch-file`](https://github.com/mathieudutour/sketch-file) library might help with that.

## Using SketchTool

SketchTool is the perfect tool to interact with Sketch. You can export document previews, get metadata from a file and even run a plugin programmatically!

The plugin you can run with SketchTool does not need to be installed by the user, it can be bundled in your app and executed from there. You can also install the plugin by copying to the plugin folder (`~/Library/Application Support/com.bohemiancoding.sketch3/Plugins`) if necessary.

## Using the `sketch://` URL scheme

Sketch listens to the `sketch://` URL scheme and you can use it to open a specific document. For example:

```
// open the file in sketch
sketch:///path/to/file.sketch

// open the file in sketch and center the canvas on a layer
sketch:///path/to/file.sketch?centerOnLayer=LAYER_ID

// open the file in sketch and set the zoom
sketch:///path/to/file.sketch?zoom=1

// you can also add multiple options
sketch:///path/to/file.sketch?centerOnLayer=LAYER_ID&zoom=1
```
