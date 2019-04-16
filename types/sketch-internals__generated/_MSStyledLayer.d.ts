interface _MSStyledLayerUninitialized<InitializedType = _MSStyledLayer> extends MSLayerUninitialized<_MSStyledLayer> {}

interface _MSStyledLayer extends MSLayer {

  clippingMaskMode(): NSInteger;
  setClippingMaskMode(clippingMaskMode: NSInteger): void;
  hasClippingMask(): boolean;
  setHasClippingMask(hasClippingMask: boolean): void;
  sharedStyleID(): NSString;
  setSharedStyleID(sharedStyleID: NSString | string): void;
  style(): MSStyle;
  setStyle(style: MSStyle): void;
}

declare const _MSStyledLayer: {
  alloc(): _MSStyledLayerUninitialized;
  class(): _MSStyledLayer;
  alignLayers_withMode_toKey_pixelFit(layerArray: MSLayerArray, mode: MSLayerAlignmentMode, key: NSString | string, shouldPixelFit: boolean): void;
  userVisibleRotationForRotation(r: CGFloat): CGFloat;
  rotationForUserVisibleRotation(r: CGFloat): CGFloat;
  layerWithPath(path: MSPath): MSStyledLayer;
  makeLayerNamesUnique_withOptions(layers: NSArray<any> | any[], options: MSLayerRenameOptions): void;
}

