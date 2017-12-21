import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Rectangle } from '../Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { toArray } from '../utils'
import { Override } from './Override'

/**
 * A Sketch symbol instance.
 */
export class SymbolInstance extends Layer {
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

  // Replaces the instance with a group that contains a copy of the Symbol this instance refers to. Returns null if the master contains no layers instead of inserting an empty group
  detach() {
    const group = this._object.detachByReplacingWithGroup()

    if (group) {
      return wrapObject(group)
    }

    return null
  }

  // Returns a new SymbolInstance linked to this artboard, ready for inserting in the document
  createNewInstance() {
    return SymbolInstance.fromNative(this._object.newSymbolInstance())
  }

  // Returns all instances of the artboard in the document, on all pages
  getAllInstances() {
    return toArray(this._object.allInstances()).map(SymbolInstance.fromNative)
  }

  setOverrideValue(override, value) {
    this._object.setValue_forOverridePoint(
      value,
      wrapObject(override).sketchObject.overridePoint()
    )
  }
}

SymbolInstance.type = Types.SymbolInstance
SymbolInstance[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(SymbolInstance, MSSymbolInstance)

SymbolInstance.define('symbolId', {
  get() {
    return String(this._object.symbolID())
  },
  set(id) {
    // we need to find the symbol master and change the master,
    // it's not enough to just call `this._object.setSymbolID`
    const master = this._object
      .parentPage()
      .documentData()
      .symbolWithID(id)

    this.parent = master
  },
})

SymbolInstance.define('master', {
  exportable: false,
  get() {
    return wrapObject(this._object.symbolMaster())
  },
  set(master) {
    const wrappedMaster = wrapObject(master)
    this._object.changeInstanceToSymbol(wrappedMaster.sketchObject)
  },
})

SymbolInstance.define('overrides', {
  get() {
    const overrides = toArray(this._object.availableOverrides())

    // recursively find the overrides
    function findChildrenOverrides(instance) {
      const children = toArray(instance.children())
      children.forEach(c => {
        overrides.push(c)
        findChildrenOverrides(c)
      })
    }
    overrides.forEach(findChildrenOverrides)

    return overrides.map(o => {
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
    // not sure what to do here yet
  },
})
