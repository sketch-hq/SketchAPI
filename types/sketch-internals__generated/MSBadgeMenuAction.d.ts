interface MSBadgeMenuActionUninitialized<InitializedType = MSBadgeMenuAction> extends MSDocumentActionUninitialized<MSBadgeMenuAction> {}
interface MSBadgeMenuAction extends MSDocumentAction, IMSWindowBadgeAction {
}
declare const MSBadgeMenuAction: {
  alloc(): MSBadgeMenuActionUninitialized;
  class(): MSBadgeMenuAction;
}

