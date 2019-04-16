interface MSBuiltinDataSupplierGroupUninitialized<InitializedType = MSBuiltinDataSupplierGroup> extends MSDataSupplierGroupUninitialized<MSBuiltinDataSupplierGroup> {
  initWithBuiltinDataSuppliers_delegate(builtinDataSuppliers: NSSet<any>, delegate: any): InitializedType;
}
interface MSBuiltinDataSupplierGroup extends MSDataSupplierGroup, INSCoding {
  includesEncodedIdentifier(builtinDataIdentifier: NSString | string): boolean;

  builtinDataSuppliers(): NSArray<any>;
}
declare const MSBuiltinDataSupplierGroup: {
  alloc(): MSBuiltinDataSupplierGroupUninitialized;
  class(): MSBuiltinDataSupplierGroup;
}

