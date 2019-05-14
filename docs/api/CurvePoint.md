---
title: CurvePoint
order: 211
section: models
---

A utility class to represent a curve point (with handles to control the curve in a path).

<!-- Contains some methods to make interacting with a point easier. -->

| Properties                                                               |                                                                 |
| ------------------------------------------------------------------------ | --------------------------------------------------------------- |
| point<span class="arg-type">[Point](#point)</span>                       | The position of the point.                                      |
| curveFrom<span class="arg-type">[Point](#point)</span>                   | The position of the handle control point for the incoming path. |
| curveTo<span class="arg-type">[Point](#point)</span>                     | The position of the handle control point for the outgoing path. |
| cornerRadius<span class="arg-type">number</span>                         | The corder radius of the point.                                 |
| pointType<span class="arg-type">[PointType](#curvepointpointtype)</span> | The type of the point.                                          |

## Check if the point is selected

```javascript
shape.points[0].isSelected()
```

In case the user is currently editing a path, you can check if a curve point is selected using the `curvePoint.isSelected()` method.

## `CurvePoint.PointType`

Enumeration of the animation types.

| Value          |
| -------------- |
| `Undefined`    |
| `Straight`     |
| `Mirrored`     |
| `Asymmetric`   |
| `Disconnected` |
