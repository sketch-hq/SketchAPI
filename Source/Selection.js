// ********************************
// # Selection.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { toArray } from './utils'
import { wrapNativeObject } from './wrapNativeObject'

import { iterateWithNativeLayers } from './deprecated-helpers'

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

  /**
   * Return the native Sketch layers in the selection.
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
    return this.layers.length
  }

  /**
   * Does the selection contain any layers?
   *
   * @return {boolean} true if the selection is empty.
   */
  get isEmpty() {
    return this.layers.length === 0
  }

  /**
   * Perform an action once for each layer in the selection, then clear it.
   *
   * @param {function(layer: Layer)} block The function to execute for each layer.
   */
  iterateThenClear(block) {
    log(
      '`iterateThenClear` is deprecated. Use `selection.layers.forEach(); selection.clear()`'
    )
    iterateWithNativeLayers(this.layers, null, block)
    this.clear()
  }

  /**
   * Perform an action once for each layer in the selection that passes a filter, then clear the selection.
   *
   * @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
   * @param {function(layer: Layer)} block The function to execute for each layer.
   */
  iterateWithFilterThenClear(filter, block) {
    log(
      '`iterateWithFilterThenClear` is deprecated. Use `selection.layers.filter().forEach(); selection.clear()`'
    )
    iterateWithNativeLayers(this.layers, filter, block)
    this.clear()
  }

  /**
   * Perform an action once for each layer in the selection.
   *
   * @param {function(layer: Layer)} block The function to execute for each layer.
   */
  iterate(block) {
    log('`iterate` is deprecated. Use `selection.layers.forEach()`')
    iterateWithNativeLayers(this.layers, null, block)
  }

  /**
   * Perform an action once for each layer in the selection that passes a filter.
   *
   * @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
   * @param {function(layer: Layer)} block The function to execute for each layer.
   */
  iterateWithFilter(filter, block) {
    log(
      '`iterateWithFilter` is deprecated. Use `selection.layers.filter().forEach()`'
    )
    iterateWithNativeLayers(this.layers, filter, block)
  }

  /**
   * Clear the selection.
   */
  clear() {
    this._object.changeSelectionBySelectingLayers(null)
  }
}
