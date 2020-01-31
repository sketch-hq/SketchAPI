---
title: Importable Object
order: 203
section: models
---

```javascript
var symbolReferences = library.getImportableSymbolReferencesForDocument(
  document
)
```

An Object that can imported from a [Library](#library). All its properties are read-only.

| Properties |  |
| --- | --- |
| id<span class="arg-type">string</span> | The unique ID of the Object. |
| name<span class="arg-type">string</span> | The name of the Object. |
| objectType<span class="arg-type">[ImportableObjectType](#libraryimportableobjecttype)</span> | The type of the Object. Will only be `Library.ImportableObjectType.Symbol` for now. |
| library<span class="arg-type">[Library](#library)</span> | The Library the Object is part of. |

## Import in the Document

```javascript
var symbolMaster = symbolReference.import()
var sharedStyle = sharedStyleReference.import()
```

An Importable Object is linked to a Document so importing it will import it in the said Document.

### Returns

If the `objectType` of the Object is `Symbol`, it will return a [Symbol Master](#symbol-master) which will be linked to the Library (meaning that if the Library is updated, the [Symbol Instances](#symbol-instance) created from the Master will be updated as well).

## `Library.ImportableObjectType`

```javascript
Library.ImportableObjectType.Symbol
```

Enumeration of the types of Importable Objects.

| Value        |
| ------------ |
| `Symbol`     |
| `LayerStyle` |
| `TextStyle`  |
