interface MSSharedObjectActionUninitialized<InitializedType = MSSharedObjectAction> extends MSDocumentActionUninitialized<MSSharedObjectAction> {}
interface MSSharedObjectAction extends MSDocumentAction, INSMenuDelegate {
  sortedObjectMenuItemsForMenu(menu: NSMenu): NSArray<any>;

  sharedObjectName(): NSString;
  pluralizedSharedObjectName(): NSString;
}
declare const MSSharedObjectAction: {
  alloc(): MSSharedObjectActionUninitialized;
  class(): MSSharedObjectAction;
}

