import { DefinedPropertiesKey } from '../WrappedObject'
import { Group } from './Group'
import { Selection } from '../Selection'
import { Rectangle } from '../Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { DEFAULT_EXPORT_OPTIONS } from './Layer'

/**
 * Represents a Page in a Sketch document.
 */
export class Page extends Group {
  /**
   * Make a new page object.
   *
   * @param {MSPage} page The underlying model object from Sketch.
   */
  constructor(page = {}) {
    if (!page.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      page.sketchObject = Factory.createNative(Page)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(page)
  }

  /**
   * The layers that the user has selected.
   *
   * @return {Selection} A selection object representing the layers that the user has selected.
   */
  get selectedLayers() {
    return new Selection(this)
  }

  /**
   * Export this page, using the options supplied.
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
  export(options) {
    const merged = { ...DEFAULT_EXPORT_OPTIONS, ...options }
    const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
      merged
    )
    exporter.exportPage(this.sketchObject)
    return this
  }

  /**
   * Export this layer (and the ones below it), using the options supplied.
   *
   * @param {dictionary} options Options indicating which layers to export, which sizes and formats to use, etc.
   */
  exportArtboards(options) {
    const merged = { ...DEFAULT_EXPORT_OPTIONS, ...options }
    const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
      merged
    )
    exporter.exportLayers(this.sketchObject.artboards())
    return this
  }
}

Page.type = Types.Page
Page[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerClass(Page, MSPage)
