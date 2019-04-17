import { toArray, isNativeObject } from 'util'
import { WrappedObject, define, defineArray } from '../WrappedObject'
import { Page } from '../layers/Page'
import { Layer } from '../layers/Layer'
import { Selection } from './Selection'
import { getURLFromPath, isWrappedObject, isKindOfClass } from '../utils'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { StyleType, Style, TStyleType } from '../style/Style'
import { ColorAsset, GradientAsset } from '../assets'
import { SharedStyle } from './SharedStyle'
import { SymbolMaster } from '../layers/SymbolMaster'

type SaveModeType = 'Save' | 'SaveTo' | 'SaveAs'
export const SaveModeType: { [key in SaveModeType]: NSSaveOperationType } = {
  Save: NSSaveOperationType.NSSaveOperation,
  SaveTo: NSSaveOperationType.NSSaveToOperation,
  SaveAs: NSSaveOperationType.NSSaveAsOperation,
}

/* eslint-disable no-use-before-define, typescript/no-use-before-define */
export function getDocuments() {
  return toArray<MSDocument>(NSApp.orderedDocuments())
    .filter(doc => doc.isKindOfClass(MSDocument))
    .map(doc => Document.fromNative<MSDocument | MSDocumentData, Document>(doc))
}

export function getSelectedDocument() {
  let nativeDocument

  if (!nativeDocument) {
    const app = NSDocumentController.sharedDocumentController()
    nativeDocument = app.currentDocument() as MSDocument
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
    const documents = toArray<MSDocument>(NSApp.orderedDocuments()).filter(d =>
      d.isKindOfClass(MSDocument)
    )
    // eslint-disable-next-line prefer-destructuring
    nativeDocument = documents[0]
  }
  if (!nativeDocument) {
    return undefined
  }
  return Document.fromNative<MSDocument | MSDocumentData, Document>(
    nativeDocument
  )
}
/* eslint-enable */

