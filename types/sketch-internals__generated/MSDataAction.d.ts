interface MSDataActionUninitialized<InitializedType = MSDataAction> extends MSDocumentActionUninitialized<MSDataAction> {}
interface MSDataAction extends MSDocumentAction {

  helper(): MSDataMenuHelper;
  dataSupplierManager(): MSDataSupplierManager;
}
declare const MSDataAction: {
  alloc(): MSDataActionUninitialized;
  class(): MSDataAction;
}

