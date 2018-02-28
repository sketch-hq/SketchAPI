---
title: Shape
order: 207
section: components
---

```javascript
var Shape = require('sketch/dom').Shape
```

An image layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties | type                    | Description                                                                                     |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| id         | string                  | The unique ID of the Shape.                                                                     |
| name       | string                  | The name of the Shape                                                                           |
| parent     | [Group](#group)         | The group the shape is in.                                                                      |
| frame      | [Rectangle](#rectangle) | The frame of the Shape. This is given in coordinates that are local to the parent of the layer. |
| flow       | [Flow](#flow)           | The prototyping action associated with the Shape.                                               |
| style      | [Style](#style)         | The style of the Shape.                                                                         |

## Creating a new shape

```javascript
new Shape({
  name: 'my shape',
})
```
