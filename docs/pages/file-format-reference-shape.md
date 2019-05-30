---
title: Shape document
section: file-format
chapter: Reference files
permalink: /file-format/reference/shape

order: 201
excerpt: A reference Sketch document containing a shape
---

This document contains a single styled shape.

| Sketch version |                                                                                                                  |                                                                                                        |                                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 55             | [.sketch](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/shape/output.sketch) | [JSON](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/shape/output) | [Generator plugin](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/shape/plugin.sketchplugin) |

### `document.json`

```json
{
  "_class": "document",
  "do_objectID": "2F5DEDAB-606C-494F-80B2-11E8A0B08382",
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
      "_ref": "pages/D9CFBC22-CD58-4DC1-9021-9382ACBDC537"
    }
  ]
}
```

### `meta.json`

```json
{
  "commit": "1b735aa8f66d3e13f8900ae7c369f355f0eb2d3a",
  "pagesAndArtboards": {
    "D9CFBC22-CD58-4DC1-9021-9382ACBDC537": {
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
    "commit": "1b735aa8f66d3e13f8900ae7c369f355f0eb2d3a",
    "appVersion": "55.1",
    "build": 78136,
    "app": "com.bohemiancoding.sketch3",
    "compatibilityVersion": 99,
    "version": 118,
    "variant": "NONAPPSTORE"
  },
  "saveHistory": ["NONAPPSTORE.78136"],
  "appVersion": "55.1",
  "build": 78136
}
```

### `user.json`

```json
{
  "document": { "pageListHeight": 85, "pageListCollapsed": 0 },
  "D9CFBC22-CD58-4DC1-9021-9382ACBDC537": {
    "scrollOrigin": "{0, 0}",
    "zoomValue": 1
  }
}
```

### `pages/{id}.json`

```json
{
  "_class": "page",
  "do_objectID": "D9CFBC22-CD58-4DC1-9021-9382ACBDC537",
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
  "layers": [
    {
      "_class": "shapeGroup",
      "do_objectID": "BABF2443-D2B0-402E-8A8E-47170C60B79A",
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
        "height": 200,
        "width": 200,
        "x": 0,
        "y": 0
      },
      "isFixedToViewport": false,
      "isFlippedHorizontal": false,
      "isFlippedVertical": false,
      "isLocked": false,
      "isVisible": true,
      "layerListExpandedType": 1,
      "name": "shape",
      "nameIsFixed": false,
      "resizingConstraint": 63,
      "resizingType": 0,
      "rotation": 0,
      "shouldBreakMaskChain": false,
      "clippingMaskMode": 0,
      "hasClippingMask": false,
      "style": {
        "_class": "style",
        "borders": [
          {
            "_class": "border",
            "isEnabled": true,
            "color": {
              "_class": "color",
              "alpha": 1,
              "blue": 0,
              "green": 1,
              "red": 0
            },
            "fillType": 0,
            "position": 0,
            "thickness": 1
          }
        ],
        "contextSettings": {
          "_class": "graphicsContextSettings",
          "blendMode": 0,
          "opacity": 0.5
        },
        "endMarkerType": 0,
        "fills": [
          {
            "_class": "fill",
            "isEnabled": true,
            "color": {
              "_class": "color",
              "alpha": 1,
              "blue": 0,
              "green": 0,
              "red": 1
            },
            "fillType": 0,
            "noiseIndex": 0,
            "noiseIntensity": 0,
            "patternFillType": 1,
            "patternTileScale": 1
          }
        ],
        "miterLimit": 10,
        "shadows": [
          {
            "_class": "shadow",
            "isEnabled": true,
            "blurRadius": 20,
            "color": {
              "_class": "color",
              "alpha": 1,
              "blue": 1,
              "green": 0,
              "red": 0
            },
            "contextSettings": {
              "_class": "graphicsContextSettings",
              "blendMode": 0,
              "opacity": 1
            },
            "offsetX": 0,
            "offsetY": 2,
            "spread": 0
          }
        ],
        "startMarkerType": 0,
        "windingRule": 1
      },
      "groupLayout": { "_class": "MSImmutableFreeformGroupLayout" },
      "hasClickThrough": false,
      "layers": [
        {
          "_class": "rectangle",
          "do_objectID": "A29C83EC-8BC2-475C-BC50-E70EECCA6779",
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
            "height": 200,
            "width": 200,
            "x": 0,
            "y": 0
          },
          "isFixedToViewport": false,
          "isFlippedHorizontal": false,
          "isFlippedVertical": false,
          "isLocked": false,
          "isVisible": true,
          "layerListExpandedType": 0,
          "name": "Rectangle",
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
          "edited": false,
          "isClosed": true,
          "pointRadiusBehaviour": 1,
          "points": [
            {
              "_class": "curvePoint",
              "cornerRadius": 0,
              "curveFrom": "{0, 0}",
              "curveMode": 1,
              "curveTo": "{0, 0}",
              "hasCurveFrom": false,
              "hasCurveTo": false,
              "point": "{0, 0}"
            },
            {
              "_class": "curvePoint",
              "cornerRadius": 0,
              "curveFrom": "{1, 0}",
              "curveMode": 1,
              "curveTo": "{1, 0}",
              "hasCurveFrom": false,
              "hasCurveTo": false,
              "point": "{1, 0}"
            },
            {
              "_class": "curvePoint",
              "cornerRadius": 0,
              "curveFrom": "{1, 1}",
              "curveMode": 1,
              "curveTo": "{1, 1}",
              "hasCurveFrom": false,
              "hasCurveTo": false,
              "point": "{1, 1}"
            },
            {
              "_class": "curvePoint",
              "cornerRadius": 0,
              "curveFrom": "{0, 1}",
              "curveMode": 1,
              "curveTo": "{0, 1}",
              "hasCurveFrom": false,
              "hasCurveTo": false,
              "point": "{0, 1}"
            }
          ],
          "fixedRadius": 0,
          "hasConvertedToNewRoundCorners": true
        }
      ],
      "windingRule": 1
    }
  ],
  "horizontalRulerData": { "_class": "rulerData", "base": 0, "guides": [] },
  "includeInCloudUpload": true,
  "verticalRulerData": { "_class": "rulerData", "base": 0, "guides": [] }
}
```
