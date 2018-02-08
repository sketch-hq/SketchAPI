// Exporting Examples, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/plugins.examples.exporter)
//
// This is an example plugin, which illustrates how to export layers, artboards and pages.

//
// ## Layout
//
// The first thing to do when making a plugin is to setup the folder structure, which should
// look something like this:
//
// ```
//    MyPlugin.sketchplugin/
//      Contents/
//        Sketch/
//          manifest.json
//          script.js
// ```
//
// ## Manifest
//
// The plugin needs a `manifest.json` file. This tells Sketch which menu items your plugin supplies,
// as well as giving some general information about the plugin such as its name, author, and so on.
//
// A single plugin can supply multiple menu items, and each one can execute different code,
// or they can all share code. In our case though, we just have one command.
//
//  ```json
// {
//     "name" : "Hello World!",
//     "identifier" : "com.sketchapp.examples.helloworld",
//     "version" : "1.0",
//     "description" : "Pretty much the smallest example Sketch Plugin you could have.",
//     "authorEmail" : "sam@sketchapp.com",
//     "author" : "Sam Deane",
//     "commands" : [
//     {
//       "script" : "hello-world.js",
//       "handler" : "onRun",
//       "shortcut" : "",
//       "name" : "Hello World!",
//       "identifier" : "helloworld"
//     }
//   ]
// }
// ```

// ## Code
// ### Defining The Run Handler
//
// In the manifest, we told Sketch that every time the "Hello World!" menu is selected,
// we want to execute  a javascript handler called `onRun`.
//
// So now we need to put some code into the `hello-world.js` file to implement that command.

function onExportLayers(context) {
  // Fetch the root Sketch object
  var sketch = context.api()

  // We can specify a lot of different options for the exporting.
  //
  // ### General Options
  //
  // - use-id-for-name : normally the exported files are given the same names as the layers they represent, but if this options is true, then the layer ids are used instead; defaults to false.
  // - output : this is the path of the folder where all exported files are placed; defaults to "~/Documents/Sketch Exports"
  // - overwriting : if true, the exporter will overwrite any existing files with new ones; defaults to false.
  // - trimmed: if true, any transparent space around the exported image will be trimmed; defaults to false.
  // - scales: this should be a list of numbers; it will determine the sizes at which the layers are exported; defaults to "1"
  // - formats: this should be a list of one or more of "png", "jpg", "svg", and "pdf"; defaults to "png" (see discussion below)
  //
  // ### SVG options
  //
  // - compact : if exporting as SVG, this option makes the output more compact; defaults to false.
  // - include-namespaces : if exporting as SVG, this option includes extra attributes; defaults to false.
  //
  // ### PNG options
  // - save-for-web : if exporting a PNG, this option removes metadata such as the colour profile from the exported file; defaults to false.
  //
  // ### JPG options
  // - compression : if exporting a JPG, this option determines the level of compression, with 0 being the minimum, 1.0 the maximum; defaults to 1.0
  // - progressive : if exporting a JPG, this option makes it progressive; defaults to false.
  // - group-contents-only : false,

  var options = { scales: '1, 2, 3', formats: 'png, jpg' }

  // Iterate over each layer in the selection, exporting it
  sketch.selectedDocument.selectedLayers.iterate(function(layer) {
    layer.export(options)
  })
}

function onExportPage(context) {
  // Fetch the root Sketch object
  var sketch = context.api()
  var options = { scales: '1, 2, 3', formats: 'png, jpg' }
  sketch.selectedDocument.selectedPage.export(options)
}

function onExportArtboards(context) {
  // Fetch the root Sketch object
  var sketch = context.api()
  var options = { scales: '1, 2, 3', formats: 'png, jpg' }
  sketch.selectedDocument.selectedPage.exportArtboards(options)
}

// And that's it. Job done.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
