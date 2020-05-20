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
    return toArray(
      this.__symbolInstance.sketchObject.overrideContainer().flattenedChildren()
    ).find((x) => x.availableOverride() == this.sketchObject)
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
    return String(this._object.overridePoint().property())
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
    if (typeof this.__editable !== 'undefined') {
      return this.__editable
    }
    return Boolean(Number(this._object.isEditable()))
  },
  set(editable) {
    // __symbolInstance is set when building the Override
    if (!this.__symbolMaster) {
      throw new Error('Can only set `editable` for a symbol master')
    }
    this.__editable = editable
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

    if (!this.__symbolInstance.selected) {
      return false
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

    const selectionId = representation.selectionID()

    let selectedOverrides = toArray(documentData.selectedOverrides())

    const alreadySelected = selectedOverrides.some((id) =>
      id.isEqual(selectionId)
    )

    if (selected) {
      if (alreadySelected) {
        return
      }

      selectedOverrides.push(selectionId)

      if (!this.__symbolInstance.selected) {
        this.__symbolInstance.selected = true
      }
    } else {
      if (!alreadySelected) {
        return
      }

      selectedOverrides = selectedOverrides.filter(
        (id) => !id.isEqual(selectionId)
      )
    }

    documentData.setSelectedOverrides(selectedOverrides)
  },
})
