import { isNumber } from 'util'
import { proxyProperty, initProxyProperties } from '../utils'

export class Point {
  constructor(x, y) {
    initProxyProperties(this)

    const isObject = x && isNumber(x.x)

    proxyProperty(this, 'x', isObject ? parseFloat(x.x) : parseFloat(x))
    proxyProperty(this, 'y', isObject ? parseFloat(x.y) : parseFloat(y))
  }

  asCGPoint() {
    return CGPointMake(this._x, this._y)
  }

  asNSPoint() {
    return NSMakePoint(this._x, this._y)
  }

  toJSON() {
    return {
      x: this._x,
      y: this._y,
    }
  }
}
