---
title: New in Sketch 55
section: plugins
chapter: JavaScript API Updates
permalink: /plugins/updates/new-in-sketch-55

order: 497
excerpt: Summary of the public API changes introduced with Sketch 55
---

Released 21 May, 2019 – [_read release notes_](https://www.sketch.com/updates/#version-55)

## Changes

### URL Scheme to launch a plugin to a specific command

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/460)

You can use the new URL scheme to target a particular command of your plugin:

```sh
sketch://plugin/my.plugin.identifier/my.command.identifier
```

You can also pass in params. Note that this is the second URL scheme. The first was to [open a particular document](/app) with `sketch://path/to/file.sketch`.

The action `HandleURL` will be triggerend when it is opened with the URL scheme above, including an action context containing three keys:

#### `url`

The `NSURL` that triggered this action.

#### `path`

A string containing everything after `sketch://plugin`, e.g. `/my.plugin.identifier/my.command.identifier`.

#### `query`

An object containing the query of the URL, e.g. for `sketch://plugin/my.plugin.identifier/my.command.identifier?foo=bar&baz=qux`, query will be:

```js
{
  foo: 'bar',
  baz: 'qux'
}
```

### Usage

You'll need to have manifest file setup properly to be able to trigger a function on the `HandleURL` Action:

```json
{
  "identifier": "com.sketchapp.examples.log-message",
  "compatibleVersion": 3,
  "bundleVersion": 1,
  "icon": "icon.png",
  "commands": [
    {
      "name": "Log Message",
      "identifier": "log-message",
      "script": "./log-message.js",
      "handlers": {
        "actions": {
          "HandleURL": "handleURL"
        }
      }
    }
  ]
}
```

In JavaScript, implement the action handler as follows so that when the user navigates to the url `sketch://plugin/com.sketchapp.examples.log-message/log-message?foo=Hello%20World` a message will appear in the app with the text _Hello World_.

```js
const sketch = require('sketch')

function handleURL(context) {
  let query = context.actionContext.query
  sketch.UI.message(query.foo)
}
```

Note that the user in this case will need to have the plugin installed and a document already open. You can also make a new document for the user like this:

```js
const sketch = require('sketch')
const Document = sketch.Document
const currentDocument = sketch.getSelectedDocument()

function handleURL(context) {
  let query = context.actionContext.query
  if (currentDocument) {
    sketch.UI.message(query.foo)
  } else {
    let document = new Document()
    sketch.UI.message(query.foo)
  }
}
```

The full plugin example can be found [here](https://github.com/KevinGutowski/HandleURL_Example).

### Add `isSelected` method on a `CurvePoint`

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/445)

In case the user is currently editing a path, you can check if a curve point is selected using the `curvePoint.isSelected()` method.

#### Usage

If the user is selecting a point of a shape you can check it with:

```js
shape.points[0].isSelected()
```

Here is an example for how you might use it in practice. Create and select a rectangle in your Sketch document.

```js
let sketch = require('sketch')
let document = sketch.getSelectedDocument()
let selection = document.selectedLayers.layers[0]

let isAnyPointSelected = false
let pointSelectionArray = []

selection.points.forEach(point => {
  if (point.isSelected()) {
    isAnyPointSelected = true
    pointSelectionArray.push(true)
  } else {
    pointSelectionArray.push(false)
  }
})

console.log(isAnyPointSelected)
// true

console.log(pointSelectionArray)
// [true, true, false, false]
```

### `getSelectedDocument()` previously threw an error without an open document, now returns `undefined` instead

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/459)

Babel would tranform `[nativeDocument] = NSApplication.sharedApplication().orderedDocuments()` assuming that it's a proper array but it's not, it's an `NSArray` so it would throw an error.

This is a great addition with the URL example from earlier. We can confidently check if there is a current document open or not.

#### Usage

```js
let sketch = require('sketch')
let document = sketch.getSelectedDocument()

if (document) {
  // has open document
}
```

#### Improve consistency by deprecating `Fill.fill` in favor of `Fill.fillType`

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/463)

This was done to match `Border.fileType` and other types.

#### Usage

Setting a fill is more consistent to setting a border.

##### Old

```js
const style = new Style({
  fills: [{ color: '#1234', fill: Style.FillType.Color }],
})
```

##### New

```js
const style = new Style({
  fills: [{ color: '#123456', fillType: Style.FillType.Color }],
})
```

### Some better logging of the prototype of wrapped objects

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/451)

There was a bug in the `util.inspect` algorithm (which console uses) that makes it think the prototype of a wrapped object is a wrapped object and uses the code path for wrapped object. This has been fixed for better logging output.

### Upcoming Additions

- _Fixed:_ Changing the pointType of a CurvePoint wouldn't always restore the control points (GitHub PR)
- _Fixed:_ Do not default to ShapeType.Rectangle if some points are specified when create a new ShapePath (GitHub PR)
- _Improved:_ Added multiline functionality to string inputs on UI.getInputFromUser (I added this in! 😃, GitHub PR)
