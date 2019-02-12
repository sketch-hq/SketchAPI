---
title: Selection
order: 209
section: models
---

```javascript
var selection = document.selectedLayers
```

A utility class to represent the layers selection. Contains some methods to make interacting with a selection easier.

| Properties                                               |                                                                               |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| layers<span class="arg-type">[Layer](#layer)[]</span>    | The Layers in the selection. Setting this property will change the selection. |
| length<span class="arg-type">number - read-only</span>   | The number of Layers in the selection.                                        |
| isEmpty<span class="arg-type">boolean - read-only</span> | Does the selection contain any layers?                                        |

## `map`, `forEach`, and `reduce`

```javascript
selection.forEach(layer => log(layer.id))

selection.map(layer => layer.id)

selection.reduce((initial, layer) => {
  initial += layer.name
  return initial
}, '')
```

Even though a selection isn't an array, it defines `map`, `forEach` and `reduce` by just forwarding the arguments to its layers. Those are just convenience methods to avoid getting the layers every time.

## Clear the Selection

```javascript
selection.clear()
```

Clears the selection.

### Returns

Return the selection (useful if you want to chain the calls).
