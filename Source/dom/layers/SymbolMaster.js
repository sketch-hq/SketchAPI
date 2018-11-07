import { toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { Artboard } from './Artboard'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'

/**
 * A Sketch symbol master.
 */
export class SymbolMaster extends Artboard {
  /**
   * Make a new symbol master.
   */
  constructor(master = {}) {
    if (!master.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      master.sketchObject = Factory.createNative(SymbolMaster)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }
    super(master)
  }

  // Replace the artboard with a symbol master
  static fromArtboard(artboard) {
    const wrappedArtboard = wrapObject(artboard)

    return SymbolMaster.fromNative(
      MSSymbolMaster.convertArtboardToSymbol(wrappedArtboard.sketchObject)
    )
  }

  // Replace the symbol with an artboard and detach all its instances converting them into groups.
  toArtboard() {
    const artboard = MSSymbolMaster.convertSymbolToArtboard(this._object)

    return Artboard.fromNative(artboard)
  }

  // Returns a new SymbolInstance linked to this artboard, ready for inserting in the document
  createNewInstance() {
    return wrapObject(this._object.newSymbolInstance())
  }

  // Returns all instances of the artboard in the document, on all pages
  getAllInstances() {
    return toArray(this._object.allInstances()).map(wrapObject)
  }

  getLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this._object)
    if (!lib) {
      return null
    }
    return wrapObject(lib)
  }

  syncWithLibrary() {
    if (this.isImmutable()) {
      return false
    }
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this._object)
    if (!lib) {
      return false
    }
    const foreignObject = this._object.foreignObject()
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
    if (this.isImmutable()) {
      return false
    }
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this._object)
    if (!lib) {
      return false
    }
    const foreignObject = this._object.foreignObject()
    if (!foreignObject) {
      return false
    }
    foreignObject.unlinkFromRemote()
    return true
  }
}

SymbolMaster.type = Types.SymbolMaster
SymbolMaster[DefinedPropertiesKey] = { ...Artboard[DefinedPropertiesKey] }
Factory.registerClass(SymbolMaster, MSSymbolMaster)
Factory.registerClass(SymbolMaster, MSImmutableSymbolMaster)

SymbolMaster.define('symbolId', {
  get() {
    return String(this._object.symbolID())
  },
  set() {
    throw new Error('Changing the symbol ID of a SymbolMaster is forbidden.')
  },
})
