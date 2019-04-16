interface MSDataMenuHelperUninitialized<InitializedType = MSDataMenuHelper> extends NSObjectUninitialized<MSDataMenuHelper> {
  initWithDataManager(manager: MSDataSupplierManager): InitializedType;
}
interface MSDataMenuHelper extends NSObject {
  applyDataFromSupplier(dataSupplier: MSDataSupplier): void;
  refreshDataOnSelectedLayers(): void;
  clearDataIdentifiersOnSelectedLayers(): void;

  documentData(): MSDocumentData;
  setDocumentData(documentData: MSDocumentData): void;
  applicableDataTypesDataTypeFromCurrentSelection(): MSDataType;
  dataIdentifiersInCurrentSelection(): NSSet<any>;
  refreshDataText(): NSString;
  selectedLayersHaveClearableDataIdentifiers(): boolean;
}
declare const MSDataMenuHelper: {
  alloc(): MSDataMenuHelperUninitialized;
  class(): MSDataMenuHelper;
}

