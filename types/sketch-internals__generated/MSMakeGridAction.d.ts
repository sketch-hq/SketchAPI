interface MSMakeGridActionUninitialized<InitializedType = MSMakeGridAction> extends MSDocumentActionUninitialized<MSMakeGridAction> {}
interface MSMakeGridAction extends MSDocumentAction {
}
declare const MSMakeGridAction: {
  alloc(): MSMakeGridActionUninitialized;
  class(): MSMakeGridAction;
}

