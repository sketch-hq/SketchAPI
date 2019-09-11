---
title: find
order: 407
section: API
---

```javascript
var sketch = require('sketch/dom')
sketch.find('Shape')
```

```javascript
// find all the Shapes in the current Document
sketch.find('Shape')
```

```javascript
// find all the Layers in the first Page of the Document
sketch.find('*', document.pages[0])
```

```javascript
// find all the Layers named "Layer-Name"
sketch.find('[name="Layer-Name"]')
```

```javascript
// find all the Shape named "Layer-Name"
sketch.find('Shape, [name="Layer-Name"]')
```

> ⚠️ This API is in preview. It might change in the future depending on the feedback from the community.

Find Layers fitting some criteria.

| Parameters |  |
| --- | --- |
| selector<span class="arg-type">string - required</span> | The object to export. |
| scope<span class="arg-type">[Group](#group) / [Document](#document)</span> | The scope of the search. By default it is the current Document. |
