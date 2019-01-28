---
title: Assets
order: 214
section: models
---

Wrapper classes that are used to represent reusable assets retrived from a document or globally.

## Color Asset

| Properties                                |                                 |
|-------------------------------------------|---------------------------------|
| name<span class="arg-type">string</span>  | The name of the asset, or null. |
| color<span class="arg-type">string</span> | The hex string for the color.   |

### Get Global Colors

```javascript
var sketch = require('sketch/dom')
var colors = sketch.getGlobalColors()
```

### Returns

A list of [ColorAsset](#color-asset) objects


## Gradient Asset

| Properties                                                  |                                 |
|-------------------------------------------------------------|---------------------------------|
| name<span class="arg-type">string</span>                    | The name of the asset, or null. |
| gradient<span class="arg-type">[Gradient](#gradient)</span> | The gradient object.            |


### Get Global Gradients

```javascript
var sketch = require('sketch/dom')
var gradients = sketch.getGlobalGradients()
```

### Returns

A list of [GradientAsset](#gradient-asset) objects
