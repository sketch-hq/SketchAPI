---
title: HotSpot
order: 310
section: layers
---

```javascript
var HotSpot = require('sketch/dom').HotSpot
```

A Sketch hotspot. It is an instance of both [Layer](#layer) so all the methods defined there are available.

| Properties                                                 |                                                                                                    |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                     | The unique ID of the Artboard.                                                                     |
| name<span class="arg-type">string</span>                   | The name of the Artboard                                                                           |
| parent<span class="arg-type">[Page](#page)</span>          | The page the Artboard is in.                                                                       |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the Artboard. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>            | The prototyping action associated with the layer.                                                  |

## Create a new Hotspot

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

## Create a new Hotspot from a Layer

```javascript
var hotspot = HotSpot.fromLayer(layer)
```
