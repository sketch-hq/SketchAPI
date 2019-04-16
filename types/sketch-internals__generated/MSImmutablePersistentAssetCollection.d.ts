interface MSImmutablePersistentAssetCollectionUninitialized<InitializedType = MSImmutablePersistentAssetCollection> extends MSImmutableAssetCollectionUninitialized<MSImmutablePersistentAssetCollection> {}
interface MSImmutablePersistentAssetCollection extends MSImmutableAssetCollection {
}
declare const MSImmutablePersistentAssetCollection: {
  alloc(): MSImmutablePersistentAssetCollectionUninitialized;
  class(): MSImmutablePersistentAssetCollection;
}

