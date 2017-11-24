import { toArray } from './utils'
import { wrapObject } from './wrapNativeObject'

/**
 * Iterate through a bunch of native Sketch layers, executing a block.
 * Used internally by Group and Selection.
 *
 * @param {array} layers The layers to iterate over.
 * @param {function(layer: Layer)} filter A filter function to call for each layer. If it returns false, the layer is skipped.
 * @param {function(layer: Layer)} block The function to execute for each layer.
 */
export function iterateWithNativeLayers(layers, filter, block) {
  // if we're given a string as a filter, treat it as a function
  // to call on the layer
  let loopBlock = block
  if (typeof filter === 'string' || filter instanceof String) {
    loopBlock = layer => {
      if (layer[filter]) {
        block(layer)
      }
    }
  } else if (filter) {
    loopBlock = layer => {
      if (filter(layer)) {
        block(layer)
      }
    }
  }

  toArray(layers).forEach(item => {
    const layer = wrapObject(item)
    loopBlock(layer)
  })
}
