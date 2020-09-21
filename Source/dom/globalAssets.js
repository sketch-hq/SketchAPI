import { toArray } from 'util'
import { ColorAsset, GradientAsset } from './assets'
import { hookedArray } from './utils'

export const globalAssets = {}

const nativeAssets = MSPersistentAssetCollection.sharedGlobalAssets()
/**
 * Access any global colors
 *
 * @return {Array<ColorAsset>} A list of color assets defined globally
 */
const globalColorsDescriptor = {
  get() {
    const arr = toArray(nativeAssets.colorAssets()).map((a) =>
      ColorAsset.fromNative(a)
    )
    return hookedArray(arr, null, globalColorsDescriptor)
  },
  set(colors) {
    nativeAssets.removeAllColorAssets()
    toArray(colors)
      .map((c) => ColorAsset.from(c))
      .forEach((c) => {
        nativeAssets.addColorAsset(c._object)
      })
  },
  insertItem(color, index) {
    const wrapped = ColorAsset.from(color)
    nativeAssets.insertColorAsset_atIndex(wrapped._object, index)
    return wrapped
  },
  removeItem(index) {
    return nativeAssets.removeColorAssetAtIndex(index)
  },
}
Object.defineProperty(globalAssets, 'colors', globalColorsDescriptor)

/**
 * Access any global gradients
 *
 * @return {Array<GradientAsset>} A list of gradient assets defined globally
 */
const globalGradientsDescriptor = {
  get() {
    const arr = toArray(nativeAssets.gradientAssets()).map((a) =>
      GradientAsset.fromNative(a)
    )
    return hookedArray(arr, null, globalGradientsDescriptor)
  },
  set(gradients) {
    nativeAssets.removeAllGradientAssets()
    toArray(gradients)
      .map((c) => GradientAsset.from(c))
      .forEach((c) => {
        nativeAssets.addGradientAsset(c._object)
      })
  },
  insertItem(gradient, index) {
    const wrapped = GradientAsset.from(gradient)
    nativeAssets.insertGradientAsset_atIndex(wrapped._object, index)
    return wrapped
  },
  removeItem(index) {
    return nativeAssets.removeGradientAssetAtIndex(index)
  },
}
Object.defineProperty(globalAssets, 'gradients', globalGradientsDescriptor)

export function getGlobalColors() {
  console.warn(
    'sketch.getGlobalColors() is deprecated. Use sketch.globalAssets.colors instead'
  )
  return toArray(nativeAssets.colorAssets()).map((a) =>
    ColorAsset.fromNative(a)
  )
}

export function getGlobalGradients() {
  console.warn(
    'sketch.getGlobalGradients() is deprecated. Use sketch.globalAssets.gradients instead'
  )
  return toArray(nativeAssets.gradientAssets()).map((a) =>
    GradientAsset.fromNative(a)
  )
}