import { isWrappedObject } from './utils'
import { Types } from './enums'

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
 */
export function exportObject(object, options) {
  const merged = { ...DEFAULT_EXPORT_OPTIONS, ...options }
  const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
    merged
  )

  function exportNativeLayers(layers) {
    exporter.exportLayers(layers)
  }

  function exportNativePage(page) {
    exporter.exportPage(page)
  }

  if (Array.isArray(object)) {
    const isArrayOfPages = isWrappedObject(object[0])
      ? object[0].type === Types.Page
      : String(object[0].class()) === 'MSPage'

    if (isArrayOfPages) {
      // support an array of pages
      object.forEach(o => {
        if (isWrappedObject(o)) {
          exportNativePage(o.sketchObject)
        } else {
          exportNativePage(o)
        }
      })
    } else {
      // support an array of layers
      exportNativeLayers(
        object.map(o => {
          if (isWrappedObject(o)) {
            return o.sketchObject
          }
          return o
        })
      )
    }
  } else if (isWrappedObject(object)) {
    // support a wrapped object
    if (object.type === Types.Page) {
      exportNativePage([object.sketchObject])
    } else {
      exportNativeLayers([object.sketchObject])
    }
  } else if (String(object.class()) === 'MSPage') {
    // support a native page
    exportNativePage(object)
  } else {
    // support a native layer
    exportNativeLayers([object])
  }
}
