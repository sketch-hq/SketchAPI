interface _MSImmutableAssetCollectionUninitialized<InitializedType = _MSImmutableAssetCollection> extends MSImmutableModelObjectUninitialized<_MSImmutableAssetCollection> {}

interface _MSImmutableAssetCollection extends MSImmutableModelObject {

  images(): NSArray<any>;
  colorAssets(): NSArray<any>;
  exportPresets(): NSArray<any>;
  gradientAssets(): NSArray<any>;
  imageCollection(): MSImmutableImageCollection;
}

declare const _MSImmutableAssetCollection: {
  alloc(): _MSImmutableAssetCollectionUninitialized;
  class(): _MSImmutableAssetCollection;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

