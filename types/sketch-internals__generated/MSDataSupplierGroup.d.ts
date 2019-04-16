interface MSDataSupplierGroupUninitialized<InitializedType = MSDataSupplierGroup> extends NSObjectUninitialized<MSDataSupplierGroup> {
  initWithDataSuppliers_delegate(dataSuppliers: NSSet<any>, delegate: any): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface MSDataSupplierGroup extends NSObject, INSCoding {
  addDataSuppliers(dataSuppliers: NSSet<any>): void;
  postDecodingInitializingWithDelegate(delegate: any): boolean;
  makeGroupIdentifier(): NSString;
  removeDataSupplier(dataSupplier: MSDataSupplier): void;
  usableDataSuppliersOfDataType(dataType: MSDataType): NSArray<any>;
  dataSupplierMenuItemForDataType(dataType: MSDataType): NSMenuItem;
  notifyDelegateOfChanges(): void;

  dataSuppliers(): NSArray<any>;
  dataSuppliersDictionary(): NSDictionary<any, any>;
  groupName(): NSString;
  anyDataSupplier(): MSDataSupplier;
  groupIdentifier(): NSString;
  oneDataSupplierInGroup(): boolean;
  dataType(): MSDataType;
  delegate(): any;
  setDelegate(delegate: any): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  valid(): boolean;
}
declare const MSDataSupplierGroup: {
  alloc(): MSDataSupplierGroupUninitialized;
  class(): MSDataSupplierGroup;
}

