---
title: Rectangle
order: 401
section: Utils
---

```javascript
var Rectangle = require('sketch/dom').Rectangle
```

```javascript
var rect = new Rectangle(0, 0, 100, 100)

var rectFromAnotherRect = new Rectangle(rect)
```

A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier.

| Properties                                        |                                                                                                     |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| x<span class="arg-type">number / Rectangle</span> | The x coordinate of the top-left corner of the rectangle. Or an object with `{x, y, width, height}` |
| y<span class="arg-type">number</span>             | The y coordinate of the top-left corner of the rectangle.                                           |
| width<span class="arg-type">number</span>         | The width of the rectangle.                                                                         |
| height<span class="arg-type">number</span>        | The height of the rectangle.                                                                        |

## Offset the Rectangle

```javascript
var newRect = rect.offset(x, y)
```

Adjust the rectangle by offsetting it.

### Returns

Return this rectangle (useful if you want to chain the calls).

## Scale the Rectangle

```javascript
var newRect = rect.scale(scaleWidth, scaleHeight)
```

Adjust the rectangle by scaling it. The `scaleHeight` argument can be ommited to apply the same factor on both the width and the height.

### Returns

Return this rectangle (useful if you want to chain the calls).

## Change the coordinates basis

```javascript
var newRect = rect.changeBasis({
  from: layerA,
  to: layerB,
})
```

Each layer defines its own coordinates basis. You can change that basis from one layer to the other with `changeBasis`.

| Parameters                                                 |                                                                   |
| ---------------------------------------------------------- | ----------------------------------------------------------------- |
| change<span class="arg-type">object</span>                 |                                                                   |
| change.from<span class="arg-type">Layer / undefined</span> | The layer in which the rectangle's coordinates are expressed.     |
| change.to<span class="arg-type">Layer / undefined</span>   | The layer in which the rectangle's coordinates will be expressed. |

Both `from` and `to` can be ommited (but not at the same time) to change the basis from/to the Page coordinates.

## Get a `CGRect`

```javascript
var cgRect = rect.asCGRect()
```

Return the Rectangle as a [`CGRect`](https://developer.apple.com/documentation/coregraphics/cgrect?language=objc).
