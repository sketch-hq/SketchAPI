---
title: Coordinate systems
section: file-format
chapter: Concepts
permalink: /file-format/coordinate-systems

order: 102
excerpt: How Sketch stores coordinate information in page.json
---

Sketch uses coordinates to layout the design of your file. Sketch uses absolute and normalized coordinates in the file format. This article shows where each type is used.

### Frame

The frame is a rectangle, which describes the object’s location and size in its parents’s coordinate system. The frame stores coordinates as absolute values.

### Point

Points store coordinates as normalized values relative to the frame of the object.

If one draws a path, then moves that path, it’s unnecessary to re-calculate the path points as they can be infered from the frame.

_Note_: Normalized values are in the range 0 to 1.

## Sample

The example below uses a triangle (base 40, height: 40).

### Sketch

Given the Triangle specified, the Inspector will look like this:

<img src="/images/developer/file-format-triangle-coordinates.png"
     alt="Triangle coordinates in the Inspector"
     width="311" height="66" />

### File format

Within the page JSON, see [File format](/file-format) for more information on structure, we find the triangle's respresentation:

_Note_: The JSON in this sample has been snipped for brevity.

#### Triangle

```json
{
  "_class": "page",
  ...
  "layers": [{
    ...
    "frame": {
      "height": 40,
      "width": 40,
      "x": 0,
      "y": 0
      },
    ...
    "points": [
      { "point": "{0, 0}" },
      { "point": "{1, 0}" },
      { "point": "{0.5, 1}" },
      { "point": "{0, 0}" }
    ]
  }]
}
```

The document has a `layers` list, which contains, the Triangle is defined by it's `frame` and `points`.

##### Triangle point calculation

The points of the triangle are: `0 0`, `40 0`, `20 40` and `0 0`

To get the normalized values, we divide the each component by the frame.

| Point        | Calculation                         | Normalized |
| ------------ | ----------------------------------- | ---------- |
| x: 0, y: 0   | 0 / frame.width, 0 / frame.height   | 0, 0       |
| x: 40, y: 0  | 40 / frame.width, 0 / frame.height  | 1, 0       |
| x: 20, y: 40 | 20 / frame.width, 40 / frame.height | 0.5, 1     |
| x: 0, y: 0   | 0 / frame.width, 0 / frame.height   | 0, 0       |

#### Triangle with an Artboard parent

```json
"_class": "page",
"layers": [{
  "_class": "artboard",
  ...
  "frame": {
    "height": 667,
    "width": 375,
    "x": 237,
    "y": -20
  },
  "layers": [{
    "frame": {
      "height": 40,
      "width": 40,
      "x": 0,
      "y": 0
    },
    ....
    "points": [
      { "point": "{0, 0}" },
      { "point": "{1, 0}" },
      { "point": "{0.5, 1}" },
      { "point": "{0, 0}" }
    ]
  }]
}]
```

In this example, the Triangles parent is an Artboard. The Artboard is located at `x: 237, y: -20`. The Artboard itself has a `layers` list. You can see the Triangle is at `x: 0, y: 0` as it's position is relative to it's parent.
