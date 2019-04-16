interface MSDataSupplierUninitialized<InitializedType = MSDataSupplier> extends NSObjectUninitialized<MSDataSupplier> {
  initWithDataIdentifier_dataName_dataType(dataIdentifier: NSString | string, dataName: NSString | string, dataType: MSDataType): InitializedType;
}
interface MSDataSupplier extends NSObject, INSCoding {
  isEqualToDataSupplier(object: MSDataSupplier): boolean;
  resetMenuItemImage(): void;
  imageFileURLForDataItem(dataItem: NSString | string): NSURL;
  applyDataWithCount_data_dataApplier(count: NSUInteger, dataArray: NSArray<any> | any[], block: MSDataApplierBlock): void;
  applyDataAtIndex_datum_dataApplier(index: NSUInteger, dataItem: NSString | string, block: MSDataApplierBlock): void;
  generateDataForLayers_dataSupplierManager_dataApplier_completionHandler(layers: NSArray<any> | any[], manager: MSDataSupplierManager, applierBlock: MSDataApplierBlock, completionHandler: BCVoidBlock | null): void;
  generateDataForOverrides_dataSupplierManager_dataApplier_completionHandler(overrides: NSArray<any> | any[], manager: MSDataSupplierManager, applierBlock: MSDataApplierBlock, completionHandler: BCVoidBlock | null): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  dataName(): NSString;
  setDataName(dataName: NSString | string): void;
  displayName(): NSString;
  dataType(): MSDataType;
  uttDataType(): NSString;
  dataIdentifier(): NSString;
  valid(): boolean;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  isUsableDataSupplier(): boolean;
  menuItemImage(): NSImage;
}
declare const MSDataSupplier: {
  alloc(): MSDataSupplierUninitialized;
  class(): MSDataSupplier;
}

