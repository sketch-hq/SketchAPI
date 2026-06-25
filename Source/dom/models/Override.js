import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { ImageData } from './ImageData'
import { isWrappedObject } from '../utils'
import { wrapNativeObject } from '../wrapNativeObject'
import { Rectangle } from './Rectangle'
import { Color } from '../style/Color'
import { Swatch } from '../assets'

export class Override extends WrappedObject {
  wrapNativeOverrideValue(value) {
    if (this.property === 'image') {
      return ImageData.fromNative(value)
    }
    if (this.colorOverride) {
      if (typeof value === 'string') {
        return value
      }
      return String(Color.from(value)?.toString())
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
  }

  getFrame() {
    return new Rectangle(this._object.frame())
  }

  reset() {
    this._object.reset()
  }
}
Override.type = Types.Override
Override[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Override, MSSketchAPIOverrideWrapper)

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
    const nativeObject = this._object.affectedLayer()
    if (!nativeObject) {
      return undefined
    }
    return wrapNativeObject(nativeObject)
  },
})

Override.define('id', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.identifier())
  },
})

Override.define('symbolOverride', {
  get() {
    return Boolean(this._object.isSymbolOverride())
  },
})

Override.define('colorOverride', {
  get() {
    return Boolean(this._object.isColorOverride())
  },
})

Override.define('textOverride', {
  get() {
    return Boolean(this._object.isTextOverride())
  },
})

Override.define('imageOverride', {
  get() {
    return Boolean(this._object.isImageOverride())
  },
})

Override.define('isDefault', {
  get() {
    return Boolean(this._object.isDefault())
  },
})

Override.define('defaultValue', {
  exportable: false,
  importable: false,
  enumerable: false,
  get() {
    return this.wrapNativeOverrideValue(this._object.defaultValue())
  },
})

Override.define('value', {
  get() {
    return this.wrapNativeOverrideValue(this._object.value())
  },
  set(newValue) {
    if (this.isImmutable()) {
      return
    }

    if (this.property === 'image') {
      this._object.setValue(ImageData.from(newValue).sketchObject)
    } else if (this.property === 'stringValue') {
      this._object.setValue(String(newValue))
    } else if (this.colorOverride) {
      if (isWrappedObject(newValue) && newValue.type === Types.Swatch) {
        this._object.setValue(Swatch.from(newValue).referencingColor)
      } else {
        this._object.setValue(Color.from(newValue).toMSImmutableColor())
      }
    } else {
      this._object.setValue(newValue)
    }
  },
})

Override.define('editable', {
  get() {
    return Boolean(this._object.isEditable())
  },
  set(editable) {
    this._object.setIsEditable(Boolean(editable))
  },
})

Override.define('selected', {
  get() {
    return Boolean(this._object.isSelected())
  },
  set(selected) {
    this._object.setIsSelected(Boolean(selected))
  },
})

Override.define('defaultSwatchValue', {
  get() {
    if (!this.colorOverride) {
      return undefined
    }

    const nativeValue = this._object.defaultValue()
    if (!nativeValue) {
      return undefined
    }

    const swatchID = Color.from(nativeValue).toMSImmutableColor().swatchID?.()
    if (!swatchID) {
      return undefined
    }

    return Swatch.instantiate(
      swatchID,
      wrapNativeObject(this._object.hostObject())
    )
  },
})

Override.define('swatchValue', {
  get() {
    if (!this.colorOverride) {
      return undefined
    }

    let value = this._object.value()
    if (!value) {
      return undefined
    }

    let swatchID = Color.from(value).toMSImmutableColor().swatchID?.()
    if (!swatchID) {
      return undefined
    }

    return Swatch.instantiate(
      swatchID,
      wrapNativeObject(this._object.hostObject())
    )
  },
  set(newSwatch) {
    if (!this.colorOverride) {
      return undefined
    }
    this.value = newSwatch
  },
})
