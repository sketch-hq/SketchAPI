---
title: Run a plugin
section: cli
chapter: Command-line interface
permalink: /cli/run-plugin

order: 102
excerpt: Run plugins in Sketch from the command-line
---

Run plugins from the command-line with `sketchtool` for automated testing of a pluging or as part, a continuous integration workflow and other automated tasks.

Specify the path to the plugin and the command identifier as defined in the [plugin manifest](/plugins/plugin-manifest).

```sh
sketchtool run ~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/select-shapes.sketchplugin rectangles
```

If you don't specify a command identfier the first command in the bundle will be used. If you don't want Sketch to become the front-most window use the `--without-activating` command-line argeument.

> **Note:** This command requires Sketch to be installed with a valid licence as the plugin is run within the Sketch environment.

For a list of all options see command-line help:

```sh
sketchtool help run
```
