---
title: Start extending Sketch…
permalink: /
---

## [Sketch.app](/guides/third-party-apps-integrations)

Integrate Sketch into your workflows with the `sketch://` URL scheme.

[View documentation](/guides/third-party-apps-integrations)

## [Plugin](/guides)

Add to and customize the functionality of Sketch using JavaScript or Objective-C.

[View documentation](/guides)

## [CLI](/guides/sketchtool)

Use the `sketchtool` command line interface to export assets, inspect documents and run plugins.

[View documentation](/guides/sketchtool)

## [Sketch file format](/guides/third-party-apps-integrations)

Generate, modify and process Sketch files directly with the open JSON file format.

[View documentation](/guides/third-party-apps-integrations)

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
     width="235"
     style="max-width: 100%;" />

1. Open a new or existing file in Sketch
1. Select _Run Script…_ from the _Plugins_ menu or use the keyboard shortcut `control + shift + k` to bring up the code editor
1. Paste in the code below
1. Select _Run_

```javascript
const sketch = require('sketch')

sketch.UI.message('Hello Sketch 👋')
```

### Publish a plugin

TBD

### Export assets automatically

TBD

### Not a developer? Submit an idea

Although you'll need some programming experience to extend Sketch yourself, you can alternatively [submit an idea](https://github.com/sketchplugins/plugin-requests/issues) to let us and the community know how you'd like to see Sketch extended.

Take a look at the [list of plugins](https://sketch.com/extensions/plugins) the community has already built.

### We're here to help

#### Developer Forum

Join our [developer forum](https://sketchplugins.com) to discuss your questions and code.

#### Examples

Explore some [sample plugins](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/) built by Sketch.

#### Support

[Get in touch](mailto:developer@sketchapp.com) with us.
