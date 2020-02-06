---
title: Document
order: 201
section: models
---

```javascript
var Document = require('sketch/dom').Document
```

A Sketch document.

| Properties |  |
| --- | --- |
| id<span class="arg-type">string</span> | The unique ID of the document. |
| pages<span class="arg-type">[Page](#page)[]</span> | The pages of the document. |
| selectedPage<span class="arg-type">[Page](#page)</span> | The selected page of the Document. |
| selectedLayers<span class="arg-type">[Selection](#selection)</span> | The Selection of the layers that the user has selected in the currently selected page. |
| path<span class="arg-type">string</span> | The path to the document (or the appcast URL in case of a Document from a remote Library). |
| sharedLayerStyles<span class="arg-type">[SharedStyle](#shared-style)[]</span> | The list of all shared layer styles defined in the document. |
| sharedTextStyles<span class="arg-type">[SharedStyle](#shared-style)[]</span> | The list of all shared text styles defined in the document. |
| colors<span class="arg-type">[ColorAsset](#color-asset)[]</span> | A list of color assets defined in the document. Mutating the returned array will update the document colors. |
| gradients<span class="arg-type">[GradientAsset](#gradient-asset)[]</span> | A list of gradient assets defined in the document. Mutating the returned array will update the document gradients. |
| colorSpace<span class="arg-type">[ColorSpace](#documentcolorspace)</span> | The color space of the document. |

## Access the selected Document

```javascript
var document = require('sketch/dom').getSelectedDocument()

// also exposed on Document
var document = Document.getSelectedDocument()
```

### Returns

The selected Document or `undefined` if no document is open.

## Access all the open Documents

```javascript
var documents = require('sketch/dom').getDocuments()

// also exposed on Document
var documents = Document.getDocuments()
```

### Returns

An array of Documents.

## Create a new Document

```javascript
var document = new Document()
```

## Open a Document

```javascript
// ask the user to select a document
Document.open((err, document) => {
  if (err) {
    // oh no, we failed to open the document
  }
  // if the user cancel the opening, `document` will be `undefined`
})

// open a sketch document at the specified path
Document.open('path/to/the/document.sketch', (err, document) => {
  if (err) {
    // oh no, we failed to open the document
  }
})
```

A method to open an existing sketch document or ask the user to open one. The method is asynchronous so if you want to do something after the document is opening it, make sure that you pass a callback and continue your script there.

| Parameters |  |
| --- | --- |
| path<span class="arg-type">string</span> | The path to the document to open. If `undefined`, the user will be asked to select one. |
| callback<span class="arg-type">function</span> | A function called after the document is opened. It is called with an `Error` if opening the Document was unsuccessful and a `Document` (or `undefined`). |

## Find a Layer by Id

```javascript
var layer = document.getLayerWithID(layerId)
if (layer) {
  // do something
}
```

A method to help find the first layer in this document which has the given id.

| Parameters |  |
| --- | --- |
| layerId<span class="arg-type">string - required</span> | The ID of the layer to find |

### Returns

Return a [Layer](#layer) object or `undefined` if it's not found.

## Find Layers by name

```javascript
var layers = document.getLayersNamed(name)
if (layers.length) {
  // do something
}
```

A method to help find the layers in this document which have the given name.

| Parameters |  |
| --- | --- |
| name<span class="arg-type">string - required</span> | The name of the layers to find |

### Returns

Return an array of [Layer](#layer).

## Find a Shared Layer Style

```javascript
var sharedStyle = document.getSharedLayerStyleWithID(sharedStyleId)
```

A method to help find a shared style in the document.

| Parameters |  |
| --- | --- |
| sharedStyleId<span class="arg-type">string - required</span> | The ID of the shared style to find |

### Returns

Return a [SharedStyle](#shared-style) object or `undefined` if it's not found.

## Find a Shared Text Style

```javascript
var sharedStyle = document.getSharedTextStyleWithID(sharedStyleId)
```

A method to help find a shared style in the document.

| Parameters |  |
| --- | --- |
| sharedStyleId<span class="arg-type">string - required</span> | The ID of the shared style to find |

### Returns

Return a [SharedStyle](#shared-style) object or `undefined` if it's not found.

## Get all the Symbol Masters

```javascript
var symbols = document.getSymbols()
```

A method to get all symbol masters defined in the document.

### Returns

Return an array of the [SymbolMaster](#symbolmaster) objects defined in the document.

## Find a Symbol Master

```javascript
var symbolMaster = document.getSymbolMasterWithID(symbolInstance.symbolId)
```

A method to help find a symbol master in the document.

| Parameters |  |
| --- | --- |
| symbolId<span class="arg-type">string - required</span> | The symbol ID of the symbol master to find |

### Returns

Return a [SymbolMaster](#symbolmaster) object or `undefined` if it's not found.

## Center on Layer

```javascript
document.centerOnLayer(layer)
```

A method to help center the view of the document window on a given layer.

| Parameters |  |
| --- | --- |
| layer<span class="arg-type">[Layer](#layer) - required</span> | The layer to center the view onto |

## Save the Document

```javascript
document.save()

document.save('path/to/the/document.sketch')

document.save('path/to/the/document.sketch', err => {
  if (err) {
    // saving the document failed :(
  }
})
```

A method to save a document to a specific path or ask the user to choose where to save it. The method is asynchronous so if you want to do something after the document is saved, make sure that you pass a callback and continue your script there.

| Parameters |  |
| --- | --- |
| path<span class="arg-type">string</span> | The path where the document will be saved. If `undefined`, the user will be asked to select one. |
| options<span class="arg-type">object</span> | The options for the save operation (only used when specifying a path). |
| options.saveMode<span class="arg-type">[SaveMode](#savemode)</span> | The way to save the document. |
| callback<span class="arg-type">function</span> | A function called after the document is saved. It is called with an `Error` if saving the Document was unsuccessful. |

## Close the Document

```javascript
document.close()
```

A method to close a document.

## Change the color space

```javascript
// By default the method assigns a new color space
document.changeColorSpace(ColorSpace.sRGB)
console.log(document.colorSpace === ColorSpace.sRGB) // true

// Pass true as an optional second argument
// to convert instead of assign
document.changeColorSpace(ColorSpace.P3, true)
console.log(document.colorSpace === ColorSpace.P3) // true

// Alternatively, use the property setter (the behaviour
// here is to always assign the color space)
document.colorSpace = ColorSpace.P3
console.log(document.colorSpace === ColorSpace.P3) // true

// Create a document with a pre-defined color space
const p3Doc = new Document({ colorSpace: ColorSpace.P3 })
```

A method to change a document's color space. For an in-depth discussion of this topic and the difference between assigning and converting the color space check the [color management](https://www.sketch.com/docs/other/color-management/) documentation.

## `Document.SaveMode`

```javascript
Document.SaveMode.SaveAs

document.save('path/to/the/document.sketch', {
  saveMode: Document.SaveMode.SaveAs,
})
```

Enumeration of the save mode.

| Value |  |
| --- | --- |
| `Save` | Overwrites a document’s file with the document’s contents |
| `SaveAs` | Writes a document’s contents to a new file and then changes the document’s current location to point to the just-written file |
| `SaveTo` | Writes a document’s contents to a new file without changing the document’s current location to point to the new file. |

## `Document.ColorSpace`

```javascript
Document.ColorSpace.Unmanaged
Document.ColorSpace.sRGB
Document.ColorSpace.P3
```

Enumeration of the available color space settings.

| Value       |                          |
| ----------- | ------------------------ |
| `Unmanaged` | The default setting      |
| `sRGB`      | sRGB color profile       |
| `P3`        | Display P3 color profile |
