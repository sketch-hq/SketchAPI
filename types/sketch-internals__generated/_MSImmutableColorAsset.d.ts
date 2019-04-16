interface _MSImmutableColorAssetUninitialized<InitializedType = _MSImmutableColorAsset> extends MSImmutableAssetContainerUninitialized<_MSImmutableColorAsset> {}

interface _MSImmutableColorAsset extends MSImmutableAssetContainer {

  color(): MSImmutableColor;
}

declare const _MSImmutableColorAsset: {
  alloc(): _MSImmutableColorAssetUninitialized;
  class(): _MSImmutableColorAsset;
}

