interface MSZoomInActionUninitialized<InitializedType = MSZoomInAction> extends MSDocumentActionUninitialized<MSZoomInAction> {}
interface MSZoomInAction extends MSDocumentAction {
}
declare const MSZoomInAction: {
  alloc(): MSZoomInActionUninitialized;
  class(): MSZoomInAction;
}

