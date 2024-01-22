import { toArray, isNativeObject } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Page } from '../layers/Page'
import { Selection } from './Selection'
import { getURLFromPath, isWrappedObject } from '../utils'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { StyleType } from '../style/Style'
import { ColorAsset, GradientAsset, Swatch } from '../assets'
import { Color } from '../style/Color'
import { SharedStyle } from './SharedStyle'

export const SaveModeType = {
  Save: NSSaveOperation,
  SaveTo: NSSaveToOperation,
  SaveAs: NSSaveAsOperation,
}

export const ColorSpaceMap = {
  Unmanaged: 0,
  sRGB: 1,
  P3: 2,
}

export const ColorSpace = {
  Unmanaged: 'Unmanaged',
  sRGB: 'sRGB',
  P3: 'P3',
}

export function getDocuments() {
  return toArray(NSApp.orderedDocuments())
    .filter((doc) => doc.isKindOfClass(MSDocument))
    .map(Document.fromNative.bind(Document))
}

export function getSelectedDocument() {
  let nativeDocument

  if (!nativeDocument) {
    const app = NSDocumentController.sharedDocumentController()
    nativeDocument = app.currentDocument()
  }

  // skpm will define context as a global so let's use that if available
  if (!nativeDocument && typeof context !== 'undefined') {
    /* eslint-disable no-undef */
    nativeDocument =
      context.actionContext && context.actionContext.document
        ? context.actionContext.document
        : context.document
    /* eslint-enable no-undef */
  }

  // if there is no current document, let's just try to pick the first one
  if (!nativeDocument) {
    const documents = toArray(
      NSApplication.sharedApplication().orderedDocuments()
    ).filter((d) => d.isKindOfClass(MSDocument.class()))
    // eslint-disable-next-line prefer-destructuring
    nativeDocument = documents[0]
  }
  if (!nativeDocument) {
    return undefined
  }
  return Document.fromNative(nativeDocument)
}
/* eslint-enable */

/**
 * A Sketch document.
 */
export class Document extends WrappedObject {
  /**
   * Make a new document object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(document = {}) {
    if (!document.sketchObject) {
      const app = NSDocumentController.sharedDocumentController()

      const error = MOPointer.alloc().init()

      // eslint-disable-next-line no-param-reassign
      document.sketchObject = app.openUntitledDocumentAndDisplay_error(
        true,
        error
      )

      if (error.value() !== null) {
        throw new Error(error.value())
      }

      if (!document.sketchObject) {
        throw new Error('could not create a new Document')
      }
    }

    super(document)
  }

  _getMSDocument() {
    let msdocument = this._object
    if (msdocument && msdocument.isKindOfClass(MSDocumentData)) {
      // we only have an MSDocumentData instead of a MSDocument
      // let's try to get back to the MSDocument
      msdocument = msdocument.delegate()
    }

    return msdocument
  }

  _getMSDocumentData() {
    const msdocument = this._object

    if (
      msdocument &&
      (msdocument.isKindOfClass(MSDocumentData) ||
        msdocument.isKindOfClass(MSImmutableDocumentData))
    ) {
      return msdocument
    }

    return msdocument.documentData()
  }

  static getDocuments() {
    return getDocuments()
  }

  static getSelectedDocument() {
    return getSelectedDocument()
  }

  /**
   * Find the first layer in this document which has the given id.
   *
   * @return {Layer} A layer object, if one was found.
   */
  getLayerWithID(layerId) {
    const documentData = this._getMSDocumentData()
    const layer = documentData.layerWithID(layerId)
    if (layer) {
      return wrapObject(layer)
    }
    return undefined
  }

  /**
   * Find all the layers in this document which has the given name.
   */
  getLayersNamed(layerName) {
    // search all pages
    let filteredArray = NSArray.array()
    const loopPages = this._object.pages().objectEnumerator()
    let page = loopPages.nextObject()
    const predicate = NSPredicate.predicateWithFormat('name == %@', layerName)
    while (page) {
      const scope = page.children()
      filteredArray = filteredArray.arrayByAddingObjectsFromArray(
        scope.filteredArrayUsingPredicate(predicate)
      )
      page = loopPages.nextObject()
    }
    return toArray(filteredArray).map(wrapObject)
  }

  /**
   * Find the first symbol master in this document which has the given id.
   *
   * @return {SymbolMaster} A symbol master object, if one was found.
   */
  getSymbolMasterWithID(symbolId) {
    const documentData = this._getMSDocumentData()
    const symbol = documentData.symbolWithID(symbolId)
    if (symbol) {
      return wrapObject(symbol)
    }
    return undefined
  }

