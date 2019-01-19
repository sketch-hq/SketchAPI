import { toArray } from 'util'
import { Gradient } from './style/Gradient'
import { ColorAsset } from './models/ColorAsset'

export function globalColors() {
  const native = MSPersistentAssetCollection.sharedGlobalAssets().colorAssets()
  return toArray(native).map(a => ColorAsset.fromNative(a))
}

export function globalGradients() {
  const gradients = toArray(
    MSPersistentAssetCollection.sharedGlobalAssets().gradientAssets()
  )
  return gradients.map(g => ({
    gradient: Gradient.fromNative(g.gradient()),
    name: g.name(),
  }))
}
