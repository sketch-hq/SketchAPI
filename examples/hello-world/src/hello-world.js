// Hello World, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/hello-world)
//
// This is an extremely simple plugin example, which illustrates how to add a menu command to the Plugins menu
// and execute some code when it is selected.

// let's get a hold on the Sketch API
const sketch = require('sketch')

export default function(context) {
  // We are passed a context variable when we're run.
  // We use this to get hold of the native Sketch document and wrap it.
  const document = sketch.fromNative(context.document)

  // Next we want to extract the selected page of the selected (front-most) document
  const page = document.selectedPage

  // Now let's create a new text layer, and a traditional value...
  const layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: 'Hello World',
  })

  // ...resize it so that the text just fits...
  layer.adjustToFit()

  // Finally, lets center the view on our new layer
  // so that we can see where it is.
  document.centerOnLayer(layer)
}

// And that's it. Job done.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <mail@sketchapp.com>!
