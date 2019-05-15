---
title: Manifest
section: plugins
chapter: Concepts
permalink: /plugins/plugin-manifest

order: 201
excerpt: The manifest is a JSON file that provides information about a plugin such as author, description, icon and where to get the latest update from
---

The manifest is a JSON file that provides information about a plugin such as author, description, icon and where to get the latest update from. It also tells Sketch how to run the plugin and how it integrates into the _Plugins_ menu.

## Example manifest

The example plugin below called _Select Shapes_ defines three commands _All_, _Circles_ and _Rectangles_ which can be accessed from _Plugins_ › _Select Shape_.

It also includes an `appcast` URL for Sketch to automatically check if a new version of the plugin is available.

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

Specifies the version of the plugin bundle's metadata structure and file layout. This is optional, default `1`. No other versions are currently supported.

#### `compatibleVersion`

Defines the minimum version of Sketch required to run the plugin. This string must be provided using [semantic versioning](semantic versioning).

```json
"compatibleVersion": "52.1"
```

#### `commands`

An array of dictionaries defining all commands provided by the plugin.

```json
"commands": [
  {
    "name": "All",
    "identifier": "all",
    "shortcut": "ctrl shift a",
    "script": "shared.js",
    "handler": "selectAll"
  }
]
```

##### Example handler definitions

```js
// default handler
export default function(context) {
  console.log(context.selection)
}

// explicitly defined handler
export function selectAll(context) {
  console.log(context.document)
}
```

| Member       | Description                                                                                                                                                                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier` | Defines a unique identifier of the command within the plugin bundle.                                                                                                                                                                                  |
| `name`       | Provides the name of the command which is used within the _Plugins_ menu.                                                                                                                                                                             |
| `shortcut`   | Provides a default keyboard shortcut for the command, e.g. `ctrl shift t`.                                                                                                                                                                            |
| `script`     | Specifies the relative path within the plugin bundle's `Sketch` folder to the script implementing the command.                                                                                                                                        |
| `handler`    | Specifies the name of function to be called with the command. The function must accept a single `context` parameter, containing information such as the current document and selection. If unspecified the command is expected to be `export default` |

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

Defines the maximum version of Sketch supported by the plugin. This string is optional and must be using [semantic versioning](semantic versioning) if provided.

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

The version of the plugin using [semantic versioning][semantic versioning].

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
| `items`  | An array of menu items, supported values are command identifier, `"-"` separator and a dictionary defining a submenu                                                              |
| `title`  | Provides the human readable title used for the menu item. The value is ignored if the menu item also has `isRoot` set to `true`.                                                  |

[semantic versioning]: http://semver.org
