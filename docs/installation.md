---
title: Installation
order: 102
section: topics
---
```javascript
var api = SketchAPI
```

The API comes bundled inside Sketch, so no installation is required. You access
it by obtaining a global `SketchAPI` object.

```javascript
npm install sketch-api

import api from 'sketch-api'
```

If you are using a bundler like [`skpm`](https://github.com/skpm/skpm) and prefer making dependencies explicit, you can use the `sketch-api` npm package. (It is just an direct export of the global.)
