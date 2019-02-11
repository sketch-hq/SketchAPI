---
title: import
order: 406
section: API
---

```javascript
var sketch = require('sketch/dom')

const layer = sketch.import(buffer, 'svg')
```

Import a file

| Parameters                                          |                                                               |
|-----------------------------------------------------|---------------------------------------------------------------|
| data<span class="arg-type">[Buffer](#Buffer)</span> | The data for the file.                                        |
| type<span class="arg-type">string</span>            | The type of the file being imported. svg, pdf, eps, or image. |


The method returns:

- a `Layer` if the file is an SVG, or image otherwise a Page