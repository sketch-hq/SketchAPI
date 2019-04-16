interface MSViewMenuActionUninitialized<InitializedType = MSViewMenuAction> extends MSDocumentActionUninitialized<MSViewMenuAction> {}
interface MSViewMenuAction extends MSDocumentAction {
}
declare const MSViewMenuAction: {
  alloc(): MSViewMenuActionUninitialized;
  class(): MSViewMenuAction;
}

