---
title: export
order: 403
section: Utils
---

```javascript
sketch.export(layer, {
  formats: 'svg',
})
```

```javascript
sketch.export([layer, layer2])
```

```javascript
sketch.export(page)
```

```javascript
sketch.export(document.pages)
```

Export an object, using the options supplied.

| Parameter                      | type                            | Description                                                                                                                                      |
| ------------------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| options                        | Layer / Layer[] / Page / Page[] | The object to export.                                                                                                                            |
| options                        | Object                          | Options indicating which sizes and formats to use, etc..                                                                                         |
| options.output                 | String                          | this is the path of the folder where all exported files are placed (defaults to `"~/Documents/Sketch Exports"`).                                 |
| options.formats                | String                          | Comma separated list of formats to export to (`png`, `jpg`, `svg` or `pdf`) (default to `"png"`).                                                |
| options.scales                 | String                          | Comma separated list of scales which determine the sizes at which the layers are exported (defaults to `"1"`).                                   |
| options['use-id-for-name']     | Boolean                         | Name exported images using their id rather than their name (defaults to `false`).                                                                |
| options['group-contents-only'] | Boolean                         | Export only layers that are contained within the group (default to `false`).                                                                     |
| options.overwriting            | Boolean                         | Overwrite existing files (if any) with newly generated ones (defaults to `false`).                                                               |
| options.trimmed                | Boolean                         | Trim any transparent space around the exported image (defaults to `false`).                                                                      |
| options['save-for-web']        | Boolean                         | If exporting a PNG, remove metadata such as the colour profile from the exported file (defaults to `false`).                                     |
| options.compact                | Boolean                         | If exporting a SVG, make the output more compact (defaults to `false`).                                                                          |
| options['include-namespaces']  | Boolean                         | If exporting a SVG, include extra attributes (defaults to `false`).                                                                              |
| options.progressive            | Boolean                         | If exporting a JPG, export a progressive JPEG (only used when exporting to `jpeg`) (defaults to `false`).                                        |
| options.compression            | Float                           | If exporting a JPG, the compression level to use fo `jpeg` (with `0` being the completely compressed, `1.0` no compression) (defaults to `1.0`). |
