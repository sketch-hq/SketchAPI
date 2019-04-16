interface MSToggleBaseActionUninitialized<InitializedType = MSToggleBaseAction> extends MSDocumentActionUninitialized<MSToggleBaseAction> {}
interface MSToggleBaseAction extends MSDocumentAction {
}
declare const MSToggleBaseAction: {
  alloc(): MSToggleBaseActionUninitialized;
  class(): MSToggleBaseAction;
}

