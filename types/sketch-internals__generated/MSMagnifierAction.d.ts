interface MSMagnifierActionUninitialized<InitializedType = MSMagnifierAction> extends MSDocumentActionUninitialized<MSMagnifierAction> {}
interface MSMagnifierAction extends MSDocumentAction {
}
declare const MSMagnifierAction: {
  alloc(): MSMagnifierActionUninitialized;
  class(): MSMagnifierAction;
}

