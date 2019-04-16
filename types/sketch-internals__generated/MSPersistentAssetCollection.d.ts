interface MSPersistentAssetCollectionUninitialized<InitializedType = MSPersistentAssetCollection> extends MSAssetCollectionUninitialized<MSPersistentAssetCollection> {}

interface MSPersistentAssetCollection extends MSAssetCollection {
  save(): void;
  saveIfNeeded(): void;
  resourceNeedingMigration(): NSArray<any>;
  cleanupAfterTesting(): void;
}

declare const MSPersistentAssetCollection: {
  alloc(): MSPersistentAssetCollectionUninitialized;
  class(): MSPersistentAssetCollection;
  sharedGlobalAssets(): MSPersistentAssetCollection;
  assetCollectionWithName(name: NSString | string): MSPersistentAssetCollection;
  assetCollectionFromCurrentBundleWithName(name: NSString | string): MSPersistentAssetCollection;
  assetCollectionWithURL(url: NSURL): MSPersistentAssetCollection;
  assetCollectionByMigratingPresetsFromSources(sources: MSAssetMigrationSources): MSPersistentAssetCollection;
  defaultMigrationSources(): MSAssetMigrationSources;
}

