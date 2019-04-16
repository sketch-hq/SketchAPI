interface MSDataMenuActionUninitialized<InitializedType = MSDataMenuAction> extends MSDataMenuBaseActionUninitialized<MSDataMenuAction> {}
interface MSDataMenuAction extends MSDataMenuBaseAction {
}
declare const MSDataMenuAction: {
  alloc(): MSDataMenuActionUninitialized;
  class(): MSDataMenuAction;
}

