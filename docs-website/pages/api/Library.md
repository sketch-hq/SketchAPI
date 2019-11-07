---
title: Library
order: 202
section: models
---

```javascript
var Library = require('sketch/dom').Library
```

A Sketch Library.

| Properties                                                                             |                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string - readonly</span>                                      | The unique ID of the Library.                                                                                                                                                       |
| name<span class="arg-type">string - readonly</span>                                    | The name of the Library.                                                                                                                                                            |
| valid<span class="arg-type">boolean - readonly</span>                                  | If Sketch has been able to load the Library. If the library is not valid, the methods will often not be available so always check this field before doing something with a library. |
| enabled<span class="arg-type">boolean</span>                                           | If the user has enabled the Library.                                                                                                                                                |
| libraryType<span class="arg-type">[LibraryType](#librarylibrarytype) - readonly</span> | The type of Library.                                                                                                                                                                |
| lastModifiedAt<span class="arg-type">Date - readonly</span>                            | The date at which the library was last updated                                                                                                                                      |

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

Get the library for a local Sketch document. If the Document was already added as a Library, it will simply return it. If it is not already a Library, it will be added.

| Parameters                                          |                          |
| --------------------------------------------------- | ------------------------ |
| path<span class="arg-type">string - required</span> | The path of the Library. |

### Returns

The existing Library at the path or a new Library from the document at the path.

## Get a remote Library from an RSS feed URL

```javascript
Library.getRemoteLibraryWithRSS(
  'https://url/to/feed/rss.xml',
  (err, library) => {
    if (err) {
      // oh no, failed to load the library
    }
  }
)
```

Get the remote library for an RSS feed. If the RSS feed was already added as a Library, it will simply return it. If it is not already a Library, it will be added.

| Parameters                                         |                                                                                                                                                     |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| url<span class="arg-type">string - required</span> | The URL to the rss feed describing the versions of the library.                                                                                     |
| callback<span class="arg-type">function</span>     | A function called after the library is added. It is called with an `Error` if adding the Library was unsuccessful and a `Library` (or `undefined`). |

## Remove a Library

```javascript
library.remove()
```

A method to remove an existing library.

## Get the Library's Document

```javascript
var libDocument = library.getDocument()
```

A library references a Sketch [Document](#document) and you can access it with this method.

### Returns

The [Document](#document) that the Library references. It can throw an error if the Document cannot be accessed.

## Get the Symbols that can be imported

```javascript
var document = sketch.getSelectedDocument()
var symbolReferences = library.getImportableSymbolReferencesForDocument(
  document
)
```

To import a symbol from a Library, do **not** access its Document and look for the SymbolMaster directly. Instead, get the [Symbol References](#importable-object) of the Library and use those to import them.

Those references depends on the document you want to import them into. For example if a document has already imported a symbol, it will reference the local version to keep all the instances in sync.

### Returns

An array of [Shareable Object](#importable-object) that represents the Symbols which you can import from the Library.

## Get the Shared Layer Styles that can be imported

```javascript
var document = sketch.getSelectedDocument()
var stylesReferences = library.getImportableLayerStyleReferencesForDocument(
  document
)
```

To import a shared style from a Library, do **not** access its Document and look for the SharedStyle directly. Instead, get the [Shared Layer Style References](#importable-object) of the Library and use those to import them.

Those references depends on the document you want to import them into. For example if a document has already imported a shared style, it will reference the local version to keep all the instances in sync.

### Returns

An array of [Shareable Object](#importable-object) that represents the Shared Layer Styles which you can import from the Library.

## Get the Shared Text Styles that can be imported

```javascript
var document = sketch.getSelectedDocument()
var stylesReferences = library.getImportableTextStyleReferencesForDocument(
  document
)
```

To import a shared style from a Library, do **not** access its Document and look for the SharedStyle directly. Instead, get the [Shared Text Style References](#importable-object) of the Library and use those to import them.

Those references depends on the document you want to import them into. For example if a document has already imported a shared style, it will reference the local version to keep all the instances in sync.

### Returns

An array of [Shareable Object](#importable-object) that represents the Shared Layer Styles which you can import from the Library.

## `Library.LibraryType`

```javascript
Library.LibraryType.User
```

Enumeration of the types of Library.

| Value      |
| ---------- |
| `Internal` |
| `User`     |
| `Remote`   |
