---
title: Artboard
order: 203
section: components
---
```javascript
var Artboard = SketchAPI.Artboard
```
```javascript
import { Artboard } from 'sketch-api'
```

A Sketch artboard. It is an instance of both [Layer](#layer) and [Group](#group) so all the methods defined there are available.

Properties | type | Description
--------- | ------- | -----------
id | string | The unique ID of the document.
name | string | The name of the Artboard
parent | [Page](#page) | The page the artboard is in.
frame | [Rectangle](#rectangle) | The frame of the Artboard. This is given in coordinates that are local to the parent of the layer.

## Creating a new artboard

```javascript
new Artboard()
```

```javascript
new Artboard({
  name: 'my name'
})
```
