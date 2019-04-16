interface MSGradientAssetUninitialized<InitializedType = MSGradientAsset> extends _MSGradientAssetUninitialized<MSGradientAsset> {}
interface MSGradientAsset extends _MSGradientAsset {

  displayName(): NSString;
}
declare const MSGradientAsset: {
  alloc(): MSGradientAssetUninitialized;
  class(): MSGradientAsset;
}

