---
title: Path Coordinate Systems
section: file-format
chapter: Concepts
permalink: /file-format/path-coordinate-systems

order: 102
excerpt: How Sketch stores path coordinate information in page.json
---

Working with normalized values

When working with path points, you work with normalized values, in the range of 0 to 1.

The normalised values are computed by looking at the `frame` of the object.

The below sample creates a rectangle width: 40 by height: 40, it's origin is x: 20, y: 20.


## Sketch

If you create this rectangle in Sketch, the Inspector will look like this.

![Rectangle coordinates in the Inspector](/images/developer/file-format-coordinates.png)


## Creating & Exporting a Rectangle

Let's now re-create the same rectangle with the SketchAPI.

```JavaScript
// access the Sketch API
var sketch = require('sketch');

// get the current Document and Page
var document = sketch.getSelectedDocument();
var page = document.selectedPage;

var Style = sketch.Style;
var Shape = sketch.Shape;
var Rectangle = sketch.Rectangle;

const shape = new Shape({ parent: page, name: 'my shape', frame: new Rectangle(20, 20, 40, 40)});

shape.style.fills = [
  {
    color: '#ff0000',
    fillType: Style.FillType.Color,
  },
]

document.save('~/Desktop/document.sketch')
```

More information on the SketchAPI can be found here: [https://developer.sketch.com/reference/api/](https://developer.sketch.com/reference/api/)

After the document has saved to your desktop, open up the folder contents and look in the `pages` subfolder.
Find the `*.json` file that contains your shape. If you ran the sample directly, it will be the only file there.


## Sample output showing normalized values.

The `points` array contain the points that make up the rectangle, however, the values are normalized.

### Example

If you take the rectangle by itself, it's width: 40 by height: 40

The four points of the rectangle are: `0 0`, `40 0`, `40 40` and `0 40`

To get the normalized values, we divide the each component by it's frame, e.g

| Point | Calculation | Normalized |
| x: 0, y: 0 | 0 / frame.width, 0 / frame.height | 0, 0 |
|--------------|---------------------------------|-----|
| x: 40, y: 0  | 40 / frame.width, 0 / frame.height | 1, 0 |
|--------------|---------------------------------|-----|
| x: 40, y: 40 | 40 / frame.width, 40 / frame.height | 1, 1 |
|--------------|---------------------------------|-----|
| x: 0, y: 40  | 0 / frame.width, 40 / frame.height | 0, 1 |
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
		{ "point": "{1, 1}" },
		{ "point": "{0, 1}" }
	]
}
```

