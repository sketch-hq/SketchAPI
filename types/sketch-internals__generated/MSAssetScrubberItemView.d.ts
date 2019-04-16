interface MSAssetScrubberItemViewUninitialized<InitializedType = MSAssetScrubberItemView> extends NSScrubberItemViewUninitialized<MSAssetScrubberItemView> {
  initWithAsset_canvasColorSpace_isFirst_isLast_tailPadding(asset: any, colorSpace: NSColorSpace, isFirst: boolean, isLast: boolean, tailPadding: CGFloat): InitializedType;
}
interface MSAssetScrubberItemView extends NSScrubberItemView {

  color(): MSColor;
  canvasColorSpace(): NSColorSpace;
  gradient(): MSGradient;
  pattern(): MSImageData;
  isFirstInCollection(): boolean;
  isLastInCollection(): boolean;
  tailPadding(): CGFloat;
}
declare const MSAssetScrubberItemView: {
  alloc(): MSAssetScrubberItemViewUninitialized;
  class(): MSAssetScrubberItemView;
}

