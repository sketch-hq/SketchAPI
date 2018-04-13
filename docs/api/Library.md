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

## Get a Library from a path

```javascript
var library = Library.getLibraryForDocumentAtPath(
  'path/to/existing/document.sketch'
)
```

Get the library for a Sketch document. If the Document was already added as a Library, it will simply return it. If it is not already a Library, it will be added.

| Parameters                                          |                          |
| --------------------------------------------------- | ------------------------ |
| path<span class="arg-type">string - required</span> | The path of the Library. |

### Returns

The existing Library at the path or a new Library from the document at the path.

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
var symbolReferences = library.getImportableSymbolReferencesForDocument(
  document
)
```

To import a symbol from a Library, do **not** access its Document and look for the SymbolMaster directly. Instead, get the [Symbol References](#importable-object) of the Library and use those to import them.

Those references depends on the document you want to import them into. For example if a document has already imported a symbol, it will reference the local version to keep all the instances in sync.

### Returns

An array of [Shareable Object](#importable-object) that represents the Symbols which you can import from the Library.
