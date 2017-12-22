import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Rectangle } from '../Rectangle'
import { wrapObject, wrapNativeObject } from '../wrapNativeObject'

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
    MSLayerMovement.moveToFront([this._object])
    return this
  }

  /**
   * Move this layer forward in its container.
   */
  moveForward() {
    MSLayerMovement.moveForward([this._object])
    return this
  }

  /**
   * Move this layer to the back of its container.
   */
  moveToBack() {
    MSLayerMovement.moveToBack([this._object])
    return this
  }

  /**
   * Move this layer backwards in its container.
   */
  moveBackward() {
    MSLayerMovement.moveBackward([this._object])
    return this
  }

  /**
   * Convert a rectangle in the coordinates that this layer uses to absolute (page) coordinates.
   *
   * @param {Rectangle} rect The rectangle to convert.
   * @return {Rectangle} The converted rectangle expressed in page coordinates.
   */
  localRectToPageRect(rect) {
    const _rect = this._object.convertRectToAbsoluteCoordinates(rect.asCGRect)
    return new Rectangle(_rect.x, _rect.y, _rect.width, _rect.height)
  }

  /**
   * Convert a rectangle in the coordinates that this layer uses to it's parent's coordinates.
   *
   * @param {Rectangle} rect The rectangle to convert.
   * @return {Rectangle} The converted rectangle expressed in the coordinate system of the parent layer.
   */
  localRectToParentRect(rect) {
    const { frame } = this
    return new Rectangle(
      rect.x + frame.x,
      rect.y + frame.y,
      rect.width,
      rect.height
    )
  }
}

Layer[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }

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
    layer = wrapObject(layer) // eslint-disable-line

    if (this._object.parentGroup()) {
      this._object.removeFromParent()
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
    return new Rectangle(f.x(), f.y(), f.width(), f.height())
  },

  /**
   * Set the frame of the layer.
   * This will move and/or resize the layer as appropriate.
   * The new frame should be given in coordinates that are local to the parent of the layer.
   *
   * @param {Rectangle} frame - The new frame of the layer.
   */
  set(value) {
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
    this._object.setName(value)
  },
})

Layer.define('selected', {
  /**
   * Wether the layer is selected or not.
   *
   * @return {Boolean} selected.
   */
  get() {
    return !!this._object.isSelected()
  },

  set(value) {
    if (value) {
      this._object.select_byExtendingSelection(true, true)
    } else {
      this._object.select_byExtendingSelection(false, true)
    }
  },
})
