---
title: HotSpot
order: 311
section: layers
---

```javascript
var HotSpot = require('sketch/dom').HotSpot
```

A Sketch hotspot. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                 |                                                                                                     |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                     | The unique ID of the HotSpot.                                                                       |
| name<span class="arg-type">string</span>                   | The name of the HotSpot                                                                             |
| parent<span class="arg-type">[Group](#group)</span>        | The group the HotSpot is in..                                                                       |
| locked<span class="arg-type">boolean</span>                | If the HotSpot is locked.                                                                           |
| hidden<span class="arg-type">boolean</span>                | If the HotSpot is hidden.                                                                           |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the HotSpot. This is given in coordinates that are local to the parent of the HotSpot. |
| selected<span class="arg-type">boolean</span>              | If the HotSpot is selected.                                                                         |
| flow<span class="arg-type">[Flow](#flow)</span>            | The prototyping action associated with the HotSpot.                                                 |

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
