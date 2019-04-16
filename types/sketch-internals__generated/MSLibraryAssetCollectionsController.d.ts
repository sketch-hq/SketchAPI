interface MSLibraryAssetCollectionsControllerUninitialized<InitializedType = MSLibraryAssetCollectionsController> extends NSObjectUninitialized<MSLibraryAssetCollectionsController> {
  initWithAssetLibraryController(libraryController: MSAssetLibraryController): InitializedType;
}
interface MSLibraryAssetCollectionsController extends NSObject {
  dataSourcesForAssetType(asset: MSAsset): NSArray<any>;
  dataSourcesWithContentForAssetType_exludingDocumentsAtURLs(asset: MSAsset, documentsToExclude: NSArray<any> | any[]): NSArray<any>;
  dataSourceWithIdentifier_forAssetType(identifier: NSString | string, assetType: MSAsset): MSAssetCollectionViewDataSource;
  reload(): void;
}
declare const MSLibraryAssetCollectionsController: {
  alloc(): MSLibraryAssetCollectionsControllerUninitialized;
  class(): MSLibraryAssetCollectionsController;
}

