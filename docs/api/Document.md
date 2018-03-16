---
title: Document
order: 201
section: components
---

```javascript
var Document = require('sketch/dom').Document
```

A Sketch document.

| Properties                             |                                |
| -------------------------------------- | ------------------------------ |
| id<span class="arg-type">string</span> | The unique ID of the document. |

## Access the selected document

```javascript
var document = require('sketch/dom').getSelectedDocument()

// also exposed on Document
var document = Document.getSelectedDocument()
```

## Access all the opened documents

```javascript
var documents = require('sketch/dom').getDocuments()

// also exposed on Document
var documents = Document.getDocuments()
```

## Create a new document

```javascript
var document = new Document()
```

## Get the Pages

```javascript
var pages = document.pages
```

A read-only property to get the pages of the document.

### Returns

Returns an array of [pages](#page) present in the document.

## Get the selected page

```javascript
var page = document.selectedPage
```

A read-only property to get the current page that the user has selected.

### Returns

Return a [Page](#page) object.

## Get the selected layers

```javascript
var selection = document.selectedLayers
```

A read-only property to get the layers that the user has selected in the currently selected page.

### Returns

Return a [Selection](#selection) object.

## Find a layer by Id

```javascript
var layer = document.getLayerWithID(layerId)
if (layer) {
  // do something
}
```

A method to help find the first layer in this document which has the given id.

| Parameters                                              |                             |
| ------------------------------------------------------- | --------------------------- |
| layerId <span class="arg-type">string - required</span> | The ID of the layer to find |

### Returns

Return a [Layer](#layer) object or `undefined` if it's not found.

## Find layers by name

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

## Center on layer

```javascript
document.centerOnLayer(layer)
```

A method to help center the view of the document window on a given layer.

| Parameters                                                    |                                   |
| ------------------------------------------------------------- | --------------------------------- |
| layer<span class="arg-type">[Layer](#layer) - required</span> | The layer to center the view onto |