  getSymbols() {
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allSymbols()).map(wrapObject)
  }

  _getSharedStyleWithIdAndType(sharedId, type) {
    const documentData = this._getMSDocumentData()
    const sharedStyle = documentData[
      type === StyleType.Layer ? 'layerStyleWithID' : 'textStyleWithID'
    ](sharedId)
    if (sharedStyle) {
      return wrapObject(sharedStyle)
    }
    return undefined
  }

  getSharedLayerStyleWithID(sharedId) {
    return this._getSharedStyleWithIdAndType(sharedId, StyleType.Layer)
  }

  getSharedLayerStyles() {
    console.warn(
      `\`document.getSharedLayerStyles()\` is deprecated. Use \`document.sharedLayerStyles\` instead.`
    )
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allLayerStyles()).map(wrapObject)
  }

  getSharedTextStyleWithID(sharedId) {
    return this._getSharedStyleWithIdAndType(sharedId, StyleType.Text)
  }

  getSharedTextStyles() {
    console.warn(
      `\`document.getSharedTextStyles()\` is deprecated. Use \`document.sharedTextStyles\` instead.`
    )
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allTextStyles()).map(wrapObject)
  }

  /**
   * Center the view of the document window on a given layer.
   *
   * @param {Layer} layer The layer to center on.
   */
  centerOnLayer(layer) {
    if (this.isImmutable()) {
      return
    }
    
    let relative = layer.frame
    let absoluteRect = relative.changeBasis({ from: layer.parent })
    this._object
      .contentDrawView()
      .centerRect_(absoluteRect.asCGRect())
  }

  static open(path, callback) {
    if (typeof path === 'function') {
      /* eslint-disable no-param-reassign */
      callback = path
      path = undefined
      /* eslint-enable */
    }

    const app = NSDocumentController.sharedDocumentController()

    if (!path) {
      const dialog = NSOpenPanel.openPanel()
      dialog.allowedFileTypes = ['sketch']
      dialog.canChooseFiles = true
      dialog.canChooseDirectories = false
      dialog.allowsMultipleSelection = false
      const buttonClicked = dialog.runModal()
      if (buttonClicked != NSOKButton) {
        if (callback) callback(null, undefined)
        return undefined
      }

      const url = dialog.URLs()[0]
      const fiber = coscript.createFiber()

      app.openDocumentWithContentsOfURL_display_context_callback(
        url,
        true,
        coscript,
        (_document, documentWasAlreadyOpen, err) => {
          try {
            if (callback) {
              if (err && !err.isEqual(NSNull.null())) {
                callback(new Error(err.description()))
              } else {
                callback(null, Document.fromNative(_document))
              }
            }
            fiber.cleanup()
          } catch (error) {
            fiber.cleanup()
            throw error
          }
        }
      )

      // return the current document to maintain backward compatibility
      // but that's not the right document...
      const document = app.currentDocument()
      return Document.fromNative(document)
    }

    let document
    const url = getURLFromPath(path)

    const error = MOPointer.alloc().init()

    document = app.openDocumentWithContentsOfURL_display_error(url, true, error)

    if (error.value() !== null) {
      throw new Error(error.value())
    }

    document = Document.fromNative(document)

    if (callback) callback(null, document)
    return document
  }

  save(path, options, callback) {
    /* eslint-disable no-param-reassign */
    if (typeof options === 'function') {
      callback = options
      options = {}
    } else if (typeof path === 'function') {
      callback = path
      options = {}
      path = undefined
    }
    /* eslint-enable */
    const msdocument = this._getMSDocument()
    const saveMethod = 'saveToURL_ofType_forSaveOperation_completionHandler'
    if (!msdocument || !msdocument[saveMethod]) {
      if (callback) callback(new Error('Cannot save this document'), this)
      return
    }
    if (!path && !this._tempURL) {
      try {
        msdocument.saveDocument(null)
        if (callback) callback(null, this)
      } catch (err) {
        if (callback) callback(err, this)
      }
      return
    }

    const url = getURLFromPath(path) || this._tempURL
    const { saveMode, iKnowThatImOverwritingAFolder } = options || {}

    if (
      (!url.pathExtension() || !String(url.pathExtension())) &&
      !iKnowThatImOverwritingAFolder
    ) {
      throw new Error(
        'Attempting to overwrite a folder! If you really mean to do that, set the `iKnowThatImOverwritingAFolder` option to `true`'
      )
    }

    const fiber = coscript.createFiber()

    const nativeSaveMode =
      SaveModeType[saveMode] || saveMode || NSSaveAsOperation
    const that = this
    msdocument.saveDocumentToURL_saveMode_context_callback(
      url,
      nativeSaveMode,
      coscript,
      (err) => {
        try {
          if (callback) {
            if (err && !err.isEqual(NSNull.null())) {
              callback(new Error(err.description()), that)
            } else {
              callback(null, that)
            }
          }
          fiber.cleanup()
        } catch (error) {
          fiber.cleanup()
          throw error
        }
      }
    )
  }

  close() {
    const msdocument = this._getMSDocument()

    if (!msdocument || !msdocument.close) {
      throw new Error('Cannot close this document')
    }

    msdocument.close()
  }

  changeColorSpace(colorSpace, convert = false) {
    if (this.isImmutable()) {
      return
    }

    const targetColorSpace = ColorSpaceMap[colorSpace]
    const currColorSpace = this._getMSDocumentData().colorSpace()

    if (typeof targetColorSpace === 'undefined') {
      throw new Error(`Invalid colorSpace ${colorSpace}`)
    }

    // If the current colorSpace is unmanaged then we always assign
    if (!convert || currColorSpace === ColorSpaceMap.Unmanaged) {
      this._getMSDocumentData().assignColorSpace(targetColorSpace)
    } else {
      this._getMSDocumentData().convertToColorSpace(targetColorSpace)
    }
  }
}

