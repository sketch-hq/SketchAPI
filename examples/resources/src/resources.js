// Resources, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/resources)
//
// This is a simple example, which illustrates how to bundle resource files
// along with your Plugin, and access them from your code.

// let's get a hold on the Sketch API
const sketch = require('sketch')

// eslint-disable-next-line no-restricted-syntax
export default function(context) {
  // We are going to make a new image layer using the PDF file we included in
  // our Resources folder. To do this, we'll need to fetch the full location
  // of the resource.
  // `context.plugin` contains information related to the current plugin such as its name
  // or identifier. It also contains a method to access its resources.
  const imageURL = context.plugin.urlForResourceNamed('World.pdf')

  // ### Making Some New Layers

  // We are passed a context variable when we're run.
  // We use this to get hold of the native Sketch document and wrap it.
  const document = sketch.fromNative(context.document)

  // Next we want to extract the selected page of the selected (front-most) document
  const page = document.selectedPage

  // Then we want to make a new group on the page, then put a new image layer into it, and set
  // that layer to use the resource image we located earlier
  //
  // We can make layers in any container using `new Group`, `new Image`, `new Text` and so on.
  // These functions all take a single parameter which is a dictionary of properties to set
  // on the new layer. Typically you will want to set the parent of the new layer, its frame, and perhaps
  // some other properties such as its name, style, and so on.
  // eslint-disable-next-line no-new
  new sketch.Group({
    parent: page,
    frame: {
      x: 0,
      y: 0,
      width: 200,
      height: 200,
    },
    layers: [
      // you can also define nested layers directly
      {
        type: sketch.Types.Image,
        frame: {
          x: 50,
          y: 50,
          width: 100,
          height: 100,
        },
        image: imageURL,
      },
    ],
  })
}

// ## Job Done
// And that's it.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
