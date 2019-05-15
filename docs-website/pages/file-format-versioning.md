---
title: Versioning
section: file-format
chapter: Concepts
permalink: /file-format/versioning

order: 101
excerpt: How Sketch stores version information in meta.json
---

The document's metadata includes information about the Sketch version used to create the document and which versions of Sketch can open the file.

If a document was saved in a newer version of Sketch, openend and saved in an older, compatible version of Sketch, document data only supported by the newer version of Sketch **is not retained**.

## Sample

The following `meta.json` sample data represents a Sketch document containing two pages and was saved in Sketch 53.

```json
{
  "commit": "6bf1bb7d02be2c7e63a1a6d1a4e221acacddb3fe",
  "pagesAndArtboards": {
    "3B978FF0-0F9C-415D-B0FF-79C6E968AFAC": {
      "name": "Page 1",
      "artboards": {}
    },
    "65D57353-F989-4A95-8E3A-DAB775BC113D": {
      "name": "Symbols",
      "artboards": {
        "691084F3-DE00-491A-987A-7A4B12C06180": { "name": "Rectangle" },
        "2AAC0749-E1F0-4EC2-9DD0-8FF6F7D121E2": { "name": "Oval" }
      }
    }
  },
  "version": 116,
  "fonts": [],
  "compatibilityVersion": 99,
  "app": "com.bohemiancoding.sketch3",
  "autosaved": 0,
  "variant": "NONAPPSTORE",
  "created": {
    "commit": "6bf1bb7d02be2c7e63a1a6d1a4e221acacddb3fe",
    "appVersion": "53",
    "build": 72520,
    "app": "com.bohemiancoding.sketch3",
    "compatibilityVersion": 99,
    "version": 116,
    "variant": "NONAPPSTORE"
  },
  "saveHistory": ["NONAPPSTORE.72520"],
  "appVersion": "53",
  "build": 72520
}
```

### `appVersion`

The semver of the Sketch installation used to save the document.

### `compatibilityVersion`

A sequential version number indicating the minimum version a Sketch installation must support to open the document, see `version`.

### `version`

A sequential version number indicating which may change with a new version of Sketch.

| Sketch version | Document version |
| -------------- | ---------------- |
| 53             | 116              |
| 54             | 117              |
| 54.1           | 118              |
