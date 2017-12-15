---
title: Rectangle
order: 401
section: Utils
---

```javascript
var Rectangle = sketch.Page
```

```javascript
import { Rectangle } from 'sketch-api'
```

```javascript
var rect = new Rectangle(0, 0, 100, 100)

var rectFromAnotherRect = new Rectangle(rect)
```

A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier.

| Properties | type                | Description                                                                                         |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| x          | Number or Rectangle | The x coordinate of the top-left corner of the rectangle. Or an object with `{x, y, width, height}` |
| y          | Number              | The y coordinate of the top-left corner of the rectangle.                                           |
| width      | Number              | The width of the rectangle.                                                                         |
| height     | Number              | The height of the rectangle.                                                                        |

## offset

```javascript
rect.offset(x, y)
```

Adjust the rectangle by offsetting it.

### Return

Return this rectangle (useful if you want to chain the calls).

## asCGRect

```javascript
var cgRect = rect.asCGRect()
```

Return the Rectangle as a [`CGRect`](https://developer.apple.com/documentation/coregraphics/cgrect?language=objc).
