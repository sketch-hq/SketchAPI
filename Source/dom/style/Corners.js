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

  setNeedsUpdateConcentricCorners() {
    const parentStyle = this._object?.parentObject?.()
    const parentLayer = parentStyle?.parentObject?.()

    // Unlike Sketch, SketchAPI allows scripts to create, manipulate, and style
    // entire layer hierarchies that aren't part of any document.
    // This poses a challenge for all deferred updates that are scheduled on the document level,
    // but especially so for concentric corners: there's a potential discrepancy between
    // marking a layer group as needed a concentric update (via `hasPendingConcentricCornerUpdate`)
    // and actually adding this group to the update queue - if that particular group
    // does not belong to any document yet.
    //
    // The issue manifests itself as follows:
    // 1) a layer with concentric corners is created and styled, but not added to a document yet
    // 2) either SketchAPI or Sketch itself mark this layer parent group with `hasPendingConcentricCornerUpdate`,
    //    but doesn't actually schedule the update because there's no document to do so; as a result,
    //    the flag is left enabled;
    // 3) the layer is then added to a document, but because the pending update flag is still set,
    //    Sketch assumes that the update is already scheduled and doesn't schedule it again,
    //    resulting in concentric corners never being applied for this particular layer.
    //
    // The workaround here is as follows:
    // 1) we call this method on a parent layer as soon as it's added to a group/page
    //    (via `Group.layers` or `Layer.parent`);
    // 2) if that group/page itself is not part of any document yet, we'll end up clearing
    //    the pending update flag and immediately setting it again -- essentially doing nothing
    //    because we don't have a document to actually schedule the update on;
    // 3) on the other hand, if that group/page is already part of a document, we will:
    //   3.1) clear the pending update flag that might've been set during (2) and that would
    //        otherwise prevent the next step (3.2) from working;
    //   3.2) finally attempt to schedule the concentric update -- now that we have a document to do so.
    parentLayer?.setHasPendingConcentricCornerUpdate?.(false)
    parentLayer?.setNeedsUpdateConcentricCorners()
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
    this.setNeedsUpdateConcentricCorners()
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
      this.setNeedsUpdateConcentricCorners()
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
      this.setNeedsUpdateConcentricCorners()
    } else {
      console.warn('Invalid value for Corners.smoothing. Expected a number.')
    }
  },
})

Corners.Style = CornerStyle
Corners[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Corners, MSStyleCorners)

delete Corners[DefinedPropertiesKey].id
