import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'

export class BorderSides extends WrappedObject {
  constructor(options) {
    const border = options.border
    if (!border || border.type !== Types.Border) {
      throw new Error(
        `new BorderSides() requires a border option, got (${border})`
      )
    }
    super({
      sketchObject: border._object.sketchapiSidesCreatingIfNeeded(),
    })
    Object.defineProperty(this, '_border', {
      enumerable: false,
      exportable: false,
      importable: false,
      value: border,
    })
  }

  thicknessForInset(inset) {
    return Math.max(0, this._border.thickness - inset)
  }

  insetForThickness(targetThickness) {
    return this._border.thickness - Math.max(0, targetThickness)
  }

  normalize() {
    this._border._object.sketchapiNormalizeSides()
  }

  toJSON() {
    return {
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
    }
  }

  toString() {
    return `${JSON.stringify(this.toJSON())}`
  }
}
BorderSides.type = Types.BorderSides
BorderSides[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
delete BorderSides[DefinedPropertiesKey].id

BorderSides.define('left', {
  get() {
    return this.thicknessForInset(this._object.leftInset())
  },
  set(value) {
    this._object.setLeftInset(this.insetForThickness(value))
    this.normalize()
  },
})

BorderSides.define('top', {
  get() {
    return this.thicknessForInset(this._object.topInset())
  },
  set(value) {
    this._object.setTopInset(this.insetForThickness(value))
    this.normalize()
  },
})

BorderSides.define('right', {
  get() {
    return this.thicknessForInset(this._object.rightInset())
  },
  set(value) {
    this._object.setRightInset(this.insetForThickness(value))
    this.normalize()
  },
})

BorderSides.define('bottom', {
  get() {
    return this.thicknessForInset(this._object.bottomInset())
  },
  set(value) {
    this._object.setBottomInset(this.insetForThickness(value))
    this.normalize()
  },
})
