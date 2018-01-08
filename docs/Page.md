---
title: Page
order: 204
section: components
---

```javascript
var Page = sketch.Page
```

```javascript
import { Page } from 'sketch-api'
```

A Sketch page. It is an instance of both [Layer](#layer) and [Group](#group) so all the methods defined there are available.

| Properties | type                    | Description                    |
| ---------- | ----------------------- | ------------------------------ |
| id         | string                  | The unique ID of the Page.     |
| name       | string                  | The name of the Page           |
| parent     | [Document](#document)   | The document the page is in.   |
| layers     | [Layer](#layer)         | The layers that this page has. |
| frame      | [Rectangle](#rectangle) | The frame of the page.         |

## Creating a new page

```javascript
new Page()
```

```javascript
new Artboard({
  name: 'my page',
})
```

## Selected layers

```javascript
var selection = document.selectedLayers
```

A read-only property to get the layers that the user has selected in the page.

### Return

Return a [Selection](#selection) object.
