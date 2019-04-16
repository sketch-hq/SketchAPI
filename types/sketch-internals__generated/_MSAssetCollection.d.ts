interface _MSAssetCollectionUninitialized<InitializedType = _MSAssetCollection> extends MSModelObjectUninitialized<_MSAssetCollection> {}

interface _MSAssetCollection extends MSModelObject {
  addColorAsset(value: MSColorAsset): void;
  addColorAssets(colorAssets: NSArray<any> | any[]): void;
  insertColorAsset_atIndex(value: MSColorAsset, index: NSUInteger): void;
  insertColorAsset_beforeColorAsset(value: MSColorAsset, after: MSColorAsset | null): void;
  insertColorAssets_beforeColorAsset(values: NSArray<any> | any[], before: MSColorAsset | null): void;
  insertColorAsset_afterColorAsset(value: MSColorAsset, after: MSColorAsset | null): void;
  insertColorAssets_afterColorAsset(values: NSArray<any> | any[], after: MSColorAsset | null): void;
  removeColorAsset(value: MSColorAsset): void;
  removeColorAssetAtIndex(index: NSUInteger): void;
  removeColorAssetsAtIndexes(indexes: NSIndexSet): void;
  removeAllColorAssets(): void;
  moveColorAssetIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addExportPreset(value: MSExportPreset): void;
  addExportPresets(exportPresets: NSArray<any> | any[]): void;
  insertExportPreset_atIndex(value: MSExportPreset, index: NSUInteger): void;
  insertExportPreset_beforeExportPreset(value: MSExportPreset, after: MSExportPreset | null): void;
  insertExportPresets_beforeExportPreset(values: NSArray<any> | any[], before: MSExportPreset | null): void;
  insertExportPreset_afterExportPreset(value: MSExportPreset, after: MSExportPreset | null): void;
  insertExportPresets_afterExportPreset(values: NSArray<any> | any[], after: MSExportPreset | null): void;
  removeExportPreset(value: MSExportPreset): void;
  removeExportPresetAtIndex(index: NSUInteger): void;
  removeExportPresetsAtIndexes(indexes: NSIndexSet): void;
  removeAllExportPresets(): void;
  moveExportPresetIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addGradientAsset(value: MSGradientAsset): void;
  addGradientAssets(gradientAssets: NSArray<any> | any[]): void;
  insertGradientAsset_atIndex(value: MSGradientAsset, index: NSUInteger): void;
  insertGradientAsset_beforeGradientAsset(value: MSGradientAsset, after: MSGradientAsset | null): void;
  insertGradientAssets_beforeGradientAsset(values: NSArray<any> | any[], before: MSGradientAsset | null): void;
  insertGradientAsset_afterGradientAsset(value: MSGradientAsset, after: MSGradientAsset | null): void;
  insertGradientAssets_afterGradientAsset(values: NSArray<any> | any[], after: MSGradientAsset | null): void;
  removeGradientAsset(value: MSGradientAsset): void;
  removeGradientAssetAtIndex(index: NSUInteger): void;
  removeGradientAssetsAtIndexes(indexes: NSIndexSet): void;
  removeAllGradientAssets(): void;
  moveGradientAssetIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  images(): NSArray<any>;
  setImages(images: NSArray<any> | any[]): void;
  colorAssets(): NSArray<any>;
  setColorAssets(colorAssets: NSArray<any> | any[]): void;
  exportPresets(): NSArray<any>;
  setExportPresets(exportPresets: NSArray<any> | any[]): void;
  gradientAssets(): NSArray<any>;
  setGradientAssets(gradientAssets: NSArray<any> | any[]): void;
  imageCollection(): MSImageCollection;
  setImageCollection(imageCollection: MSImageCollection): void;
}

declare const _MSAssetCollection: {
  alloc(): _MSAssetCollectionUninitialized;
  class(): _MSAssetCollection;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

