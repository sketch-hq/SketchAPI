interface MSBooleanMenuActionUninitialized<InitializedType = MSBooleanMenuAction> extends MSDocumentActionUninitialized<MSBooleanMenuAction> {}
interface MSBooleanMenuAction extends MSDocumentAction {
}
declare const MSBooleanMenuAction: {
  alloc(): MSBooleanMenuActionUninitialized;
  class(): MSBooleanMenuAction;
}

