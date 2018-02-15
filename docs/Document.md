---
title: Document
order: 201
section: components
---

```javascript
var Document = require('sketch/dom').Document
```

A Sketch document.

| Properties | type   | Description                    |
| ---------- | ------ | ------------------------------ |
| id         | string | The unique ID of the document. |

## Accessing the selected document

```javascript
var document = require('sketch/dom').getSelectedDocument()

// also exposed on Document
var document = Document.getSelectedDocument()
```

## Accessing all the opened documents

```javascript
var documents = require('sketch/dom').getDocuments()

// also exposed on Document
var documents = Document.getDocuments()
```

## Creating a new document

```javascript
var document = new Document()
```

## Pages

```javascript
var pages = document.pages
```

A read-only property to get the pages of the document.

### Return

Returns an array of [pages](#page) present in the document.

## Selected page

```javascript
var page = document.selectedPage
```

A read-only property to get the current page that the user has selected.

### Return

Return a [Page](#page) object.

## Selected layers

```javascript
var selection = document.selectedLayers
```

A read-only property to get the layers that the user has selected in the currently selected page.

### Return

Return a [Selection](#selection) object.

## Find a layer by Id

```javascript
var layer = document.getLayerWithID(layerId)
if (layer) {
  // do something
}
```

A method to help find the first layer in this document which has the given id.

| Parameter            | type   | Description                 |
| -------------------- | ------ | --------------------------- |
| layerId _(required)_ | string | The ID of the layer to find |

### Return

Return a [Layer](#layer) object or `undefined` if it's not found.

## Find a layer by name

```javascript
var layer = document.getLayerNamed(name)
if (layer) {
  // do something
}
```

A method to help find the first layer in this document which has the given name.

| Parameter         | type   | Description                   |
| ----------------- | ------ | ----------------------------- |
| name _(required)_ | string | The name of the layer to find |

### Return

Return a [Layer](#layer) object or `undefined` if it's not found.

## Find a Symbol Master

```javascript
var symbolMaster = document.getSymbolMasterWithID(symbolInstance.symbolId)
```

A method to help find a symbol master in the document.

| Parameter             | type   | Description                                |
| --------------------- | ------ | ------------------------------------------ |
| symbolId _(required)_ | string | The symbol ID of the symbol master to find |

### Return

Return a [SymbolMaster](#symbolmaster) object or `undefined` if it's not found.

## Center on layer

```javascript
document.centerOnLayer(layer)
```

A method to help center the view of the document window on a given layer.

| Parameter          | type            | Description                       |
| ------------------ | --------------- | --------------------------------- |
| layer _(required)_ | [Layer](#layer) | The layer to center the view onto |
