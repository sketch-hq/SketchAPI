---
title: Style
order: 402
section: Utils
---

```javascript
var Style = sketch.Style
```

```javascript
import { Style } from 'sketch-api'
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

A utility class to represent the style of a shape.

| Properties           | type                              | Description                                      |
| -------------------- | --------------------------------- | ------------------------------------------------ |
| fills                | Object[]                          | The fills of a shape.                            |
| fills[x].color       | String                            | A rgba hex-string (`#000000ff` is opaque black). |
| fills[x].fillType    | [FillType](#filltype)             | The type of the fill.                            |
| borders              | Object[]                          | The borders of a shape.                          |
| borders[x].color     | String                            | A rgba hex-string (`#000000ff` is opaque black). |
| borders[x].fillType  | [FillType](#filltype)             | The type of the fill of the border.              |
| borders[x].position  | [BorderPosition](#borderposition) | The position of the border.                      |
| borders[x].thickness | Number                            | The thickness of the border.                     |

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
