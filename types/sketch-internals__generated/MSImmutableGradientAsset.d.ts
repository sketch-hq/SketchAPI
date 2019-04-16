interface MSImmutableGradientAssetUninitialized<InitializedType = MSImmutableGradientAsset> extends _MSImmutableGradientAssetUninitialized<MSImmutableGradientAsset> {}

interface MSImmutableGradientAsset extends _MSImmutableGradientAsset {
}

declare const MSImmutableGradientAsset: {
  alloc(): MSImmutableGradientAssetUninitialized;
  class(): MSImmutableGradientAsset;
}

