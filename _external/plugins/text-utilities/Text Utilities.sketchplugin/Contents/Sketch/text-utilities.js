// Text Utilities, by Johnnie Walker — Source code available at [GitHub](https://github.com/BohemianCoding/plugins.examples.text-utilities)
//
// This plugin provides some debugging tools which annotate text layers to show where their baselines and bounding boxes are.

// The plugin illustrates a few techniques:
// - iterating over the selected layers
// - iterating over the position of each line in a text layer
// - creating new layers
// - defining multiple commands in a single plugin
//
// ## Layout Of The Plugin
//
// The first thing to do when making a Plugin is to setup the folder structure, which should
// look something like this:
//
// ```
//    MyPlugin.sketchplugin/
//      Contents/
//        Sketch/
//          manifest.json
//          script.js
//        Resources/
//          a-resource.png
//          other-resource.txt
// ```
//
// For a Plugin with bundled resources, you want to add a `Resources` folder as well
// as the normal `Sketch` folder, and you want to drop into it any resources that your
// script needs to access. These can be files of any type (but obviously keep in mind
// that they contribute to the overall size of the Plugin, so your users won't thank
// you if you put too much stuff in there).
//
// ## Manifest
//
// The Plugin needs a `manifest.json` file. This tells Sketch which menu items your Plugin supplies,
// as well as giving some general information about the Plugin such as its name, author, and so on.
//
// As this Plugin illustrates, we can supply multiple menu items, and each one can execute a different command.
//
//  ```json
// {
//   "author" : "Johnnie Walker",
//   "commands" : [
//     {
//       "script" : "text-utilities.js",
//       "handler" : "onAddBoth",
//       "name" : "Add Line Fragments & Baselines",
//       "identifier" : "fragmentsandbaselines"
//     },
//     {
//       "script" : "text-utilities.js",
//       "handler" : "onAddBaselines",
//       "name" : "Add Baselines",
//       "identifier" : "baselines"
//     },
//     {
//       "script" : "text-utilities.js",
//       "handler" : "onAddLineFragments",
//       "name" : "Add Line Fragments",
//       "identifier" : "fragments"
//     },
//     {
//       "script" : "text-utilities.js",
//       "handler" : "onUseLegacyBaselines",
//       "name" : "Use legacy typesetter",
//       "identifier" : "legacyTypesetter"
//     },
//     {
//       "script" : "text-utilities.js",
//       "handler" : "onUseConstantBaselines",
//       "name" : "Use constant baselines typesetter",
//       "identifier" : "constantBaselinesTypesetter"
//     },
//   ],
//   "menu": {
//     "items": [
//       "baselines",
//       "fragments",
//       "fragmentsandbaselines",
//       "-",
//       "legacyTypesetter",
//       "constantBaselinesTypesetter",
//     ],
//   },
//   "identifier" : "com.sketchapp.examples.text-utilities",
//   "version" : "2.0",
//   "description" : "Utilities for text layers",
//   "authorEmail" : "developer@sketchapp.com",
//   "name" : "Text Layer Utilities"
// }
// ```

// ## Code

// ### Some Utilities
// First up, we want to define a few utility functions to help us in implementing the plugin commands.
//
// #### Processing Fragments
// The first of these takes a container, a list of line fragments, and an action function which it applies to each fragment.

function processFragments(sketch, container, fragments, action) {
  // We first move the container to the back of the document.
  container.moveToBack()

  // Then iterate through each fragment, executing the action.
  for (var i in fragments) {
    action(sketch, container, fragments[i], i)
  }

  // Finally, we adjust the container to enclose any new layers we've placed in it.
  container.adjustToFit()
}

// #### Adding Baselines
// Given a text layer and a list of its baselines, we want to be able to add a
// group at the same location and make new rectangles in the group to represent
// the baseline of each line of text.

function addBaselines(sketch, layer, fragments) {
  // First we make a new group to contain our baseline layers
  var container = layer.container.newGroup({ name: 'Baselines' })

  // The we process each fragment in turn
  processFragments(sketch, container, fragments, function(
    sketch,
    group,
    fragment,
    index
  ) {
    // We make a rectangle that's just 0.5 pixels high, positioned to match
    // the location of the baseline
    var rect = layer.localRectToParentRect(fragment.rect)
    rect.y += rect.height - fragment.baselineOffset
    rect.height = 0.5

    // We make a new shape layer with this rectangle.
    group.newShape({ frame: rect, fills: ['#ff000090'], borders: [] })
  })
}

// #### Adding Line Fragments
// Given a text layer and a list of its baselines, we want to be able to add a
// group at the same location and make new rectangles in the group to represent
// the lines of text.

function addLineFragments(sketch, layer, fragments) {
  // First we make a new group to contain our line fragments
  var container = layer.container.newGroup({ name: 'Line Fragments' })

  // The we process each fragment in turn
  processFragments(sketch, container, fragments, function(
    sketch,
    group,
    fragment,
    index
  ) {
    // We alternate the color of the lines, so that we can tell them apart
    var color = index & 1 ? '#00ff00ff' : '#00ff0044'

    // We make a new shape layer with the rectangle of each line in turn
    var localRect = layer.localRectToParentRect(fragment.rect)
    var line = group.newShape({ frame: localRect, fills: [color], borders: [] })
  })
}

// ### Defining The Run Handlers

// In the manifest, we listed the javascript function to call for each of our five commands.
// So now we need to implement these functions.

function onAddLineFragments(context) {
  // Fetch the root Sketch object
  var sketch = context.api()

  // Iterate over each text layer in the selection, calling our addLineFragments function
  sketch.selectedDocument.selectedLayers.iterateWithFilter('isText', function(
    layer
  ) {
    addLineFragments(sketch, layer, layer.fragments)
  })
}

function onAddBaselines(context) {
  // Fetch the root Sketch object
  var sketch = context.api()

  // Iterate over each text layer in the selection, calling our addBaselines function
  sketch.selectedDocument.selectedLayers.iterateWithFilter('isText', function(
    layer
  ) {
    addBaselines(sketch, layer, layer.fragments)
  })
}

function onAddBoth(context) {
  // Fetch the root Sketch object
  var sketch = context.api()

  // Iterate over each text layer in the selection, calling our addBaselines and addLineFragments functions
  sketch.selectedDocument.selectedLayers.iterateWithFilter('isText', function(
    layer
  ) {
    var lineFragments = layer.fragments
    addBaselines(sketch, layer, lineFragments)
    addLineFragments(sketch, layer, lineFragments)
  })
}

function onUseLegacyBaselines(context) {
  // Fetch the root Sketch object
  var sketch = context.api()

  // Iterate over each text layer in the selection, turning off constant baselines.
  sketch.selectedDocument.selectedLayers.iterateWithFilter('isText', function(
    layer
  ) {
    layer.useConstantBaselines = false
  })
}

function onUseConstantBaselines(context) {
  // Fetch the root Sketch object
  var sketch = context.api()

  // Iterate over each text layer in the selection, turning on constant baselines.
  sketch.selectedDocument.selectedLayers.iterateWithFilter('isText', function(
    layer
  ) {
    layer.useConstantBaselines = true
  })
}

// ## Job Done
// And that's it.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
