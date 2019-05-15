---
title: New in Sketch 53
summary: API to let plugins react to events in the app.
section: plugins
chapter: JavaScript API Updates
permalink: /plugins/updates/new-in-sketch-53

order: 401
excerpt: Summary of the changes introduced with Sketch 53
---

Released 05 February, 2019 – [_read release notes_](https://www.sketch.com/updates/#version-53

## Changes

### The document from a library will now have a proper path (either local path or the appcast URL)

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/265)

Previously when you used `library.getDocument()` the path of the Document would be undefined. It's now set correctly.

### Added `exportFormats` property on `Layer`

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/280/files)

You can specify `size`, `suffix`, `prefix`, and `fileFormat`, valid file formats are:

- `jpg`
- `png`
- `tiff`
- `eps`
- `pdf`
- `webp`
- `svg`

#### Usage

```js
var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var layer = document.selectedLayers.layers[0]

layer.exportFormats = [
  {
    size: '2x',
    suffix: '@2x',
  },
  {
    size: '1x',
    suffix: '@1x',
  },
]

// You will need to reload the inspector to see the changes appear there
document.sketchObject.inspectorController().reload()

console.log(layer)
/* Which logs:
[ { type: 'ExportFormat',
    fileFormat: 'png',
    prefix: undefined,
    suffix: '@2x',
    size: '2x' },
  { type: 'ExportFormat',
    fileFormat: 'png',
    prefix: undefined,
    suffix: '@1x',
    size: '1x' } ]
 */
```

### Added method to get the theme of Sketch

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/303)

Sketch has 2 themes: `light` and `dark`. If your plugin has some custom UI, it should support both as well.

#### Usage

```js
var theme = UI.getTheme()

if (theme === 'dark') {
  // show UI in dark theme
} else {
  // show UI in light theme
}
```

### Specify object types less often

Pretty much every object from the JS API is a wrapper around a native object (like `ExportFormats` is a wrapper around `MSExportFormat`). The way the API works when creating a new wrapper is that it looks at the type field to create the underlying native object. But in some cases, there are no choices: the objects inside `exportFormats` will always be `MSExportFormat`.

#### Usage

Instead of:

```js
layer.exportFormats = [{type: 'ExportFormat, size: '2x'}]
```

you can just write:

```js
layer.exportFormats = [{ size: '2x' }]
```

### Add `UI.getInputFromUser` method and deprecate the other input methods

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/276/files)

The same UI inputs are there (`String` and `Select`) but its moved over to the method `UI.getInputFromUser`

**Deprecated**

- `UI.getStringFromUser(message, initialValue)`
- `UI.getSelectionFromUser(message, items, selectedItemIndex)`

**Bonus**

`Slider`, `Number`, `Color`, and `Path` inputs are coming soon

#### Usage

```js
// Default type .string
UI.getInputFromUser(
  "What's your name?",
  {
    initialValue: 'Appleseed',
  },
  (err, value) => {
    if (err) {
      // most likely the user canceled the input
      return
    }
  }
)

// Type .selection
UI.getInputFromUser(
  "What's your favorite design tool?",
  {
    type: UI.INPUT_TYPE.selection,
    possibleValues: ['Sketch'],
  },
  (err, value) => {
    if (err) {
      // most likely the user canceled the input
      return
    }
  }
)
```

### Added some `getParent*` methods on Layer

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/284)

You can use `getParentPage()`, `getParentArtboard()`, `getParentSymbolMaster()`, and `getParentShape()` to quickly access higher level components.

Note that you can also use the `parent` property on `Layer` to go up the layer structure.

#### Usage

```js
var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var layer = document.selectedLayers.layers[0]

layer.getParentPage() // gets the page
layer.getParentArtboard() // gets the containing artboard
layer.getParentSymbolMaster() // you get the idea now...

layer.parent // goes up one level
layer.parent.parent // you can continue to chain all the way up
document.parent // will be undefined
```

### Added support for text styles

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/283)

LOTS of added functionality here.

**Deprecated**

- `Text.systemFontSize`
- `Text.alignment` (its moved to `Text.style.alignment`)

**Added properties to `Text.style`**

- `alignment`
  - `left`, `center`, `right`, `justified`
- `verticalAlignment`
  - `top`, `center`, `bottom`
