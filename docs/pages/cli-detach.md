---
title: Detach styles and symbols
section: cli
chapter: Command-line interface
permalink: /cli/detach

order: 104
excerpt: Detach all symbol and style instances within a Sketch document.
---

Turn every symbol and style instance in a Sketch document into their own self-contained layers and layer groups using `sketchtool detach`.

```sh
sketchtool detach [--output=/path/to/detached.sketch] /path/to/document.sketch
```

`--output`

- **Optional**
- **Format:** Path to file
- **Default:** If not present, overwrite source file

### Output

Creates a self-contained Sketch document, applying and detaching:

- [Layer Styles](https://www.sketch.com/docs/styling/shared-styles/)
- [Text Styles](https://www.sketch.com/docs/text/text-styles/)
- [Symbols](https://www.sketch.com/docs/symbols/)
- [Library Styles](https://www.sketch.com/docs/libraries/library-styles)
- [Library Symbols](https://www.sketch.com/docs/libraries/library-symbols)

Detached Symbol Layers include custom data in `userInfo` for the `com.bohemiancoding.sketchtool.detach` key, describing what symbol the layer has previously been an instance of.

```json
{
  "layers": [
  {
    "do_objectID": "99486339-89A6-4395-BC9C-4A4A606F2D18",
    ...
    "userInfo": {
      "com.bohemiancoding.sketchtool.detach": {
        "symbolInstance": {
          "do_objectID": "0A01E27B-27DF-433A-BE21-76C08564AF4E",
          "frame": {
            "_class": "rect",
            "constrainProportions": false,
            "height": 100,
            "width": 300,
            "x": 0,
            "y": 0
          }
        },
        "symbolMaster": {
          "do_objectID": "BA413F0D-84CE-4288-9394-6CD6818E8F2C",
          "symbolID": "BD7700E0-DDFA-4352-824F-8364A5F4BA4D"
        }
      }
    },
    ...
  },
  ...
  ]
}
```

> **Note:** Layer Groups created from a detached Symbol Instance may have a different position or dimensions. The custom data `frame` attribute contains the original value of the instance before it got detached.

### Related resources

For more information on custom data and how to access it within the raw JSON document data or via the plugin API, see also:

- [Sketch file format](/file-format/)
- [Layer settings](/reference/api/#get-a-layer-setting)
