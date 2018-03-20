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
    Object.defineProperty(this, '_x', {
      enumerable: false,
      writable: true,
      value: x.x,
    })
    Object.defineProperty(this, '_y', {
      enumerable: false,
      writable: true,
      value: x.x,
    })
    Object.defineProperty(this, '_width', {
      enumerable: false,
      writable: true,
      value: x.x,
    })
    Object.defineProperty(this, '_height', {
      enumerable: false,
      writable: true,
      value: x.x,
    })
    // if the argument is object
    if (typeof x === 'object' && typeof x.x === 'number') {
      this._x = parseFloat(x.x)
      this._y = parseFloat(x.y)
      this._width = parseFloat(x.width)
      this._height = parseFloat(x.height)
    } else {
      /**
       * The x coordinate of the top-left corner of the rectangle.
       * @type {number}
       */
      this._x = parseFloat(x)

      /**
       * The y coordinate of the top-left corner of the rectangle.
       * @type {number}
       */
      this._y = parseFloat(y)

      /**
       * The width of the rectangle.
       * @type {number}
       */
      this._width = parseFloat(width)

      /**
       * The height of the rectangle.
       * @type {number}
       */
      this._height = parseFloat(height)
    }

    Object.defineProperty(this, '_parent', {
      enumerable: false,
      writable: true,
    })

    Object.defineProperty(this, '_parentKey', {
      enumerable: false,
      writable: true,
    })

    Object.defineProperty(this, 'x', {
      enumerable: true,
      get() {
        return this._x
      },
      set(_x) {
        this._x = _x
        if (this._parent && this._parentKey) {
          this._parent[this._parentKey] = this
        }
      },
    })

    Object.defineProperty(this, 'y', {
      enumerable: true,
      get() {
        return this._y
      },
      set(_y) {
        this._y = _y
        if (this._parent && this._parentKey) {
          this._parent[this._parentKey] = this
        }
      },
    })

    Object.defineProperty(this, 'width', {
      enumerable: true,
      get() {
        return this._width
      },
      set(_width) {
        this._width = _width
        if (this._parent && this._parentKey) {
          this._parent[this._parentKey] = this
        }
      },
    })

    Object.defineProperty(this, 'height', {
      enumerable: true,
      get() {
        return this._height
      },
      set(_height) {
        this._height = _height
        if (this._parent && this._parentKey) {
          this._parent[this._parentKey] = this
        }
      },
    })
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
}
