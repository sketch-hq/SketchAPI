interface MSZoomActionUninitialized<InitializedType = MSZoomAction> extends MSDocumentActionUninitialized<MSZoomAction> {}
interface MSZoomAction extends MSDocumentAction {
}
declare const MSZoomAction: {
  alloc(): MSZoomActionUninitialized;
  class(): MSZoomAction;
}