Document.type = Types.Document
Document[DefinedPropertiesKey] = {
  ...WrappedObject[DefinedPropertiesKey],
}
Factory.registerClass(Document, MSDocumentData)
Factory.registerClass(Document, MSImmutableDocumentData)

// also register MSDocument if it exists
if (typeof MSDocument !== 'undefined') {
  Factory.registerClass(Document, MSDocument)
}

Document.SaveMode = SaveModeType
Document.ColorSpace = ColorSpace

// override getting the id to make sure it's fine if we have an MSDocument
Document.define('id', {
  exportable: true,
  importable: false,
  get() {
    if (!this._object) {
      return undefined
    }
    if (!this._object.objectID) {
      return String(this._object.documentData().objectID())
    }
    return String(this._object.objectID())
  },
})

Document.define('colorSpace', {
  importable: true,
  exportable: true,
  get() {
    if (!this._object) {
      return undefined
    }
    const colorSpace = this._getMSDocumentData().colorSpace()
    return (
      Object.keys(ColorSpaceMap).find(
        (key) => ColorSpaceMap[key] === colorSpace
      ) || colorSpace
    )
  },
  set(colorSpace) {
    if (this.isImmutable()) {
      return
    }
    const targetColorSpace = ColorSpaceMap[colorSpace]
    if (typeof targetColorSpace === 'undefined') {
      throw new Error(`Invalid colorSpace ${colorSpace}`)
    }
    this._getMSDocumentData().assignColorSpace(targetColorSpace)
  },
})

Document.define('pages', {
  array: true,
  get() {
    if (!this._object) {
      return []
    }
    const pages = toArray(this._object.pages())
    return pages.map((page) => Page.fromNative(page))
  },
  set(pages) {
    if (this.isImmutable()) {
      return
    }

    const pagesToRemove = this.pages.reduce((prev, p) => {
      prev[p.id] = p.sketchObject // eslint-disable-line
      return prev
    }, {})

    toArray(pages)
      .map((p) => wrapObject(p, Types.Page))
      .forEach((page) => {
        page.parent = this // eslint-disable-line
        delete pagesToRemove[page.id]
      })

    // remove the previous pages
    this._getMSDocumentData().removePages_detachInstances(
      Object.keys(pagesToRemove).map((id) => pagesToRemove[id]),
      true
    )
  },
  insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined
    }
    const wrapped = wrapObject(item, Types.Page)
    if (wrapped._object.documentData()) {
      wrapped._object
        .documentData()
        .removePages_detachInstances([wrapped._object], false)
    }
    this._getMSDocumentData().insertPage_atIndex(wrapped._object, index)
    return wrapped
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return undefined
    }
    const removed = this._object.pages()[index]
    this._getMSDocumentData().removePages_detachInstances([removed], true)
    return Page.fromNative(removed)
  },
})

