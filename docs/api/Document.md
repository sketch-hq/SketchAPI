---
title: Document
order: 201
section: components
---

```javascript
var Document = require('sketch/dom').Document
```

A Sketch document.

| Properties                                         |                                |
| -------------------------------------------------- | ------------------------------ |
| id<span class="arg-type">string</span>             | The unique ID of the document. |
| pages<span class="arg-type">[Page](#page)[]</span> | The pages of the document.     |

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
var document = Document.open()

var document = Document.open('path/to/the/document.sketch')
```

A method to open an existing sketch document or ask the user to open one.

| Parameters                               |                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------- |
| path<span class="arg-type">string</span> | The path to the document to open. If `undefined`, the user will be asked to select one. |

### Returns

Return a Document or throw an Error if it was not possible to open to document at the given path.

## Get the selected Page

```javascript
var page = document.selectedPage
```

A read-only property to get the current page that the user has selected.

### Returns

Return a [Page](#page) object.

## Get the selected Layers

```javascript
var selection = document.selectedLayers
```

A read-only property to get the layers that the user has selected in the currently selected page.

### Returns

Returns a [Selection](#selection) object.

## Find a Layer by Id

```javascript
var layer = document.getLayerWithID(layerId)
if (layer) {
  // do something
}
```

A method to help find the first layer in this document which has the given id.

| Parameters                                             |                             |
| ------------------------------------------------------ | --------------------------- |
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

| Parameters                                          |                                |
| --------------------------------------------------- | ------------------------------ |
| name<span class="arg-type">string - required</span> | The name of the layers to find |

### Returns

Return an array of [Layer](#layer).

## Get all the Symbol Masters

```javascript
var symbols = document.getSymbols()
```

A method to gett all symbol masters defined in the document.

### Returns

Return an array of the [SymbolMaster](#symbolmaster) objects defined in the document.

## Find a Symbol Master

```javascript
var symbolMaster = document.getSymbolMasterWithID(symbolInstance.symbolId)
```

A method to help find a symbol master in the document.

| Parameters                                              |                                            |
| ------------------------------------------------------- | ------------------------------------------ |
| symbolId<span class="arg-type">string - required</span> | The symbol ID of the symbol master to find |

### Returns

Return a [SymbolMaster](#symbolmaster) object or `undefined` if it's not found.

## Center on Layer

```javascript
document.centerOnLayer(layer)
```

A method to help center the view of the document window on a given layer.

| Parameters                                                    |                                   |
| ------------------------------------------------------------- | --------------------------------- |
| layer<span class="arg-type">[Layer](#layer) - required</span> | The layer to center the view onto |

## Save the Document

```javascript
document.save()

document.save('path/to/the/document.sketch')
```

A method to save a document to a specific path or ask the user to choose where to save it.

| Parameters                               |                                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| path<span class="arg-type">string</span> | The path where the document will be saved. If `undefined`, the user will be asked to select one. |

### Returns

Return the Document or throw an Error if it was not possible to save the document at the given path.

## Close the Document

```javascript
document.close()
```

A method to close a document.
