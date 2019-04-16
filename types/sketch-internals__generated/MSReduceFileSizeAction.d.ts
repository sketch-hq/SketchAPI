interface MSReduceFileSizeActionUninitialized<InitializedType = MSReduceFileSizeAction> extends MSDocumentActionUninitialized<MSReduceFileSizeAction> {}
interface MSReduceFileSizeAction extends MSDocumentAction {
}
declare const MSReduceFileSizeAction: {
  alloc(): MSReduceFileSizeActionUninitialized;
  class(): MSReduceFileSizeAction;
}