/**
 * The layers that the user has selected in the currently selected page.
 *
 * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
 */
Document.define('selectedLayers', {
  enumerable: false,
  exportable: false,
  importable: false,
  get() {
    return new Selection(this.selectedPage)
  },
  set(layers) {
    this.selectedPage.sketchObject.changeSelectionBySelectingLayers(
      (layers.layers || layers || []).map((l) => wrapObject(l).sketchObject)
    )
  },
})

/**
 * The current page that the user has selected.
 *
 * @return {Page} A page object representing the page that the user is currently viewing.
 */
Document.define('selectedPage', {
  enumerable: false,
  exportable: false,
  importable: false,
  get() {
    return Page.fromNative(this._object.currentPage())
  },
  set(page) {
    const wrapped = wrapObject(page, Types.Page)
    if (
      wrapped._object.documentData() &&
      String(wrapped._object.documentData().objectID()) !== this.id
    ) {
      wrapped._object
        .documentData()
        .removePages_detachInstances([wrapped._object], false)
      wrapped.parent = this
    }
    wrapped.selected = true
  },
})

Document.define('path', {
  get() {
    let url = this._tempURL

    if (!url) {
      const msDocument = this._getMSDocument()
      if (msDocument && msDocument.fileURL) {
        url = msDocument.fileURL()
      }
    }
    if (url) {
      return String(url.absoluteString()).replace('file://', '')
    }
    return undefined
  },

  set(path) {
    if (this.isImmutable()) {
      return
    }
    const url = getURLFromPath(path)
    Object.defineProperty(this, '_tempURL', {
      enumerable: false,
      value: url,
    })
  },
})

Document.define('name', {
  exportable: true,
  get() {
    if (this.path !== undefined) {
      return this.path.split('/').pop()
    } else {
      return 'Untitled.sketch'
    }
  },
})

/**
 * A list of document colors
 *
 * @return {Array<ColorAsset>} A mutable array of color assets defined in the document
 */
Document.define('colors', {
  array: true,
  get() {
    if (!this._object) {
      return []
    }
    const documentData = this._getMSDocumentData()
    return toArray(documentData.assets().colorAssets()).map((a) =>
      ColorAsset.fromNative(a)
    )
  },
  set(colors) {
    if (this.isImmutable()) {
      return
    }
    const assets = this._getMSDocumentData().assets()
    assets.removeAllColorAssets()
    toArray(colors)
      .map((c) => ColorAsset.from(c))
      .forEach((c) => {
        assets.addColorAsset(c._object)
      })
  },
  insertItem(color, index) {
    if (this.isImmutable()) {
      return undefined
    }
    const assets = this._getMSDocumentData().assets()
    const wrapped = ColorAsset.from(color)
    assets.insertColorAsset_atIndex(wrapped._object, index)
    return wrapped
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return undefined
    }
    const documentData = this._getMSDocumentData()
    return documentData.assets().removeColorAssetAtIndex(index)
  },
})

/**
 * A list of document gradients
 *
 * @return {Array<GradientAsset>} A mutable array of gradient assets defined in the document
 */
Document.define('gradients', {
  array: true,
  get() {
    if (!this._object) {
      return []
    }
    const documentData = this._getMSDocumentData()
    return toArray(documentData.assets().gradientAssets()).map((a) =>
      GradientAsset.fromNative(a)
    )
  },
  set(gradients) {
    if (this.isImmutable()) {
      return
    }
    const assets = this._getMSDocumentData().assets()
    assets.removeAllGradientAssets()
    toArray(gradients)
      .map((c) => GradientAsset.from(c))
      .forEach((c) => {
        assets.addGradientAsset(c._object)
      })
  },
  insertItem(gradient, index) {
    if (this.isImmutable()) {
      return undefined
    }
    const assets = this._getMSDocumentData().assets()
    const wrapped = GradientAsset.from(gradient)
    assets.insertGradientAsset_atIndex(wrapped._object, index)
    return wrapped
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return undefined
    }
    const documentData = this._getMSDocumentData()
    return documentData.assets().removeGradientAssetAtIndex(index)
  },
})

/**
 * A list of document swatches
 *
 * @return {Array<Swatch>} A mutable array of swatches defined in the document
 */
