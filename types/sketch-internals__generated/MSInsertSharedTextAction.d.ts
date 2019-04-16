interface MSInsertSharedTextActionUninitialized<InitializedType = MSInsertSharedTextAction> extends MSSharedObjectActionUninitialized<MSInsertSharedTextAction> {}
interface MSInsertSharedTextAction extends MSSharedObjectAction, INSMenuDelegate {
}
declare const MSInsertSharedTextAction: {
  alloc(): MSInsertSharedTextActionUninitialized;
  class(): MSInsertSharedTextAction;
}

