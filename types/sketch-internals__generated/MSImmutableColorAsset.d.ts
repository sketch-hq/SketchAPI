interface MSImmutableColorAssetUninitialized<InitializedType = MSImmutableColorAsset> extends _MSImmutableColorAssetUninitialized<MSImmutableColorAsset> {}
interface MSImmutableColorAsset extends _MSImmutableColorAsset {
}
declare const MSImmutableColorAsset: {
  alloc(): MSImmutableColorAssetUninitialized;
  class(): MSImmutableColorAsset;
}

