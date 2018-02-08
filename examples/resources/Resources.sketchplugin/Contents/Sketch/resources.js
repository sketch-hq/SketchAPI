// Resources, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/plugins.examples.resources)
//
// This is a simple example, which illustrates how to bundle resource files
// along with your Plugin, and access them from your code.

//
// ## Layout
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
// A single Plugin can supply multiple menu items, and each one can execute different code,
// or they can all share code. In our case though, we just have one command.
//
//  ```json
// {
//     "name" : "Resources",
//     "identifier" : "com.sketchapp.examples.resources",
//     "version" : "1.0",
//     "description" : "An example of a Plugin which contains bundled resources (an image, in this case).",
//     "authorEmail" : "sam@sketchapp.com",
//     "author" : "Sam Deane",
//     "commands" : [
//     {
//       "script" : "resources.js",
//       "handler" : "onRun",
//       "shortcut" : "",
//       "name" : "Bundled Resources Example",
//       "identifier" : "resources"
//     }
//   ]
// }
// ```

// ## Code
// ### Defining The Run Handler

// In the manifest, we told Sketch that every time the "Bundled Resources Example" menu is selected,
// we want to execute a javascript handler called `onRun` in the `resources.js` file.

// So now we need to put some code into the `resources.js` file to implement that command.

function onRun(context) {
  // ### Using The Sketch API
  // We are passed a context variable when we're run.
  // This is a dictionary containing a reference to the document,
  // the current selection, the Plugin that is running, and more.
  //
  // One of the things that the context contains is a Sketch `api()' function,
  // which when called gives you back a javascript object that you can
  // use to interact with Sketch in a clean way.
  //
  // Note: *There are ways of interacting directly with the raw Sketch objects instead,
  // using the other items that the context contains. The problem is that these objects
  // tend to change when we update Sketch, which can make your Plugin scripts
  // break easily. By going through the Sketch API instead, you gain an extra level of protection
  // against changes to Sketch. We fix the API when an underlying change to Sketch
  // would have broken it - so it's the recommended way to work if you can.*

  // So first, let's fetch the root API object. The object we're given back represents the
  // Sketch application itself, so we'll put it into a variable called `sketch`.
  var sketch = context.api()
  sketch.log('Sketch version is ' + sketch.version)
  sketch.log('Sketch API version is ' + sketch.api_version)

  // ### Finding Our Embedded Resource

  // We are going to make a new image layer using the PDF file we included in
  // our Resources folder. To do this, we'll need to fetch the full location
  // of the resource.
  var imageURL = sketch.resourceNamed('World.pdf')

  // ### Making Some New Layers

  // Next we want to extract the selected page of the selected (front-most) document
  var document = sketch.selectedDocument
  var page = document.selectedPage

  // Then we want to make a new group on the page, then put a new image layer into it, and set
  // that layer to use the resource image we located earlier
  //
  // We can make layers in any container using `newGroup`, `newImage`, `newText` and so on.
  // These functions all take a single parameter which is a dictionary of properties to set
  // on the new layer. Typically you will want to set the frame of the new layer, and perhaps
  // some other properties such as its name, style, and so on.
  var group = page.newGroup({ frame: new sketch.Rectangle(0, 0, 200, 200) })
  var image = group.newImage({
    frame: new sketch.Rectangle(50, 50, 100, 100),
    imageURL: imageURL,
  })

  // Finally, lets also make a text layer with a message to the world on it...
  // In this case we don't supply the frame of the layer to the `newText` function, since we want to first
  // adjust the font size, alignment and set it to be fixedWidth. Only once we've done these do we change
  // the frame.
  var text = group.newText({
    fixedWidth: true,
    alignment: NSTextAlignmentCenter,
    systemFontSize: 24,
    text: 'Hello World',
  })
  text.frame = new sketch.Rectangle(0, 160, 200, 30) // adjust the frame last, after the font/size/alignment etc has been set up
}

// ## Job Done
// And that's it.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
