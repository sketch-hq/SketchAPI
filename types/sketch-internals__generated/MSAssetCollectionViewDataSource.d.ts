interface MSAssetCollectionViewDataSourceUninitialized<InitializedType = MSAssetCollectionViewDataSource> extends NSObjectUninitialized<MSAssetCollectionViewDataSource> {
  initWithAssetCollection_assetType_identifier_name_title_isLibrary_delegate(assetCollection: MSAssetCollection, assetType: MSAsset, identifier: NSString | string, name: NSString | string, title: NSString | string | null, isLibrary: boolean, delegate: any | null): InitializedType;
}
interface MSAssetCollectionViewDataSource extends NSObject, INSCollectionViewDataSource {
  prepareCollectionView(collectionView: NSCollectionView): void;
  highlightAsset_inCollectionView(asset: any, collectionView: NSCollectionView): void;
  addAsset_withName(asset: any, name: NSString | string | null): NSIndexPath;
  setName_ofAssetAtIndexPath(name: NSString | string, indexPath: NSIndexPath): void;
  nameOfAssetAtIndexPath(indexPath: NSIndexPath): NSString;
  deleteAssetAtIndexPath(sourcePath: NSIndexPath): void;
  moveAssetAtIndexPath_toIndexPath(sourcePath: NSIndexPath, destinationPath: NSIndexPath): void;
  assetAtIndex(index: NSUInteger): any;
  numberOfAssets(): NSUInteger;
  pasteboardRepresentationForIndexPath(indexPath: NSIndexPath): any;
  getUpdatedIndexes(callback: Block): void;
  markUpdatedIndexesAsRead(): void;

  assetType(): MSAsset;
  identifier(): NSString;
  name(): NSString;
  title(): NSString;
  isLibrary(): boolean;
  editable(): boolean;
  delegate(): any;
  setDelegate(delegate: any): void;
  itemProvider(): any;
  setItemProvider(itemProvider: any): void;
}
declare const MSAssetCollectionViewDataSource: {
  alloc(): MSAssetCollectionViewDataSourceUninitialized;
  class(): MSAssetCollectionViewDataSource;
}

