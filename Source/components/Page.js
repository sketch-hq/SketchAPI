import { DefinedPropertiesKey } from '../WrappedObject'
import { Group } from './Group'
import { Selection } from '../Selection'
import { Rectangle } from '../Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { DEFAULT_EXPORT_OPTIONS } from './Layer'
import { wrapNativeObject, wrapObject } from '../wrapNativeObject'

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

  /* OVERRIDES */
  export(options) {
    const merged = { ...DEFAULT_EXPORT_OPTIONS, ...options }
    const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
      merged
    )
    exporter.exportPage(this.sketchObject)
    return this
  }

  // eslint-disable-next-line
  adjustToFit() {
    // obviously doesn't do anything
  }

  duplicate() {
    const object = this._object
    const duplicate = object.copy()
    object.documentData().insertPage_afterPage([duplicate], object)
    return wrapNativeObject(duplicate)
  }

  remove() {
    this._object
      .documentData()
      .removePages_detachInstances([this._object], true)
    return this
  }

  moveToFront() {
    // doesn't do anything
    return this
  }

  moveToBack() {
    // doesn't do anything
    return this
  }

  moveForward() {
    // doesn't do anything
    return this
  }

  moveBackward() {
    // doesn't do anything
    return this
  }
}

Page.type = Types.Page
Page[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerClass(Page, MSPage)

// override setting up the parent as it's needs to a be a Document
Page.define('parent', {
  exportable: false,
  get() {
    return wrapNativeObject(this._object.documentData())
  },
  set(document) {
    document = wrapObject(document) // eslint-disable-line

    if (this._object.documentData()) {
      this._object
        .documentData()
        .removePages_detachInstances([this._object], false)
    }

    document._object.addPage(this._object)
  },
})

Page.define('index', {
  exportable: false,
  get() {
    const ourLayer = this._object
    return parseInt(ourLayer.parentGroup().indexOfLayer_(ourLayer), 10)
  },
})

Page.define('selected', {
  get() {
    return this._object.documentData().currentPage() == this._object
  },

  set(value) {
    if (value) {
      this._object.documentData().setCurrentPage(this._object)
    } else {
      // let's just select the first page, not sure what else we could do
      this._object.documentData().setCurrentPageIndex(0)
    }
  },
})
