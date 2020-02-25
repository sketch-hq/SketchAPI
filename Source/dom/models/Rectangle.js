import { isNumber } from 'util'
import { wrapObject } from '../wrapNativeObject'
import { proxyProperty, initProxyProperties } from '../utils'

/**
 * Represents a rectangle.
 */
export class Rectangle {
  /**
   * Return a new Rectangle object for a given x,y, width and height.
   *
   * @param {number | Rectangle} x The x coordinate of the top-left corner of the rectangle. Or a Rectangle.
   * @param {number} y The y coordinate of the top-left corner of the rectangle.
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   * @return The new Rectangle object.
   */
  constructor(x, y, width, height) {
    initProxyProperties(this)

    if (x && x.origin && isNumber(x.origin.x)) {
      proxyProperty(this, 'x', parseFloat(x.origin.x))
      proxyProperty(this, 'y', parseFloat(x.origin.y))
      proxyProperty(this, 'width', parseFloat(x.size.width))
      proxyProperty(this, 'height', parseFloat(x.size.height))
    } else if (x && isNumber(x.x)) {
      proxyProperty(this, 'x', parseFloat(x.x))
      proxyProperty(this, 'y', parseFloat(x.y))
      proxyProperty(this, 'width', parseFloat(x.width))
      proxyProperty(this, 'height', parseFloat(x.height))
    } else {
      proxyProperty(this, 'x', parseFloat(x))
      proxyProperty(this, 'y', parseFloat(y))
      proxyProperty(this, 'width', parseFloat(width))
      proxyProperty(this, 'height', parseFloat(height))
    }
  }

  /**
   * Adjust this rectangle by offsetting it.
   *
   * @param {number} x The x offset to apply.
   * @param {number} y The y offset to apply.
   */
  offset(x, y) {
    this._x += parseFloat(x)
    this._y += parseFloat(y)
    if (this._parent && this._parentKey) {
      this._parent[this._parentKey] = this
    }
    return this
  }

  scale(factorWidth, factorHeight) {
    this._width *= parseFloat(factorWidth)
    this._height *= parseFloat(
      typeof factorHeight === 'undefined' ? factorWidth : factorHeight
    )
    if (this._parent && this._parentKey) {
      this._parent[this._parentKey] = this
    }
    return this
  }

  /**
   * Return the Rectangle as a CGRect.
   *
   * @return {CGRect} The rectangle.
   */
  asCGRect() {
    return CGRectMake(this._x, this._y, this._width, this._height)
  }

  asNSRect() {
    return NSMakeRect(this._x, this._y, this._width, this._height)
  }

  /**
   * Return a string description of the rectangle.
   *
   * @return {string} Description of the rectangle.
   */
  toString() {
    return `{${this._x}, ${this._y}, ${this._width}, ${this._height}}`
  }

  toJSON() {
    return {
      x: this._x,
      y: this._y,
      width: this._width,
      height: this._height,
    }
  }

  /**
   * Convert a rectangle in the coordinates that a layer uses to another layer's coordinates.
   *
   * @param {Layer} layerA The layer in which the rectangle's coordinates are expressed.
   * @param {Layer} layerB The layer in which the rectangle's coordinates will be expressed.
   * @return {Rectangle} The converted rectangle expressed in the coordinate system of the layerB layer.
   */
  changeBasis({ from, to } = {}) {
    const fromLayer = wrapObject(from)
    const toLayer = wrapObject(to)
    if (!fromLayer) {
      if (
        !toLayer ||
        !toLayer.sketchObject ||
        !toLayer.sketchObject.convertPoint_fromCoordinateSpace
      ) {
        throw new Error(`Expected a coordinate space, got ${to}`)
      }
      const origin = toLayer.sketchObject.convertPoint_fromCoordinateSpace(
        NSMakePoint(this.x, this.y),
        null
      )
      return new Rectangle(origin.x, origin.y, this.width, this.height)
    }
    if (
      !fromLayer.sketchObject ||
      !fromLayer.sketchObject.convertPoint_toCoordinateSpace
    ) {
      throw new Error(`Expected a coordinate space, got ${from}`)
    }
    const origin = fromLayer.sketchObject.convertPoint_toCoordinateSpace(
      NSMakePoint(this.x, this.y),
      toLayer ? toLayer.sketchObject : null
    )
    return new Rectangle(origin.x, origin.y, this.width, this.height)
  }
}
