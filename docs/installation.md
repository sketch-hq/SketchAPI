---
title: Installation
order: 102
section: topics
---

```javascript
var sketch = require('sketch/dom')
var async = require('sketch/async')
var DataSupplier = require('sketch/data-supplier')
var UI = require('sketch/ui')
var Settings = require('sketch/settings')

// a more convenient require which exposes everything (might be a bit slower)
var sketch = require('sketch')
```

The API comes bundled inside Sketch, so no installation is required. You access it by calling the global `require` function.
