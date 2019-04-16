---
title: SketchTool
permalink: /guides/sketchtool/
summary: Information about SketchTool
order: 600
---

SketchTool is a command line utility that’s bundled with Sketch, that allows you to perform some operations with Sketch documents, like inspecting them or exporting assets. It also lets you control Sketch from the command line to perform some actions (like running plugins, for example).

## Using SketchTool

SketchTool comes **bundled with Sketch** (and Sketch Beta). You can find it in `Sketch.app/Contents/Resources/sketchtool/bin/sketchtool` (to find the path to Sketch in a reliable way in your scripts, you can use the following command: `mdfind kMDItemCFBundleIdentifier == 'com.bohemiancoding.sketch3' | head -n 1`).

It is recommended that you use it from inside Sketch, and not copy it to another location, so that you're always using the latest version (SketchTool is updated whenever Sketch is updated, and you'll need to use the updated version to read documents saved with the latest version of Sketch).

Note: SketchTool requires OSX 10.11 or higher.

### Important

SketchTool is free to use, but it comes with absolutely no warranty. That being said, if you find any bugs or have any feature request, please [send us an email](mailto:mail@sketch.com) and we'll do our best to improve it.

SketchTool can only export a document if all the fonts that it uses have been installed on the system.

Note that future versions of Sketch will make changes to the file format, so make sure you’re always running the latest version of the tool.

## Usage

To get an idea of the commands available, run

```
sketchtool help
```

to see the help.

Here are some examples of the things you can do with SketchTool

### Dump a document

```
sketchtool dump path/to/document.sketch
```

Gets you a dump of the document structure in JSON format.

If you need to see the metadata for a document, but don't want a full dump, you can use

```
sketchtool metadata path/to/document.sketch
```

and you'll get something similar to this:

```json
{
  "commit": "b8111e3393c4ca1f2399ecfdfc1e9488029ebe7b",
  "pagesAndArtboards": {
    "E6890372-BE93-4E4C-ACD1-8F8B10862938": {
      "name": "Page 1",
      "artboards": {
        "214B376A-C4A3-47A9-9B87-DFBC49A6EFE0": {
          "name": "Artboard 2"
        },
        "F8FE177A-5D6D-4A37-8BD1-B246A83A9C21": {
          "name": "Artboard 1"
        }
      }
    }
  },
  "version": 97,
  "fonts": [],
  "compatibilityVersion": 93,
  "app": "com.bohemiancoding.sketch3",
  "autosaved": 0,
  "variant": "NONAPPSTORE",
  "created": {
    "commit": "b8111e3393c4ca1f2399ecfdfc1e9488029ebe7b",
    "appVersion": "48.2",
    "build": 47327,
    "app": "com.bohemiancoding.sketch3",
    "compatibilityVersion": 93,
    "version": 97,
    "variant": "NONAPPSTORE"
  },
  "saveHistory": ["NONAPPSTORE.47327"],
  "appVersion": "48.2",
  "build": 47327
}
```

### Export Assets

You can use SketchTool to export the assets in your Sketch document. SketchTool can export predefined assets (i.e: layers and Artboards that have been made Exportable in the Sketch UI), or any layer you want.

#### Exporting Artboards

Running

```
sketchtool export artboards path/to/document.sketch
```

will export all the artboards in the document, regardless of their exportable status. If the artboards have been set to Exportable, SketchTool will export all the sizes and formats. Otherwise, they'll be exported at 1x in PNG format by default, You can specify a custom format or size using command line options:

```
sketchtool export artboards path/to/document.sketch --formats=jpg
```

You can export multiple formats at once:

```
sketchtool export artboards path/to/document.sketch --formats=jpg,png,svg
```

To see which formats are supported by SketchTool, run `sketchtool list formats`.

To define the size, you can do:

```
sketchtool export artboards path/to/document.sketch --scales=1,2
```

and that will give you 1x and 2x versions of your artboards.

Files are exported to the current document by default, but you can define an output path like this:

```
sketchtool export artboards path/to/document.sketch --output=output/path
```

If you don't want to export all artboards, you can tell SketchTool which artboards to export by using the `item` or `items` option with a layer ID:

```
sketchtool export artboards path/to/document.sketch --item=214B376A-C4A3-47A9-9B87-DFBC49A6EFE0
```

(to get the ID for an artboard, use `sketchtool metadata` or `sketchtool list artboards`).

For more information about other things you can do while exporting an artboard, see `sketchtool help export artboard`.

#### Exporting Layers, Slices or Pages

Layers, Slices and Pages work just like artboards, so you can read the previous section replacing 'artboard' with 'layer', 'slice' or 'page'

#### Getting a document preview

```
sketchtool export preview path/to/document.sketch
```

will give you a PNG preview of the last edited page in the document, and save it as `preview.png`. SketchTool will try to render a 100% preview, but if the document is too big it will scale down the preview so that it fits inside a 2048 x 2048 pixels rectangle.

### Run a plugin

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
