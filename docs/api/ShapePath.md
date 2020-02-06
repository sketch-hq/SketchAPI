---
title: ShapePath
order: 307
section: layers
---

```javascript
var ShapePath = require('sketch/dom').ShapePath
```

A shape path layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties |  |
| --- | --- |
| id<span class="arg-type">string</span> | The unique ID of the ShapePath. |
| name<span class="arg-type">string</span> | The name of the ShapePath |
| parent<span class="arg-type">[Group](#group)</span> | The group the ShapePath is in. |
| locked<span class="arg-type">boolean</span> | If the ShapePath is locked. |
| hidden<span class="arg-type">boolean</span> | If the ShapePath is hidden. |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the ShapePath. This is given in coordinates that are local to the parent of the layer. |
| selected<span class="arg-type">boolean</span> | If the ShapePath is selected. |
| flow<span class="arg-type">[Flow](#flow)</span> | The prototyping action associated with the ShapePath. |
| exportFormats<span class="arg-type">[ExportFormat](#exportformat)[]</span> | The export formats of the ShapePath. |
| style<span class="arg-type">[Style](#style)</span> | The style of the ShapePath. |
| sharedStyle<span class="arg-type">[SharedStyle](#shared-style) / `null`</span> | The associated shared style or `null`. |
| sharedStyleId<span class="arg-type">string / `null`</span> | The ID of the [SharedStyle](#shared-style) or `null`, identical to `sharedStyle.id`. |
| shapeType<span class="arg-type">[ShapeType](#shapepathshapetype)</span> | The type of the Shape Path. It can only be set when creating a new ShapePath. |
| points<span class="arg-type">[CurvePoint](#curvepoint)[]</span> | The points defining the Shape Path. |
| closed<span class="arg-type">boolean</span> | If the Path is closed. |

## Create a new ShapePath

```javascript
const shapePath = new ShapePath({
  name: 'my shape path',
  shapeType: ShapePath.ShapeType.Oval,
})
```

You can only set the `shapeType` when creating a new one. Once it is created, the `shapeType` is read-only. If it is not specified and you do not specify any `points`, it will default to `ShapePath.ShapeType.Rectangle` (if you do specify some `points`, it will default to `ShapePath.ShapeType.Custom`).

```javascript
const shapePath = ShapePath.fromSVGPath('M10 10 H 90 V 90 H 10 L 10 10')
```

You can also create a new ShapePath from an SVG path (the string that goes in the `d` attribute of a `path` tag in an SVG). See [the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) for more information about SVG paths.

## Get the SVG path

```javascript
const svgPath = shapePath.getSVGPath()
```

Returns a string representing the SVG path of the ShapePath.

## `ShapePath.ShapeType`

```javascript
ShapePath.ShapeType.Oval
```

Enumeration of the type of Shared Style.

| Value       |
| ----------- |
| `Rectangle` |
| `Oval`      |
| `Triangle`  |
| `Polygon`   |
| `Star`      |
| `Custom`    |

## `ShapePath.PointType`

```javascript
ShapePath.PointType.Undefined
```

Enumeration of the point types.

| Value          |
| -------------- |
| `Undefined`    |
| `Straight`     |
| `Mirrored`     |
| `Asymmetric`   |
| `Disconnected` |
