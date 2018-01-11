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
| selected   | Boolean                 | If the layer is selected.                                                                       |

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
