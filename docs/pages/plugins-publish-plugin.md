---
title: Publish a plugin
section: plugins
chapter: Guides
permalink: /plugins/publish-a-plugin

# Previous developer documentation
redirect_from:
  - /introduction/updating-plugins/
  - /guides/publishing-plugins/

order: 105
excerpt: Publish a plugin to make it available to the public or just your team and take advantage of Sketch's automatic update mechanism for plugins
---

Publish a plugin to make it available to the public or just your team and take advantage of Sketch's automatic update mechanism for plugins. To let others know about your plugin submit to the official listing on the [Sketch website](https://sketch.com/extensions/).

For automatic updates to work a plugin must be downloadable and available versions must be provided via an _appcast_. Sketch regularly checks for updates and prompts the user to install a new plugin version when it becomes available. Use the [Sketch Plugin Manager `skpm`](https://github.com/skpm/skpm) or follow the necessary steps manually to make your plugins available to others.

## 1. Use `skpm`

If your plugin is hosted on GitHub, `skpm` allows to manage releases and submission to the plugin listing from the command-line automating the following steps:

1. Create a downloadable ZIP archive.
1. Create a GitHub release.
1. Add or update an `.appcast.xml` with the latest release information to the repository.
1. Open a pull request on [`plugin-directory`](https://github.com/sketchplugins/plugin-directory) to include the plugin in the official listing.

Run `skpm` from your plugin folder.

```sh
skpm publish
```

For all options such as not including a plugin in the official listing view the usage instructions.

```sh
skpm publish --help
```

> **Note:** If you haven't used `skpm` with your GitHub repository before you'll need to login from the command-line first using a [_Personal Access Token_](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) granting access to the **repo** scope.
>
> ```sh
> skpm login
> ```

## 2. Submit manually

If you can't use `skpm` or want to host your plugin somewhere else than GitHub, for instance on your product website, you'll have to

1. Create an appcast XML and upload it to a server.
1. Set the `appcast` property in the plugin manifest to the URL to the XML file.
1. Create a ZIP archive of the plugin bundle, e.g. `select-shapes.sketchplugin` › `select-shapes.sketchplugin-1.0.zip`.
1. Upload the archive to a location where it can be downloaded from.
1. Add a version entry to the appcast XML file on the server.
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
   </channel>
   </rss>
   ```
1. To include the plugin in the official listing, open a pull request on [`plugin-directory`](https://github.com/sketchplugins/plugin-directory) providing information about your plugin including the URL to the appcast.

> **Note:** To use rich text in the release notes, include HTML formatted `description`, e.g. `<![CDATA[<h1>New 🎉</h1>]]>`.

## Next steps

Read more about the appcasts and how to update an existing plugin.

- [Plugin Manifest](/plugins/plugin-manifest)
- [Appcast documentation](https://sparkle-project.org/documentation/)
- [Update a plugin](/plugins/update-a-plugin)
