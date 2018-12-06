import { isWrappedObject } from './utils'

export const DEFAULT_EXPORT_OPTIONS = {
  compact: false,
  'include-namespaces': false,
  compression: 1.0,
  'group-contents-only': false,
  overwriting: false,
  progressive: false,
  'save-for-web': false,
  'use-id-for-name': false,
  trimmed: false,
  output: '~/Documents/Sketch Exports',
}

/**
 * Export an object, using the options supplied.
 *
 * The object can be a layer, an array of layers, a page or an array of pages
 *
 * @discussion
 *
 * You can specify a lot of different options for the exporting.
 *
 * ### General Options
 *
 * - use-id-for-name : normally the exported files are given the same names as the layers they represent, but if this options is true, then the layer ids are used instead; defaults to false.
 * - output : this is the path of the folder where all exported files are placed; defaults to "~/Documents/Sketch Exports"
 * - overwriting : if true, the exporter will overwrite any existing files with new ones; defaults to false.
 * - trimmed: if true, any transparent space around the exported image will be trimmed; defaults to false.
 * - scales: this should be a list of numbers; it will determine the sizes at which the layers are exported; defaults to "1"
 * - formats: this should be a list of one or more of "png", "jpg", "svg", and "pdf"; defaults to "png" (see discussion below)
 *
 * ### SVG options
 * - compact : if exporting as SVG, this option makes the output more compact; defaults to false.
 * - include-namespaces : if exporting as SVG, this option includes extra attributes; defaults to false.
 *
 * ### PNG options
 * - save-for-web : if exporting a PNG, this option removes metadata such as the colour profile from the exported file; defaults to false.
 *
 * ### JPG options
 * - compression : if exporting a JPG, this option determines the level of compression, with 0 being the minimum, 1.0 the maximum; defaults to 1.0
 * - progressive : if exporting a JPG, this option makes it progressive; defaults to false.
 * - group-contents-only : false,
 *
 *
 * @param {dictionary} options Options indicating which sizes and formats to use, etc.
 *
 * @returns If an output path is not set, the data is returned
 */
export function exportObject(object, options) {
  if (!object) {
    throw new Error('No object provided to export')
  }
  let { formats } = options
  if (typeof formats === 'string') {
    formats = [formats]
  }
  let exportJSON = false
  if (formats) {
    const idx = formats.indexOf('json')
    if (idx != undefined) {
      delete formats[idx]
      exportJSON = true
    }
  }

  const merged = {
    ...DEFAULT_EXPORT_OPTIONS,
    ...options,
    formats,
  }
  console.log('Exporting with options')
  console.log(merged)
  const objectsToExport = (Array.isArray(object) ? object : [object]).map(
    o => (isWrappedObject(o) ? o.sketchObject : o)
  )
  if (!objectsToExport) {
    throw new Error('No objects provided to export')
  }

  function archiveNativeObject(nativeObject) {
    const archiver = MSJSONDataArchiver.new()
    archiver.archiveObjectIDs = true
    const aPtr = MOPointer.alloc().init()

    // if (nativeObject.documentData) {
    //   nativeObject = nativeObject.documentData()
    // }

    const obj = nativeObject.immutableModelObject
      ? nativeObject.immutableModelObject()
      : nativeObject
    archiver.archivedDataWithRootObject_error(obj, aPtr)
    if (aPtr.value()) {
      throw Error('Archive error')
    }
    const data = archiver.archivedData()
    return data
  }

  // Return data if no output directory specified
  if (!merged.output) {
    const firstObject = objectsToExport[0]
    if (exportJSON) {
      let data = archiveNativeObject(firstObject)
      const str = NSString.alloc().initWithData_encoding(
        data,
        NSUTF8StringEncoding
      )
      return JSON.parse(str)
    }
    // Input code for returning image data here...
    throw new Error('Return output is only support for the json format')

    // const exportRequest = MSExportRequest.exportRequestsFromExportableLayer(
    //   firstObject
    // ).firstObject()
    // exportRequest.format = format
    // exportRequest.scale = options.scale || 1.0
    // return MSExportManager.alloc()
    //   .init()
    //   .exportedDataForRequest(exportRequest)
  }

  // Save files to directory at options.output
  const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
    merged
  )

  function exportNativeLayers(layers) {
    exporter.exportLayers(layers)
  }

  function exportNativePage(page) {
    exporter.exportPage(page)
  }

  // Export all object json
  if (exportJSON) {
    const fm = NSFileManager.defaultManager()
    let directory = NSString.stringWithString(
      merged.output
    ).stringByExpandingTildeInPath()
    const comps = String(directory).split('/')
    const createdDir = fm.createDirectoryAtPath_withIntermediateDirectories_attributes_error(
      directory,
      true,
      null,
      null
    )

    objectsToExport.forEach(o => {
      const name =
        merged['use-id-for-name'] === true || !o.name ? o.objectID() : o.name()
      const pathComps = comps.slice()
      pathComps.push(`${name}.json`)
      const path = NSString.stringWithString(pathComps.join('/'))
      console.log('Preparing export to path: ' + path)
      // Don't overwrite unless desired
      if (!merged.overwriting && fm.fileExistsAtPath_isDirectory(path, null)) {
        return
      }
      console.log('Exporting to path: ' + path)
      const data = archiveNativeObject(o)
      if (data.writeToFile_atomically(path, true) != true) {
        throw new Error('Error writing json file')
      }
    })
  }

  // Other formats are by
  const pages = []
  const layers = []
  objectsToExport.forEach(o => {
    if (String(o.class()) === 'MSPage') {
      pages.push(o)
    } else {
      layers.push(o)
    }
  })

  pages.forEach(exportNativePage)
  exportNativeLayers(layers)
  return undefined
}
