---
title: Overview
section: plugins
chapter: JavaScript API
permalink: /plugins/javascript-api

redirect_from:
  - /plugins/javascript

order: 300
excerpt: The official JavaScript API is maintained by the Sketch team and allows to access and modify the Sketch document, provide data to Sketch users and offers some basic user interface integration
---

Plugin scripts can make full use of ES6 and the Sketch APIs. The official JavaScript API is maintained by the Sketch team and allows to access and modify the Sketch document, provide data to Sketch users and offers some basic user interface integration.

> **Feedback welcome:** Let us know what you think, [file an issue](https://github.com/BohemianCoding/SketchAPI/issues) for comments, suggestions and bug reports or send an email to [developer@sketch.com](mailto:developer@sketch.com).

## Capabilities

The JavaScript API covers different areas and comprises different packages.

### Document Object Model [`sketch/dom`](/reference/api/#sketch-components)

Access, modify and create documents – everything from colours to layers and symbols.

### Settings and state preservation [`sketch/settings`](/reference/api/#settings)

Save custom data for a layer or document and store user settings for your plugin.

### UI [`sketch/ui`](/reference/api/#ui)

Display notifications and get user input without building.

### Data Supplier [`sketch/data-supplier`](/reference/api/#data-supplier)

Provide image or text data right within Sketch. Data Suppliers integrate directly with the Sketch user interface to make content readily available throughout the design process.

### Fibers in [`sketch/async`](/reference/api/#async)

By default a plugin command's JavaScript context is destroyed after successful execution. For asynchronous operations the JavaScript API provides fibers as a method to prolong the lifetime of the JavaScript context.

### Import from and export layers to disk

[Import a file](/reference/api/#import) as a layer and [export objects](/reference/api/#export) to supported file formats.

## Related resources

- [Plugin bundle](/plugins/plugin-bundle)
- [Plugin manifest](/plugins/plugin-manifest)
- [JavaScript environment](/plugins/javascript-environment)
- [Internal API](/plugins/internal-api)
