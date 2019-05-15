---
title: New in Sketch 54
summary: API to let plugins react to events in the app.
section: plugins
chapter: JavaScript API Updates
permalink: /plugins/updates/new-in-sketch-54

order: 400
excerpt: Summary of the changes introduced with Sketch 54
---

Released 09 April, 2019 – [_read release notes_](https://www.sketch.com/updates/#version-54))

## Changes

### `colors` and `gradients` properties have been added on Document and `globalAssets`

_GitHub pull request [#345](https://github.com/BohemianCoding/SketchAPI/pull/345) and [#398](https://github.com/BohemianCoding/SketchAPI/pull/398)_

- `sketch.globalAssets` property was added
- Two new asset types were added
  - `ColorAsset`
    - name, type: String (can be null)
    - color, type: String
  - `GradientAsset`
    - name, type: String (can be null)
    - gradient, type: [Gradient](https://developer.sketchapp.com/reference/api/#gradient)

#### Usage

```js
var sketch = require('sketch')
var colors = sketch.globalAssets.colors
// [ { type: 'ColorAsset', name: null, color: "#febe10ff", ... }]
```

Setting Global Colors (Be sure to save a copy of your global assets before playing with this!)

```js
var globalAssets = sketch.globalAssets
globalAssets.colors = ['#FFFFFF']

// You can set a global color with a variety of objects
// - A native MSColorAsset
// - An MSColor
// - An MSImmutableColor
// - An NSColor
// - A hex color string

// To include a name with one of the color objects use a dictionary with `color` and `name`.
globalAssets.colors = [{ name: 'white', color: '#FFFFFF' }]
```

Note that this doesn't work

```js
var globalColors = sketch.globalAssets.colors
globalColors = ['#FFFFFF']

// when you reassign globalColors, it doesn't reference the global colors anymore
// But you can do globalColors.push(...) which mutates the array.
```

##### Other useful actions

```js
// Appending/Pushing a Global Color
gloablAssets.colors = []
globalAssets.colors.push('#000000')

// globalAssets.colors returns
// [ { type: 'ColorAsset', name: null, color: '#000000ff' } ]

// Removing a Color
globalAssets.colors = [{ name: 'white', color: '#FFFFFF' }, '#000000']
globalAssets.colors.splice(1, 1)

// globalAssets.colors returns
// [ { type: 'ColorAsset', name: 'white', color: '#ffffffff' } ]
```

##### Similarily for Gradients

```js
var sketch = require('sketch')
var globalGradients = sketch.globalAssets.gradients

// [ { type: 'GradientAsset',
//  name: null,
//  gradient:
//   { gradientType: 'Linear',
//     from: [Object],
//     to: [Object],
//     aspectRatio: 1,
//     stops: [Array] } },
// ...
// ]
```

##### Setting Global Gradients

```js
var sketch = require('sketch')
var Style = require('sketch/dom').Style
var globalAssets = sketch.globalAssets

const myGradient = {
  gradientType: Style.GradientType.Linear,
  from: { x: 0.5, y: 0 },
  to: { x: 0.5, y: 1 },
  stops: [
    { position: 0, color: '#c0ffee' },
    { position: 0.5, color: '#0ff1ce' },
    { position: 1, color: '#bada55' },
  ],
}

globalAssets.gradients = [
  {
    name: 'My Gradient',
    gradient: myGradient,
  },
]

// You can set a global gradient with a variety of objects
// - A native MSGradientAsset
// - An MSGradient
// - An dictionary of Gradient properties.
```

Similarly, document colors and document gradients can all be found on `Document`

```js
var sketch = require('sketch')
var selectedDocument = sketch.getSelectedDocument()

let documentColors = selectedDocument.colors
let documentGradients = selectedDocument.gradients
```

### Shared styles are now `document` properties and can be mutated

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/360/files)

Two new properties on `document` (try not to get them mixed up as the styles are subtly different!)

- `sharedLayerStyles`
- `sharedTextStyles`

#### Usage

```js
var sketch = require('sketch')
var selectedDocument = sketch.getSelectedDocument()

selectedDocument.sharedLayerStyles
// [ { type: 'SharedStyle',
//  id: '9CA2825D-DFE9-4A49-A3AB-1EBCA431DED9',
//  styleType: 'Style',
//  name: 'layer style example',
//  style:
//   { type: 'Style',
//     id: 'EE3D0AA4-83C4-4049-BF91-43392DD4D4C9',
//     opacity: 1,
//  ...

selectedDocument.sharedTextStyles
// [ { type: 'SharedStyle',
//  id: 'C6F284FF-8D18-4B4B-AF08-1A9055C03B1E',
//  styleType: 'Style',
//  name: 'text style example',
//  style:
//   { type: 'Style',
//     id: '25A3B94C-9872-4057-8F2B-97BAE4AA0E63',
//     opacity: 1,
//  ...
```

##### Setting a Shared Style

```js
var sketch = require('sketch')
var selectedDocument = sketch.getSelectedDocument()

// Setting a shared layer style
selectedDocument.sharedLayerStyles = [] // remove all layer styles

selectedDocument.sharedLayerStyles.push({
  name: 'Layer Style 1',
  style: { fills: ['#000'] },
})

// Setting a shared text style
var Text = require('sketch/dom').Text

var text = new Text({
  text: 'my text',
  style: { alignment: Text.Alignment.center },
})

selectedDocument.sharedTextStyles = [] // remove all text styles

selectedDocument.sharedTextStyles.push({
  name: 'Style 1',
  style: text.style,
})
```

### `layer.index` can now be set

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/399)

You can set the index of the layer to move it in the hierarchy. Note that you also have `layer.moveToFront()`, `layer.moveForward()`, `layer.moveToBack()`, and `layer.moveBackward()`

#### Usage

```js
var sketch = require('sketch')
var Group = sketch.Group
var page = sketch.getSelectedDocument().selectedPage

const group1 = new Group({
  parent: page,
})
const group2 = new Group({
  parent: page,
})
const group3 = new Group({
  parent: page,
})

console.log(group1.index, group2.index, group3.index)
// 0 1 2

group1.index = 2
console.log(group1.index, group2.index, group3.index)
// 2 0 1
```

### `aspectRatio` property has been added to `Gradient`

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/396)

