---
title: export
order: 405
section: API
---

```javascript
var sketch = require('sketch/dom')
sketch.export(layer, {
  formats: 'svg',
})
```

```javascript
sketch.export([layer, layer2])
```

```javascript
const options = { scales: '1, 2, 3', formats: 'png, jpg' }
sketch.export(page, options)
```

```javascript
sketch.export(document.pages)
```

```javascript
const options = { formats: 'json', output: false }
const sketchJSON = sketch.export(layer, options)
```

```javascript
const options = { formats: 'png', output: false }
const buffer = sketch.export(layer, options)
```

Export an object, using the options supplied.

| Parameters                                                                                                        |                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objectToExport<span class="arg-type">[Layer](#layer) / [Layer](#layer)[] / [Page](#page) / [Page](#page)[]</span> | The object to export.                                                                                                                                                          |
| options<span class="arg-type">object</span>                                                                       | Options indicating which sizes and formats to use, etc..                                                                                                                       |
| options.output<span class="arg-type">string</span>                                                                | this is the path of the folder where all exported files are placed (defaults to `"~/Documents/Sketch Exports"`). If falsey, the data for the objects are returned immediately. |
| options.formats<span class="arg-type">string</span>                                                               | Comma separated list of formats to export to (`png`, `jpg`, `svg`, `json` or `pdf`) (default to `"png"`).                                                                      |
| options.scales<span class="arg-type">string</span>                                                                | Comma separated list of scales which determine the sizes at which the layers are exported (defaults to `"1"`).                                                                 |
| options['use-id-for-name']<span class="arg-type">boolean</span>                                                   | Name exported images using their id rather than their name (defaults to `false`).                                                                                              |
| options['group-contents-only']<span class="arg-type">boolean</span>                                               | Export only layers that are contained within the group (default to `false`).                                                                                                   |
| options.overwriting<span class="arg-type">boolean</span>                                                          | Overwrite existing files (if any) with newly generated ones (defaults to `false`).                                                                                             |
| options.trimmed<span class="arg-type">boolean</span>                                                              | Trim any transparent space around the exported image (defaults to `false`).                                                                                                    |
| options['save-for-web']<span class="arg-type">boolean</span>                                                      | If exporting a PNG, remove metadata such as the colour profile from the exported file (defaults to `false`).                                                                   |
| options.compact<span class="arg-type">boolean</span>                                                              | If exporting a SVG, make the output more compact (defaults to `false`).                                                                                                        |
| options['include-namespaces']<span class="arg-type">boolean</span>                                                | If exporting a SVG, include extra attributes (defaults to `false`).                                                                                                            |
| options.progressive<span class="arg-type">boolean</span>                                                          | If exporting a JPG, export a progressive JPEG (only used when exporting to `jpeg`) (defaults to `false`).                                                                      |
| options.compression<span class="arg-type">number</span>                                                           | If exporting a JPG, the compression level to use fo `jpeg` (with `0` being the completely compressed, `1.0` no compression) (defaults to `1.0`).                               |

The method returns:

- `undefined` if `options.output` is `undefined` or a string
- an array of `Buffer`s if `objectToExport` is an array and `options.formats` is an image format
- an array of `Object`s if `objectToExport` is an array and `options.formats` is `json`
- a `Buffer` if `objectToExport` is a single item and `options.formats` is an image format
- a `Object` if `objectToExport` is a single item and `options.formats` is `json`
