interface MSToolsMenuActionUninitialized<InitializedType = MSToolsMenuAction> extends MSDocumentActionUninitialized<MSToolsMenuAction> {}
interface MSToolsMenuAction extends MSDocumentAction {
}
declare const MSToolsMenuAction: {
  alloc(): MSToolsMenuActionUninitialized;
  class(): MSToolsMenuAction;
}