When the gradient is `Radial`, the `from` and `to` points makes one axis of the ellipse of the gradient while the aspect ratio determines the length of the orthogonal axis (`aspectRatio === 1` means that it’s a circle).

#### Usage

```js
var sketch = require('sketch')
var ShapePath = sketch.ShapePath
var Rectangle = sketch.Rectangle
var Style = sketch.Style
var document = sketch.getSelectedDocument()
var page = document.selectedPage

page.layers = []

const myGradient = {
  gradientType: Style.GradientType.Radial,
  from: { x: 0.5, y: 0 },
  to: { x: 0.5, y: 1 },
  aspectRatio: 0.2,
  stops: [
    { position: 0, color: '#c0ffee' },
    { position: 0.5, color: '#0ff1ce' },
    { position: 1, color: '#bada55' },
  ],
}

let myShape = new ShapePath({
  name: 'my shape',
  frame: new Rectangle(0, 0, 100, 100),
  parent: page,
  style: {
    fills: [
      {
        fill: Style.FillType.Gradient,
        gradient: myGradient,
      },
    ],
  },
})
```

### `selected` property and `getFrame` method have been added on an symbol override

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/394)

The frame of an override can be different than the frame of its affected Layer in case where the Symbol Instance has been scaled or, in the case of the example below, the text value is changed for the symbol instance resulting in a shorter frame.

#### Usage

```js
var sketch = require('sketch')
var ShapePath = sketch.ShapePath
var Rectangle = sketch.Rectangle
var Style = sketch.Style
var Text = sketch.Text
var SymbolMaster = sketch.SymbolMaster
var document = sketch.getSelectedDocument()
var page = document.selectedPage

page.layers = []

let rectangle = new ShapePath({
  name: 'my shape',
  frame: new Rectangle(0, 0, 100, 100),
  style: {
    fills: [
      {
        fill: Style.FillType.Color,
        color: '#000',
      },
    ],
  },
})

let text = new Text({
  text: 'my text',
  style: {
    textColor: '#FFFFFF',
    alignment: 'left',
  },
  frame: new Rectangle(0, 0, 0, 0),
})

text.adjustToFit()

var symbol = new SymbolMaster({
  name: 'my symbol',
  layers: [rectangle, text],
  parent: page,
})

let symbolInstance = symbol.createNewInstance()
symbolInstance.parent = page
symbolInstance.frame.offset(110, 0)
symbolInstance.overrides[0].value = 'hi'

symbolInstance.overrides[0].selected = true
symbolInstance.overrides[0].getFrame().width
```

