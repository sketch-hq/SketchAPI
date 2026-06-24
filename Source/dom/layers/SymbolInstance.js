import { toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { Override } from '../models/Override'
import { getDocuments } from '../models/Document'
import { NestedExpandedSymbol } from './NestedExpandedSymbol'
import { LayerAncestry } from './LayerAncestry'

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

  resizeWithSmartLayout() {
    if (this.isImmutable()) {
      return this
    }
    this._object.sketchapiEnsureDetachHasUpdatedSkippingOverridesSnapshot()
    this._object.resizeToFitContentsIfNeeded()
    return this
  }

  overridesForExpandedLayer(expandedLayer) {
    // Locating the corresponding overrides for a given "nested" immutable layer
    // involves the following challenges:
    // 1) layer IDs are not guaranteed to be unique within a symbol, so we can't
    //    just look for an override with affectedLayer.id === expandedLayer.id;
    // 2) we can't rely on the internal object comparison either, because as soon
    //    as any of our overrides are modified, the immutable detached symbol layer
    //    hierarchy is regenerated, which renders the previous `expandedLayers`
    //    snapshot (and by extension, the expandedLayer we've got) outdated;
    // To overcome these challenges, we manually keep track of the nested detached
    // symbol ancestry for each nested layer and use that to compute the exact
    // override path for that layer, which is guaranteed to be unique
    const correspondingOverridePath = (
      expandedLayer._detachedSymbolAncestry?.objectIDs() || []
    )
      .concat(expandedLayer.id)
      .join('/')
    return this.overrides.filter((override) => {
      return override.path === correspondingOverridePath
    })
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
    if (this.isImmutable()) {
      return
    }
    return toArray(this._object.sketchapiOverrides()).map((o) =>
      Override.fromNative(o)
    )
  },
  set() {
    throw new Error(
      'Cannot set the overrides directly. Set the value of each overrides instead.'
    )
  },
})

SymbolInstance.define('expandedLayers', {
  importable: false,
  exportable: false,
  enumerable: false,
  get() {
    this._object.sketchapiEnsureDetachHasUpdated()

    const detachedLayers = this._object.detachedInstance()?.layers()
    if (!detachedLayers) {
      return undefined
    }

    return toArray(detachedLayers).map((nativeImmutableLayer) => {
      const wrapped = wrapObject(nativeImmutableLayer)
      if (wrapped.isNestedSymbol) {
        // We need to keep track of the nested symbol ancestry for
        // overridesForExpandedLayer() to work properly
        wrapped._detachedSymbolAncestry = new LayerAncestry({ layer: wrapped })
      }
      return wrapped
    })
  },
})
// Reference NestedExpandedSymbol here so it doesn't have to be exposed but can
// still be Factory-registered
SymbolInstance._NestedExpandedSymbolPrivateReference = NestedExpandedSymbol

// An "override" for the `Layer.hidden` property so we can
// call `sketchapiEnsureDetachHasUpdated()` afterwards (SMAC-4904)
delete SymbolInstance[DefinedPropertiesKey].hidden
SymbolInstance.define('hidden', {
  get() {
    return !this._object.isVisible()
  },
  set(hidden) {
    if (this.isImmutable()) {
      return
    }
    this._object.setIsVisible(!hidden)
    this._object.sketchapiEnsureDetachHasUpdatedSkippingOverridesSnapshot()
  },
})
