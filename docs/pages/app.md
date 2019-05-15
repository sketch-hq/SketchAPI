---
title: Sketch.app
permalink: /app

layout: single-page
excerpt: Use the sketch:// URL schema to open documents in Sketch already focused on specific layers or with a specified zoom level.
---

You can integrate Sketch into your app or worflow using the `sketch://` URL scheme. You can even open documents in Sketch already focused on specific layers or with a specified zoom level.

**Note:** If a document is already open the canvas view does not change.

## Center layer and specify zoom level

The URL scheme accepts two parameters. If the path to the file is provided without any parameters the file will be opened in the same way it was last saved.

`sketch://path/to/file.sketch?centerOnLayer=LAYER_ID&zoom=ZOOM_LEVEL`

### `centerOnLayer` string

To obtain the layer id use either the JavaScript API or read the document's JSON data directly.

#### Example

To get the id of the current selection, select a layer within the current document in Sketch and run the following script from the _Run Script…_ panel in the _Plugins_ menu.

```js
const document = require('sketch/dom').getSelectedDocument()

document.selectedLayers.forEach(layer => console.log(layer.id))
```

### `zoom` number

_Actual Size_ has a zoom level of `1`. To zoom out specify values between `0...1` while using values greater than `1` to zoom in, e.g. `2` for 200%.
