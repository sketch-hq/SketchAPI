interface MSLocalDataSupplierGroupUninitialized<InitializedType = MSLocalDataSupplierGroup> extends MSDataSupplierGroupUninitialized<MSLocalDataSupplierGroup> {
  initWithLocalDataSupplier_groupURL_delegate(localDataSupplier: MSLocalDataSupplier | null, groupURL: NSURL, delegate: any): InitializedType;
}
interface MSLocalDataSupplierGroup extends MSDataSupplierGroup {
  dataSupplierWithIdentifier(dataSupplierIdentifier: NSString | string): MSLocalDataSupplier;

  localDataSuppliers(): NSArray<any>;
  canGroupMultipleDataSuppliers(): boolean;
  groupFolder(): NSURL;
  anyLocalDataSupplier(): MSLocalDataSupplier;
  groupURL(): NSURL;
}
declare const MSLocalDataSupplierGroup: {
  alloc(): MSLocalDataSupplierGroupUninitialized;
  class(): MSLocalDataSupplierGroup;  localDataSupplierGroupFromFileSystemURL_dataSupplierDelegate(fileSystemURL: NSURL, dataSupplierDelegate: any): MSLocalDataSupplierGroup;

}

