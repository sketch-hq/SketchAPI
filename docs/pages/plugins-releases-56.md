---
title: New in Sketch 56
section: plugins
chapter: JavaScript API Updates
permalink: /plugins/updates/new-in-sketch-56

order: 496
excerpt: Summary of the public API changes introduced with Sketch 56
---

Released 23 July, 2019 – [_read release notes_](https://www.sketch.com/updates/#version-56)

## Changes

### Added a `colorSpace` property and a `changeColorSpace` method to `Document`

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/533/)

Sketch has 3 different color profiles: `Unmanaged`, `sRGB`, and `P3`. You can read the current color profile and set a new one. Be careful with assigning a new color profile as there are two subtle, yet impactful, ways of modifying the document: _Assign_ and _Convert_.

#### Assign

Assign will apply the current RGB values to the selected profile. This will subtly change the appearance of some colors.

#### Convert

Convert will change the RGB values for the selected profile, but colors will try to appear mostly the same. Green and Red hues will be the most affected.

For more information on color profiles read the sketch help document on [color management](https://www.sketch.com/docs/other/color-management/).

### Usage

```js
let sketch = require('sketch')
let document = sketch.getSelectedDocument()

let documentColorSpace = document.colorSpace
// 'Unmanaged', 'sRGB', or 'P3'

// By default the method assigns a new color space
document.changeColorSpace(ColorSpace.sRGB)

// Pass true as an optional second argument to convert instead of assign
document.changeColorSpace(ColorSpace.P3, true)

// You can set colorSpace but you can only assign a new colorspace this way (you can't convert)
document.colorSpace = ColorSpace.P3

// When creating a new document you can also specify the color profile
let Document = sketch.Document
const p3Doc = new Document({ colorSpace: ColorSpace.P3 })
```

### Logging native structs now have nicer output in DevTools

[_GitHub commit_](https://github.com/skpm/console/commit/91791a321fe1643de09884c3ba8d75a44312eddf)

Previously, logging things like `NSRange` would return an unhelpful message and now it returns the location and range as you would expect.

### Expose substring in `Text.fragment`

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/492/)

Now there is more information about how a piece of text breaks across multiple lines.

You'll have access to the `rect`, `baselineOffset`, `range`, and `text` of each line. `baselineOffset` is the distance from the bottom of the line fragment rectangle in which the glyph resides to the baseline (here is a graphic to help visualize this)

![typographic labels](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/Art/glyph_metrics_2x.png) `baselineOffset` is the distance from the baseline to the bottom line (frame) of the text (or the Descent height + the Line gap height).

#### Usage

```js
let sketch = require('sketch')
let Text = sketch.Text
let Artboard = sketch.Artboard

let document = sketch.getSelectedDocument()
let page = document.selectedPage

let myArtboard = new Artboard({
  frame: { x: 0, y: 0, width: 400, height: 400 },
  parent: page,
})

let myText = new Text({
  text: 'Our planet is a lonely speck in the great enveloping cosmic dark.',
  frame: { x: 50, y: 50, width: 100, height: 100 },
  fixedWidth: true,
  parent: myArtboard,
})

console.log(myText.fragments)
// [ { rect:
//      { x: [Getter/Setter],
//        y: [Getter/Setter],
//        width: [Getter/Setter],
//        height: [Getter/Setter] },
//     baselineOffset: 3,
//     range: NSRange { location: 0, length: 36 },
//     text: 'Our planet is a lonely speck in the ' },
//   { rect:
//      { x: [Getter/Setter],
//        y: [Getter/Setter],
//        width: [Getter/Setter],
//        height: [Getter/Setter] },
//     baselineOffset: 3,
//     range: NSRange { location: 36, length: 29 },
//     text: 'great enveloping cosmic dark.' } ]
```

### `symbolMaster.getParentSymbolMaster` used to throw an error. It will now return `undefined`

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/487)

#### Usage

```js
var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var layer = document.selectedLayers.layers[0]

layer.getParentSymbolMaster()
// used throw an error but now does not!
```

### Fix setting layers of a group when the layers already had a parent

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/486)

