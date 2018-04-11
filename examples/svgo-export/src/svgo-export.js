// SVGO Export, by Ale Muñoz — Source code available at [GitHub](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/svgo-export)
//
// This Plugin compresses SVG assets using SVGO right after they're exported from Sketch.

// we will also need a function to transform an NSArray into a proper JavaScript array
// the `sketch-utils` package contains such a function so let's just use it.
// it was installed using `npm install --save sketch-utils`
const toArray = require('sketch-utils/to-array')

function getSVGOPath(context) {
  return context.plugin.urlForResourceNamed('node_modules/svgo/bin/svgo').path()
}

// ### Helper Functions

// Utility function to run a command line command with a set of arguments.
function runCommand(command, args) {
  const task = NSTask.alloc().init()
  task.setLaunchPath_(command)
  task.arguments = args
  task.launch()
  task.waitUntilExit()
  return task.terminationStatus() == 0
}

function ensureSVGOExecutable(svgoPath) {
  return runCommand('/bin/chmod', ['+x', svgoPath])
}

// This is the function where we call out to svgo to do the heavy lifting (i.e: compress all SVG files).
//
// The SVGO options are based on our experience working with Sketch's exported SVGs, and to the best of our knowledge
// they shouldn't effect the rendering of your assets, just reduce their size.
function optimizeFilesWithSVGO(svgoPath, filePaths) {
  const args = [
    '--disable=convertShapeToPath',
    '--enable=removeTitle',
    '--enable=removeDesc',
    '--enable=removeDoctype',
    '--enable=removeEmptyAttrs',
    '--enable=removeUnknownsAndDefaults',
    '--enable=removeUnusedNS',
    '--enable=removeEditorsNSData',
  ]
  filePaths.forEach(path => args.push(`"${path}"`))
  const fullCommand = `${svgoPath} ${args.join(' ')}`
  return runCommand('/bin/bash', ['-l', '-c', fullCommand])
}

// Utility function to play a given system sound.
function playSystemSound(sound) {
  // The command line tool `afplay` does what we need - we just have to call it with the full path
  // of a system sound.
  return runCommand('/usr/bin/afplay', [`/System/Library/Sounds/${sound}.aiff`])
}

// Utility function to remove duplicates on an Array.
function uniqueArray(arrArg) {
  return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos)
}

// when the plugin starts, ensure we can run the svgo binary
export function onStartup(context) {
  const svgoPath = getSVGOPath(context)
  ensureSVGOExecutable(svgoPath)
}

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
export function onExportSlices(context) {
  const exportRequests = toArray(context.actionContext.exports)

  // We'll take a look at the Array that contains all the exported assets…
  const pathsToCompress = exportRequests
    .filter(currentExport => currentExport.request.format() == 'svg')
    .map(
      currentExport => String(currentExport.path) // When we find an asset in SVG format, then we'll want to compress it
    )

  if (pathsToCompress.length > 0) {
    // Let's remove duplicates so that we only compress each one once.
    const paths = uniqueArray(pathsToCompress)
    let success = true

    const svgoPath = getSVGOPath(context)
    success = optimizeFilesWithSVGO(svgoPath, paths)

    // Finally, make some noise to let the user know that we're done, and if everything went according to plan.
    //
    // The compression can take a while if you're exporting many assets, so it's a nice touch :-)
    playSystemSound(success ? 'Glass' : 'Basso')
  }
}

// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
