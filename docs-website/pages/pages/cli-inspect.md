---
title: Inspect a document
section: cli
chapter: Command-line interface
permalink: /cli/inspect-document

order: 101
excerpt: Get information about the structure of Sketch document and basic layer details as JSON data
---

Get information about the document structure using `sketchtool list`. The JSON encoded output provides the layer hierarchy and details including name, dimensions and position for each layer.

> **Note:** For more detailed information you can access the raw document JSON encoded data directly. See the [file format documentation](/file-format) for more.

## Layers

List all layers of a document.

```sh
sketchtool list layers /path/to/document.sketch
```

### Output

```json
{
  "pages": [
    {
      "id": "9C1FA15B-CBEB-4448-ABFF-628D7FE1A537",
      "name": "Page 1",
      "bounds": "0.000000,0.000000,100.000000,100.000000",
      "layers": [
        {
          "layers": [],
          "trimmed": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          },
          "id": "3E0A01F1-482E-4A32-AD5B-EDF0B98575EA",
          "rect": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          },
          "relative": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          },
          "influence": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          },
          "name": "Rectangle"
        }
      ]
    }
  ]
}
```

## Artboards

To list only artboards run the following command:

```sh
sketchtool list artboards /path/to/document.sketch
```

### Output

```json
{
  "pages": [
    {
      "id": "540D2F01-CE28-4E3B-A7A3-EAE9DA2A4EC8",
      "name": "Page 1",
      "bounds": "0,0,375.000000,812.000000",
      "artboards": [
        {
          "id": "1B7FCC8E-5030-43A5-94BE-28A9C7ABFF72",
          "name": "Artboard",
          "rect": {
            "y": 0,
            "x": 0,
            "width": 375,
            "height": 812
          },
          "trimmed": {
            "y": 0,
            "x": 0,
            "width": 375,
            "height": 812
          }
        }
      ]
    }
  ]
}
```

## Slices

To list all layers that are either slices or have been marked _Exportable_ run:

```sh
 sketchtool list slices /path/to/document.sketch
```

### Output

```json
{
  "pages": [
    {
      "id": "9C1FA15B-CBEB-4448-ABFF-628D7FE1A537",
      "name": "Page 1",
      "bounds": "-25.000000,-25.000000,150.000000,150.000000",
      "slices": [
        {
          "rect": {
            "y": -25,
            "x": -25,
            "width": 150,
            "height": 150
          },
          "id": "94D3C09B-835E-46F1-8035-0B6A4CD9601B",
          "influence": {
            "y": -25,
            "x": -25,
            "width": 150,
            "height": 150
          },
          "name": "Slice",
          "trimmed": {
            "y": -25,
            "x": -25,
            "width": 150,
            "height": 150
          },
          "relative": {
            "y": -25,
            "x": -25,
            "width": 150,
            "height": 150
          }
        },
        {
          "rect": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          },
          "id": "3E0A01F1-482E-4A32-AD5B-EDF0B98575EA",
          "influence": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          },
          "name": "Rectangle",
          "trimmed": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          },
          "relative": {
            "y": 0,
            "x": 0,
            "width": 100,
            "height": 100
          }
        }
      ]
    }
  ]
}
```

## Pages

Retrieve just page information running the following command:

```sh
 sketchtool list pages /path/to/document.sketch
```

### Output

```json
{
  "pages": [
    {
      "name": "Page 1",
      "id": "9C1FA15B-CBEB-4448-ABFF-628D7FE1A537",
      "bounds": "-25.000000,-25.000000,150.000000,150.000000"
    }
  ]
}
```
