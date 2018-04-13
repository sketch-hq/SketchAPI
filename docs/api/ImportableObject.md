---
title: Importable Object
order: 215
section: components
---

```javascript
var symbolReferences = library.getImportableSymbolReferencesForDocument(
  document
)
```

An Object that can imported from a [Library](#library). All its properties are read-only.

| Properties                                               |                                                        |
| -------------------------------------------------------- | ------------------------------------------------------ |
| id<span class="arg-type">string</span>                   | The unique ID of the Object.                           |
| objectType<span class="arg-type">string</span>           | The type of the Object. Will only be `Symbol` for now. |
| library<span class="arg-type">[Library](#library)</span> | The Library the Object is part of.                     |

## Import in the Document

```javascript
var symbolMaster = symbolReference.import()
```

An Importable Object is linked to a Document so importing it will import it in the said Document.

### Returns

If the `objectType` of the Object is `Symbol`, it will return a [Symbol Master](#symbol-master) which will be linked to the Library (meaning that if the Library is updated, the [Symbol Instances](#symbol-instance) created from the Master will be updated as well).
