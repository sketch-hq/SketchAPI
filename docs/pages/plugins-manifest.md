---
title: Manifest
section: plugins
chapter: Concepts
permalink: /plugins/plugin-manifest

order: 201
excerpt: The manifest is a JSON file that provides information about a plugin such as author, description, icon and where to get the latest update from
---

The manifest is a JSON file that provides information about a plugin such as author, description, icon and where to get the latest update from. It also tells Sketch how to run the plugin and how it integrates into the _Plugins_ menu.

> **Tip:** Validate your `manifest.json` using the [JSON Schema](https://github.com/BohemianCoding/SketchAPI/blob/develop/docs/sketch-plugin-manifest-schema.json).

## Example manifest

The example `manifest.json` file below is for a plugin called _Select Shapes_, and defines three commands – _All_, _Circles_ and _Rectangles_. These commands would be accessible from the _Plugins_ › _Select Shapes_ menu in Sketch.

```json
{
  "name": "Select Shapes",
  "description": "Quickly select all or just specific shape types",
  "author": "Bob Ross",
  "homepage": "https://github.com/example/select-shapes",
  "version": "1.0",
  "identifier": "com.example.sketch.plugin.select-shapes",
  "appcast": "https://example.com/select-shapes-plugin-appcast.xml",
  "compatibleVersion": "52.1",
  "commands": [
    {
      "name": "All",
      "identifier": "all",
      "shortcut": "ctrl shift a",
      "script": "shared.js",
      "handler": "selectAll"
    },
    {
      "name": "Circles",
      "identifier": "circles",
      "script": "circles.js"
    },
    {
      "name": "Rectangles",
      "identifier": "rectangles",
      "script": "rectangles.js"
    }
  ],
  "menu": {
    "items": ["all", "circles", "rectangles"]
  }
}
```

## Members

#### `appcast`

A URL to the plugin's appcast file containing information about the available versions, including URLs to download specific versions. Sketch automatically checks this file for updates and notifies the user when there's an update available.

#### `author`

Provides the name of the plugin author.

#### `authorEmail`

Specifies how to contact the plugin author by email. This is optional.

#### `bundleVersion`

Specifies the version of the plugin bundle's metadata structure and file layout. This is optional, and defaults to `1`. No other versions are currently supported.

#### `compatibleVersion`

Defines the minimum version of Sketch required to run the plugin. This string must be provided using [semantic versioning](http://semver.org).

```json
"compatibleVersion": "52.1"
```

#### `commands`

An array of objects defining all commands provided by the plugin.

For example, the example command definition below says that the `selectAll` JS function in `script.js` should be called when the `Select all` command is invoked from Sketch.

```json
"commands": [
  {
    "name": "Select all",
    "identifier": "select-all",
    "shortcut": "ctrl shift a",
    "script": "select-all.js",
    "handler": "selectAll"
  }
]
```

```js
// select-all.js
function selectAll() {
  // ... plugin code to select all
}
```

| Command field | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`  | Defines a unique identifier of the command within the plugin bundle.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `name`        | Provides the name of the command which is used within the _Plugins_ menu.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `shortcut`    | Provides a default keyboard shortcut for the command, e.g. `ctrl shift t`.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `script`      | Specifies the relative path within the plugin bundle's `Sketch` folder to the script implementing the command.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `handler`     | Specifies the name of function to be called with the command. The function should be declared at the top level of the script, and accepts a single `context` parameter which contains information such as the current document and selection. If this field is omitted the plugin will default to using a handler named `onRun`. <br/><br/>Alternatively, if you're using the `skpm` tool you may `export` the function instead of declaring it, or omit this field and declare the handler with `export default` |
| `handlers`    | If more fine-grain control is required use the `handlers` field instead of `handler`, see below for in-depth documentation                                                                                                                                                                                                                                                                                                                                                                                        |

##### `handlers`

An object used to fully specify a command's _setup_ › _run_ › _tearDown_ lifecycle, as well as work with [Actions](/guides/action-api/). When specified the `handler` field is ignored.

The `handlers` object has four fields:

- `run` The function that should be called when the command is run (this is conceptually the same as defining `handler`)
- `setUp` The function to call before the command is called (not to be confused with the `Startup` action)
- `tearDown` The function to call after the command has finished to run (not to be confused with the `Shutdown` action)
- `actions` See the [Actions](/guides/action-api/) page for an in-depth guide

For example, the following `commands` definition maps the `SelectionChanged.finish` action to the `onSelectionChanged` JS function,

```json
{
  "commands": [
    {
      "name": "Selection changed",
      "identifier": "selection-changed",
      "script": "./selection-changed.js",
      "handlers": {
        "actions": {
          "SelectionChanged.finish": "onSelectionChanged"
        }
      }
    }
  ]
}
```

The function in `selection-changed.js` would be written as,

```js
// selection-changed.js
function onSelection(context) {
  var doc = context.document
  var selection = context.selection
}
```

> Functions referenced in the `handlers` object are defined in the same way as the `handler` function, i.e. declared at the top level of the script in a vanilla plugin, or using ES6 module `export` syntax with `skpm`.

#### `description`

Provides a general description of what the plugin does.

#### `disableCocoaScriptPreprocessor`

CocoaScript by default supports `@import` and bracket syntax, i.e. `[obj hello: world]`. If disabled by setting `disableCocoaScriptPreprocessor` to `true` this is no longer supported.

**Note:** To use ES6 syntax and build systems like [skpm](https://skpm.io) this must be set to `true`.

This value is optional, default `false`, set to `true` when using `skpm`.

#### `homepage`

Specifies a website address where users can find more information or provide feedback for the plugin. This is optional.

#### `icon`

The path to the plugin icon used within Sketch, e.g. within preferences. The icon must be provided as a PNG file at a resolution of 128x128px and located directly or in a subfolder within `Contents/Resources` of the plugin bundle.

#### `identifier`

Defines a unique identifier for the plugin. This value is a string using reverse-domain syntax.

```json
"identifier": "com.example.sketch.plugin.select-shapes"
```

#### `maxCompatibleVersion`

Defines the maximum version of Sketch supported by the plugin. This string is optional and must be using [semantic versioning](http://semver.org) if provided.

```json
"compatibleVersion": "54"
```

#### `name`

Provides a human-readable name for the plugin when displayed to the user, e.g. within the _Plugins_ menu or the list of installed plugins in the Sketch preferences.

#### `scope`

Specifies if the plugin can be run without an open Sketch document.

- `document`: default, disables the plugin's menu items when no document is open
- `application`: enables the plugin menu and allow to run the plugin without an open document

```json
"scope": "application"
```

#### `suppliesData`

Specifies if the plugin is a data supplier. If set to `true` a visual indicator is displayed with the plugin within the preference pane showing the list of all installed plugins.

#### `version`

The version of the plugin using [semantic versioning](http://semver.org).

```json
"version": "1.0.1"
```

#### `menu`

Provides information about the menu layout of the plugin. Sketch initializes the menu when loading the plugin.

```json
{
  "menu": {
    "title": "Select Shapes",
    "items": [
      "selectAll",
      "-",
      {
        "title": "Select…",
        "items": ["circles", "rectangles"]
      }
    ]
  }
}
```

| Member   | Description                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isRoot` | Specifies that menu items are created directly within the _Plugins_ menu in Sketch. By default Sketch creates a submenu for the plugin. This value is not supported for submenus. |
| `items`  | An array of menu items, supported values are command identifier, `"-"` separator and an object defining a submenu                                                                 |
| `title`  | Provides the human readable title used for the menu item. The value is ignored if the menu item also has `isRoot` set to `true`.                                                  |
