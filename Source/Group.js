import { DefinedPropertiesKey } from './WrappedObject'
import { Layer } from './Layer'
import { Rectangle } from './Rectangle'
import { Style } from './Style'
import { Types } from './enums'
import { Factory } from './Factory'
import { toArray } from './utils'
import { wrapNativeObject, wrapObject } from './wrapNativeObject'

import { iterateWithNativeLayers } from './deprecated-helpers'

/**
 * Represents a group of layers.
 */
export class Group extends Layer {
  /**
   * Make a new group object.
   *
   * @param {MSLayerGroup} group  The underlying model object from Sketch.
   * @param {Document} document The document that the group belongs to.
   */
  constructor(group = {}, document) {
    if (document) {
      log(
        'using a constructor to box a native object is deprecated. Use `fromNative` instead'
      )
      return Group.fromNative(group)
    }

    if (!group.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      group.sketchObject = Factory.createNative(Group)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(group)
  }

  /**
   * Is this an group?
   *
   * All Layer objects respond to this method, but only Groups or things that inherit from groups return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isGroup() {
    return true
  }

  /**
   * Perform a function for every sub-layer inside this one.
   * The function will be passed a single argument each time it is
   * invoked - which will be an object representing the sub-layer.
   *
   * @param {function(layer: Layer)} block The function to execute for each layer.
   */
  iterate(block) {
    log('iterate is deprecated, use `.layers.forEach` instead')
    const layers = this._object.layers()
    iterateWithNativeLayers(layers, null, block)
  }

  /**
   * Perform a function for every sub-layer inside this one that passes a filter.
   * The function will be passed a single argument each time it is
   * invoked - which will be an object representing the sub-layer.
   *
   * @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
   * @param {function(layer: Layer)} block The function to execute for each layer.
   */
  iterateWithFilter(filter, block) {
    log(
      'iterateWithFilter is deprecated, use `.layers.filter(...).forEach` instead'
    )
    const layers = this._object.layers()
    iterateWithNativeLayers(layers, filter, block)
  }

  /**
   * Convert a rectangle in page coordinates to one relative to this container's coordinates.
   *
   * @param {Rectangle} rect The rectangle to convert.
   * @return {Rectangle} The rectangle in local coordinates.
   */
  pageRectToLocalRect(rect) {
    const origin = this._object.convertPoint_fromLayer_(
      NSMakePoint(rect.x, rect.y),
      null
    )
    return new Rectangle(origin.x, origin.y, rect.width, rect.height)
  }

  /**
   * Adjust the group to fit its children.
   */
  adjustToFit() {
    this._object.resizeToFitChildrenWithOption_(0)
    return this
  }

  /**
   * Add a new wrapped layer object to represent a Sketch layer.
   * Apply any supplied properties to the wrapper (which will apply
   * them in turn to the wrapped layer).
   *
   * @param {MSLayer} newLayer The underlying Sketch layer object.
   * @param {dictionary} properties The properties to apply.
   * @return {Layer} The wrapped layer object.
   */
  _addWrappedLayerWithProperties(newLayer, properties) {
    if (newLayer) {
      // add the Sketch object to this layer
      const layer = this._object
      layer.addLayers_(NSArray.arrayWithObject_(newLayer))

      // make a Javascript wrapper object for the new layer
      const wrapper = wrapNativeObject(newLayer)

      // apply properties, via the wrapper
      Object.keys(properties).forEach(p => {
        wrapper[p] = properties[p]
      })

      return wrapper
    }
    return undefined
  }

  /**
   * Extract the frame to use for a layer from some properties.
   * If the frame wasn't supplied in the properties, we return a default value instead.
   *
   * @param {dictionary} properties The properties to use when looking for a frame value.
   * @return {Rectangle} The frame rectangle to use.
   */
  _frameForLayerWithProperties(properties) {
    let { frame } = properties
    if (frame) {
      // eslint-disable-next-line no-param-reassign
      delete properties.frame
    } else {
      frame = new Rectangle(0, 0, 100, 100)
    }
    return frame
  }

  /**
   * Extract the style to use for a layer from some properties.
   * If the style wasn't supplied at all, we use the default one.
   */
  _styleForLayerWithProperties(properties) {
    const { style = new Style(), fills, borders } = properties

    /* eslint-disable no-param-reassign */

    if (fills) {
      delete properties.fills
      style.fills = fills
    }

    if (borders) {
      delete properties.borders
      style.borders = borders
    }

    /* eslint-enable */

    return style
  }

  /**
   * Returns a newly created shape, which has been added to this layer,
   * and sets it up using the supplied properties.
   *
   * @param {dictionary} properties Properties to apply to the shape.
   * @return {Shape} the new shape.
   */
  newShape(properties = {}) {
    log('`newShape` is deprecated. Use `new Shape({parent: myGroup})` instead')
    const frame = this._frameForLayerWithProperties(properties)
    // TODO: Eventually we want to distinguish between different shape sub-types here depending
    //       on what is set in properties ('frame', 'path', 'radius', etc), and to construct the
    //       appropriate layer type accordingly. For now we only make rectangles.
    const newLayer = MSShapeGroup.shapeWithRect_(frame.asCGRect())
    // eslint-disable-next-line no-param-reassign
    properties.style = this._styleForLayerWithProperties(properties)

    return this._addWrappedLayerWithProperties(newLayer, properties, 'Shape')
  }

  /**
   * Returns a newly created text layer, which has been added to this layer,
   * and sets it up using the supplied properties.
   *
   * @param {dictionary} properties Properties to apply to the text layer.
   * @return {Text} the new text layer.
   */
  newText(properties = {}) {
    log('`newText` is deprecated. Use `new Text({parent: myGroup})` instead')
    const frame = this._frameForLayerWithProperties(properties)
    const newLayer = MSTextLayer.alloc().initWithFrame_(frame.asCGRect())
    newLayer.adjustFrameToFit()
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Text')
  }

  /**
   * Returns a newly created group, which has been added to this layer,
   * and sets it up using the supplied properties.
   *
   * @param {dictionary} properties Properties to apply to the group.
   * @return {Group} the new group.
   */
  newGroup(properties = {}) {
    log('`newGroup` is deprecated. Use `new Group({parent: myGroup})` instead')
    const frame = this._frameForLayerWithProperties(properties)
    const newLayer = MSLayerGroup.alloc().initWithFrame_(frame.asCGRect())
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Group')
  }

  /**
   * Returns a newly created image layer, which has been added to this layer,
   * and sets it up using the supplied properties.
   *
   * @param {dictionary} properties Properties to apply to the layer.
   * @return {Image} the new image layer.
   */

  newImage(properties = {}) {
    log('`newImage` is deprecated. Use `new Image({parent: myGroup})` instead')
    const frame = this._frameForLayerWithProperties(properties)
    const newLayer = MSBitmapLayer.alloc().initWithFrame_(frame.asCGRect())
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Image')
  }
}

Group.type = Types.Group
Group[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Group, MSLayerGroup)

Group.define('layers', {
  exportable: false,
  get() {
    return toArray(this._object.layers()).map(wrapNativeObject)
  },
  set(layers) {
    // remove the existing layers
    toArray(this._object.layers()).forEach(l => l.removeFromParent())

    toArray(layers)
      .map(wrapObject)
      .forEach(layer => {
        layer.parent = this // eslint-disable-line
      })
  },
})
