interface MSAssetCollectionUninitialized<InitializedType = MSAssetCollection> extends _MSAssetCollectionUninitialized<MSAssetCollection> {}
interface MSAssetCollection extends _MSAssetCollection {
  numberOfAssetsOfType(type: MSAsset): NSUInteger;
  addAsset(asset: any): void;
  addAsset_withName(asset: any, name: NSString | string | null): void;
  nameOfAssetAtIndex_ofType(index: NSUInteger, type: MSAsset): NSString;
  setName_forAssetAtIndex_ofType(name: NSString | string | null, index: NSUInteger, type: MSAsset): void;
  assetAtIndex_ofType(index: NSUInteger, type: MSAsset): any;
  removeAssetAtIndex_ofType(index: NSUInteger, type: MSAsset): void;
  indexesOfAsset(asset: any): NSIndexSet;
  moveAssetAtIndex_beforeObjectAtIndex_ofType(fromIndex: NSUInteger, toIndex: NSUInteger, type: MSAsset): boolean;
}
declare const MSAssetCollection: {
  alloc(): MSAssetCollectionUninitialized;
  class(): MSAssetCollection;
}

