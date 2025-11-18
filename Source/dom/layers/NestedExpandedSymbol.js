import { Group } from './Group'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { DefinedPropertiesKey } from '../WrappedObject'

// This type represents a nested symbol instance that is part of the
// SymbolInstance.expandedLayers collection.
// It poses as a regular Group, so users don't need to be aware of it's existence
// when iterating the expanded symbol layers, but it can still be differentiated
// from a regular Group via its `isNestedSymbol` and `symbolId` properties
export class NestedExpandedSymbol extends Group {
  constructor(expandedSymbol = {}) {
    if (!expandedSymbol.sketchObject) {
      throw new Error('Cannot create a new NestedExpandedSymbol directly')
    }

    super(expandedSymbol)
  }
}

NestedExpandedSymbol.type = Types.Group
NestedExpandedSymbol[DefinedPropertiesKey] = {
  ...Group[DefinedPropertiesKey],
}

Factory.registerClass(NestedExpandedSymbol, MSDetachedSymbol)
Factory.registerClass(NestedExpandedSymbol, MSImmutableDetachedSymbol)

NestedExpandedSymbol.define('isNestedSymbol', {
  get() {
    return true
  },
})

NestedExpandedSymbol.define('symbolId', {
  get() {
    return String(this._object.symbolID())
  },
})
