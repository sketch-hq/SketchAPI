---
title: Coordinate Systems
section: file-format
chapter: Concepts
permalink: /file-format/coordinate-systems

order: 102
excerpt: How Sketch stores coordinate information in page.json
---

Coordinates

The `page.json` contain coordinates represented by mixed units.

### Frame

The `frame` is a `rectangle` into which the shape fits.
The `frame` property uses absolute numbers relative to it's parent.

### Point

An array of `point` objects used in a `ShapePath` use normalized values. Storing absolute numbers would require
a re-calculation when the shape moved.

*Note*: Normalized values are in the range 0 to 1.

# Sample

In the following sections we'll create a triangle shape with the following dimensions:

```
x: 0
y: 0
base: 40
height: 40
```


## Sketch

If you create the triangle in Sketch, the Inspector will look like this:

![Triangle coordinates in the Inspector](/images/developer/file-format-triangle-coordinates.png)


## SketchAPI

Let's now re-create the same triangle with the SketchAPI.


```JavaScript
// access the Sketch API
var sketch = require('sketch');

// get the current Document and Page
var document = sketch.getSelectedDocument();
var page = document.selectedPage;

var Style = sketch.Style;
var ShapePath = sketch.ShapePath;

// Create a triangle
const shapePath = ShapePath.fromSVGPath('L 40 0 L 20 40 L 0 0')
shapePath.transform.flippedVertically = true;
shapePath.parent = page;

shapePath.style.fills = [
  {
    color: '#ff0000',
    fillType: Style.FillType.Color,
  },
]

document.save('~/Desktop/document.sketch')
```


In the example above, the computed `frame` of the triangle is `x:0 y:0 width:40 height:40`.


More information on the SketchAPI can be found here: [https://developer.sketch.com/reference/api/](https://developer.sketch.com/reference/api/)

After the document has saved to your desktop, open up the folder contents and look in the `pages` subfolder.

Open the `*.json` file that contains your shape (If you ran the sample directly, it will be the only file there).


## Sample output showing normalized values.

The `points` array contain the normalized points that make up the triangle..

### Example

The points of the triangle are: `0 0`, `40 0`, `20 40` and `0 0`

To get the normalized values, we divide the each component by the frame, e.g

| Point | Calculation | Normalized |
| x: 0, y: 0 | 0 / frame.width, 0 / frame.height | 0, 0 |
|--------------|---------------------------------|-----|
| x: 40, y: 0  | 40 / frame.width, 0 / frame.height | 1, 0 |
|--------------|---------------------------------|-----|
| x: 20, y: 40 | 20 / frame.width, 40 / frame.height | 0.5, 1 |
|--------------|---------------------------------|-----|
| x: 0, y: 0  | 0 / frame.width, 0 / frame.height | 0, 0 |
|--------------|---------------------------------|-----|

Note: JSON has been snipped for brevity.

```json
{	
	"frame": {
		"height": 40,
		"width": 40,
		"x": 0,
		"y": 0
		},
	"points": [
		{ "point": "{0, 0}" }, 
		{ "point": "{1, 0}" },
		{ "point": "{0.5, 1}" },
		{ "point": "{0, 0}" }
	]
}
```

