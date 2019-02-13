import { toArray } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { Rectangle } from '../models/Rectangle'
import { wrapObject, wrapNativeObject } from '../wrapNativeObject'
import { Flow } from '../models/Flow'
import { ExportFormat } from '../models/ExportFormat'
import { Types } from '../enums'

/**
 * Abstract class that represents a Sketch layer.
 */
export class Layer extends WrappedObject {
  /**
   * Duplicate this layer.
   * A new identical layer will be inserted into the parent of this layer.
   *
   * @return {Layer} A new layer identical to this one.
   */
  duplicate() {
    const object = this._object
    const duplicate = object.copy()
    object.parentGroup().insertLayers_afterLayer([duplicate], object)
    return wrapNativeObject(duplicate)
  }

  /**
   * Remove this layer from its parent.
   */
  remove() {
    if (this.isImmutable()) {
      return this
    }
    const parent = this._object.parentGroup()
    if (parent) {
      parent.removeLayer(this._object)
    }
    return this
  }

  /**
   * Move this layer to the front of its container.
   */
  moveToFront() {
    if (this.isImmutable()) {
      return this
    }
    MSLayerMovement.moveToFront([this._object])
    return this
  }

  /**
   * Move this layer forward in its container.
   */
  moveForward() {
    if (this.isImmutable()) {
      return this
    }
    MSLayerMovement.moveForward([this._object])
    return this
  }

  /**
   * Move this layer to the back of its container.
   */
  moveToBack() {
    if (this.isImmutable()) {
      return this
    }
    MSLayerMovement.moveToBack([this._object])
    return this
  }

  /**
   * Move this layer backwards in its container.
   */
  moveBackward() {
    if (this.isImmutable()) {
      return this
    }
    MSLayerMovement.moveBackward([this._object])
    return this
  }

  getParentPage() {
    return wrapNativeObject(this._object.parentPage())
  }

  getParentArtboard() {
    return wrapNativeObject(this._object.parentArtboard())
  }

  getParentSymbolMaster() {
    return wrapNativeObject(this._object.parentSymbol())
  }

  getParentShape() {
    return wrapNativeObject(this._object.parentShape())
  }

  // @deprecated
  localRectToPageRect(rect) {
    console.warn(
      'Layer.layerRectToPageRect(rect) is deprecated. Use rect.changeBasis({ from: layer }) instead'
    )
    return rect.changeBasis({
      from: this,
    })
  }

  // @deprecated
  localRectToParentRect(rect) {
    console.warn(
      'Layer.localRectToParentRect(rect) is deprecated. Use rect.changeBasis({ from: layer, to: layer.parent }) instead'
    )
    return rect.changeBasis({
      from: this,
      to: this.parent,
    })
  }
}

Layer[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Layer, MSLayer)
Factory.registerClass(Layer, MSImmutableLayer)

Layer.define('index', {
  exportable: false,
  /**
   * Return the index of this layer in it's container.
   * The layer at the back of the container (visually) will be layer 0. The layer at the front will be layer n - 1 (if there are n layers).
   *
   * @return {number} The layer order.
   */
  get() {
    const ourLayer = this._object
    return parseInt(ourLayer.parentGroup().indexOfLayer_(ourLayer), 10)
  },
})

Layer.define('parent', {
  enumerable: false,
  exportable: false,
  /**
   * Return the parent container of this layer.
   *
   * @return {Group} The containing layer of this layer.
   */
  get() {
    return wrapNativeObject(this._object.parentGroup())
  },
  set(layer) {
    if (this.isImmutable()) {
      return
    }
    if (this._object.parentGroup()) {
      this._object.removeFromParent()
    }

    layer = wrapObject(layer) // eslint-disable-line

    if (!layer) {
      // we want to remove the layer from its parent
      // without adding it somewhere else right away
      return
    }

    if (!layer._object || typeof layer._object.addLayers !== 'function') {
      throw new Error(`This object cannot accept layers: ${layer}`)
    }

    layer._object.addLayers([this._object])
  },
})

