interface _MSGradientAssetUninitialized<InitializedType = _MSGradientAsset> extends MSAssetContainerUninitialized<_MSGradientAsset> {}

interface _MSGradientAsset extends MSAssetContainer {

  gradient(): MSGradient;
  setGradient(gradient: MSGradient): void;
}

declare const _MSGradientAsset: {
  alloc(): _MSGradientAssetUninitialized;
  class(): _MSGradientAsset;
}

