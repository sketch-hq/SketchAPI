---
title: File format
section: file-format
chapter: Concepts
permalink: /file-format/

order: 3
excerpt: Sketch documents are stored as ZIP archives containing JSON encoded data
---

Sketch documents are stored as ZIP archives containing JSON encoded data. The file format was originally [introduced in Sketch 43](https://sketchplugins.com/d/87-new-file-format-in-sketch-43) and allows for better third-party integration. Generate Sketch documents dynamically, read or modify them without opening them in Sketch.

The JSON files within the archive describe the document data and contain a number of binary assets such as bitmap images and document preview. To unarchive a document on the command line use `unzip`.

```sh
unzip document.sketch
```

Archive the contents of a document folder with `zip`.

```sh
zip -r -X document.sketch *
```

## Folder structure

### **`meta.json`**

Contains metadata about the document itself (a list of pages and artboards, Sketch version used to save the file, fonts used…). It's equivalent to the output you'd get from running `sketchtool metadata` on the file.

### **`document.json`**

Contains common data for all pages of a document, like shared styles, and a link to the JSON files in the `pages`folder.

### **`user.json`**

Contains user metadata for the file, like the canvas viewport & zoom level for each page, UI metadata for the app such as panel dimensions, etc. and whether the document has been uploaded to Sketch Cloud.

### **`pages` folder**

Contains a JSON file per page of the document. Each file describes the contents of a page, in a format similar to what you'd get by running `sketchtool dump` on the file.

### **`images` folder**

The `images` folder contains all the bitmaps that are used in the document, at their original scales (so if the user imported a 1000x1000px image and then resized it to 200x200px, the full 1000x1000px file will be stored).

### **`previews` folder**

Contains a preview image of the last page edited by the user. If the page's size is less than 2048x2048 it will be stored at full size, otherwise it'll be scaled to fit a 2048x2048 square.

## Custom data

To store data that is not part of the Sketch document structure a special field `userInfo` object can be set per document and layer.

```json
{
  "userInfo": {
    "com.example.custom.value": {
      "comment": "Looking great 👏"
    }
  }
}
```

You can also use the [Sketch JavaScript API](/reference/api/#settings) to set custom data. Please note that the values will be set for the current plugin or script identifier.

```js
const settings = require('sketch/settings')

let document = require('sketch/dom').Document
settings.setDocumentSettingForKey(document, 'comment', 'Done!')

let layer = context.selection[0]
settings.setLayerSettingForKey(layer, 'comment', 'Looking great 👏')
```

## Related resources

- [sketch-file JavaScript package](https://github.com/mathieudutour/sketch-file)
- Render [React components to Sketch](https://github.com/airbnb/react-sketchapp)
