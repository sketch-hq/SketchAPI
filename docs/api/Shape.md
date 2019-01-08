---
title: Shape
order: 305
section: layers
---

```javascript
var Shape = require('sketch/dom').Shape
```

A shape layer. It is an instance of [Layer](#layer) so all the methods defined there are available. It is shaped by its layers which have boolean operations between them.

| Properties                                                                  |                                                                                                 |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                      | The unique ID of the Shape.                                                                     |
| name<span class="arg-type">string</span>                                    | The name of the Shape                                                                           |
| parent<span class="arg-type">[Group](#group)</span>                         | The group the shape is in.                                                                      |
| locked<span class="arg-type">boolean</span>                                 | If the Shape is locked.                                                                         |
| hidden<span class="arg-type">boolean</span>                                 | If the shape is hidden.                                                                         |
| frame<span class="arg-type">[Rectangle](#rectangle)</span>                  | The frame of the Shape. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>                             | The prototyping action associated with the Shape.                                               |
| exportFormats<span class="arg-type">[ExportFormat](#export-format)[]</span> | The export formats of the Shape.                                                                |
| transform<span class="arg-type">object</span>                               | The transformation applied to the Layer.                                                        |
| transform.rotation<span class="arg-type">number</span>                      | The rotation of the Layer in degrees, clock-wise.                                               |
| transform.flippedHorizontally<span class="arg-type">boolean</span>          | If the layer is horizontally flipped.                                                           |
| transform.flippedVertically<span class="arg-type">boolean</span>            | If the layer is vertically flipped.                                                             |
| style<span class="arg-type">[Style](#style)</span>                          | The style of the Shape.                                                                         |
| sharedStyleId<span class="arg-type">string / null</span>                    | The ID of the [SharedStyle](#shared-style) this Shape is linked to if any.                      |

## Create a new Shape

```javascript
new Shape({
  name: 'my shape',
})
```