There was a bug with reassigning layers to a group that already had parents. You would need to first remove the parent before assigning the layers to a group.

#### Usage

```js
// say you have some layers that have an artboard as their parent
let myLayers = [mySquare, myTriangle, myHexagon, myCircle]

// if you reassign them to be within a group
let myGroup = new Group({
  name: 'My Group',
  layers: myLayers,
  parent: myArtboard,
})
myGroup.adjustToFit()

// then two references of the layers would be stored, one with parents to myArtboard and one with parents to myGroup
// in order to fix this you would need to remove the reference to the parent on each of the layers before assigning them to a group

// remove the parent for each layer
myLayers.forEach(layer => layer.remove())

// This update makes it so that you can easily assign layers to a group even if those layers already have a parent set
// Now just do this

let myLayers = [mySquare, myTriangle, myHexagon, myCircle]
let myGroup = new Group({
  name: 'My Group',
  layers: myLayers,
  parent: myArtboard,
})
```

### Changing the `pointType` of a CurvePoint wouldn't always restore the control points

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/481)

There was a bug with setting the `pointType` of a line. This made it so that you could only create straight lines rather than curved ones.

#### Usage

```js
let sketch = require('sketch')
let document = sketch.getSelectedDocument()
let page = document.selectedPage

page.layers = []

let Artboard = sketch.Artboard
let myArtboard = new Artboard({
  frame: { x: 0, y: 0, width: 48, height: 48 },
  parent: page,
})

var point1 = {
  pointType: 'CurvePoint',
  curveFrom: { x: 0, y: 0 },
  curveTo: { x: 0, y: 2 },
  point: { x: 0, y: 1 },
  pointType: 'Disconnected',
}
var point2 = {
  pointType: 'CurvePoint',
  curveFrom: { x: 1, y: 0 },
  curveTo: { x: 1, y: 0 },
  point: { x: 1, y: 0 },
  pointType: 'Straight',
}

let ShapePath = sketch.ShapePath
let path = new ShapePath({
  type: ShapePath.ShapeType.Custom,
  points: [point1, point2],
  frame: { x: 0, y: 0, width: 48, height: 48 },
  style: { fills: [], borders: ['#FF0000'] },
  frame: { x: 0, y: 0, width: 48, height: 48 },
  parent: myArtboard,
  closed: false,
})

// should create a curved line rather than a straight one
```

### Added multiline functionality to string inputs on `UI.getInputFromUser`

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/475)

Previously you could only ask for a single line of input from a user via the JS API. Now you can specify a number of lines so that users can input larger amounts of text.

#### Usage

```js
let sketch = require('sketch')
let UI = sketch.UI

UI.getInputFromUser(
  "What's your favorite design tool?",
  {
    type: UI.INPUT_TYPE.textarea,
    numberOfLines: 10,
    initialValue: 'hi',
  },
  (err, value) => {
    if (err) {
      // most likely the user canceled the input
      return
    }
    console.log(value)
  }
)
```

### `ShapeType.Rectangle` used to be defaulted even if some points are specified when create a new ShapePath

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/475)

Previously, you couldn't draw a proper line with the API (you could get close but it didn't quite behave the same as a line that you could draw in Sketch). This has been now fixed.

