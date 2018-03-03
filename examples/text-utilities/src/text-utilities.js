// Text Utilities, by Johnnie Walker — Source code available at [GitHub](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/text-utilities)
//
// This plugin provides some debugging tools which annotate text layers to show where their baselines and bounding boxes are.

// The plugin illustrates a few techniques:
// - iterating over the selected layers
// - iterating over the position of each line in a text layer
// - creating new layers
// - defining multiple commands in a single plugin

// let's get a hold on the Sketch API
const sketch = require('sketch')

// ### Some Utilities
// First up, we want to define a few utility functions to help us in implementing the plugin commands.

// #### Processing Fragments
// The first of these takes a container, a list of line fragments, and an action function which it applies to each fragment.

function processFragments(container, fragments, action) {
  // We first move the container to the back of the document.
  container.moveToBack()

  // Then iterate through each fragment, executing the action.
  fragments.forEach((fragment, i) => action(container, fragment, i))

  // Finally, we adjust the container to enclose any new layers we've placed in it.
  container.adjustToFit()
}

// #### Adding Baselines
// Given a text layer and a list of its baselines, we want to be able to add a
// group at the same location and make new rectangles in the group to represent
// the baseline of each line of text.

function addBaselines(layer, fragments) {
  // First we make a new group to contain our baseline layers
  const container = new sketch.Group({
    parent: layer.parent,
    name: 'Baselines',
  })

  // The we process each fragment in turn
  processFragments(container, fragments, (group, fragment) => {
    // We make a rectangle that's just 0.5 pixels high, positioned to match
    // the location of the baseline
    const rect = layer.localRectToParentRect(fragment.rect)
    rect.y += rect.height - fragment.baselineOffset
    rect.height = 0.5

    // We make a new shape layer with this rectangle.
    const shape = new sketch.Shape({
      parent: group,
      frame: rect,
      style: {
        fills: ['#ff000090'],
        borders: [],
      },
    })
  })
}

// #### Adding Line Fragments
// Given a text layer and a list of its baselines, we want to be able to add a
// group at the same location and make new rectangles in the group to represent
// the lines of text.

function addLineFragments(layer, fragments) {
  // First we make a new group to contain our line fragments
  const container = new sketch.Group({
    parent: layer.parent,
    name: 'Line Fragments',
  })

  // The we process each fragment in turn
  processFragments(container, fragments, (group, fragment, index) => {
    // We alternate the color of the lines, so that we can tell them apart
    const color = index % 1 ? '#00ff00ff' : '#00ff0044'

    // We make a new shape layer with the rectangle of each line in turn
    const localRect = layer.localRectToParentRect(fragment.rect)
    const line = new sketch.Shape({
      parent: group,
      frame: localRect,
      style: {
        fills: [color],
        borders: [],
      },
    })
  })
}

// ### Defining The Run Handlers

// In the manifest, we listed the javascript function to call for each of our five commands.
// So now we need to implement these functions.

export function onAddLineFragments(context) {
  const document = sketch.fromNative(context.document)

  // Iterate over each text layer in the selection, calling our addLineFragments function
  document.selectedLayers.layers.forEach(layer => {
    if (layer.type === String(sketch.Types.Text)) {
      addLineFragments(layer, layer.fragments)
    }
  })
}

export function onAddBaselines(context) {
  const document = sketch.fromNative(context.document)

  // Iterate over each text layer in the selection, calling our addBaselines function
  document.selectedLayers.layers.forEach(layer => {
    if (layer.type === String(sketch.Types.Text)) {
      addBaselines(layer, layer.fragments)
    }
  })
}

export function onAddBoth(context) {
  const document = sketch.fromNative(context.document)

  // Iterate over each text layer in the selection, calling our addBaselines and addLineFragments functions
  document.selectedLayers.layers.forEach(layer => {
    if (layer.type === String(sketch.Types.Text)) {
      const { fragments } = layer
      addLineFragments(layer, fragments)
      addBaselines(layer, fragments)
    }
  })
}

export function onUseLegacyBaselines(context) {
  const document = sketch.fromNative(context.document)

  // Iterate over each text layer in the selection, turning off constant baselines.
  document.selectedLayers.layers.forEach(layer => {
    if (layer.type === String(sketch.Types.Text)) {
      layer.lineSpacing = sketch.Text.LineSpacing.variable
    }
  })
}

export function onUseConstantBaselines(context) {
  const document = sketch.fromNative(context.document)

  // Iterate over each text layer in the selection, turning on constant baselines.
  document.selectedLayers.layers.forEach(layer => {
    if (layer.type === String(sketch.Types.Text)) {
      layer.lineSpacing = sketch.Text.LineSpacing.constantBaseline
    }
  })
}

// ## Job Done
// And that's it.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
