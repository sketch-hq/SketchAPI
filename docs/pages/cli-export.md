---
title: Export assets
section: cli
chapter: Command-line interface
permalink: /cli/export-assets

order: 100
excerpt: Use the command-line interface to export any layer or page and document previews from a Sketch file
---

Export assets using `sketchtool export`:

-   Any layer
-   Pages
-   Document previews

## Formats

By default `sketchtool` exports assets as `1x` PNG. Layers, including artboards, that have been made _Exportable_ will be exported using their defined export presents.

To generate assets in other formats use the command-line arguments `--formats=jpg,png,svg` and `--scales=1,2` providing a comma-separated list of values and override the presets.

To list all available format run the following command:

```sh
sketchtool list formats
```

## Output

Provide the `--output=/path/to/assets` argument to specify a custom output folder.

## Layers

Any layer can be exported with `sketchtool`. By default only slices and layers marked _Exportable_ are exported.

```sh
sketchtool export layers /path/to/document.sketch
```

To export only specific layers provide one or more layer ids with the `item` or `items` command-line argument. Get the layer id by [inspecting the document](/cli/inspect-document).

```sh
sketchtool export layers /path/to/document.sketch --item=3E0A01F1-482E-4A32-AD5B-EDF0B98575EA
```

View all export options in the usage instructions.

```sh
sketchtool help export layers
```

## Artboards

Artboards are a subset of layers and `sketchtool` provides a convenience command to export them. It automatically exports both artboards that have been made _Exportable_ and such that haven't.

Export all artboards of a document running the following command:

```sh
sketchtool export artboards /path/to/document.sketch
```

Following is an example exporting all artboards overriding any presets, generating JPG, PNG and SVG assets in `1x` and `2x` variants.

```sh
sketchtool export artboards /path/to/document.sketch --formats=jpg,png,svg --scales=1,2
```

Provide specific artboard layer ids in `item` or `items` limit the export to certain artboards. For a list of all available options, see the command help:

```sh
sketchtool help export artboards
```

> **Note:** You can also use `sketchtool metadata` for artboards but `sketchtool list` works the same for artboards as well as any other document elements. See [Inspect a document](/cli/inspect-document) for details.

## Document preview

Export a PNG preview of the last edited page of the document. By default it is saved as `preview.png` and at a maximum resolution of 2048x2048 pixel. Larger documents are scaled down to fit.

```sh
sketchtool export preview /path/to/document.sketch
```

For all available options see the usage instructions.

```sh
sketchtool help export preview
```
