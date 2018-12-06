---
title: Artboard
order: 304
section: layers
---

```javascript
var Artboard = require('sketch/dom').Artboard
```

A Sketch artboard. It is an instance of both [Layer](#layer) and [Group](#group) so all the methods defined there are available.

| Properties                                                 |                                                                                                    |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                     | The unique ID of the Artboard.                                                                     |
| name<span class="arg-type">string</span>                   | The name of the Artboard                                                                           |
| parent<span class="arg-type">[Page](#page)</span>          | The page the Artboard is in.                                                                       |
| layers<span class="arg-type">[Layer](#layer)[]</span>      | The layers that this component groups together.                                                    |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the Artboard. This is given in coordinates that are local to the parent of the layer. |
| flowStartPoint<span class="arg-type">boolean</span>        | A Start Point allows you to choose where to start your prototype from.                             |

## Create a new Artboard

```javascript
new Artboard()
```

```javascript
new Artboard({
  name: 'my name',
  flowStartPoint: true,
})
```
