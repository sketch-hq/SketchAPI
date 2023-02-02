import { toArray } from 'util'
import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { ImageData } from './ImageData'
import { wrapNativeObject } from '../wrapNativeObject'
import { Rectangle } from './Rectangle'

/**
 * An MSAvailableOverride. This is not exposed, only used by SymbolInstance
 */
export class Override extends WrappedObject {
  _findRepresentation() {
    if (!this.__symbolInstance) {
      return undefined
    }
    this.__symbolInstance.sketchObject.ensureDetachHasUpdated()
    return toArray(
      this.__symbolInstance.sketchObject.overrideContainer().flattenedChildren()
    ).find((x) => x.availableOverride().overridePoint().fullPath().isEqual(this.sketchObject.overridePoint().fullPath()))
  }

  getFrame() {
    const representation = this._findRepresentation()
    if (!representation) {
      return undefined
    }
    const path = representation.pathInInstance()
    return new Rectangle(CGPathGetBoundingBox(path))
  }
}

Override.type = Types.Override
Override[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Override, MSAvailableOverride)

Override.define('path', {
  get() {
    return String(this._object.overridePoint().path())
  },
})

Override.define('property', {
  get() {
    return String(this._object.overridePoint().attributeName())
  },
})

Override.define('affectedLayer', {
  get() {
    return wrapNativeObject(this._object.affectedLayer())
  },
})

Override.define('id', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.overridePoint().name())
  },
})

Override.define('symbolOverride', {
  get() {
    return Boolean(this._object.overridePoint().isSymbolOverride())
  },
})

Override.define('value', {
  get() {
    const value = this._object.currentValue()
    if (this.property === 'image') {
      return ImageData.fromNative(value)
    }
    if (value !== null && value.isKindOfClass_(NSDictionary.class())) {
      // Map dictionary overrides into a javascript dictionary
      var map = {}
      Object.keys(value).forEach((name) => {
        map[name] = value[name]
      })
	  return map
    }
    return String(this._object.currentValue())
  },
  set(value) {
    // __symbolInstance is set when building the Override
    if (!this.__symbolInstance) {
      throw new Error('Can only set `value` for a symbol instance')
    }
    this.__symbolInstance.setOverrideValue(this, value)
  },
})

Override.define('isDefault', {
  get() {
    return !this._object.hasOverride()
  },
})

Override.define('editable', {
  get() {
    var overrides
    var master
    if (typeof this.__symbolMaster !== 'undefined') {
      master = this.__symbolMaster.sketchObject
      overrides = master.overridePoints
    } else if (typeof this.__symbolInstance !== 'undefined') {
      var masterGetter = this.__symbolInstance.sketchObject.symbolMaster
      if (masterGetter !== 'undefined') {
        master = masterGetter()
      }
      overrides = this.__symbolInstance.sketchObject.overridePoints
    }
  
    if (typeof overrides == 'undefined') {
      // Can't get the override points - maybe this is an immutable?
      return false
    }
    if (typeof master == 'undefined') {
      throw new Error('Unable to find the symbol source for this override')
    }

    var point
    overrides().forEach((o) => {
      if (o.fullPath().isEqual(this._object.overridePoint().fullPath())) {
        point = o
      }
    })
  
    if (typeof point == 'undefined') {
      return false
    }

    if (master.allowsOverrides() && master.isOverridePointEditable(point) && point.isConfigurable()) {
      return true
    } else {
      return false
    }
  },
  set(editable) {
    // __symbolInstance is set when building the Override
    if (typeof this.__symbolMaster == 'undefined') {
      throw new Error('Can only set `editable` for a symbol master')
    }
    this.__symbolMaster.sketchObject.setOverridePoint_editable(
      this._object.overridePoint(),
      editable
    )
  },
})

Override.define('selected', {
  get() {
    // __symbolInstance is set when building the Override
    if (!this.__symbolInstance) {
      return undefined
    }

    const representation = this._findRepresentation()

    if (!representation) {
      return false
    }

    return Boolean(Number(representation.isSelected()))
  },
  set(selected) {
    // __symbolInstance is set when building the Override
    if (!this.__symbolInstance) {
      throw new Error('Can only set `selected` for a symbol instance')
    }

    const documentData =
      this.__symbolInstance.sketchObject.documentData &&
      this.__symbolInstance.sketchObject.documentData()
    if (!documentData) {
      return
    }

    const representation = this._findRepresentation()

    if (!representation) {
      return
    }

    var selectionItem = representation.selectionItem()
    if (!selectionItem) {
      return
    }
    
    var page = this.__symbolInstance.sketchObject.parentPage()
    if (!page) {
      return
    }

    if (selected) {
      page.changeSelectionByAddingItems_extendExisting([selectionItem], true)
    } else {
      page.changeSelectionByRemovingItems([selectionItem])
    }
  },
})
