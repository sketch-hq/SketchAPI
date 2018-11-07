// Selection Changed, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/selection-changed)
//
// This example plugin illustrates how to listen for the SelectionChanged action, and to
// do something whenever the user changes the selection.

// let's get a hold on the Sketch API
const sketch = require('sketch')

// we will also need a function to transform an NSArray into a proper JavaScript array
// the `util` package contains such a function so let's just use it.
const { toArray } = require('util')

// ### Defining The Action Handler
//
// In the manifest, we told Sketch that every time the `SelectionChanged` action finishes, we want it
// to run the onSelectionChanged handler in our `selection-changed.js` script file.
//
// So now we need to put some code into the `selection-changed.js` file to define that handler and make it do something useful.

export function onSelectionChanged(context) {
  // ### Extracting Context Information
  // Whenever sketch calls a handler in one of our plugins, it passes in a single context argument.
  // This dictionary is our connection with Sketch itself, and contains all the information that
  // we need to work out which document was open, perform whatever task we want to on it, and so on.
  //
  // When we're being called in response to an action occurring, the context will contain
  // an actionContext property with additional information about the action, so that's the first
  // thing that we want to retrieve:

  const action = context.actionContext

  // The context information for each action will be different. For the SelectionChanged action,
  // we are passed three interesting values: which document the selection has changed in,
  // what the old selection was, what the new selection is (or will be).

  // For our purposes, we can ignore the old selection, but we need the other two values.

  // let's wrap the native document
  const document = sketch.fromNative(action.document)
  // and transform the NSArray that is `newSelection` into a proper array
  const selection = toArray(action.newSelection)

  // Now for the meat of the plugin. What we want it to do is to show a small message at the bottom
  // of the canvas, showing how many items the user has selected. If there are no items, the message
  // area should be hidden.

  // So first let's get the selection count.
  const count = selection.length
  if (count === 0) {
    sketch.UI.message('No layers selected', document)
  } else {
    // If one or more items are selected, we want to show a message.
    // We check for a single item and handle that as a special case so that we can get the wording correct.

    const message =
      count === 1 ? '1 layer selected' : `${count} layers selected`

    sketch.UI.message(message, document)
  }
}
