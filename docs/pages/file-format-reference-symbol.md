---
title: Symbol document
section: file-format
chapter: Reference files
permalink: /file-format/reference/symbol

order: 201
excerpt: A reference Sketch document containing a symbol
---

This document contains a symbol master and one of its instances, side-by-side on the same page.

| Sketch version |                                                                                                                   |                                                                                                         |                                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 55             | [.sketch](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/symbol/output.sketch) | [JSON](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/symbol/output) | [Generator plugin](https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files/sketch55/symbol/plugin.sketchplugin) |

### `document.json`

```json
{
  "_class": "document",
  "do_objectID": "7686D2F4-FFBB-4798-B914-1A050AA4CDAC",
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
      "_ref": "pages/08FBCEF3-580F-4881-B7E5-3775C29207A8"
    }
  ]
}
```

### `meta.json`

```json
{
  "commit": "1b735aa8f66d3e13f8900ae7c369f355f0eb2d3a",
  "pagesAndArtboards": {
    "08FBCEF3-580F-4881-B7E5-3775C29207A8": {
      "name": "Page 1",
      "artboards": {
        "CB130D5C-9E33-427D-BCC6-46B03B12A32D": { "name": "artboard" }
      }
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
{ "document": { "pageListHeight": 85, "pageListCollapsed": 0 } }
```

### `pages/{id}.json`

```json
{
  "_class": "page",
  "do_objectID": "08FBCEF3-580F-4881-B7E5-3775C29207A8",
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
      "_class": "symbolMaster",
      "do_objectID": "CB130D5C-9E33-427D-BCC6-46B03B12A32D",
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
      "name": "artboard",
      "nameIsFixed": false,
      "resizingConstraint": 63,
      "resizingType": 0,
      "rotation": 0,
      "shouldBreakMaskChain": true,
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
          "do_objectID": "02944D4F-75C6-4D09-A9E4-163BEF4F9343",
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
            "height": 50,
            "width": 50,
            "x": 75,
            "y": 75
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
                  "blue": 0.592,
                  "green": 0.592,
                  "red": 0.592
                },
                "fillType": 0,
                "position": 0,
                "thickness": 1
              }
            ],
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
                  "red": 0
                },
                "fillType": 0,
                "noiseIndex": 0,
                "noiseIntensity": 0,
                "patternFillType": 1,
                "patternTileScale": 1
              }
            ],
            "miterLimit": 10,
            "startMarkerType": 0,
            "windingRule": 1
          },
          "groupLayout": { "_class": "MSImmutableFreeformGroupLayout" },
          "hasClickThrough": false,
          "layers": [
            {
              "_class": "rectangle",
              "do_objectID": "E71420F0-FD4A-490A-803D-33E081B44430",
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
                "height": 50,
                "width": 50,
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
      "backgroundColor": {
        "_class": "color",
        "alpha": 1,
        "blue": 1,
        "green": 1,
        "red": 1
      },
      "hasBackgroundColor": false,
      "horizontalRulerData": { "_class": "rulerData", "base": 0, "guides": [] },
      "includeBackgroundColorInExport": true,
      "includeInCloudUpload": true,
      "isFlowHome": false,
      "resizesContent": false,
      "verticalRulerData": { "_class": "rulerData", "base": 0, "guides": [] },
      "includeBackgroundColorInInstance": true,
      "symbolID": "977474C2-2780-45E5-9C8B-ADCDE73133B0",
      "changeIdentifier": 6,
      "overrideProperties": [],
      "allowsOverrides": true
    },
    {
      "_class": "symbolInstance",
      "do_objectID": "7F9784D1-C77E-4176-9B7F-A5DD21210F74",
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
        "x": 200,
        "y": 0
      },
      "isFixedToViewport": false,
      "isFlippedHorizontal": false,
      "isFlippedVertical": false,
      "isLocked": false,
      "isVisible": true,
      "layerListExpandedType": 0,
      "name": "artboard",
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
      "horizontalSpacing": 0,
      "overrideValues": [],
      "scale": 1,
      "symbolID": "977474C2-2780-45E5-9C8B-ADCDE73133B0",
      "verticalSpacing": 0
    }
  ],
  "horizontalRulerData": { "_class": "rulerData", "base": 0, "guides": [] },
  "includeInCloudUpload": true,
  "verticalRulerData": { "_class": "rulerData", "base": 0, "guides": [] }
}
```
