import { toArray } from 'util'
import { wrapNativeObject } from '../wrapNativeObject'

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
   * Return the wrapped Sketch layers in the selection.
   *
   * @return {array} The selected layers.
   * */
  get layers() {
    const layers = toArray(this._object.selectedLayers().layers()).map(
      wrapNativeObject
    )
    return layers
  }

  /**
   * Return the number of selected layers.
   *
   * @return {number} The number of layers that are selected.
   */
  get length() {
    return this._object
      .selectedLayers()
      .layers()
      .count()
  }

  /**
   * Does the selection contain any layers?
   *
   * @return {boolean} true if the selection is empty.
   */
  get isEmpty() {
    return this.length === 0
  }

  /**
   * Clear the selection.
   */
  clear() {
    this._object.changeSelectionBySelectingLayers(null)
    return this
  }
}
