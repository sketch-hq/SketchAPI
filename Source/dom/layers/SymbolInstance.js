import { toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { Override } from '../models/Override'
import { ImageData } from '../models/ImageData'
import { getDocuments } from '../models/Document'

/**
 * A Sketch symbol instance.
 */
export class SymbolInstance extends StyledLayer {
  /**
   * Make a new symbol instance.
   */
  constructor(master = {}) {
    if (!master.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      master.sketchObject = Factory.createNative(SymbolInstance)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }
    super(master)
  }

  // Replaces the instance with a group that contains a copy of the Symbol this instance refers to.
  // Returns null if the master contains no layers instead of inserting an empty group
  // #38614 adjust to internal changes
  detach(options) {
    if (this.isImmutable()) {
      return null
    }

    const { recursively = false } = options || {}

    let group = null

    if (recursively) {
      group = this._object.detachStylesAndReplaceWithGroupRecursively()
    } else {
      group = this._object.detachStylesAndReplaceWithGroup()
    }

    return group ? wrapObject(group) : null
  }

  setOverrideValue(override, value) {
    if (this.isImmutable()) {
      return this
    }
    const wrappedOverride = wrapObject(override)
    const overridePoint = wrappedOverride.sketchObject.overridePoint()
    if (wrappedOverride.property === 'image') {
      this._object.setValue_forOverridePoint(
        ImageData.from(value).sketchObject,
        overridePoint
      )
    } else if (wrappedOverride.property === 'stringValue') {
      this._object.setValue_forOverridePoint(String(value), overridePoint)
    } else {
      this._object.setValue_forOverridePoint(value, overridePoint)
    }
    return this
  }

  resizeWithSmartLayout() {
    if (this.isImmutable()) {
      return this
    }
		this._object.ensureDetachHasUpdated()
    this._object.resizeToFitContentsIfNeededNoCache()
    return this
  }
}

SymbolInstance.type = Types.SymbolInstance
SymbolInstance[DefinedPropertiesKey] = {
  ...StyledLayer[DefinedPropertiesKey],
}
Factory.registerClass(SymbolInstance, MSSymbolInstance)
Factory.registerClass(SymbolInstance, MSImmutableSymbolInstance)

delete SymbolInstance[DefinedPropertiesKey].sharedStyle

SymbolInstance.define('symbolId', {
  depends: 'parent',
  get() {
    return String(this._object.symbolID())
  },
  set(id) {
    if (this.isImmutable()) {
      return
    }
    // we need to find the symbol master and change the master,
    // it's not enough to just call `this._object.setSymbolID`
    const parentPage = this._object.parentPage()
    if (!parentPage) {
      throw new Error(
        'A symbol instance needs to be inserted in a page before setting the symbolId'
      )
    }
    const master = parentPage.documentData().symbolWithID(id)

    this.master = master
  },
})

SymbolInstance.define('master', {
  exportable: false,
  enumerable: false,
  get() {
    let master
    if (this._object.symbolMaster) {
      master = this._object.symbolMaster()
    }
    if (!master && !this._object.documentData) {
      // we are an immutable instance so we need to loop through the docs,
      // find a matching master and hope that the right one
      const id = this.symbolId
      const docs = getDocuments()
      docs.some((doc) => {
        master = doc.getSymbolMasterWithID(id)
        return !!master
      })
    }
    if (master) {
      return wrapObject(master)
    }
    return null // this is a bit weird, if the instance is not inserted in the document, symbolMaster will be null
  },
  set(master) {
    if (this.isImmutable()) {
      return
    }
    if (!this._object.documentData || !this._object.documentData()) {
      throw new Error(
        'The Symbol Instance needs to be inserted in a document before setting its master'
      )
    }
    const wrappedMaster = wrapObject(master)
    this._object.changeInstanceToSymbol(wrappedMaster.sketchObject)
  },
})

SymbolInstance.define('overrides', {
  get() {
    // undefined when immutable
    if (!this._object.availableOverrides) {
      return undefined
    }
    const overrides = toArray(
      MSAvailableOverride.flattenAvailableOverrides(
        this._object.availableOverrides()
      )
    )

    return overrides.map((o) => {
      const wrapped = Override.fromNative(o)
      Object.defineProperty(wrapped, '__symbolInstance', {
        writable: false,
        enumerable: false,
        value: this,
      })
      return wrapped
    })
  },
  set() {
    throw new Error(
      'Cannot set the overrides directly. Set the value of each overrides instead.'
    )
  },
})
