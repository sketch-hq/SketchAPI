---
title: Slice
order: 312
section: layers
---

```javascript
var Slice = require('sketch/dom').Slice
```

A Sketch slice. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                                  |                                                                                                 |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                      | The unique ID of the Slice.                                                                     |
| name<span class="arg-type">string</span>                                    | The name of the Slice                                                                           |
| parent<span class="arg-type">[Group](#group)</span>                         | The group the Slice is in.                                                                      |
| locked<span class="arg-type">boolean</span>                                 | If the Slice is locked.                                                                         |
| hidden<span class="arg-type">boolean</span>                                 | If the Slice is hidden.                                                                         |
| frame<span class="arg-type">[Rectangle](#rectangle)</span>                  | The frame of the Slice. This is given in coordinates that are local to the parent of the layer. |
| selected<span class="arg-type">boolean</span>                               | If the Slice is selected.                                                                       |
| exportFormats<span class="arg-type">[ExportFormat](#export-format)[]</span> | The export formats of the Slice.                                                                |
