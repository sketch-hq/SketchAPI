interface _MSColorAssetUninitialized<InitializedType = _MSColorAsset> extends MSAssetContainerUninitialized<_MSColorAsset> {}

interface _MSColorAsset extends MSAssetContainer {

  color(): MSColor;
  setColor(color: MSColor): void;
}

declare const _MSColorAsset: {
  alloc(): _MSColorAssetUninitialized;
  class(): _MSColorAsset;
}

