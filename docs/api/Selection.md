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

| Properties                                            |                                        |
| ----------------------------------------------------- | -------------------------------------- |
| layers<span class="arg-type">[Layer](#layer)[]</span> | The Layers in the selection.           |
| length<span class="arg-type">number</span>            | The number of Layers in the selection. |
| isEmpty<span class="arg-type">boolean</span>          | Does the selection contain any layers? |

## `map`, `forEach`, and `reduce`

```javascript
selection.clear(x, y)
```

Even though a selection isn't an array, it defines `map`, `forEach` and `reduce` by just forwarding the arguments its layers. Those are just convenience methods to avoid getting the layers everytime.

## Clear the selection

```javascript
selection.clear(x, y)
```

Clear the selection.

### Returns

Return the selection (useful if you want to chain the calls).