### `layer.duplicate` now works on a layer with no parent

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/379)

Previously you needed to have a parent in order to duplicate the layer. Now you are free to do so without working around this.

#### Usage

```js
var sketch = require('sketch')
var ShapePath = sketch.ShapePath
var Rectangle = sketch.Rectangle
var Style = sketch.Style
var document = sketch.getSelectedDocument()
var page = document.selectedPage

page.layers = []

let rectangle = new ShapePath({
  name: 'my shape',
  frame: new Rectangle(0, 0, 100, 100),
  style: {
    fills: [
      {
        fill: Style.FillType.Color,
        color: '#000',
      },
    ],
  },
})

let rectangle2 = rectangle.duplicate()
rectangle2.frame.offset(110, 0)

rectangle.parent = page
rectangle2.parent = page
```

### `symbolInstance.master` now works on an immutable instance

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/390)

If you ever got an `MSImmutableSymbolInstance` object and attempted to wrap the native sketch object then you would have previously gotten an error. It has now been fixed.

### You can now remove flow targets with setting `flow` as `undefined` on a Layer

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/373)

Previously you couldn't remove a flow target. Now you can!

#### Usage

```js
var sketch = require('sketch')
var Artboard = require('sketch').Artboard
var Group = require('sketch').Group
var Rectangle = require('sketch').Rectangle
var selectedDocument = sketch.getSelectedDocument()

const artboard = new Artboard({
  name: 'Test1',
  frame: new Rectangle(0, 0, 100, 100),
  parent: selectedDocument.selectedPage,
})
const artboard2 = new Artboard({
  name: 'Test2',
  frame: new Rectangle(200, 0, 100, 100),
  parent: selectedDocument.selectedPage,
})

const rect = new Group({
  parent: artboard,
  frame: new Rectangle(0, 0, 50, 50),
  flow: {
    targetId: artboard2.id,
  },
})

rect.flow = undefined
```

### `pattern` properties have been added to Fill

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/363)

Previously this also applied to the `noise` property as well but Sketch has depreciated the noise fill option in favor of having the noise patterns be image fills.

#### Usage

```js
var sketch = require('sketch')
var Style = sketch.Style
var ShapePath = sketch.ShapePath
var Rectangle = sketch.Rectangle
var document = sketch.getSelectedDocument()
var page = document.selectedPage

page.layers = []

const base64Image = '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'

let rectangle = new ShapePath({
  name: "my shape",
  frame: new Rectangle(0,0,100,100),
  style: {
    fills: [{
      fill: 'Pattern',
      pattern: {
        patternType: Style.PatternFillType.Tile,
        image: {
          base64: base64Image
        },
        tileScale: 1.2
      }
    }]
  },
  parent: page
})

// Image can also be of the form
{ type: 'ImageData', nsimage: NSImage, nsdata: NSImageData }
```

### An image buffer can now be used with `ImageData`

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/372)

This change helps with the next one (Export now returns a buffer if output is false)

### `export` now returns a Buffer if `options.output` is `false` and `options.formats` is an image format

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/361)

If you ever wanted to get at the thumbnail preview image data when something is marked for export you can do so with this new API functionality.

