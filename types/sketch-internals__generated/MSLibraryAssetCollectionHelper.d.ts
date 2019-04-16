interface MSLibraryAssetCollectionHelperUninitialized<InitializedType = MSLibraryAssetCollectionHelper> extends NSObjectUninitialized<MSLibraryAssetCollectionHelper> {
  initWithCollection_libraryIdentifier_name_assetType_dataURL_ioQueue(assetCollection: MSImmutableAssetCollection, libraryIdentifier: NSString | string, name: NSString | string, assetType: MSAsset, dataURL: NSURL, dispatchQueue: dispatch_queue_t): InitializedType;
}
interface MSLibraryAssetCollectionHelper extends NSObject {
  getIndexesOfNewAssets(callback: Block): void;
  markCollectionAsRead(callback: Block): void;
  dataSource(): MSAssetCollectionViewDataSource;

  libraryIdentifier(): NSString;
}
declare const MSLibraryAssetCollectionHelper: {
  alloc(): MSLibraryAssetCollectionHelperUninitialized;
  class(): MSLibraryAssetCollectionHelper;
}

