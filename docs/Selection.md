---
title: Selection
order: 402
section: Utils
---

```javascript
var selection = document.selectedLayers

selection.layers.forEach(l => log(l.id))
```

A utility class to represent the layers selection. Contains some methods to make interacting with a selection easier. All the properties are read-only.

| Properties | type              | Description                            |
| ---------- | ----------------- | -------------------------------------- |
| layers     | [Layer](#layer)[] | The Layers in the selection.           |
| length     | Number            | The number of Layers in the selection. |
| isEmpty    | Boolean           | Does the selection contain any layers? |

## clear

```javascript
selection.clear(x, y)
```

Clear the selection.

### Return

Return the selection (useful if you want to chain the calls).
