import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Factory } from '../Factory'
import { toArray } from 'util'

export const CornerStyle = Object.freeze({
  Auto: -1,
  Rounded: 0,
  Smooth: 1,
  Angled: 2,
  InsideSquare: 3,
  InsideArc: 4,
})

export class Corners extends WrappedObject {
  constructor(corners = {}) {
    if (!corners.sketchObject) {
      corners.sketchObject = MSStyleCorners.alloc().init()
    }
    super(corners)
  }

  radiusAt(idx) {
    const radii = this.radii
    if (radii.length == 0 || idx < 0) {
      return undefined
    }
    return Number(radii[idx % radii.length])
  }

  _applyConcentricity() {
    const parentStyle = this._object?.parentObject?.()
    const parentLayer = parentStyle?.parentObject?.()
    parentLayer?.applyConcentricity?.()
  }

  _applyConcentricCornersOnChildren() {
    const parentStyle = this._object?.parentObject?.()
    const parentLayer = parentStyle?.parentObject?.()
    parentLayer?.applyConcentricCornersOnChildren?.()
  }
}

Corners.define('style', {
  get() {
    if (this.concentric) {
      return Corners.Style.Auto
    }
    return Number(this._object.style())
  },
  set(newCornerStyle) {
    if (this.isImmutable()) {
      return
    }
    if (Number.isInteger(newCornerStyle)) {
      if (newCornerStyle === Corners.Style.Auto) {
        this.concentric = true
      } else {
        this.concentric = false
        this._object.setStyle(newCornerStyle)
      }
    } else {
      console.warn(
        'Invalid value for Corners.style. Expected one of Style.CornerStyle values.'
      )
    }
  },
})

Corners.define('radii', {
  get() {
    return toArray(this._object.radii()).map((r) => {
      if (r.doubleValue) {
        return Number(r.doubleValue())
      }
      return Number(r)
    })
  },
  set(newRadii = []) {
    if (this.isImmutable()) {
      return
    }
    if (Array.isArray(newRadii)) {
      const numericRadii = newRadii.flatMap((r) => {
        if (typeof r === 'number') {
          return [r]
        }
        if (typeof r === 'string') {
          return [parseFloat(r)]
        }
        return []
      })
      this._object.setRadii(numericRadii)
      this.concentric = false
    } else if (typeof newRadii === 'number') {
      this.concentric = false
      this._object.setRadii([newRadii])
    } else {
      console.warn(
        'Invalid value for Corners.radii. Expected an array of numbers or a single number.'
      )
    }
    this._applyConcentricCornersOnChildren()
  },
})

Corners.define('hasRadii', {
  get() {
    return this.radii.some((r) => r !== 0)
  },
})

Corners.define('concentric', {
  get() {
    return !!this._object.prefersConcentric?.()
  },
  set(prefersConcentric) {
    if (this.isImmutable()) {
      return
    }
    if (typeof prefersConcentric === 'boolean') {
      this._object.setPrefersConcentric?.(Number(prefersConcentric))
      this._applyConcentricity()
    } else {
      console.warn('Invalid value for Corners.concentric. Expected a boolean.')
    }
  },
})

Corners.define('smoothing', {
  get() {
    return Number(this._object.smoothing())
  },
  set(smoothing) {
    if (this.isImmutable()) {
      return
    }
    if (this.style !== Corners.Style.Smooth) {
      console.warn(
        'Updating Corners.smoothing only has an effect when Corners.style is set to Style.CornerStyle.Smooth.'
      )
    }
    if (typeof smoothing === 'number') {
      // Clamp to [0, 1]
      smoothing = Math.max(0, Math.min(1, Number(smoothing)))
      this._object.setSmoothing(smoothing)
      this._applyConcentricCornersOnChildren()
    } else {
      console.warn('Invalid value for Corners.smoothing. Expected a number.')
    }
  },
})

Corners.Style = CornerStyle
Corners[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Corners, MSStyleCorners)

delete Corners[DefinedPropertiesKey].id
