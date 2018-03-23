---
title: Library
order: 214
section: components
---

```javascript
var Library = require('sketch/dom').Library
```

A Sketch Library.

| Properties                                   |                                              |
| -------------------------------------------- | -------------------------------------------- |
| id<span class="arg-type">string</span>       | The unique ID of the Library.                |
| name<span class="arg-type">string</span>     | The name of the Library.                     |
| valid<span class="arg-type">boolean</span>   | If Sketch has been able to load the Library. |
| enabled<span class="arg-type">boolean</span> | If the user has enabled the Library.         |

## Access all the Libraries

```javascript
var libraries = require('sketch/dom').getLibraries()

// also exposed on Library
var libraries = Library.getLibraries()
```

### Returns

An array of Libraries.

## Create a new Library

```javascript
// create a library from a sketch file
var library = Library.createLibraryFromDocument(
  'path/to/existing/document.sketch'
)

// create a library from an open document
var library = Library.createLibraryFromDocument(
  document,
  'path/where/the/document/will/be/saved.sketch'
)
```

You can create a new Library from:

* an existing Sketch file
* an open Document

If you create a Library from an open Document, it will be saved to disk before being added as a Library.

| Parameters                                                  |                                                                            |
| ----------------------------------------------------------- | -------------------------------------------------------------------------- |
| document<span class="arg-type">[Document](#document)</span> | The Document to save to disk and add as a Library.                         |
| path<span class="arg-type">string - required</span>         | The path of the Library. If `document` was passed, it will be saved there. |

### Returns

A new Library

## Remove a Library

```javascript
library.remove()
```

A method to remove an existing library.

## Get the Library's Document

```javascript
var document = library.getDocument()
```

A library references a Sketch [Document](#document) and you can access it with this method.

### Returns

The [Document](#document) that the Library references. It can throw an error if the Document cannot be accessed.

## Get the Symbols that can be imported

```javascript
var symbolReferences = library.getSymbolReferences()
```

To import a symbol from a Library, do **not** access its Document and look for the SymbolMaster directly. Instead, get the [Symbol References](#shareable-object) of the Library and use those to import them.

### Returns

An array of [Shareable Object](#shareable-object) that represents the Symbols which you can import from the Library.