Layer.define('frame', {
  /**
   * The frame of the layer.
   * This is given in coordinates that are local to the parent of the layer.
   *
   * @return {Rectangle} The layer's frame.
   */
  get() {
    const f = this._object.frame()
    const rect = new Rectangle(f.x(), f.y(), f.width(), f.height())
    rect._parent = this
    rect._parentKey = 'frame'
    return rect
  },

  /**
   * Set the frame of the layer.
   * This will move and/or resize the layer as appropriate.
   * The new frame should be given in coordinates that are local to the parent of the layer.
   *
   * @param {Rectangle} frame - The new frame of the layer.
   */
  set(value) {
    if (this.isImmutable()) {
      return
    }
    const f = this._object.frame()
    f.setRect(NSMakeRect(value.x, value.y, value.width, value.height))
  },
})

Layer.define('name', {
  /**
   * The name of the layer.
   *
   * @return {string} The layer's name.
   */
  get() {
    return String(this._object.name())
  },

  /**
   * Set the name of the layer.
   *
   * @param {string} name The new name.
   */
  set(value) {
    if (this.isImmutable()) {
      return
    }
    this._object.setName(value)
  },
})

Layer.define('selected', {
  /**
   * Whether the layer is selected or not.
   *
   * @return {Boolean} selected.
   */
  get() {
    // undefined when immutable
    return this._object.isSelected && !!this._object.isSelected()
  },

  set(value) {
    if (this.isImmutable()) {
      return
    }
    if (value) {
      this._object.select_byExtendingSelection(true, true)
    } else {
      this._object.select_byExtendingSelection(false, true)
    }
  },
})

Layer.define('flow', {
  get() {
    if (!this._object.flow()) {
      return undefined
    }
    return Flow.fromNative(this._object.flow())
  },
  set(flow) {
    if (this.isImmutable()) {
      return
    }
    if (!flow) {
      this._object.flow = null
      return
    }
    this._object.flow = Flow.from(flow).sketchObject
  },
})

Layer.define('hidden', {
  get() {
    return !this._object.isVisible()
  },
  set(hidden) {
    if (this.isImmutable()) {
      return
    }
    this._object.setIsVisible(!hidden)
  },
})

Layer.define('locked', {
  get() {
    return !!this._object.isLocked()
  },
  set(locked) {
    if (this.isImmutable()) {
      return
    }
    this._object.setIsLocked(locked)
  },
})

Layer.define('exportFormats', {
  array: true,
  get() {
    return toArray(this._object.exportOptions().exportFormats() || []).map(
      ExportFormat.fromNative.bind(ExportFormat)
    )
  },
  set(exportFormats) {
    if (this.isImmutable()) {
      return
    }

    this._object
      .exportOptions()
      .setExportFormats(
        toArray(exportFormats).map(
          e => wrapObject(e, Types.ExportFormat).sketchObject
        )
      )
  },
  insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined
    }
    const arr = toArray(this._object.exportOptions().exportFormats() || [])
    arr.splice(index, 0, item)
    this.exportFormats = arr
    return wrapObject(item, Types.ExportFormat)
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return undefined
    }
    const arr = toArray(this._object.exportOptions().exportFormats() || [])
    const removed = arr.splice(index, 1)
    this.exportFormats = arr
    return ExportFormat.fromNative(removed[0])
  },
})

Layer.defineObject('transform', {
  rotation: {
    get() {
      // taken from MSLayer+Rotation.m
      // we are not using `userVisibleRotation` directly because it is not defined in the immutable classes

      // rotation math works counter-clockwise, but users think in clockwise rotation, so reverse
      let rotation = -Number(this._object.rotation())
      // -345 degrees is better expressed as 15 degrees
      while (rotation <= -180) {
        rotation += 360
      }
      // anything more than 360 can be subtracted for clarity
      rotation %= 360

      // rotation might be -0 so let's return 0
      if (rotation === 0) {
        return 0
      }
      return rotation
    },
    set(rotation) {
      if (this._parent.isImmutable()) {
        return
      }
      this._object.applyUserVisibleRotation_explicitRotationCenter(
        rotation,
        null
      )
    },
  },
  flippedHorizontally: {
    get() {
      return Boolean(Number(this._object.isFlippedHorizontal()))
    },
    set(flipped) {
      if (this._parent.isImmutable()) {
        return
      }
      this._object.setIsFlippedHorizontal(flipped)
    },
  },
  flippedVertically: {
    get() {
      return Boolean(Number(this._object.isFlippedVertical()))
    },
    set(flipped) {
      if (this._parent.isImmutable()) {
        return
      }
      this._object.setIsFlippedVertical(flipped)
    },
  },
})
