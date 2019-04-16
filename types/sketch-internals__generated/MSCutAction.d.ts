interface MSCutActionUninitialized<InitializedType = MSCutAction> extends MSDocumentActionUninitialized<MSCutAction> {}
interface MSCutAction extends MSDocumentAction {
}
declare const MSCutAction: {
  alloc(): MSCutActionUninitialized;
  class(): MSCutAction;
}

