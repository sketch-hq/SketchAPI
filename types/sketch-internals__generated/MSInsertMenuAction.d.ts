interface MSInsertMenuActionUninitialized<InitializedType = MSInsertMenuAction> extends MSDocumentActionUninitialized<MSInsertMenuAction> {}

interface MSInsertMenuAction extends MSDocumentAction {
}

declare const MSInsertMenuAction: {
  alloc(): MSInsertMenuActionUninitialized;
  class(): MSInsertMenuAction;
}

