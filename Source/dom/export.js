import { isWrappedObject } from './utils'
import { wrapNativeObject } from './wrapNativeObject'

let Buffer

export const DEFAULT_EXPORT_OPTIONS = {
  compact: false,
  'include-namespaces': false,
  compression: 1.0,
  'group-contents-only': false,
  overwriting: false,
  progressive: false,
  'save-for-web': false,
  'use-id-for-name': false,
  output: '~/Documents/Sketch Exports',
}

function getJSONData(nativeObject) {
  const archiver = MSJSONDataArchiver.new()
  archiver.archiveObjectIDs = true
  const aPtr = MOPointer.alloc().init()
  const obj = nativeObject.immutableModelObject
    ? nativeObject.immutableModelObject()
    : nativeObject
  archiver.archivedDataWithRootObject_error(obj, aPtr)
  if (aPtr.value()) {
    throw Error(`Couldn’t create the JSON string: ${aPtr.value()}`)
  }
  return archiver.archivedData()
}

function getJSONString(nativeObject) {
  const data = getJSONData(nativeObject)
  return String(
    NSString.alloc().initWithData_encoding(data, NSUTF8StringEncoding)
  )
}

function exportToJSONFile(nativeObjects, options) {
  const fm = NSFileManager.defaultManager()
  const directory = NSString.stringWithString(
    options.output
  ).stringByExpandingTildeInPath()
  const comps = String(directory).split('/')
  fm.createDirectoryAtPath_withIntermediateDirectories_attributes_error(
    directory,
    true,
    null,
    null
  )

  nativeObjects.forEach((o) => {
    const name =
      options['use-id-for-name'] === true || !o.name ? o.objectID() : o.name()
    const pathComps = comps.slice()
    pathComps.push(`${name}.json`)
    const url = NSURL.fileURLWithPath(pathComps.join('/'))
    const data = getJSONData(o)
    const writeOptions = options.overwriting
      ? 0
      : NSDataWritingWithoutOverwriting
    const ptr = MOPointer.new()
    data.writeToURL_options_error(url, writeOptions, ptr)
    if (ptr.value()) {
      throw new Error(`Error writing json file ${ptr.value()}`)
    }
  })
}

function exportToImageFile(nativeObjects, options) {
  // we need to class the objects by types as we need to do different things depending on it
  const pages = []
  const layers = []
  nativeObjects.forEach((o) => {
    if (o.isKindOfClass(MSPage)) {
      pages.push(o)
    } else {
      layers.push(o)
    }
  })

  const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
    options
  )

  // export the pages
  pages.forEach((page) => exporter.exportPage(page))

  // export the layers
  if (layers.length) {
    exporter.exportLayers(layers)
  }
}

function exportToBuffer(nativeObject, options) {
  const isPage = nativeObject.isKindOfClass(MSPage)

  const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
    options
  )
  const formats = exporter.formatsToExport()

  const rect = isPage ? exporter.rectToExportForPage(nativeObject) : CGRectNull

  const request = exporter.exportRequestsForLayer_inRect_exportFormats(
    nativeObject,
    rect,
    formats
  )[0]
  const colorSpace = NSColorSpace.colorSpaceForSketchColorSpace(
    request.immutableDocument().colorSpace()
  )
  const renderer = MSExporter.exporterForRequest_colorSpace_driver(
    request,
    colorSpace,
    exporter.driver()
  )

  const data = renderer.data()

  if (!Buffer) {
    // eslint-disable-next-line global-require, prefer-destructuring
    Buffer = require('buffer').Buffer
  }

  return Buffer.from(data)
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
 * - output : this is the path of the folder where all exported files are placed; defaults to "~/Documents/Sketch Exports". If falsey the data is returned immediately (only supported for json).
 * - overwriting : if true, the exporter will overwrite any existing files with new ones; defaults to false.
 * - trimmed: if true, any transparent space around the exported image will be trimmed; defaults to false.
 * - scales: this should be a list of numbers; it will determine the sizes at which the layers are exported; defaults to "1"
 * - formats: this should be a list of one or more of "png", "jpg", "svg", "json", and "pdf"; defaults to "png" (see discussion below)
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
  // Validate the provided objects
  const objectsToExport = (Array.isArray(object) ? object : [object])
    .map((o) => (isWrappedObject(o) ? o.sketchObject : o))
    .filter((o) => o)

  if (!objectsToExport.length) {
    throw new Error('No objects provided to export')
  }

  // Validate export formats
  let formats = (options || {}).formats || []
  if (typeof formats === 'string') {
    formats = formats.split(',')
  }

  formats = formats.map((format) => format.trim())

  // if we don't have any format, we default to png
  if (formats.length === 0) {
    formats.push('png')
  }

  const shouldExportToJSON = formats.indexOf('json') !== -1
  const exportImagesFormat = formats.filter((format) => format !== 'json')

  const optionsWithDefaults = {
    ...DEFAULT_EXPORT_OPTIONS,
    ...options,
    ...{ formats: exportImagesFormat.join(',') },
  }

  // Return data if no output directory specified
  if (!optionsWithDefaults.output) {
    if (formats.length > 1) {
      throw new Error('Can only return 1 format with no output type')
    }
    const format = formats[0]
    const exported = objectsToExport.map((nativeObject) => {
      if (format === 'json') {
        const str = getJSONString(nativeObject)
        return JSON.parse(str)
      }

      return exportToBuffer(nativeObject, optionsWithDefaults)
    })
    // Return the same format that was provided
    return Array.isArray(object) ? exported : exported[0]
  }

  if (shouldExportToJSON) {
    exportToJSONFile(objectsToExport, optionsWithDefaults)
  }

  if (exportImagesFormat.length) {
    exportToImageFile(objectsToExport, optionsWithDefaults)
  }
  return true
}

/**
 * Create an object from the exported Sketch JSON.
 *
 * @param {dictionary} sketchJSON The exported Sketch JSON data
 * @param {number} version The file version that the Sketch JSON
 * was exported from. Defaults to the current version
 * @returns {WrappedObject} A javascript object (subclass of WrappedObject),
 * which represents the restored Sketch object.
 */
export function objectFromJSON(sketchJSON, version) {
  const v = version || MSArchiveHeader.metadataForNewHeader().version
  const ptr = MOPointer.new()
  let object = (
    MSJSONDictionaryUnarchiver.unarchiveObjectFromDictionary_asVersion_corruptionDetected_error ||
    MSJSONDictionaryUnarchiver.unarchivedObjectFromDictionary_asVersion_corruptionDetected_error
  )(sketchJSON, v, null, ptr)
  if (ptr.value()) {
    throw new Error(`Failed to create object from sketch JSON: ${ptr.value()}`)
  }
  if (object.newMutableCounterpart) {
    object = object.newMutableCounterpart()
  }
  return wrapNativeObject(object)
}
