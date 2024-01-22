import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { ImageData } from './ImageData'
import { wrapNativeObject } from '../wrapNativeObject'
import { Rectangle } from './Rectangle'

export class Override extends WrappedObject {
  // Returns any override directly set on the symbol instance or null if none is set or this is an override point on a symbol source
  getValueSetOnInstance() {
    if (!this.__symbolInstance) {
      return null
    }
    var overrideValues = this.__symbolInstance.sketchObject.overrideValues()
    for (var i = 0; i < overrideValues.length; i++) {
      if (
        overrideValues[i].overridePath().isEqual(this._object.overridePath())
      ) {
        return overrideValues[i].value()
      }
    }
    return null
  }

  // Returns the current value of the override point. This is the value set on the layer in the detached version of the symbol. It may be
  // out-of-date if the detached symbol hasn't yet updated.
  getResolvedValueOnDetachedSymbol() {
    var layer = this._object.layer()
    return layer.valueForOverrideAttribute(
      this.property
    )
  }

  // Returns the value the override point will have if there is no override set on this instance.
  getDefaultValue() {
    if (!this.__symbolInstance) {
      return this.getResolvedValueOnDetachedSymbol()
    }
    return this.__symbolInstance.sketchObject.defaultValueForOverridePoint(
      this._object
    )
  }

  // Returns a SelectionItem representing this override point
  selectionItem() {
    if (this.__symbolInstance) {
      return this.__symbolInstance.sketchObject.selectionItemForOverridePoint(
        this.sketchObject
      )
    }
    if (this.__symbolMaster) {
      return this.__symbolMaster.sketchObject.selectionItemForOverridePoint(
        this.sketchObject
      )
    }
    return null
  }

  getOwningPage() {
    if (this.__symbolInstance) {
      return this.__symbolInstance.sketchObject.parentPage()
    }
    if (this.__symbolMaster) {
      return this.__symbolMaster.sketchObject.parentPage()
    }
    return null
  }

  getFrame() {
    return new Rectangle(this._object.layer().frame().rect())
  }
}
Override.type = Types.Override
Override[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Override, MSOverridePoint)

Override.define('path', {
  get() {
    return String(this._object.path())
  },
})

Override.define('property', {
  get() {
    return String(this._object.attributeName())
  },
})

Override.define('affectedLayer', {
  get() {
    var layer = this._object.layer()
    if (layer.instance) {
      layer = layer.instance()
    }
    return wrapNativeObject(layer)
  },
})

Override.define('id', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.name())
  },
})

Override.define('symbolOverride', {
  get() {
    return Boolean(this._object.isSymbolOverride())
  },
})

Override.define('value', {
  get() {
    var value = this.getValueSetOnInstance()
    if (!value) {
      value = this.getResolvedValueOnDetachedSymbol()
    }
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
    return String(value)
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
    return this.getValueSetOnInstance() == null
  },
})

Override.define('editable', {
  get() {
    var master
    if (typeof this.__symbolMaster !== 'undefined') {
      master = this.__symbolMaster.sketchObject
    } else if (typeof this.__symbolInstance !== 'undefined') {
      var masterGetter = this.__symbolInstance.sketchObject.symbolMaster
      if (masterGetter !== 'undefined') {
        master = masterGetter()
      }
    }

    if (typeof master == 'undefined') {
      throw new Error('Unable to find the symbol source for this override')
    }
    if (
      master.allowsOverrides() &&
      master.isOverridePointEditable(this._object) &&
      this._object.isConfigurable()
    ) {
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
      this._object,
      editable
    )
  },
})

Override.define('selected', {
  get() {
    let page = this.getOwningPage()
    if (!page) {
	  return false
    }
    let item = this.selectionItem()
    if (page.selection().isItemSelected(item)) {
      return true
    }
    return false
  },
  set(selected) {
    let item = this.selectionItem()
    if (!item) {
      return
    }
    let page = this.getOwningPage()
    if (!page) {
      return
    }
    if (selected) {
      page.changeSelectionByAddingItems_extendExisting([item], true)
    } else {
      page.changeSelectionByRemovingItems([item])
    }
  },
})
