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
| selected<span class="arg-type">boolean</span>              | If the Page is selected.       |

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

## Symbols Page

The "Symbols" page is similar to other pages. The only way it is specific is when creating a Symbol, Sketch will ask the user if they want to move it to that page.

You can put Symbols in any page but if you want to respect the convention Sketch put in place, here are a few methods to help you do so.

### Get the Symbols Page

```javascript
var symbolsPage = Page.getSymbolsPage(document)
```

A method to get the Symbols Page of a Document.

| Parameters                                                             |                                                    |
| ---------------------------------------------------------------------- | -------------------------------------------------- |
| document<span class="arg-type">[Document](#document) - required</span> | The document from which you want the Symbols Page. |

#### Returns

Return a [Page](#page) or `null` if there is no Symbols Page yet.

### Create the Symbols Page

```javascript
var symbolsPage = Page.createSymbolsPage()
symbolsPage.parent = document
```

A method to create the Page with the name that Sketch will recognize as the Symbols Page.

#### Returns

Return a [Page](#page).

### Knows if a Page is the Symbols Page

```javascript
var isSymbolsPage = page.isSymbolsPage()
```

A method to tell if the page is the Symbols Page.

#### Returns

Return a `boolean`.