![Sketch's image export thumbnail highlighted](https://user-images.githubusercontent.com/1228472/39345492-46fb46f0-4a1b-11e8-8f5b-6e6aea73dffd.png)

See [this issue](https://github.com/BohemianCoding/SketchAPI/issues/185) for more info why this was added.

#### Quick Summary of Sketch's export options

The method returns

- `undefined` if `options.output` is `undefined` or a string
- an array of `Buffer` if `objectToExport` is an array and `options.formats` is an image format
- an array of `Object` if `objectToExport` is an array and `options.formats` is json
- a `Buffer` if `objectToExport` is a single item and `options.formats` is an image format
- an `Object` if `objectToExport` is a single item and `options.formats` is json

#### Usage

```js
var sketch = require('sketch')
var ShapePath = sketch.ShapePath
var Rectangle = sketch.Rectangle
var Style = sketch.Style
var document = sketch.getSelectedDocument()
var page = document.selectedPage

page.layers = []

let rectangle = new ShapePath({
  name: 'my shape',
  frame: new Rectangle(0, 0, 100, 100),
  style: {
    fills: [
      {
        fill: Style.FillType.Color,
        color: '#000',
      },
    ],
  },
  parent: page,
})

const options = { formats: 'png', output: false }
const buffer = sketch.export(rectangle, options)
```

### `getSelectedDocument` will try harder to find your document

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/363)

If you are using [SKPM](https://github.com/skpm/skpm), SKPM defines `context` as a global so it will prefer to use that first. If there is no current document (via `NSDocumentController.sharedDocumentController().currentDocument()` then Sketch will attempt to use `NSApplication.sharedApplication().orderedDocuments()`. Ultimately, you don't really need to know too much about these underlying changes but it is useful to know that `.getSelectedDocument()` should work reliabily. If its not, be sure to file an issue.

### `console.clear` will now clear the DevTools console

Use `console.clear()` to clean up your console.

### `selectedPage` and `selectedLayers` can now be set on the Document

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/371)

Previously these were read-only properties. However, now you can pass in a layer or a page to these objects to set them.

#### Usage

```js
var sketch = require('sketch')
var ShapePath = sketch.ShapePath
var Rectangle = sketch.Rectangle
var Style = sketch.Style
var document = sketch.getSelectedDocument()
var page = document.selectedPage

// Setting selectedLayers
let rectangle = new ShapePath({
  name: 'my shape',
  frame: new Rectangle(0, 0, 100, 100),
  style: {
    fills: [
      {
        fill: Style.FillType.Color,
        color: '#000',
      },
    ],
  },
  parent: page,
})

let rectangle2 = rectangle.duplicate()
rectangle2.frame.offset(110, 0)

document.selectedLayers.layers = [rectangle]
// Note: you can also do
// rectangle.selected = true
// however it will just add the rectangle to the selection rather than replacing it

// Setting selectedPage
let newPage = new Page({
  name: 'Second Page',
  parent: document,
})

document.selectedPage = newPage
// Note: selectedPage isn't an array like selectedLayers
// Note2: You can also do newPage.selected = true
```

### Add some methods to deal with the Symbols Page

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/377)

The "Symbols" page is similar to other pages. The only way it is specific is when creating a Symbol, Sketch will ask the user if they want to move it to that page. You can put Symbols in any page but if you want to respect the convention Sketch put in place, here are a few methods to help you do so.

Adds a few methods on `Page`

- `getSymbolsPage(document)`
  - Returns a [Page](https://developer.sketchapp.com/reference/api/#page) or `undefined` if there is no Symbols page yet
- `createSymbolsPage()`
  - Returns a [Page](https://developer.sketchapp.com/reference/api/#page)
- `isSymbolsPage()`
  - Returns a `boolean`

#### Usage

```js
var sketch = require('sketch')
var Page = sketch.Page
var document = sketch.getSelectedDocument()

var symbolsPage = Page.getSymbolsPage(document)
// undefined

var symbolsPage = Page.createSymbolsPage()
symbolsPage.parent = document
symbolsPage.selected = true

var isSymbolsPage = selectedPage.isSymbolsPage()
// true
```

Note that `.createSymbolsPage()` won't prevent you from creating multiple pages that are titled "Symbols".

If you have multiple pages with "Symbols" I believe that `.isSymbolsPage()` will only be true for the earliest created page with the title "Symbols". Under the hood the API is using:

```js
page.sketchObject.documentData().symbolsPage() == page.sketchObject
```

## Related resources

- [API reference](/reference/api)
- [New in Sketch 53](/plugins/updates/new-in-sketch-53)
