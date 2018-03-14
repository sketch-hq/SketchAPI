---
title: Selection
order: 402
section: Utils
---

```javascript
var selection = document.selectedLayers

selection.forEach(l => log(l.id))
```

A utility class to represent the layers selection. Contains some methods to make interacting with a selection easier. All the properties are read-only.

| Properties | type              | Description                            |
| ---------- | ----------------- | -------------------------------------- |
| layers     | [Layer](#layer)[] | The Layers in the selection.           |
| length     | Number            | The number of Layers in the selection. |
| isEmpty    | Boolean           | Does the selection contain any layers? |

## `map`, `forEach`, and `reduce`

```javascript
selection.clear(x, y)
```

Even though a selection isn't an array, it defines `map`, `forEach` and `reduce` by just forwarding the arguments its layers. Those are just convenience methods to avoid getting the layers everytime.

## clear

```javascript
selection.clear(x, y)
```

Clear the selection.

### Return

Return the selection (useful if you want to chain the calls).
