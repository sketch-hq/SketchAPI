---
title: Detach symbols
section: cli
chapter: Command-line interface
permalink: /cli/detach

order: 104
excerpt: Detach symbols from a Sketch document
---

Detach symbols from their symbol masters in a Sketch document with `sketchtool`. Recursively detaches symbols,
adds original symbol master ID's and symbol instance details to the layers userInfo.

```sh
sketchtool detach /path/to/document.sketch
```

### Original

Snippet showing a symbol instance

```json
{
  "layers": [{
    "_class": "symbolInstance",
    "do_objectID": "0A01E27B-27DF-433A-BE21-76C08564AF4E",
    "frame": {
      "_class": "rect",
      "constrainProportions": false,
      "height": 100,
      "width": 300,
      "x": 0,
      "y": 0
    },
    ...
    "symbolID": "BD7700E0-DDFA-4352-824F-8364A5F4BA4D",
    }]
}
```

### Output

The original symbol details are added to the layers' userInfo

```json
{
  "userInfo": {
    "com.bohemiancoding.sketchtool.detach": {
      "symbolInstance": {
        "do_objectID": "0A01E27B-27DF-433A-BE21-76C08564AF4E",
        "frame": {
          "_class": "rect",
          "constrainProportions": false,
          "height": 100,
          "width": 300,
          "x": 0,
          "y": 0
        }
      },
      "symbolMaster": {
        "do_objectID": "BA413F0D-84CE-4288-9394-6CD6818E8F2C",
        "symbolID": "BD7700E0-DDFA-4352-824F-8364A5F4BA4D"
      }
    }
  }
}
```
