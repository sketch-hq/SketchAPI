import { toArray } from 'util'
import { ColorAsset, GradientAsset } from './models/Asset'

/**
 * Access any global colors
 *
 * @return {Array<ColorAsset>} A list of color assets defined globally
 */
export function globalColors() {
  const native = MSPersistentAssetCollection.sharedGlobalAssets().colorAssets()
  return toArray(native).map(a => ColorAsset.fromNative(a))
}

/**
 * Access any global gradients
 *
 * @return {Array<GradientAsset>} A list of gradient assets defined globally
 */
export function globalGradients() {
  const native = MSPersistentAssetCollection.sharedGlobalAssets().gradientAssets()
  return toArray(native).map(a => GradientAsset.fromNative(a))
}
