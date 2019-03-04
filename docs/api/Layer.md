---
title: Layer
order: 301
section: layers
---

A Sketch layer. This is the base class for most of the Sketch components and defines methods to manipulate them.

| Properties                                                                  |                                                                                                 |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                      | The unique ID of the Layer.                                                                     |
| name<span class="arg-type">string</span>                                    | The name of the Layer                                                                           |
| parent<span class="arg-type">[Group](#group)</span>                         | The group the layer is in.                                                                      |
| locked<span class="arg-type">boolean</span>                                 | If the layer is locked.                                                                         |
| hidden<span class="arg-type">boolean</span>                                 | If the layer is hidden.                                                                         |
| frame<span class="arg-type">[Rectangle](#rectangle)</span>                  | The frame of the Layer. This is given in coordinates that are local to the parent of the layer. |
| selected<span class="arg-type">boolean</span>                               | If the layer is selected.                                                                       |
| flow<span class="arg-type">[Flow](#flow)</span>                             | The prototyping action associated with the layer.                                               |
| exportFormats<span class="arg-type">[ExportFormat](#export-format)[]</span> | The export formats of the Layer.                                                                |
| transform<span class="arg-type">object</span>                               | The transformation applied to the Layer.                                                        |
| transform.rotation<span class="arg-type">number</span>                      | The rotation of the Layer in degrees, clock-wise.                                               |
| transform.flippedHorizontally<span class="arg-type">boolean</span>          | If the layer is horizontally flipped.                                                           |
| transform.flippedVertically<span class="arg-type">boolean</span>            | If the layer is vertically flipped.                                                             |

## Duplicate the Layer

```javascript
var duplicatedLayer = layer.duplicate()
```

A new identical layer will be inserted into the parent of this layer.

### Returns

A new [Layer](#layer).

## Remove the Layer

```javascript
layer.remove()
```

Remove this layer from its parent.

### Returns

The current layer (useful if you want to chain the calls).

## Get the position in the hierarchy

```javascript
var index = layer.index
```

The index of this layer in its parent. The layer at the back of the parent (visually) will be layer `0`. The layer at the front will be layer `n - 1` (if there are `n` layers).

## Move the Layer in the hierarchy

### Using the index

```javascript
layer.index = 2
```

You can set the index of the layer to move it in the hierarchy.

### Move to the front

```javascript
layer.moveToFront()

// which is the same as

layer.index = layer.parent.layers.length - 1
```

Move this layer to the front of its parent.

#### Returns

The current layer (useful if you want to chain the calls).

### Move forward

```javascript
layer.moveForward()

// which is the same as

layer.index = layer.index + 1
```

Move this layer forward in its parent.

#### Returns

The current layer (useful if you want to chain the calls).

### Move to the back

```javascript
layer.moveToBack()

// which is the same as

layer.index = 0
```

Move this layer to the back of its parent.

#### Returns

The current layer (useful if you want to chain the calls).

### Move backward

```javascript
layer.moveBackward()

// which is the same as

layer.index = layer.index - 1
```

Move this layer backward in its parent.

#### Returns

The current layer (useful if you want to chain the calls).

## Accessing the layer's hierarchy

```javascript
// access the page the layer is in
layer.getParentPage()
page.getParentPage() === undefined

// access the artboard the layer is in (if any)
layer.getParentArtboard()
artboard.getParentArtboard() === undefined

// access the symbol naster the layer is in (if any)
layer.getParentSymbolMaster()

// access the shape the layer is in (if any)
layer.getParentShape()
```

In addition to the direct `parent`, you can access a few other entities in the hierarchy of the layer.
