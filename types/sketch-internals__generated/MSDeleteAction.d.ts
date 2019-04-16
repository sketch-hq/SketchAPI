interface MSDeleteActionUninitialized<InitializedType = MSDeleteAction> extends MSDocumentActionUninitialized<MSDeleteAction> {}
interface MSDeleteAction extends MSDocumentAction {
}
declare const MSDeleteAction: {
  alloc(): MSDeleteActionUninitialized;
  class(): MSDeleteAction;
}

