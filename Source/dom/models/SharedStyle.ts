import { define, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { toArray } from '../utils'
import { Style } from '../style/Style'

const SharedStyleTypeMap = {
  1: 'Layer',
  2: 'Text',
}
export enum SharedStyleType {
  Layer = 'Layer',
  Text = 'Text',
}

/**
 * A Sketch shared style, either Text style or Layer Style.
 */
export class SharedStyle extends WrappedObject<MSSharedStyle> {
  static type = Types.SharedStyle
  static Type = SharedStyleType

  @define<SharedStyle>({
    get() {
      return (
        SharedStyleTypeMap[this.sketchObject.style().type()] ||
        this.sketchObject.style().type()
      )
    },
  })
  readonly styleType!: SharedStyleType

  @define<SharedStyle>({
    get() {
      return String(this.sketchObject.name())
    },
    set(name) {
      this.sketchObject.name = name
    },
  })
  name!: string

  @define<SharedStyle>({
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
      throw new Error(`Cannot create a SharedStyle directly`)
    }
    super(master)
  }

  static fromStyle({
    name,
    style,
    document,
  }: { name: string; style: Style; document: Document } = {}) {
    const documentData = wrapObject(document)._getMSDocumentData()
    const wrappedInstance = wrapObject(style)

    const sharedStyle = SharedStyle.fromNative(
      MSSharedStyle.alloc().initWithName_firstInstance(
        name,
        wrappedInstance.sketchObject
      )
    )

    const container = documentData.sharedObjectContainerOfType(
      wrappedInstance.sketchObject.type()
    )

    container.addSharedObject(sharedStyle.sketchObject)
    wrappedInstance.sharedStyleId = sharedStyle.id

    return sharedStyle
  }

  // Returns a new Style instance linked to this SharedStyle, ready for adding to a layer
  createNewInstance() {
    return wrapObject(this.sketchObject.newInstance())
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
