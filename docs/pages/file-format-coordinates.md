---
title: Coordinate systems
section: file-format
chapter: Concepts
permalink: /file-format/coordinate-systems

order: 102
excerpt: How Sketch stores coordinate information in page.json
---

Layers are the building blocks of Sketch. Their dimensions and position within the canvas, the _frame_, are stored separately from the _point coordinates_ describing shapes.

### Frame

The _frame_ is a rectangle describing a layer's position and size relative to it's parent layer, such as a group or an artboard, or the canvas if there is no parent. The _frame_ is stored using absolute values.

<img src="/images/developer/file-format-coordinates-frame.png"
     alt="Coordinates of a triangle placed directly on the canvas"
     width="616" />

In the example above, the triangle is stored in the `.sketch` file with the following frame matching the values in the inspector. See [File format](/file-format) for more details on the document structure.

```json
{
  "_class": "page",
  ...
  "layers": [{
    "_class": "triangle",
    ...
    "frame": {
      ...
      "height": 40,
      "width": 40,
      "x": 0,
      "y": 0
    }
}
```

<img src="/images/developer/file-format-coordinates-frame-parent.png"
     alt="Coordinates of a triangle placed in the same place of the canvas but as part of an artboard."
     width="616" />

When placed inside an artboard, the triangle's position is relative to it, identical to the inspector values.

```json
{
  "_class": "page",
  ...
  "layers": [{
    "_class": "artboard",
    ...
    "frame": {
      "height": 140,
      "width": 140,
      "x": -50,
      "y": -50
    },
    "layers": [{
      "_class": "triangle",
      ...
      "frame": {
        ...
        "height": 40,
        "width": 40,
        "x": 50,
        "y": 50
      }
    }]
  }]
}
```

### Point coordinates

Shapes are contents of a layer and made of points. Each point's coordinate is relative to the layer's _frame_, using normalized values so they don't require any update in case the frame of the layer changes.

<img src="/images/developer/file-format-coordinates-points.png"
     alt="Triangle coordinates in the Inspector"
     width="616" />

The point coordinates are calculated based on the _frame_, producing the JSON output below.

| Point `x, y` | Normalized `x, y` | Calculation                           |
| ------------ | ----------------- | ------------------------------------- |
| `20, 0`      | `0.5, 0`          | `20 / frame.width, 0 / frame.height`  |
| `40, 40`     | `1, 1`            | `40 / frame.width, 40 / frame.height` |
| `0, 40`      | `0, 1`            | `0 / frame.width, 40 / frame.height`  |

> **Note:** Normalized values are in the range `0..1`.

```json
{
  "_class": "page",
  ...
  "layers": [{
    "_class": "triangle",
    ...
    "frame": {
      ...
      "height": 40,
      "width": 40,
      "x": 0,
      "y": 0
    },
    "points": [
      {
        "_class": "curvePoint",
        ...
        "point": "{0.5, 0}"
      },
      {
        "_class": "curvePoint",
        ...
        "point": "{1, 1}"
      },
      {
        "_class": "curvePoint",
        ...
        "point": "{0, 1}"
      }
    ]
  }]
}

```
