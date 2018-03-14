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

A utility class to represent the style of a shape.

| Properties                                                                         |                                                  |
| ---------------------------------------------------------------------------------- | ------------------------------------------------ |
| fills<span class="arg-type">object[]</span>                                        | The fills of a shape.                            |
| fills[x].color<span class="arg-type">string</span>                                 | A rgba hex-string (`#000000ff` is opaque black). |
| fills[x].fillType<span class="arg-type">[FillType](#filltype)</span>               | The type of the fill.                            |
| borders<span class="arg-type">object[]</span>                                      | The borders of a shape.                          |
| borders[x].color<span class="arg-type">string</span>                               | A rgba hex-string (`#000000ff` is opaque black). |
| borders[x].fillType<span class="arg-type">[FillType](#filltype)</span>             | The type of the fill of the border.              |
| borders[x].position<span class="arg-type">[BorderPosition](#borderposition)</span> | The position of the border.                      |
| borders[x].thickness<span class="arg-type">number</span>                           | The thickness of the border.                     |

## `Style.FillType`

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

## `Style.BorderPosition`

```javascript
Style.BorderPosition.Center
```

Enumeration of the positions of a border.

| Value     |
| --------- |
| `Center`  |
| `Inside`  |
| `Outside` |
