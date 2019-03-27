---
title: Export assets
section: cli
chapter: Commands
permalink: /cli/export-assets

order: 100
---

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
