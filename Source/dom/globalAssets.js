import { toArray } from 'util'
import { colorToString } from './style/Color'
import { Gradient } from './style/Gradient'

export function globalColors() {
  const colors = toArray(
    MSPersistentAssetCollection.sharedGlobalAssets().colorAssets()
  )
  return colors.map(a => ({
    color: colorToString(a.color()),
    name: a.name(),
  }))
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
