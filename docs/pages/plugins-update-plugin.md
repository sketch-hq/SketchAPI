---
title: Update a plugin
section: plugins
chapter: Guides
permalink: /plugins/update-a-plugin

order: 106
---

To publish a new version of a plugin, use either the [Sketch Plugin Manager `skpm`](https://github.com/skpm/skpm) or create a new release and add it to the _appcast_ manually.

### 1. Use `skpm`

Updating a plugin using `skpm` does four things:

1. Update the plugin version specified in the [plugin manifest](/plugins/plugin-manifest)
1. Create a downloadable ZIP archive.
1. Create a GitHub release.
1. Update the `.appcast.xml` with the latest release information.

Run the following command providing either a specific version number of bump the existing version by `path`, `minor` or `major`. For more available options see `skpm publish --help`.

```sh
skpm publish <version>
```

> **Note:** If the previous version was not included in the official listing before `skpm` will also open a pull request on [`plugin-directory`](https://github.com/sketchplugins/plugin-directory) to submit it unless the command is run with the `--skip-registry` command-line argument.

### 2. Update manually

Similar to [publishing the initial release](/plugins/publish-a-plugin), follow the steps below to release a new version of your plugin.

1. Update the version number in the [plugin manifest](/plugins/plugin-manifest)
1. Create a ZIP archive of the plugin bundle, e.g. `select-shapes.sketchplugin` › `select-shapes.sketchplugin-1.1.zip`.
1. Upload the archive to a location where it can be downloaded from.
1. Add a version entry to the appcast XML file on the server as shown in the following example for a new version `1.1` of the _Select Shapes_ plugin.
   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" xmlns:dc="http://purl.org/dc/elements/1.1/">
   <channel>
   <title>Select Shapes Sketch Plugin</title>
   <link>http://sparkle-project.org/files/sparkletestcast.xml</link>
   <description>Quickly select all or just specific shape types</description>
   <language>en</language>
   <item>
     <title>Version 1.0</title>
     <description>
       🚀 Select all shapes or just circles and rectangles.
     </description>
     <enclosure url="https://example.com/select-shapes.sketchplugin-1.0.zip" sparkle:version="1.0"/>
   </item>
   <item>
     <title>Version 1.1</title>
     <description>
       You can now specifically select boolean shapes.
     </description>
     <enclosure url="https://example.com/select-shapes.sketchplugin-1.1.zip" sparkle:version="1.1"/>
   </item>
   </channel>
   </rss>
   ```
