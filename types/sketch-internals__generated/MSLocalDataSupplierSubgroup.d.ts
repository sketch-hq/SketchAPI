interface MSLocalDataSupplierSubgroupUninitialized<InitializedType = MSLocalDataSupplierSubgroup> extends NSObjectUninitialized<MSLocalDataSupplierSubgroup> {
  initWithLocalDataSupplier_parentGroup(localDataSupplier: MSLocalDataSupplier, parentGroup: MSLocalDataSupplierGroup): InitializedType;
}
interface MSLocalDataSupplierSubgroup extends NSObject {
  dataSupplierMenuItemForDataType(dataType: MSDataType): NSMenuItem;

  dataSupplierIdentifiers(): NSArray<any>;
  subGroups(): NSArray<any>;
  parentGroup(): MSLocalDataSupplierGroup;
  subgroupURL(): NSURL;
}
declare const MSLocalDataSupplierSubgroup: {
  alloc(): MSLocalDataSupplierSubgroupUninitialized;
  class(): MSLocalDataSupplierSubgroup;  localDataSupplierSubgroupWithURL_localDataSupplierGroup(subgroupURL: NSURL, localDataSupplierGroup: MSLocalDataSupplierGroup): MSLocalDataSupplierSubgroup;

}

