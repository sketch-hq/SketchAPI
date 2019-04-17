import { toArray } from 'util'
import { define, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { StyleType, Style, TStyleType } from '../style/Style'
import { Document } from './Document'
import { StyledLayer } from '../layers/StyledLayer'

/**
 * A Sketch shared style, either Text style or Layer Style.
 */
export class SharedStyle extends WrappedObject<MSSharedStyle> {
  static type = Types.SharedStyle
  static StyleType = StyleType

  @define<SharedStyle, TStyleType>({
    get() {
      return this.style.styleType
    },
  })
  readonly styleType!: TStyleType

  @define<SharedStyle, string>({
    get() {
      return String(this.sketchObject.name())
    },
    set(name) {
      this.sketchObject.setName(name)
    },
  })
  name!: string

  @define<SharedStyle, Style>({
    get() {
      return wrapObject<Style>(this.sketchObject.style())!
    },
    set(newStyle) {
      if (this.sketchObject.isForeign()) {
        throw new Error(
          'Can not set the style of a shared style coming from a library'
        )
      }
      const wrapped = wrapObject(newStyle)
      if (!wrapped || !(wrapped instanceof Style)) {
        throw new Error('need to pass a proper style')
      }
      this.sketchObject.updateToMatch(wrapped.sketchObject)
    },
  })
  style!: Style

  /**
   * Make a new symbol master.
   */
  constructor(master: { sketchObject?: MSSharedStyle } = {}) {
    if (!master.sketchObject) {
      throw new Error(
        `Cannot create a SharedStyle directly, use \`document.sharedLayerStyles.push({ name, style })\` (or \`document.sharedTextStyles\`) instead.`
      )
    }
    super(master)
  }

  static fromStyle({
    name,
    style,
    document,
  }: {
    name: string
    style: Style
    document: Document
  }) {
    const wrappedDocument = wrapObject(document)
    if (
      !wrappedDocument ||
      !(wrappedDocument instanceof Document) ||
      wrappedDocument.isImmutable()
    ) {
      throw new Error('the `document` field is required')
    }
    const documentData = wrappedDocument._getMSDocumentData() as MSDocumentData
    const wrappedStyle = wrapObject(style, Types.Style)

    if (!wrappedStyle || !(wrappedStyle instanceof Style)) {
      throw new Error('the `style` field is required')
    }

    const sharedStyle = SharedStyle.fromNative<MSSharedStyle, SharedStyle>(
      MSSharedStyle.alloc().initWithName_style(name, wrappedStyle.sketchObject)
    )!

    const container = documentData.sharedObjectContainerOfType(
      wrappedStyle.sketchObject.type()
    )

    container.addSharedObject(sharedStyle.sketchObject)

    return sharedStyle
  }

  getAllInstances() {
    return toArray<MSStyle>(this.sketchObject.allInstances()).map(
      x => wrapObject<Style>(x)!
    )
  }

  getAllInstancesLayers() {
    return toArray<MSStyledLayer>(this.sketchObject.allLayersInstances()).map(
      x => wrapObject<StyledLayer>(x)!
    )
  }

  getLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this.sketchObject)
    if (!lib) {
      const foreignObject = this.sketchObject.foreignObject()
      if (foreignObject) {
        return {
          type: Types.Library,
          id: String(foreignObject.libraryID()),
          name: String(foreignObject.sourceLibraryName()),
          enabled: false,
          valid: false,
        }
      }
      return null
    }
    return wrapObject(lib)
  }

  syncWithLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this.sketchObject)
    if (!lib) {
      return false
    }
    const foreignObject = this.sketchObject.foreignObject() as MSForeignObject
    if (!foreignObject) {
      return false
    }
    libraryController.syncForeignObject_withMaster_fromLibrary(
      foreignObject,
      null,
      lib
    )
    return true
  }

  unlinkFromLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this.sketchObject)
    if (!lib) {
      return false
    }
    const foreignObject = this.sketchObject.foreignObject() as MSForeignObject
    if (!foreignObject) {
      return false
    }
    foreignObject.unlinkFromRemote()
    return true
  }
}

Factory.registerClass(SharedStyle, MSSharedStyle)
