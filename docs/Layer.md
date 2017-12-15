---
title: Layer
order: 202
section: components
---

```javascript
var Layer = sketch.Layer
```

```javascript
import { Layer } from 'sketch-api'
```

A Sketch layer.

| Properties | type                    | Description                                                                                     |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| id         | string                  | The unique ID of the Layer.                                                                     |
| name       | string                  | The name of the Layer                                                                           |
| parent     | [Group](#group)         | The group the layer is in.                                                                      |
| frame      | [Rectangle](#rectangle) | The frame of the Layer. This is given in coordinates that are local to the parent of the layer. |

## Creating a new layer

```javascript
new Layer()
```

```javascript
var layer = new Layer({
  name: 'my name',
  parent: existingGroup,
})
```

## duplicate

```javascript
var duplicatedLayer = layer.duplicate()
```

A new identical layer will be inserted into the parent of this layer.

### Returns

A new [Layer](#layer).

## remove

```javascript
layer.remove()
```

Remove this layer from its parent.

### Returns

The current layer (useful if you want to chain the calls).

## select

```javascript
layer.select()
```

Select the layer. This will clear the previous selection. Use `layer.addToSelection()` if you wish to preserve the existing selection.

### Returns

The current layer (useful if you want to chain the calls).

## deselect

```javascript
layer.select()
```

Deselect the layer. Any other layers that were previously selected will remain selected.

### Returns

The current layer (useful if you want to chain the calls).

## addToSelection

```javascript
layer.addToSelection()
```

Add this layer to the selected layers. Any other layers that were previously selected will remain selected.

### Returns

The current layer (useful if you want to chain the calls).

## index

```javascript
var index = layer.index
```

The index of this layer in its parent. The layer at the back of the parent (visually) will be layer `0`. The layer at the front will be layer `n - 1` (if there are `n` layers).

## moveToFront

```javascript
layer.moveToFront()
```

Move this layer to the front of its parent.

### Returns

The current layer (useful if you want to chain the calls).

## moveForward

```javascript
layer.moveForward()
```

Move this layer forward in its parent.

### Returns

The current layer (useful if you want to chain the calls).

## moveToBack

```javascript
layer.moveToBack()
```

Move this layer to the back of its parent.

### Returns

The current layer (useful if you want to chain the calls).

## moveBackward

```javascript
layer.moveBackward()
```

Move this layer backward in its parent.

### Returns

The current layer (useful if you want to chain the calls).

## localRectToPageRect

```javascript
var rectDefinedInPageCoordinates = layer.localRectToPageRect(
  rectDefinedInLocalCoordinates
)
```

Convert a rectangle in the coordinates that this layer uses to absolute (page) coordinates.

| Parameter         | type                    | Description              |
| ----------------- | ----------------------- | ------------------------ |
| rect _(required)_ | [Rectangle](#rectangle) | The rectangle to convert |

### Returns

A [Rectangle](#rectangle) in page coordinates.

## localRectToParentRect

```javascript
var rectDefinedInParentCoordinates = layer.localRectToParentRect(
  rectDefinedInLocalCoordinates
)
```

Convert a rectangle in the coordinates that this layer uses to its parent's coordinates.

| Parameter         | type                    | Description              |
| ----------------- | ----------------------- | ------------------------ |
| rect _(required)_ | [Rectangle](#rectangle) | The rectangle to convert |

### Returns

A [Rectangle](#rectangle) in the layer's parent's coordinates.

## export

```javascript
layer.export({
  formats: 'svg',
})
```

Export this layer (and the ones below it), using the options supplied.

| Parameter                      | type    | Description                                                                                                                                      |
| ------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| options                        | Object  | Options indicating which sizes and formats to use, etc..                                                                                         |
| options.output                 | String  | this is the path of the folder where all exported files are placed (defaults to `"~/Documents/Sketch Exports"`).                                 |
| options.formats                | String  | Comma separated list of formats to export to (`png`, `jpg`, `svg` or `pdf`) (default to `"png"`).                                                |
| options.scales                 | String  | Comma separated list of scales which determine the sizes at which the layers are exported (defaults to `"1"`).                                   |
| options['use-id-for-name']     | Boolean | Name exported images using their id rather than their name (defaults to `false`).                                                                |
| options['group-contents-only'] | Boolean | Export only layers that are contained within the group (default to `false`).                                                                     |
| options.overwriting            | Boolean | Overwrite existing files (if any) with newly generated ones (defaults to `false`).                                                               |
| options.trimmed                | Boolean | Trim any transparent space around the exported image (defaults to `false`).                                                                      |
| options['save-for-web']        | Boolean | If exporting a PNG, remove metadata such as the colour profile from the exported file (defaults to `false`).                                     |
| options.compact                | Boolean | If exporting a SVG, make the output more compact (defaults to `false`).                                                                          |
| options['include-namespaces']  | Boolean | If exporting a SVG, include extra attributes (defaults to `false`).                                                                              |
| options.progressive            | Boolean | If exporting a JPG, export a progressive JPEG (only used when exporting to `jpeg`) (defaults to `false`).                                        |
| options.compression            | Float   | If exporting a JPG, the compression level to use fo `jpeg` (with `0` being the completely compressed, `1.0` no compression) (defaults to `1.0`). |

### Returns

The current layer (useful if you want to chain the calls).
