---
title: Artboard
order: 205
section: components
---

```javascript
var Artboard = sketch.Artboard
```

```javascript
import { Artboard } from 'sketch-api'
```

A Sketch artboard. It is an instance of both [Layer](#layer) and [Group](#group) so all the methods defined there are available.

| Properties | type                    | Description                                                                                        |
| ---------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| id         | string                  | The unique ID of the Artboard.                                                                     |
| name       | string                  | The name of the Artboard                                                                           |
| parent     | [Page](#page)           | The page the Artboard is in.                                                                       |
| layers     | [Layer](#layer)         | The layers that this component groups together.                                                    |
| frame      | [Rectangle](#rectangle) | The frame of the Artboard. This is given in coordinates that are local to the parent of the layer. |

## Creating a new artboard

```javascript
new Artboard()
```

```javascript
new Artboard({
  name: 'my name',
})
```
