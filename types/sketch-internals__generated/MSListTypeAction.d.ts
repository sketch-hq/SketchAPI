interface MSListTypeActionUninitialized<InitializedType = MSListTypeAction> extends MSDocumentActionUninitialized<MSListTypeAction> {}
interface MSListTypeAction extends MSDocumentAction {
}
declare const MSListTypeAction: {
  alloc(): MSListTypeActionUninitialized;
  class(): MSListTypeAction;
}

