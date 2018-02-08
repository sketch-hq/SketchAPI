// SVGO Export, by Ale Muñoz — Source code available at [GitHub](https://github.com/BohemianCoding/plugins.examples.svgo-export)
//
// This Plugin compresses SVG assets using SVGO right after they're exported from Sketch.

//
// ### Dependencies
//
// This plugin requires [svgo](https://github.com/svg/svgo) to be installed in `/usr/local/bin`

//
// ### Manifest
// This is the content of the `manifest.json` file for this Plugin. See how we're attaching the Plugin to the `ExportSlices.finish` event in `handlers.actions` by assigning a function name (`compressSVG`, defined in `svgo.js` to the action name we're interested in).
// ```json
// {
//     "name" : "SVGO Export",
//     "description" : "Uses SVGO to compress exported SVG assets.\nNote: it needs svgo installed somewhere on your path!",
//     "version" : "1.0",
//     "identifier" : "com.sketchapp.examples.svgo-export",
//     "author" : "Ale Muñoz",
//     "authorEmail" : "ale@sketchapp.com",
//     "commands" : [
//     {
//       "name" : "SVGO Export",
//       "identifier" : "svgo-export",
//       "script" : "svgo-export.js",
//       "handlers" : {
//         "actions" : {
//           "ExportSlices.finish": "onExportSlices"
//         }
//       },
//     }
//     ],
// }
// ```

// ### Main Handler
// This is the handler we defined on `manifest.json` for the event (`ExportSlices.finish`). It will be passed a `context` object as a parameter.
// `context.actionContext` is the action that has been triggered, and it looks like this:
// ```json
// {
//   "document": "<MSImmutableDocumentData: 0x7fbe8644fae0> (6125882F-2DBB-4E1C-856B-92C6761BA0E3)",
//   "exports": [{
//     "path": "/Users/ale/Desktop/tmp/svgo/Rectangle.svg",
//     "request": "<MSExportRequest: 0x7fbe86264300>"
//   }]
// }
// ```
//
// In this particular example, there's only one item in the `exports` array, but if you've exported 10.000 assets it will be a bit more crowded. The `ExportSlices.finish` event is only called once for the whole export operation, rather than being triggered 10.000 times.
function onExportSlices(context) {
  var exports = context.actionContext.exports,
    shouldCompressSVG = false,
    pathsToCompress = []

  // We'll take a look at the Array that contains all the exported assets…
  for (var i = 0; i < exports.count(); i++) {
    var currentExport = exports.objectAtIndex(i)
    // When we find an asset in SVG format, then we'll want to compress the folder it's been exported to.
    if (currentExport.request.format() == 'svg') {
      shouldCompressSVG = true
      var currentPath =
        '' + currentExport.path.stringByDeletingLastPathComponent() // the ("" + ) trick coerces the value into a JS string, otherwise the uniqueArray function won't sort the array properly
      pathsToCompress.push(currentPath)
    }
  }

  // Time to compress some folders
  if (shouldCompressSVG) {
    // Let's remove duplicates so that we only compress each one once.
    var paths = uniqueArray(pathsToCompress),
      success = true

    // Now we run through each one...
    for (var p = 0; p < paths.length; p++) {
      var path = paths[p]
      log('Compressing SVG files in ' + path)
      // ...doing the export, and log the result to the console
      if (optimizeFolderWithSVGO(paths[p])) {
        log('✅ compression ok')
      } else {
        log('❌ compression error')
        success = false
      }
    }

    // Finally, make some noise to let the user know that we're done, and if everything went according to plan.
    //
    // The compression can take a while if you're exporting many assets, so it's a nice touch :-)
    playSystemSound(success ? 'Glass' : 'Basso')
  }
}

// ### Helper Functions

// This is the function where we call out to svgo to do the heavy lifting (i.e: compress all SVG files in a given folder).
//
// Make sure you either have node and svgo installed in `/usr/local/bin` or adjust the path accordingly in the code.
//
// The SVGO options are based on our experience working with Sketch's exported SVGs, and to the best of our knowledge
// they shouldn't effect the rendering of your assets, just reduce their size.
function optimizeFolderWithSVGO(folderPath) {
  var args = [
    '-l',
    '-c',
    "svgo --folder='" +
      folderPath +
      "' --pretty --disable=convertShapeToPath --enable=removeTitle --enable=removeDesc --enable=removeDoctype --enable=removeEmptyAttrs --enable=removeUnknownsAndDefaults --enable=removeUnusedNS --enable=removeEditorsNSData",
  ]
  return runCommand('/bin/bash', args)
}

// Utility function to play a given system sound.
function playSystemSound(sound) {
  // The command line tool `afplay` does what we need - we just have to call it with the full path
  // of a system sound.
  runCommand('/usr/bin/afplay', ['/System/Library/Sounds/' + sound + '.aiff'])
}

// Utility function to remove duplicates on an Array.
function uniqueArray(arrArg) {
  return arrArg.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) == pos
  })
}

// Utility function to run a command line command with a set of arguments.
function runCommand(command, args) {
  var task = NSTask.alloc().init()
  task.launchPath = command
  task.arguments = args
  task.launch()
  task.waitUntilExit()
  return task.terminationStatus() == 0
}

// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
