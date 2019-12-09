---
title: Sketch.app
permalink: /app

layout: single-page
excerpt: Use the sketch:// URL schema to open documents in Sketch already focused on specific layers or with a specified zoom level.
---

You can integrate Sketch into your app or workflow using the `sketch://` URL scheme. You can even open documents in Sketch already focused on specific layers or with a specified zoom level.

**Note:** If a document is already open the canvas view does not change.

### Table of Contents

- [Center layer and specify zoom level](#center-layer)
- [Run a plugin command](#run-plugin-command)
- [Add a shared Library](#add-shared-library)

## Center layer and specify zoom level <a name="center-layer"></a>

The URL scheme accepts two parameters. If the path to the file is provided without any parameters the file will be opened in the same way it was last saved.

```sh
sketch://path/to/file.sketch?centerOnLayer=LAYER_ID&zoom=ZOOM_LEVEL
```

### `centerOnLayer` string

To obtain the layer id use either the JavaScript API or read the document's JSON data directly.

#### Example

To get the id of the current selection, select a layer within the current document in Sketch and run the following script from the _Run Script…_ panel in the _Plugins_ menu.

```js
const document = require('sketch/dom').getSelectedDocument()

document.selectedLayers.forEach(layer => console.log(layer.id))
```

### `zoom` number

_Actual Size_ has a zoom level of `1`. To zoom out specify values between `0...1` while using values greater than `1` to zoom in, e.g. `2` for 200%.

## Run a plugin command <a name="run-plugin-command"></a>

**Availability:** _Sketch 55+_

Run a plugin command and pass query parameters to the a JavaScript handler.

```sh
sketch://plugin/my.plugin.identifier/my.command.identifier
```

#### Example

The command must implement the `HandleURL` action and have it defined in the plugin manifest in order to be run.

##### `command.js`

```js
const sketch = require('sketch')

// If you're using skpm: export function handleURL(context)
function handleURL(context) {
  let query = context.actionContext.query
  sketch.UI.message(query.msg || '👋')
}
```

##### `manifest.json`

```json
{
  "identifier": "com.example.sketch.messenger",
  "commands": [
    {
      "name": "Message",
      "identifier": "message.show",
      "script": "command.js",
      "handlers": {
        "actions": {
          "HandleURL": "handleURL"
        }
      }
    }
  ]
}
```

##### URL

Open the following link to display a _Hello World_ message within an open document. Provide any URL encoded string with the `msg` query parameter.

[`sketch://plugin/com.example.sketch.messenger/message.show?msg=Hello%20World`](sketch://plugin/com.example.sketch.messenger/message.show?msg=Hello%20World)

## Add a shared Library <a name="add-shared-library"></a>

Add a Library hosted on any server and shared using RSS by specifying the URL-encoded string to the appcast.

```sh
sketch://add-library?url=APPCAST_RSS_URL
```

To find out more about sharing your own libraries, see:

- [Sharing a Library](https://www.sketch.com/docs/libraries/#sharing-libraries) Sketch documentation
- [Appcast documentation](https://sparkle-project.org/documentation/)

#### Example

URL to install the Apple iOS Sketch Library from [Apple Design Resources](https://developer.apple.com/design/resources/).

```sh
sketch://add-library?url=https%3A%2F%2Fdeveloper.apple.com%2Fdesign%2Fdownloads%2Fsketch.rss
```
