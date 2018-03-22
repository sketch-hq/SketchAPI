---
title: Shareable Object
order: 215
section: components
---

```javascript
var symbolReferences = library.getSymbolReferences()
```

An Object that can imported from a [Library](#library). All its properties are read-only.

| Properties                                               |                                                        |
| -------------------------------------------------------- | ------------------------------------------------------ |
| id<span class="arg-type">string</span>                   | The unique ID of the Object.                           |
| objectType<span class="arg-type">string</span>           | The type of the Object. Will only be `Symbol` for now. |
| library<span class="arg-type">[Library](#library)</span> | The Library the Object is part of.                     |

## Import in a Document

```javascript
var symbolMaster = symbolReference.importInDocument(document)
```

You can import a Shareable Object to any document, even if it has already beenn imported.

### Returns

If the `objectType` of the Object is `Symbol`, it will return a [Symbol Master](#symbol-master) which will be linked to the Library (meaning that if the Library is updated, the [Symbol Instances](#symbol-instance) created from the Master will be updated as well).
