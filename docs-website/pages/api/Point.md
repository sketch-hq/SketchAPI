---
title: Point
order: 210
section: models
---

A utility class to represent a point.

<!-- Contains some methods to make interacting with a point easier. -->

| Properties                                    |                                |
| --------------------------------------------- | ------------------------------ |
| x<span class="arg-type">number / Point</span> | The x coordinate of the point. |
| y<span class="arg-type">number</span>         | The y coordinate of the point. |

## Get a `CGPoint`

```javascript
var cgPoint = point.asCGPoint()
```

Return the Point as a [`CGPoint`](https://developer.apple.com/documentation/coregraphics/cgpoint?language=objc).

## Get an `NSPoint`

```javascript
var nsPoint = rect.asNSPoint()
```

Return the Point as a [`NSPoint`](https://developer.apple.com/documentation/foundation/nspoint?language=objc).
