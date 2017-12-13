---
title: Image
order: 206
section: components
---

```javascript
var Image = SketchAPI.Image
```

```javascript
import { Image } from 'sketch-api'
```

An image layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties | type                    | Description                                                                                     |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| id         | string                  | The unique ID of the Image.                                                                     |
| name       | string                  | The name of the Image                                                                           |
| parent     | [Group](#group)         | The group the Image is in.                                                                      |
| frame      | [Rectangle](#rectangle) | The frame of the Image. This is given in coordinates that are local to the parent of the layer. |
| image      | NSImage                 | The actual image of the layer.                                                                  |

## Creating a new image

```javascript
new Image({
  image: 'path/to/image.png',
})
```
