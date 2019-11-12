---
title: Build something beautiful
permalink: /

redirect_from:
  - /guides/
  - /guides/third-party-apps-integrations/

layout: home
body_class: home
excerpt: We’ve laid the foundations so you can build on the platform that empowers one million designers every day. Create plugins and integrations using the command-line interface or read and write Sketch files directly in JSON.

masthead_cards:
  - icon: /images/icons/48/icon-plugins-light.svg
    title: Plugins
    description: Extend and customize the functionality of Sketch using JavaScript or Objective-C. Modify the document using Sketch’s APIs, add your own user interface, and integrate Sketch with your product or other applications.
    link_label: View documentation
    link: /plugins
  - icon: /images/icons/48/icon-file-format.svg
    title: Sketch file format
    description: Generate, modify and process Sketch files directly with the open JSON file format.
    link: /file-format
    link_label: View documentation

masthead_links:
  - icon: /images/icons/48/icon-cli-light.svg
    title: CLI
    description: Export assets, inspect documents and run plugins using `sketchtool`.
    link: /cli
  - icon: /images/icons/48/icon-sketch.svg
    title: Sketch.app
    description: Integrate Sketch into your workflows with the `sketch://` URL scheme.
    link: /app
  - icon: /images/icons/48/icon-api-reference.svg
    title: Plugin API Reference
    description: View the index of all classes and methods in the Sketch JavaScript API.
    link: /reference/api
---

<h2 class="text-center-tablet-and-above">Getting started</h2>

### Run a script

Try the Sketch JavaScript API now, directly within Sketch. The code below shows a message at the bottom of your Sketch Document window saying _Hello Sketch 👋_.

<img src="/images/developer/menu-run-script.png"
     alt="Run script menu"
     width="235" />

1. Open a new or existing file in Sketch
2. Select _Run Script…_ from the _Plugins_ menu or use the keyboard shortcut `control + shift + k` to bring up the code editor
3. Paste in the code below
4. Select _Run_

```javascript
const sketch = require('sketch')

sketch.UI.message('Hello Sketch 👋')
```

### Publish a plugin

Use the Sketch Plugin Manager `skpm` to publish a new plugin or an update of an existing one. This adds your plugin automatically to the [Sketch Plugin Directory](https://github.com/sketchplugins/plugin-directory) for review before being listed on the [Sketch website](https://sketch.com/extensions/plugins).

### Export assets automatically

Create assets with a single command with the Sketch command-line interface `sketchtool`. Quickly generate files for all exportable layers, slices, artboards or entire pages in as many different resolutions as you want.

1. Open a new file in Sketch
2. Add a shape or anything else to the canvas
3. Save the file locally, e.g. _App.sketch_ on your Desktop
4. Open _Terminal_ and run the following command, which looks up the `sketchtool` bundled with Sketch and exports all pages of _App.sketch_.

This will generate an image file called _Page 1.png_ in the same folder you ran the command in.

```sh
SKETCH=$(mdfind kMDItemCFBundleIdentifier == 'com.bohemiancoding.sketch3' | head -n 1) && \
"$SKETCH/Contents/Resources/sketchtool/bin/sketchtool" export pages ~/Desktop/App.sketch
```
