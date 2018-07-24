import { proxyProperty, initProxyProperties } from '../utils'

export class Point {
  constructor(x, y) {
    initProxyProperties(this)

    proxyProperty(this, 'x', parseFloat(x))
    proxyProperty(this, 'y', parseFloat(y))

    // if the argument is object
    if (typeof x === 'object' && typeof x.x === 'number') {
      this._x = parseFloat(x.x)
      this._y = parseFloat(x.y)
    }
  }

  toJSON() {
    return {
      x: this._x,
      y: this._y,
    }
  }
}
