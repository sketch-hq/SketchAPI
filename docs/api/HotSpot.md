---
title: HotSpot
order: 212
section: components
---

```javascript
var HotSpot = require('sketch/dom').HotSpot
```

A Sketch hotspot. It is an instance of both [Layer](#layer) so all the methods defined there are available.

| Properties | type                    | Description                                                                                        |
| ---------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| id         | string                  | The unique ID of the Artboard.                                                                     |
| name       | string                  | The name of the Artboard                                                                           |
| parent     | [Page](#page)           | The page the Artboard is in.                                                                       |
| layers     | [Layer](#layer)         | The layers that this component groups together.                                                    |
| frame      | [Rectangle](#rectangle) | The frame of the Artboard. This is given in coordinates that are local to the parent of the layer. |
| flow       | [Flow](#flow)           | The prototyping action associated with the layer.                                                  |

## Creating a new hotspot

```javascript
new HotSpot()
```

```javascript
new HotSpot({
  name: 'my name',
  flow: {
    target: artboard,
  },
})
```

## Creating a new hotspot from a layer

```javascript
var hotspot = HotSpot.fromLayer(layer)
```
