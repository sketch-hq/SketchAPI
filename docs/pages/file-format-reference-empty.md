---
title: Empty document
section: file-format
chapter: Reference files
permalink: /file-format/reference/empty

order: 201
excerpt: A reference empty Sketch document
---

This is just a bare-bones, empty Sketch document. The equivalent of creating a new document and saving it immediately.

| Sketch version |                                                                                                                  |                                                                                                        |                                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 55             | [.sketch](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/empty/output.sketch) | [JSON](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/empty/output) | [Generator plugin](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/empty/plugin.sketchplugin) |

### `document.json`

```json
{
  "_class": "document",
  "do_objectID": "2AF283E8-36AA-4574-869E-28BA4C67E3B1",
  "assets": {
    "_class": "assetCollection",
    "colorAssets": [],
    "gradientAssets": [],
    "imageCollection": { "_class": "imageCollection", "images": {} },
    "images": [],
    "colors": [],
    "gradients": []
  },
  "colorSpace": 0,
  "currentPageIndex": 0,
  "foreignLayerStyles": [],
  "foreignSymbols": [],
  "foreignTextStyles": [],
  "layerStyles": { "_class": "sharedStyleContainer", "objects": [] },
  "layerSymbols": { "_class": "symbolContainer", "objects": [] },
  "layerTextStyles": { "_class": "sharedTextStyleContainer", "objects": [] },
  "pages": [
    {
      "_class": "MSJSONFileReference",
      "_ref_class": "MSImmutablePage",
      "_ref": "pages/3E254C78-B274-4D23-BED6-B35C4F2B47C8"
    }
  ]
}
```

### `meta.json`

```json
{
  "commit": "de199738bddcc38c4a5af7eee0589554d43d0bde",
  "pagesAndArtboards": {
    "3E254C78-B274-4D23-BED6-B35C4F2B47C8": {
      "name": "Page 1",
      "artboards": {}
    }
  },
  "version": 118,
  "fonts": [],
  "compatibilityVersion": 99,
  "app": "com.bohemiancoding.sketch3",
  "autosaved": 0,
  "variant": "NONAPPSTORE",
  "created": {
    "commit": "de199738bddcc38c4a5af7eee0589554d43d0bde",
    "appVersion": "55",
    "build": 78076,
    "app": "com.bohemiancoding.sketch3",
    "compatibilityVersion": 99,
    "version": 118,
    "variant": "NONAPPSTORE"
  },
  "saveHistory": ["NONAPPSTORE.78076"],
  "appVersion": "55",
  "build": 78076
}
```

### `user.json`

```json
{
  "document": { "pageListHeight": 85, "pageListCollapsed": 0 },
  "3E254C78-B274-4D23-BED6-B35C4F2B47C8": {
    "scrollOrigin": "{0, 0}",
    "zoomValue": 1
  }
}
```

### `pages/{id}.json`

```json
{
  "_class": "page",
  "do_objectID": "3E254C78-B274-4D23-BED6-B35C4F2B47C8",
  "booleanOperation": -1,
  "exportOptions": {
    "_class": "exportOptions",
    "exportFormats": [],
    "includedLayerIds": [],
    "layerOptions": 0,
    "shouldTrim": false
  },
  "frame": {
    "_class": "rect",
    "constrainProportions": false,
    "height": 0,
    "width": 0,
    "x": 0,
    "y": 0
  },
  "isFixedToViewport": false,
  "isFlippedHorizontal": false,
  "isFlippedVertical": false,
  "isLocked": false,
  "isVisible": true,
  "layerListExpandedType": 0,
  "name": "Page 1",
  "nameIsFixed": false,
  "resizingConstraint": 63,
  "resizingType": 0,
  "rotation": 0,
  "shouldBreakMaskChain": false,
  "clippingMaskMode": 0,
  "hasClippingMask": false,
  "style": {
    "_class": "style",
    "endMarkerType": 0,
    "miterLimit": 10,
    "startMarkerType": 0,
    "windingRule": 1
  },
  "groupLayout": { "_class": "MSImmutableFreeformGroupLayout" },
  "hasClickThrough": true,
  "layers": [],
  "horizontalRulerData": { "_class": "rulerData", "base": 0, "guides": [] },
  "includeInCloudUpload": true,
  "verticalRulerData": { "_class": "rulerData", "base": 0, "guides": [] }
}
```
