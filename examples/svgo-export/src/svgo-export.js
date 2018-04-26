// SVGO Export, by Ale Muñoz
// This plugin compresses SVG assets using SVGO right after they're exported from Sketch.
// Source code -
// [GitHub](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/svgo-export)
// If you have questions, comments or any feedback, file an issue on Github or
// ping us at <developer@sketchapp.com>!

// we will need to call an executable
const { execSync } = require('@skpm/child_process')

// we will also need a function to transform an NSArray into a proper JavaScript array
// the `sketch-utils` package contains such a function so let's just use it.
// it was installed using `npm install --save sketch-utils`
const toArray = require('sketch-utils/to-array')

// allows us to access the Sketch UI to post messages
const UI = require('sketch/ui')

// The SVGO options are based on our experience working with Sketch's exported SVGs, and
// to the best of our knowledge they shouldn't effect the rendering of your assets, just reduce
// their size.
function optimizeFilesWithSVGO(svgPaths, svgoPath) {
  return execSync(
    `${svgoPath} --pretty --disable=convertShapeToPath --enable=removeTitle ` +
      '--enable=removeDesc --enable=removeDoctype --enable=removeEmptyAttrs ' +
      '--enable=removeUnknownsAndDefaults --enable=removeUnusedNS --enable=removeEditorsNSData ' +
      `"${svgPaths.join('" "')}"`
  )
}

// Utility function to play a given system sound.
function playSystemSound(sound) {
  // The command line tool `afplay` does what we need - we just have to call it with the full path
  // of a system sound.
  return execSync(`/usr/bin/afplay /System/Library/Sounds/${sound}.aiff`)
}

// ### Main Handler
// This is the handler we defined on `manifest.json` for the event (`ExportSlices`).
// It will be passed a `context` object as a parameter.
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
// In this particular example, there's only one item in the `exports` array, but if you've
// exported 100 assets it will be a bit more crowded. The `ExportSlices` event is
// only called once for the whole export operation, rather than being triggered 100 times.
export function onExportSlices(context) {
  // find all exported SVGs
  const exportRequests = toArray(context.actionContext.exports)
  const svgPaths = exportRequests
    .filter(currentExport => currentExport.request.format() == 'svg')
    .map(currentExport => String(currentExport.path))

  if (svgPaths.length === 0) {
    return
  }

  const targetDesc = `${svgPaths.length} SVG file${
    svgPaths.length == 1 ? '' : 's'
  }`
  UI.message(`Compressing ${targetDesc}`)

  // svgo is installed installed in the Resources folder of our plugin so we need to get it
  // from there
  const svgoPath = context.plugin
    .urlForResourceNamed('node_modules/svgo/bin/svgo')
    .path()
  const success = optimizeFilesWithSVGO(svgPaths, svgoPath)

  // Finally, make some noise to let the user know that we're done, and if everything went
  // according to plan. The compression can take a while if you're exporting many assets,
  // so it's a nice touch :-)
  const resultDesc = success ? 'Compressed' : 'Something went wrong compressing'
  UI.message(`${resultDesc} ${targetDesc}`)
  playSystemSound(success ? 'Glass' : 'Basso')
}
