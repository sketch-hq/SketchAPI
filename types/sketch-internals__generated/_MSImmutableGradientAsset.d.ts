interface _MSImmutableGradientAssetUninitialized<InitializedType = _MSImmutableGradientAsset> extends MSImmutableAssetContainerUninitialized<_MSImmutableGradientAsset> {}

interface _MSImmutableGradientAsset extends MSImmutableAssetContainer {

  gradient(): MSImmutableGradient;
}

declare const _MSImmutableGradientAsset: {
  alloc(): _MSImmutableGradientAssetUninitialized;
  class(): _MSImmutableGradientAsset;
}

