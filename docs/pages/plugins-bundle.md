---
title: Plugin bundle
section: plugins
chapter: Concepts
permalink: /plugins/plugin-bundle

# Previous developer documention
redirect_from:
  - /introduction/
  - /introduction/plugin-bundles/
  - /guides/plugin-bundles/

order: 200
excerpt: A plugin bundle is a folder containing a manifest, scripts and additional resources, such as images, in a specific file layout
---

A `.sketchplugin` is a folder containing a manifest, scripts and additional resources, such as images, in a specific file layout. It’s a [macOS package](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/DocumentPackages/DocumentPackages.html#//apple_ref/doc/uid/10000123i-CH106-SW1), arranged as a [macOS bundle](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/AboutBundles/AboutBundles.html#//apple_ref/doc/uid/10000123i-CH100-SW1).

Finder in macOS displays a Sketch plugin as a single file. To browse the bundle contents, select _Show Package Contents_ from the context menu of the plugin bundle.

You can organise your plugin bundle manually or use [`skpm`](https://github.com/skpm/skpm) to generate it as part of the build process.

## Folder structure

```log
select-shapes.sketchplugin
  Contents/
    Sketch/
      manifest.json
      circles.js
      rectangles.js
      shared.js
    Resources/
      icon.png
```

| Folder      | Description                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| `Contents`  | Contains the manifest and all JavaScript (`.js`) and CocoaScript (`.cocoascript`) files. |
| `Resources` | Contains all of the plugin's resource files.                                             |

## Plugin Manifest file

For Sketch to initialize the plugin correctly, the `manifest.json` must be included in the plugin bundle. It defines how the scripts can be called from either the menu or a keyboard shortcut, or triggered by user activity within Sketch. For more information, see the [manifest documentation](/plugins/plugin-manifest).
