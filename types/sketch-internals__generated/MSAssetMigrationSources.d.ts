interface MSAssetMigrationSourcesUninitialized<InitializedType = MSAssetMigrationSources> extends NSObjectUninitialized<MSAssetMigrationSources> {}
interface MSAssetMigrationSources extends NSObject {

  imageURL(): NSURL;
  setImageURL(imageURL: NSURL): void;
}
declare const MSAssetMigrationSources: {
  alloc(): MSAssetMigrationSourcesUninitialized;
  class(): MSAssetMigrationSources;
}