Document.define('swatches', {
  array: true,
  get() {
    if (!this._object) {
      return []
    }
    const assets = this._getMSDocumentData().sharedSwatches()
    return toArray(assets.swatches()).map((a) => Swatch.fromNative(a))
  },
  set(swatches) {
    if (this.isImmutable()) {
      return
    }
    const assets = this._getMSDocumentData().sharedSwatches()
    assets.removeSharedObjects(assets.swatches())
    toArray(swatches)
      .map((c) => Swatch.from(c))
      .forEach((c) => {
        const color = Color.from(c.color).toMSColor()
        assets.addSwatchWithName_color(c.name, color)
      })
  },
  insertItem(swatch) {
    if (this.isImmutable()) {
      return
    }
    const assets = this._getMSDocumentData().sharedSwatches()
    const wrapped = Swatch.from(swatch)
    const color = Color.from(wrapped.color).toMSColor()
    assets.addSwatchWithName_color_(wrapped.name, color)
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return
    }
    const assets = this._getMSDocumentData().sharedSwatches()
    const swatch = assets.swatchAt(index)
    assets.removeSharedObjects([swatch])
  },
})

function isLocalSharedStyle(libraryController) {
  return (item) => {
    if (isWrappedObject(item)) {
      return (
        !libraryController.libraryForShareableObject(item.sketchObject) &&
        !item.sketchObject.foreignObject()
      )
    }
    if (isNativeObject(item)) {
      return (
        !!libraryController.libraryForShareableObject(item) &&
        !!item.foreignObject()
      )
    }
    return true
  }
}

function sharedStyleDescriptor(type) {
  const config = {
    localStyles: type === 'layer' ? 'layerStyles' : 'layerTextStyles',
    foreignStyles:
      type === 'layer' ? 'foreignLayerStyles' : 'foreignTextStyles',
    type: type === 'layer' ? 1 : 2,
  }

  return {
    array: true,
    get() {
      if (!this._object) {
        return []
      }
      const documentData = this._getMSDocumentData()
      const localStyles = toArray(documentData[config.localStyles]().objects())
      const foreignStyles = toArray(
        documentData[config.foreignStyles]()
      ).map((foreign) => foreign.localSharedStyle())
      return foreignStyles.concat(localStyles).map(wrapObject)
    },
    set(sharedLayerStyles) {
      if (this.isImmutable()) {
        return
      }
      const documentData = this._getMSDocumentData()
      const container = documentData.sharedObjectContainerOfType(config.type)

      // remove the existing shared styles
      container.removeAllSharedObjects()

      const libraryController = AppController.sharedInstance().librariesController()

      container.addSharedObjects(
        toArray(sharedLayerStyles)
          .filter(isLocalSharedStyle(libraryController))
          .map((item) => {
            let sharedStyle

            if (isWrappedObject(item)) {
              sharedStyle = item.sketchObject
            } else if (isNativeObject(item)) {
              sharedStyle = item
            } else {
              const wrappedStyle = wrapObject(item.style, Types.Style)

              sharedStyle = MSSharedStyle.alloc().initWithName_style(
                item.name,
                wrappedStyle.sketchObject
              )
            }
            return sharedStyle
          })
      )
    },
    insertItem(item, index) {
      if (this.isImmutable()) {
        return undefined
      }

      const documentData = this._getMSDocumentData()

      const realIndex = Math.max(
        index - documentData[config.foreignStyles]().length,
        0
      )

      let sharedStyle

      if (isWrappedObject(item)) {
        sharedStyle = item.sketchObject
      } else if (isNativeObject(item)) {
        sharedStyle = item
      } else {
        const wrappedStyle = wrapObject(item.style, Types.Style)

        sharedStyle = MSSharedStyle.alloc().initWithName_style(
          item.name,
          wrappedStyle.sketchObject
        )
      }

      const container = documentData.sharedObjectContainerOfType(config.type)

      container.insertSharedObject_atIndex(sharedStyle, realIndex)

      return new SharedStyle({ sketchObject: sharedStyle })
    },
    removeItem(index) {
      if (this.isImmutable()) {
        return undefined
      }
      const documentData = this._getMSDocumentData()

      const realIndex = index - documentData[config.foreignStyles]().length

      if (realIndex < 0) {
        console.log('Cannot remove a foreign shared style')
        return undefined
      }

      const container = documentData.sharedObjectContainerOfType(config.type)

      const removed = container.objects()[realIndex]
      container.removeSharedObjectAtIndex(realIndex)
      return wrapObject(removed, Types.SharedStyle)
    },
  }
}

Document.define('sharedLayerStyles', sharedStyleDescriptor('layer'))
Document.define('sharedTextStyles', sharedStyleDescriptor('text'))
