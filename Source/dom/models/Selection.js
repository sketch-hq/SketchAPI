import { toArray } from 'util'
import { wrapNativeObject, wrapObject } from '../wrapNativeObject'

/**
 * Represents the layers that the user has selected.
 */
export class Selection {
  /**
   * Make a new Selection object.
   *
   * @param {Page} page The page that the selection relates to.
   */
  constructor(page) {
    this._object = page._object

    Object.defineProperty(this, '_object', {
      enumerable: false,
      writable: false,
      value: page._object,
    })

    Object.defineProperty(this, 'layers', {
      enumerable: true,
      get() {
        const layers = toArray(this._object.selectedLayers().layers()).map(
          wrapNativeObject
        )
        return layers
      },
      set(layers) {
        this._object.changeSelectionBySelectingLayers(
          (layers.layers || layers).map(l => wrapObject(l).sketchObject)
        )
      },
    })

    Object.defineProperty(this, 'length', {
      enumerable: true,
      get() {
        return this._object
          .selectedLayers()
          .layers()
          .count()
      },
    })

    Object.defineProperty(this, 'isEmpty', {
      enumerable: true,
      get() {
        return this.length === 0
      },
    })
  }

  forEach(fn) {
    return this.layers.forEach(fn)
  }

  map(fn) {
    return this.layers.map(fn)
  }

  reduce(fn, initial) {
    return this.layers.reduce(fn, initial)
  }

  /**
   * Clear the selection.
   */
  clear() {
    this._object.changeSelectionBySelectingLayers(null)
    return this
  }

  // print something nice
  toJSON() {
    return {
      layers: this.layers,
      length: this.length,
      isEmpty: this.isEmpty,
    }
  }
}
