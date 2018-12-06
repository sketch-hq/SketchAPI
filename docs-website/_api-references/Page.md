---
title: Page
order: 303
section: layers
---

```javascript
var Page = require('sketch/dom').Page
```

A Sketch page. It is an instance of both [Layer](#layer) and [Group](#group) so all the methods defined there are available.

| Properties                                                 |                                |
| ---------------------------------------------------------- | ------------------------------ |
| id<span class="arg-type">string</span>                     | The unique ID of the Page.     |
| name<span class="arg-type">string</span>                   | The name of the Page           |
| parent<span class="arg-type">[Document](#document)</span>  | The document the page is in.   |
| layers<span class="arg-type">[Layer](#layer)</span>        | The layers that this page has. |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the page.         |

## Create a new Page

```javascript
new Page()
```

```javascript
new Page({
  name: 'my page',
})
```

## Get the selected Layers of the Page

```javascript
var selection = document.selectedLayers
```

A read-only property to get the layers that the user has selected in the page.

### Returns

Return a [Selection](#selection) object.
