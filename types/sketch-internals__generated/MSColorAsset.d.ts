interface MSColorAssetUninitialized<InitializedType = MSColorAsset> extends _MSColorAssetUninitialized<MSColorAsset> {}

interface MSColorAsset extends _MSColorAsset {

  displayName(): NSString;
}

declare const MSColorAsset: {
  alloc(): MSColorAssetUninitialized;
  class(): MSColorAsset;
}

