---
title: Start extending Sketch…
permalink: /

redirect_from:
  - /guides/
  - /guides/third-party-apps-integrations/

layout: single-page
excerpt: Extend Sketch with a plugin or build integrations using the command-line interface or by reading and writing Sketch files directly in JSON
---

## [Plugins](/plugins)

Add to and customize the functionality of Sketch using JavaScript or Objective-C. Modify the document using Sketch's APIs, add your own user interface or integrate Sketch with your product or other applications.

[View documentation](/plugins)

## [CLI](/cli)

Use the `sketchtool` command-line interface to export assets, inspect documents and run plugins.

[View documentation](/cli)

## [Sketch file format](/file-format)

Generate, modify and process Sketch files directly with the open JSON file format.

[View documentation](/file-format)

## [Sketch.app](/app)

Integrate Sketch into your workflows with the `sketch://` URL scheme.

[View documentation](/app)

<hr style="height: 1px;
           border: 0;
           background: white;
           background-image: linear-gradient(
             to right,
             rgba(0,0,0,0),
             rgba(0,0,0,0.1) 10%,
             rgba(0,0,0,0.1) 90%,
             rgba(0,0,0,0)
           );
           margin-top: 4rem;" />

## Getting started

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

### Not a developer? Submit an idea

Although you'll need some programming experience to extend Sketch yourself, you can also [submit an idea](https://github.com/sketchplugins/plugin-requests/issues) to let us and the community know how you'd like to see Sketch extended.

Take a look at the [list of plugins](https://sketch.com/extensions/plugins) the community has already built.

### We're here to help

#### Developer Forum

Join our [developer forum](https://sketchplugins.com) to discuss your questions and code.

#### Examples

Explore some [sample plugins](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/) built by Sketch.

#### Support

[Get in touch](mailto:developer@sketch.com) with us.

### API Reference

View the Plugin [JavaScript API reference](/reference/api/).
