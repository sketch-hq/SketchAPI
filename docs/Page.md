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

## exportArtboards

```javascript
page.exportArtboards()
```

Export the artboards of the page, using the options supplied.

| Parameter                      | type    | Description                                                                                                                                      |
| ------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| options                        | Object  | Options indicating which sizes and formats to use, etc..                                                                                         |
| options.output                 | String  | this is the path of the folder where all exported files are placed (defaults to `"~/Documents/Sketch Exports"`).                                 |
| options.formats                | String  | Comma separated list of formats to export to (`png`, `jpg`, `svg` or `pdf`) (default to `"png"`).                                                |
| options.scales                 | String  | Comma separated list of scales which determine the sizes at which the layers are exported (defaults to `"1"`).                                   |
| options['use-id-for-name']     | Boolean | Name exported images using their id rather than their name (defaults to `false`).                                                                |
| options['group-contents-only'] | Boolean | Export only layers that are contained within the group (default to `false`).                                                                     |
| options.overwriting            | Boolean | Overwrite existing files (if any) with newly generated ones (defaults to `false`).                                                               |
| options.trimmed                | Boolean | Trim any transparent space around the exported image (defaults to `false`).                                                                      |
| options['save-for-web']        | Boolean | If exporting a PNG, remove metadata such as the colour profile from the exported file (defaults to `false`).                                     |
| options.compact                | Boolean | If exporting a SVG, make the output more compact (defaults to `false`).                                                                          |
| options['include-namespaces']  | Boolean | If exporting a SVG, include extra attributes (defaults to `false`).                                                                              |
| options.progressive            | Boolean | If exporting a JPG, export a progressive JPEG (only used when exporting to `jpeg`) (defaults to `false`).                                        |
| options.compression            | Float   | If exporting a JPG, the compression level to use fo `jpeg` (with `0` being the completely compressed, `1.0` no compression) (defaults to `1.0`). |

### Returns

The current page (useful if you want to chain the calls).
