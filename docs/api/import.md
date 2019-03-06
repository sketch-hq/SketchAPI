---
title: import
order: 406
section: API
---

```javascript
var sketch = require('sketch/dom')

const layer = sketch.import(buffer, 'svg')
```

```javascript
const svgString =
  '<svg width="200px" height="100px" viewBox="0 0 200 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="#000000" x="0" y="0" width="200" height="100"></rect></svg>'

const group = sketch.import(svgString, 'svg')
```

Import a file as a Layer.

| Parameters                                        |                                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------------------ |
| data<span class="arg-type">Buffer / string</span> | The data for the file.                                                         |
| type<span class="arg-type">string</span>          | The type of the file being imported. `"svg"`, `"pdf"`, `"eps"`, or `"bitmap"`. |

The method returns:

- a [Group](#group) if the type is `svg` or if the type is `pdf` and the pdf has only one page
- an [Image](#image) if the type is `bitmap`
- a [Page](#page) if the type is `pdf` and the pdf has multiple pages or `eps`
