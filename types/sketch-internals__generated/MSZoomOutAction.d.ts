interface MSZoomOutActionUninitialized<InitializedType = MSZoomOutAction> extends MSDocumentActionUninitialized<MSZoomOutAction> {}
interface MSZoomOutAction extends MSDocumentAction {
}
declare const MSZoomOutAction: {
  alloc(): MSZoomOutActionUninitialized;
  class(): MSZoomOutAction;
}