> _From the [API documentation on ShapePath](https://developer.sketch.com/reference/api/#create-a-new-shapepath)_:
>
> You can only set the `shapeType` when creating a new one. Once it is created, the `shapeType` is read-only. If it is not specified and you do not specify any `points`, it will default to `ShapePath.ShapeType.Rectangle` (if you do specify some `points`, it will default to `ShapePath.ShapeType.Custom`

#### Usage

```js
let sketch = require('sketch')
let ShapePath = sketch.ShapePath
let Artboard = sketch.Artboard

let document = sketch.getSelectedDocument()
let page = document.selectedPage

let myArtboard = new Artboard({
  frame: { x: 0, y: 0, width: 400, height: 400 },
  parent: page,
})

let myLine = new ShapePath({
  name: 'myLine',
  frame: { x: 10, y: 0, width: 40, height: 100 },
  style: { borders: ['#FF0000'] },
  points: [
    { point: { x: 0, y: 0 }, pointType: 'Straight' },
    { point: { x: 1, y: 1 }, pointType: 'Straight' },
  ],
  parent: myArtboard,
})

console.log(myLine.shapeType)
// would report 'Rectangle' but now will be 'Custom' because we specified some points
// previously this would behave like a rectangle with a path inside the frame but now it behaves like a line as expected
```

### Improve consistency by deprecating `Fill.fill` in favor of `Fill.fileType`

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/463)

This change was made to match `Border.fileType` and other types

#### Usage

```javascript
let sketch = require('sketch')
let Style = sketch.Style

const style = new Style({
  fills: [
    {
      color: '#1234',
      fill: Style.FillType.Color,
    },
  ],
})

console.log(style.fills[0])
// Fill {
//   fillType: 'Color', //used to be 'fill'
//   color: '#11223344',
//   ...
//   enabled: true }
```

### Added a Find Method to easily query a scope of a document

[_GitHub pull request_](https://github.com/sketch-hq/SketchAPI/pull/357)

Last but not least is a new way to find objects that meet various criteria. It's somewhat similar to jquery selectors. The find method can take two arguments:

- A selector (the properties or criteria that you are trying to find)
- The scope (what part of the sketch document do you want to search - by default it is the current document)

Selectors are of type `string` and can be the following:

- name
- id
- frame
- frame.x
- frame.y
- frame.width
- frame.height
- locked
- hidden
- selected
- type
- style.fills.color

You can use these selectors in conjunction with an operator:

- `=` (equal)
- `*=` (contains)
- `$=` (endswith)
- `!=` (not equal)
- `^=` (begins with)
- `>=` (greater than or equal)
- `=<` (less than or equal)
- `>` (greater than)
- `<` (less than)

An example of this would be `find('[name="Rectangle"]', document)`. Some Selectors have shorthand notation

- type: `find('ShapePath', document)`
- id: `` find(`#${layer_id}`, document) ``or `find("#91EC1D70-6A97-...-DEE84160C4F4", document)`
- all others: `find('[{{type}}="Something"]', document)`

Also, by default the scope is the current document so you can drop the scope if you like

- `find('[name="Rectangle"]')`

#### Usage

```js
let sketch = require('sketch')
let document = sketch.getSelectedDocument()
let page = document.selectedPage

// find all Shapes in the current Document
sketch.find('Shape')

// find all Layers in the first Artboard of the selected Page
let artboard = page.layers[0]
sketch.find('*', artboard)

// find all the Layers named "Recipe"
sketch.find('[name="Recipe"]')

// More examples
document.pages = [
  {
    layers: [
      { type: 'Artboard', name: 'myArtboard', frame: { x: 300 } },
      { type: 'ShapePath', name: 'test', frame: { x: 400 } },
      { type: 'ShapePath', name: 'test2', frame: { x: 100 } },
    ],
  },
]

// find by name containing
sketch.find('[name*="test"]', document)
// [ ShapePath( { name: 'test', ... }), ShapePath( { name: 'test2', ... } ]

// find by different name
sketch.find('[name!="test"]', document)
// [ Page(...), Artboard( { name: 'myArtboard', ... } ), ShapePath( { name: 'test2', ... } ]

// find by name ending with
sketch.find('[name$="2"]', document)
// [ ShapePath( { name: 'test2', ... } ]

// find by name beginning with
sketch.find('[name^="test"]', document)
// [ ShapePath( { name: 'test', ... }), ShapePath( { name: 'test2', ... } ]

// find by frame.x greater than 300
sketch.find('[frame.x>300]', document)
// [ ShapePath( { name: 'test', ... } ]

// find by frame.x greater than 200 and is a 'ShapePath'
sketch.find('ShapePath, [frame.x>200]', document)
// [ ShapePath( { name: 'test', ... } ]

// find with id
find(`#${document.pages[0].layers[1].id}`, document)
// [ ShapePath( { name: 'test', ... } ]
```

## Related resources

- [API reference](/reference/api)
- [New in Sketch 55](/plugins/updates/new-in-sketch-55)
- [New in Sketch 57](/plugins/updates/new-in-sketch-57)
