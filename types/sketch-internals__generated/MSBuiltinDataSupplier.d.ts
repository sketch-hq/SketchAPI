interface MSBuiltinDataSupplierUninitialized<InitializedType = MSBuiltinDataSupplier> extends MSLocalDataSupplierUninitialized<MSBuiltinDataSupplier> {}
interface MSBuiltinDataSupplier extends MSLocalDataSupplier {
}
declare const MSBuiltinDataSupplier: {
  alloc(): MSBuiltinDataSupplierUninitialized;
  class(): MSBuiltinDataSupplier;
}

