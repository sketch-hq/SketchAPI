import { toArray } from 'util'
import { define, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { StyleType } from '../style/Style'
import { Style } from '../style/Style'

/**
 * A Sketch shared style, either Text style or Layer Style.
 */
export class SharedStyle extends WrappedObject<MSSharedStyle> {
  static type = Types.SharedStyle
  static StyleType = StyleType

  @define<SharedStyle, StyleType>({
    get() {
      return this.style.type
    },
  })
  readonly styleType!: StyleType

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
      return wrapObject(this.sketchObject.style())
    },
    set(newStyle) {
      if (this.sketchObject.isForeign()) {
        throw new Error(
          'Can not set the style of a shared style coming from a library'
        )
      }
      this.sketchObject.updateToMatch(wrapObject(newStyle).sketchObject)
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
    const documentData = wrapObject(document)._getMSDocumentData()
    const wrappedStyle = wrapObject(style, Types.Style)

    const sharedStyle = SharedStyle.fromNative(
      MSSharedStyle.alloc().initWithName_style(name, wrappedStyle.sketchObject)
    )

    const container = documentData.sharedObjectContainerOfType(
      wrappedStyle.sketchObject.type()
    )

    container.addSharedObject(sharedStyle._object)

    return sharedStyle
  }

  getAllInstances() {
    return toArray(this.sketchObject.allInstances()).map(wrapObject)
  }

  getAllInstancesLayers() {
    return toArray(this.sketchObject.allLayersInstances()).map(wrapObject)
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
