---
title: Shape
order: 305
section: layers
---

```javascript
var Shape = require('sketch/dom').Shape
```

An image layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                 |                                                                                                 |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                     | The unique ID of the Shape.                                                                     |
| name<span class="arg-type">string</span>                   | The name of the Shape                                                                           |
| parent<span class="arg-type">[Group](#group)</span>        | The group the shape is in.                                                                      |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the Shape. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>            | The prototyping action associated with the Shape.                                               |
| style<span class="arg-type">[Style](#style)</span>         | The style of the Shape.                                                                         |
| sharedStyleId<span class="arg-type">string / null</span>   | The ID of the [SharedStyle](#sharedstyle) this Shape is linked to if any.                       |

## Create a new Shape

```javascript
new Shape({
  name: 'my shape',
})
```
