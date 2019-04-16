interface MSImmutableAssetCollectionUninitialized<InitializedType = MSImmutableAssetCollection> extends _MSImmutableAssetCollectionUninitialized<MSImmutableAssetCollection> {}
interface MSImmutableAssetCollection extends _MSImmutableAssetCollection {
}
declare const MSImmutableAssetCollection: {
  alloc(): MSImmutableAssetCollectionUninitialized;
  class(): MSImmutableAssetCollection;
}

