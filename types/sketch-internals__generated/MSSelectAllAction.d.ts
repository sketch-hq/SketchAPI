interface MSSelectAllActionUninitialized<InitializedType = MSSelectAllAction> extends MSDocumentActionUninitialized<MSSelectAllAction> {}
interface MSSelectAllAction extends MSDocumentAction {
}
declare const MSSelectAllAction: {
  alloc(): MSSelectAllActionUninitialized;
  class(): MSSelectAllAction;
}