- `kerning`
  - default to `null` if there is none set
  - _(there was an a floating point issue with the returned values but its been fixed here_ [GitHub PR](https://github.com/BohemianCoding/SketchAPI/pull/322)_)_
- `lineHeight`
  - defaults to `null` if nothing is set
  - You can get the default line height from the method `getDefaultLineHeight()` ([GitHub PR](https://github.com/BohemianCoding/SketchAPI/pull/318))
- `textColor`
  - note that it can set in various formats `#000`, `#000000`, and the opacity variant `#000000FF`
- `fontSize`
- `textTransform`
  - `uppercase`, `lowercase`, and `none`
- `fontFamily`
- `fontWeight`
  - Default is 5
  - If you attempt to set the weight to something that the font doesn't support Sketch will attempt to pick the closest one.
- `fontStyle`
  - `italic` , `normal`
  - default to `undefined`
  - setting this property to `normal` will return `undefined` if you later read it
- `fontStretch`
  - `condensed`, `normal`
  - default to `undefined`
  - setting this property to `normal` will return `undefined` if you later read it
- `textUnderline`
  - `single`, `none`, `double dot`, `dot double`, `thick dash-dot`
  - default to `undefined`
  - setting this property to `double dot` or `dot double` will both return `double dot` if you later read it
  - setting this property to `none` will return `undefined` if you later read it
- `textStrikethrough`
  - `single`, `none`, `double dot`, `dot double`, `thick dash-dot`
  - default to `undefined`
  - setting this property to `double dot` or `dot double` will both return `double dot` if you later read it
  - setting this property to `none` will return `undefined` if you later read it

#### Usage

```js
var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var Text = require('sketch/dom').Text
var Rectangle = require('sketch/dom').Rectangle

const text = new Text({
  text: 'blah',
  frame: new Rectangle(10, 10, 100, 100),
  parent: document.pages[0].layers[0], //If you want to bind it to an artboard
})

// Below are the default props with on the new Text object

text.style
// { type: 'Style',
// ...
// alignment: 'left'
// verticalAlignment: 'top'
// kerning: null
// lineHeight: null
// textColor: '#000000ff'
// fontSize: 12
// textTransform: 'none'
// fontFamily: 'Helvetica'
// fontWeight: 5
// fontStyle: undefined
// fontStretch: undefined
// textUnderline: undefined
// textStrikethrough: undefined
// }
```

### Added some methods to store a session variable

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/302)

Session variables let you store a value which is persisted when the plugin finishes to run but is _not_ persisted when Sketch closes. It is useful when you want to keep a value between plugin's runs.

Note that you still have `setSettingForKey` which will let you store things after closing Sketch.

#### Usage

```js
var Settings = require('sketch/settings')

Settings.sessionVariable('myVar')
// undefined

Settings.setSessionVariable('myVar', 0.1)
Settings.sessionVariable('myVar')
// 0.1
```

### Allow using setting methods even from the Run Script panel

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/302)

Previously you couldn't test anything from `'sketch/settings'` in the script panel and now you can!

### Ability to make Slices

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/280/files)

You can make one by:

```js
const slice = new Slice({ name: 'Test' })
```

You can also pass in `exportFormats` and a parent to tie it to a layer or object.

#### Usage

```js
const artboard = new Slice({
  parent: sketch.getSelectedDocument().selectedPage,
  exportFormats: [
    {
      size: '2x',
      suffix: '@2x',
    },
  ],
})
```

### `setTimeout` and all the other timeout, interval, immediate methods are now available directly, no need to polyfill them

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/279/files) _(This is the probably the PR however the diff seems to be about fixing an issue with fragments_ 🤔*)*

### A useful new method on the `path` module to get resources in the plugin bundle

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/295)

`require('path').resourcePath(string)` returns the path to a resource in the plugin bundle or `undefined` if it doesn't exist.

### A new action was added called `LayersResized`

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/323)

The action context for this action contains two keys:

- `document`: The document where the action was triggered
- `layers`: An array of the layers being resized

#### Usage

```js
// In your manifest.json you will need to add / modify the commands object
"commands": [
  ...
  {
    "name": "layerResized",
    "identifier": "myLayerResized",
    "script": "./my-command.js",
    "handlers": {
      "actions": {
        "LayerResized.begin" : "layerResizedMethod"
      }
    }
  }
],
...

// And then in your my-command.js you can add this function
export function layerResizedMethod(context) {
  // Do some fancy stuff here with context.document or context.layers
}

// Remember, some actions have a begin and finish phase so if you
// want the action to trigger once, you should modify the handler
// to be YourAction.begin or YourAction.finish. If you don't add
// anything, the action will be triggered twice.
// See https://developer.sketchapp.com/guides/action-api/ for more info
```

### You can now control whether or not a property is `editable` for a Symbol Master override. Symbol instance overrides also have a property called `editabled`

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/323)

#### Usage

```js
var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var Artboard = require('sketch/dom').Artboard
var Text = require('sketch/dom').Text
var SymbolMaster = require('sketch/dom').SymbolMaster

const artboard = new Artboard({
  name: 'test',
  parent: document.selectedPage,
})

const text = new Text({
  text: 'test text value',
  parent: artboard,
})

const master = SymbolMaster.fromArtboard(artboard)
master.overrides[0].editable = false
const instance = master.createNewInstance()
instance.parent = document.selectedPage
instance.overrides[0].editable
// false
```

### Obj-C exceptions will be thrown as JS Errors which will reference the exception in their `nativeException` property

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/324)

### You can now detach symbol instances recursively so that nested symbols also detach

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/321)

- `instance.detach()` will just detach the outer symbol
- `instance.detach({recursively:true})` will detach nested symbols as well

### You can now rotate layers. In addition, you can flip them vertically or horizontally

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/309)

These can be found under the `transform` property, you can set and get them as you would expect.

#### Usage

```js
var layer = document.selectedLayers.layers[0]
layer
// { type: 'Text',
// ...
// transform:
//    { rotation: 0,
//      flippedHorizontally: false,
//      flippedVertically: false },
// ...

layer.transform.rotation = 10
document.sketchObject.inspectorController().reload()
// be sure to reload the inspector to see your changes

layer.transform.rotation
// 10
```

### You can now get access to an Artboard's background properties

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/311)

- `background.enabled`: boolean, if the background is shown or not
- `background.includedInExport`: boolean, if the background should be exported or if it should be transparent during the export
- `background.color`: string, the rgba representation of the background color

#### Usage

```js
var Artboard = require('sketch/dom').Artboard
const artboard = new Artboard({ name: 'Test' })

artboard
// { type: 'Artboard',
// ...
// background: { enabled: false, includedInExport: true, color: '#ffffffff' } }
```

### `export` can now export to JSON

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/306)

#### Usage

```js
var sketch = require('sketch')
var Shape = require('sketch/dom').Shape
const object = new Shape()
const options = { formats: 'json', output: false }
const sketchJSON = sketch.export(object, options)
console.log(sketchJSON)
// big JSON file
```

## Related resources

- [API reference](/reference/api)
- [New in Sketch 54](/plugins/updates/new-in-sketch-54)