function isLocalSharedStyle(libraryController: MSAssetLibraryController) {
  return (
    item: MSSharedStyle | SharedStyle | { style: Style; name: string }
  ) => {
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

function sharedStyleDescriptor(type: 'layer' | 'text') {
  const config = {
    localStyles: type === 'layer' ? 'layerStyles' : 'layerTextStyles',
    foreignStyles:
      type === 'layer' ? 'foreignLayerStyles' : 'foreignTextStyles',
    type: type === 'layer' ? 1 : 2,
  }

  return {
    get(this: Document) {
      if (!this.sketchObject) {
        return []
      }
      const documentData = this._getMSDocumentData()
      const localStyles = toArray<MSSharedStyle>(
        documentData[config.localStyles]().objects()
      )
      const foreignStyles = toArray<MSForeignStyle>(
        documentData[config.foreignStyles]()
      ).map(foreign => foreign.localSharedStyle())
      return foreignStyles
        .concat(localStyles)
        .map(x => wrapObject<SharedStyle>(x)!)
    },
    set(
      this: Document,
      sharedLayerStyles:
        | MSSharedStyle[]
        | SharedStyle[]
        | { style: Style; name: string }[]
    ) {
      if (this.isImmutable()) {
        return
      }
      const documentData = this._getMSDocumentData() as MSDocumentData
      const container = documentData.sharedObjectContainerOfType(config.type)

      // remove the existing shared styles
      container.removeAllSharedObjects()

      const libraryController = AppController.sharedInstance().librariesController()

      container.addSharedObjects(
        toArray<MSSharedStyle | SharedStyle | { style: Style; name: string }>(
          sharedLayerStyles
        )
          .filter(isLocalSharedStyle(libraryController))
          .map(item => {
            let sharedStyle

            if (isWrappedObject(item)) {
              sharedStyle = item.sketchObject
            } else if (isNativeObject(item)) {
              sharedStyle = item
            } else {
              const wrappedStyle = wrapObject(item.style, Types.Style)

              if (!wrappedStyle) {
                throw new Error('The style property is required')
              }

              sharedStyle = MSSharedStyle.alloc().initWithName_style(
                item.name,
                wrappedStyle.sketchObject
              )
            }
            return sharedStyle
          })
      )
    },
    insertItem(
      this: Document,
      item: MSSharedStyle | SharedStyle | { style: Style; name: string },
      index: number
    ) {
      if (this.isImmutable()) {
        return null
      }

      const documentData = this._getMSDocumentData() as MSDocumentData

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

        if (!wrappedStyle) {
          throw new Error('The style property is required')
        }

        sharedStyle = MSSharedStyle.alloc().initWithName_style(
          item.name,
          wrappedStyle.sketchObject
        )
      }

      const container = documentData.sharedObjectContainerOfType(config.type)

      container.insertSharedObject_atIndex(sharedStyle, realIndex)

      return new SharedStyle({ sketchObject: sharedStyle })
    },
    removeItem(this: Document, index: number) {
      if (this.isImmutable()) {
        return null
      }
      const documentData = this._getMSDocumentData() as MSDocumentData

      const realIndex = index - documentData[config.foreignStyles]().length

      if (realIndex < 0) {
        console.log('Cannot remove a foreign shared style')
        return null
      }

      const container = documentData.sharedObjectContainerOfType(config.type)

      const removed = container.objects()[realIndex]
      container.removeSharedObjectAtIndex(realIndex)
      return wrapObject<SharedStyle>(removed, Types.SharedStyle)!
    },
  }
}

/**
 * A Sketch document.
 */
export class Document extends WrappedObject<MSDocument | MSDocumentData> {
  static type = Types.Document
  static SaveMode = SaveModeType

  // override getting the id to make sure it's fine if we have an MSDocument
  @define<Document, string>({
    exportable: true,
    importable: false,
    get() {
      return String(this._getMSDocumentData().objectID())
    },
  })
  readonly id!: string

  @defineArray<Document, Page>({
    get() {
      if (!this.sketchObject) {
        return []
      }
      const pages = toArray<MSPage>(this.sketchObject.pages())
      return pages.map(page => Page.fromNative(page)!)
    },
    set(pages: Page[]) {
      if (this.isImmutable()) {
        return
      }

      const acc: { [id: string]: Page } = {}
      const pagesToRemove = this.pages.reduce(
        (prev: { [id: string]: Page }, p: Page) => {
          prev[p.id] = p.sketchObject // eslint-disable-line
          return prev
        },
        acc
      )

      toArray<any>(pages)
        .map(p => wrapObject(p, Types.Page))
        .forEach(page => {
          if (!page || !(page instanceof Page)) {
            return
          }
          page.parent = this // eslint-disable-line
          delete pagesToRemove[page.id]
        })

      // remove the previous pages
      const documentData = this._getMSDocumentData() as MSDocumentData
      documentData.removePages_detachInstances(
        Object.keys(pagesToRemove).map(id => pagesToRemove[id]),
        true
      )
    },
    insertItem(item, index) {
      if (this.isImmutable()) {
        return null
      }
      const wrapped = wrapObject(item, Types.Page)
      if (!wrapped || !(wrapped instanceof Page)) {
        return null
      }
      if (wrapped.sketchObject.documentData()) {
        wrapped.sketchObject
          .documentData()
          .removePages_detachInstances([wrapped.sketchObject], false)
      }
      const documentData = this._getMSDocumentData() as MSDocumentData
      documentData.insertPage_atIndex(wrapped.sketchObject, index)
      return wrapped
    },
    removeItem(index) {
      if (this.isImmutable()) {
        return null
      }
      const removed: MSPage = this.sketchObject.pages()[index]
      const documentData = this._getMSDocumentData() as MSDocumentData
      documentData.removePages_detachInstances([removed], true)
      return Page.fromNative(removed)
    },
  })
  pages!: Page[]

  /**
   * The layers that the user has selected in the currently selected page.
   *
   * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
   */
  @define<Document, Selection>({
    enumerable: false,
    exportable: false,
    importable: false,
    get() {
      return new Selection(this.selectedPage)
    },
    set(layers) {
      this.selectedPage.sketchObject.changeSelectionBySelectingLayers(
        (layers.layers || layers || []).map(l => {
          const wrapped = wrapObject<Layer>(l)
          if (!wrapped) {
            return null
          }
          return wrapped.sketchObject
        })
      )
    },
  })
  selectedLayers!: Selection

  /**
   * The current page that the user has selected.
   *
   * @return {Page} A page object representing the page that the user is currently viewing.
   */
  @define<Document, Page>({
    enumerable: false,
    exportable: false,
    importable: false,
    get() {
      return Page.fromNative(this.sketchObject.currentPage())!
    },
    set(page) {
      const wrapped = wrapObject(page, Types.Page)
      if (!wrapped || !(wrapped instanceof Page)) {
        return
      }
      if (
        wrapped.sketchObject.documentData() &&
        String(wrapped.sketchObject.documentData().objectID()) !== this.id
      ) {
        wrapped.sketchObject
          .documentData()
          .removePages_detachInstances([wrapped.sketchObject], false)
        wrapped.parent = this
      }
      wrapped.selected = true
    },
  })
  selectedPage!: Page

  @define<Document, string | undefined>({
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
      if (this.isImmutable() || !path) {
        return
      }
      const url = getURLFromPath(path)
      Object.defineProperty(this, '_tempURL', {
        enumerable: false,
        value: url,
      })
    },
  })
  path!: string

  private _tempURL?: NSURL

  /**
   * A list of document colors
   *
   * @return {Array<ColorAsset>} A mutable array of color assets defined in the document
   */
  @defineArray<Document, ColorAsset>({
    get() {
      if (!this.sketchObject) {
        return []
      }
      const documentData = this._getMSDocumentData()
      return toArray(documentData.assets().colorAssets()).map(
        a => ColorAsset.fromNative(a)!
      )
    },
    set(colors: ColorAsset[]) {
      if (this.isImmutable()) {
        return
      }
      const assets = (this._getMSDocumentData() as MSDocumentData).assets()
      assets.removeAllColorAssets()
      toArray(colors)
        .map(c => ColorAsset.from(c)!)
        .forEach(c => {
          assets.addColorAsset(c.sketchObject)
        })
    },
    insertItem(color, index) {
      if (this.isImmutable()) {
        return null
      }
      const assets = (this._getMSDocumentData() as MSDocumentData).assets()
      const wrapped = ColorAsset.from(color)!
      assets.insertColorAsset_atIndex(wrapped.sketchObject, index)
      return wrapped
    },
    removeItem(index) {
      if (this.isImmutable()) {
        return null
      }
      const assets = (this._getMSDocumentData() as MSDocumentData).assets()
      return ColorAsset.from(assets.removeColorAssetAtIndex(index))!
    },
  })
  colors!: ColorAsset[]

  /**
   * A list of document gradients
   *
   * @return {Array<GradientAsset>} A mutable array of gradient assets defined in the document
   */
  @defineArray<Document, GradientAsset>({
    get() {
      if (!this.sketchObject) {
        return []
      }
      const documentData = this._getMSDocumentData()
      return toArray(documentData.assets().gradientAssets()).map(
        a => GradientAsset.fromNative(a)!
      )
    },
    set(gradients: GradientAsset[]) {
      if (this.isImmutable()) {
        return
      }
      const assets = (this._getMSDocumentData() as MSDocumentData).assets()
      assets.removeAllGradientAssets()
      toArray(gradients)
        .map(c => GradientAsset.from(c)!)
        .forEach(c => {
          assets.addGradientAsset(c.sketchObject)
        })
    },
    insertItem(gradient, index) {
      if (this.isImmutable()) {
        return null
      }
      const assets = (this._getMSDocumentData() as MSDocumentData).assets()
      const wrapped = GradientAsset.from(gradient)!
      assets.insertGradientAsset_atIndex(wrapped.sketchObject, index)
      return wrapped
    },
    removeItem(index) {
      if (this.isImmutable()) {
        return null
      }
      const assets = (this._getMSDocumentData() as MSDocumentData).assets()
      return GradientAsset.from(assets.removeGradientAssetAtIndex(index))!
    },
  })
  gradients!: GradientAsset[]

  @defineArray<Document, SharedStyle>(sharedStyleDescriptor('layer'))
  sharedLayerStyles!: SharedStyle[]

  @defineArray<Document, SharedStyle>(sharedStyleDescriptor('text'))
  sharedTextStyles!: SharedStyle[]

  /**
   * Make a new document object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(document: { sketchObject?: MSDocument | MSDocumentData } = {}) {
    if (!document.sketchObject) {
      const app = NSDocumentController.sharedDocumentController()

      const error = MOPointer.alloc<NSError>().init()

      // eslint-disable-next-line no-param-reassign
      document.sketchObject = app.openUntitledDocumentAndDisplay_error(
        true,
        error
      ) as MSDocument

      if (error.value() !== null) {
        throw new Error(String(error.value()))
      }

      if (!document.sketchObject) {
        throw new Error('could not create a new Document')
      }
    }

    super(document)
  }

  _getMSDocument(): MSDocument {
    let msdocument = this.sketchObject
    if (msdocument && isKindOfClass(msdocument, MSDocumentData.class())) {
      // we only have an MSDocumentData instead of a MSDocument
      // let's try to get back to the MSDocument
      msdocument = msdocument.delegate() as MSDocument
    }

    return msdocument
  }

  _getMSDocumentData(): MSDocumentData | MSImmutableDocumentData {
    const msdocument = this.sketchObject

    if (
      msdocument &&
      (isKindOfClass(msdocument, MSDocumentData.class()) ||
        isKindOfClass(msdocument, MSImmutableDocumentData.class()))
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
   */
  getLayerWithID(layerId: string) {
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
  getLayersNamed(layerName: string) {
    // search all pages
    let filteredArray = NSArray.array()
    const loopPages = this.sketchObject.pages().objectEnumerator()
    let page = loopPages.nextObject()
    const predicate = NSPredicate.predicateWithFormat('name == %@', layerName)
    while (page) {
      const scope = page.children()
      filteredArray = filteredArray.arrayByAddingObjectsFromArray(
        scope.filteredArrayUsingPredicate(predicate)
      )
      page = loopPages.nextObject()
    }
    return toArray<MSLayer>(filteredArray).map(x => wrapObject<Layer>(x)!)
  }

  /**
   * Find the first symbol master in this document which has the given id.
   */
  getSymbolMasterWithID(symbolId: string) {
    const documentData = this._getMSDocumentData()
    const symbol = documentData.symbolWithID(symbolId)
    if (symbol) {
      return wrapObject(symbol)
    }
    return undefined
  }

  getSymbols() {
    const documentData = this._getMSDocumentData()
    return toArray<MSSymbolMaster>(documentData.allSymbols()).map(
      x => wrapObject<SymbolMaster>(x)!
    )
  }

  _getSharedStyleWithIdAndType(
    sharedId: string,
    type: TStyleType
  ): SharedStyle | undefined {
    const documentData = this._getMSDocumentData()
    const sharedStyle = documentData[
      type === StyleType.Layer ? 'layerStyleWithID' : 'textStyleWithID'
    ](sharedId)
    if (sharedStyle) {
      return wrapObject(sharedStyle)
    }
    return undefined
  }

  getSharedLayerStyleWithID(sharedId: string) {
    return this._getSharedStyleWithIdAndType(sharedId, StyleType.Layer)
  }

  getSharedLayerStyles() {
    console.warn(
      `\`document.getSharedLayerStyles()\` is deprecated. Use \`document.sharedLayerStyles\` instead.`
    )
    return this.sharedLayerStyles
  }

  getSharedTextStyleWithID(sharedId: string) {
    return this._getSharedStyleWithIdAndType(sharedId, StyleType.Text)
  }

  getSharedTextStyles() {
    console.warn(
      `\`document.getSharedTextStyles()\` is deprecated. Use \`document.sharedTextStyles\` instead.`
    )
    return this.sharedTextStyles
  }

  /**
   * Center the view of the document window on a given layer.
   *
   * @param {Layer} layer The layer to center on.
   */
  centerOnLayer(layer: Layer) {
    if (this.isImmutable()) {
      return
    }
    const wrappedLayer = wrapObject(layer)
    if (!wrappedLayer) {
      return
    }
    this._getMSDocument()
      .contentDrawView()
      .centerRect(wrappedLayer.sketchObject.rect())
  }

  static open(
    path?: string,
    callback?: (err: Error | null, document?: Document | null) => void
  ) {
    if (typeof path === 'function') {
      /* eslint-disable no-param-reassign */
      callback = path
      path = undefined
      /* eslint-enable */
    }

    const app = MSDocumentController.sharedDocumentController() as MSDocumentController

    if (!path) {
      const dialog = NSOpenPanel.openPanel()
      dialog.setAllowedFileTypes(['sketch'])
      dialog.setCanChooseFiles(true)
      dialog.setCanChooseDirectories(false)
      dialog.setAllowsMultipleSelection(false)
      const buttonClicked = dialog.runModal()
      const OkButton = 1
      if (buttonClicked != OkButton) {
        if (callback) callback(null, undefined)
        return undefined
      }

      const url = dialog.URLs()[0]
      const fiber = coscript.createFiber()

      app.openDocumentWithContentsOfURL_display_context_callback(
        url,
        true,
        coscript,
        (
          _document: MSDocument,
          documentWasAlreadyOpen: boolean,
          err?: NSException
        ) => {
          try {
            if (callback) {
              if (err && !err.isEqual(NSNull.null())) {
                callback(new Error(String(err.description())))
              } else {
                callback(
                  null,
                  Document.fromNative<MSDocument | MSDocumentData, Document>(
                    _document
                  )
                )
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
      return Document.getSelectedDocument()
    }

    let document
    const url = getURLFromPath(path)

    if (app.documentForURL(url)) {
      document = Document.fromNative<MSDocument | MSDocumentData, Document>(
        app.documentForURL(url) as MSDocument
      )
      if (callback) callback(null, document)
      return document
    }

    const error = MOPointer.alloc<NSError>().init()

    document = app.openDocumentWithContentsOfURL_display_error(url, true, error)

    if (error.value() !== null) {
      throw new Error(String(error.value()))
    }

    document = Document.fromNative<MSDocument | MSDocumentData, Document>(
      document
    )

    if (callback) callback(null, document)
    return document
  }

  save(
    path?: string,
    options?: {
      saveMode?: SaveModeType | NSSaveOperationType
      iKnowThatImOverwritingAFolder?: boolean
    },
    callback?: (err: Error | null, document: Document) => void
  ) {
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

    const url = path ? getURLFromPath(path) : this._tempURL!
    const { saveMode, iKnowThatImOverwritingAFolder } = options || {
      saveMode: SaveModeType.SaveAs,
      iKnowThatImOverwritingAFolder: false,
    }

    if (
      (!url.pathExtension() || !String(url.pathExtension())) &&
      !iKnowThatImOverwritingAFolder
    ) {
      throw new Error(
        'Attempting to overwrite a folder! If you really mean to do that, set the `iKnowThatImOverwritingAFolder` option to `true`'
      )
    }

    const fiber = coscript.createFiber()

    const nativeSaveMode: NSSaveOperationType =
      (saveMode && SaveModeType[saveMode]) || saveMode || SaveModeType.SaveAs
    const that = this
    msdocument.saveDocumentToURL_saveMode_context_callback(
      url!,
      nativeSaveMode,
      coscript,
      (err: NSException) => {
        try {
          if (callback) {
            if (err && !err.isEqual(NSNull.null())) {
              callback(new Error(String(err.description())), that)
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
}

Factory.registerClass(Document, MSDocumentData)
Factory.registerClass(Document, MSImmutableDocumentData)

// also register MSDocument if it exists
if (typeof MSDocument !== 'undefined') {
  Factory.registerClass(Document, MSDocument)
}
