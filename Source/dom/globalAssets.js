import { toArray } from 'util'
import { ColorAsset, GradientAsset } from './models/ColorAssets'

export function globalColors() {
  const native = MSPersistentAssetCollection.sharedGlobalAssets().colorAssets()
  return toArray(native).map(a => ColorAsset.fromNative(a))
}

export function globalGradients() {
  const native = MSPersistentAssetCollection.sharedGlobalAssets().gradientAssets()
  return toArray(native).map(a => GradientAsset.fromNative(a))
}
