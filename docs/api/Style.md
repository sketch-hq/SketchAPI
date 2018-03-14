---
title: Style
order: 402
section: Utils
---

```javascript
var Style = require('sketch/dom').Style
```

```javascript
var shape = new Shape({
  style: {
    borders: [{ color: '#c0ffee' }],
  },
})

shape.style.fills = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.color,
  },
]
```

A utility class to represent the style of a Layer.

| Properties   | type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| fills        | [Fill](#fill)[]     | The fills of a Layer.         |
| borders      | [Border](#border)[] | The borders of a Layer.       |
| shadows      | [Shadow](#shadow)[] | The shadows of a Layer.       |
| innerShadows | [Shadow](#shadow)[] | The inner shadows of a Layer. |

## Fill

```javascript
shape.style.fills = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.color,
  },
]
```

An object that represent a Fill.

| Properties | type                  | Description                                      |
| ---------- | --------------------- | ------------------------------------------------ |
| fillType   | [FillType](#filltype) | The type of the fill.                            |
| color      | String                | A rgba hex-string (`#000000ff` is opaque black). |
| gradient   | [Gradient](#gradient) | The gradient of the fill.                        |
| enabled    | Boolean               | Wether the fill is active or not.                |

## FillType

```javascript
Style.FillType.color
```

Enumeration of the types of fill.

| Value      |
| ---------- |
| `color`    |
| `gradient` |
| `pattern`  |
| `noise`    |

## Border

```javascript
shape.style.borders = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.color,
    position: Style.BorderPosition.Inside,
  },
]
```

An object that represent a Border.

| Properties | type                              | Description                                      |
| ---------- | --------------------------------- | ------------------------------------------------ |
| fillType   | [FillType](#filltype)             | The type of the fill of the border.              |
| color      | String                            | A rgba hex-string (`#000000ff` is opaque black). |
| gradient   | [Gradient](#gradient)             | The gradient of the fill.                        |
| enabled    | Boolean                           | Wether the border is active or not.              |
| position   | [BorderPosition](#borderposition) | The position of the border.                      |
| thickness  | Number                            | The thickness of the border.                     |

## BorderPosition

```javascript
Style.BorderPosition.Center
```

Enumeration of the positions of a border.

| Value     |
| --------- |
| `Center`  |
| `Inside`  |
| `Outside` |

## Shadow

```javascript
shape.style.shadows = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.color,
  },
]
```

```javascript
shape.style.innerShadows = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.color,
  },
]
```

An object that represent a Fill.

| Properties | type    | Description                                      |
| ---------- | ------- | ------------------------------------------------ |
| color      | String  | A rgba hex-string (`#000000ff` is opaque black). |
| blur       | Number  | The blur radius of the shadow.                   |
| x          | Number  | The horizontal offset of the shadow.             |
| y          | Number  | The vertical offset of the shadow.               |
| spread     | Number  | The spread of the shadow.                        |
| enabled    | Boolean | Wether the fill is active or not.                |
