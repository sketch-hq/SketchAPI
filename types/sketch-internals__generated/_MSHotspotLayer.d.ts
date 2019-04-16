interface _MSHotspotLayerUninitialized<InitializedType = _MSHotspotLayer> extends MSLayerUninitialized<_MSHotspotLayer> {}

interface _MSHotspotLayer extends MSLayer {
}

declare const _MSHotspotLayer: {
  alloc(): _MSHotspotLayerUninitialized;
  class(): _MSHotspotLayer;
  alignLayers_withMode_toKey_pixelFit(layerArray: MSLayerArray, mode: MSLayerAlignmentMode, key: NSString | string, shouldPixelFit: boolean): void;
  userVisibleRotationForRotation(r: CGFloat): CGFloat;
  rotationForUserVisibleRotation(r: CGFloat): CGFloat;
  layerWithPath(path: MSPath): MSStyledLayer;
  makeLayerNamesUnique_withOptions(layers: NSArray<any> | any[], options: MSLayerRenameOptions): void;
}

