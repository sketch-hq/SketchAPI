interface _MSSliceLayerUninitialized<InitializedType = _MSSliceLayer> extends MSLayerUninitialized<_MSSliceLayer> {}

interface _MSSliceLayer extends MSLayer {

  hasBackgroundColor(): boolean;
  setHasBackgroundColor(hasBackgroundColor: boolean): void;
  backgroundColor(): MSColor;
  setBackgroundColor(backgroundColor: MSColor): void;
}

declare const _MSSliceLayer: {
  alloc(): _MSSliceLayerUninitialized;
  class(): _MSSliceLayer;
  alignLayers_withMode_toKey_pixelFit(layerArray: MSLayerArray, mode: MSLayerAlignmentMode, key: NSString | string, shouldPixelFit: boolean): void;
  userVisibleRotationForRotation(r: CGFloat): CGFloat;
  rotationForUserVisibleRotation(r: CGFloat): CGFloat;
  layerWithPath(path: MSPath): MSStyledLayer;
  makeLayerNamesUnique_withOptions(layers: NSArray<any> | any[], options: MSLayerRenameOptions): void;
}

