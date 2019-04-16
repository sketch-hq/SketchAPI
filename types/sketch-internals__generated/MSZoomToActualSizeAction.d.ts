interface MSZoomToActualSizeActionUninitialized<InitializedType = MSZoomToActualSizeAction> extends MSDocumentActionUninitialized<MSZoomToActualSizeAction> {}
interface MSZoomToActualSizeAction extends MSDocumentAction {
  actualSize(sender: any): IBAction;
}
declare const MSZoomToActualSizeAction: {
  alloc(): MSZoomToActualSizeActionUninitialized;
  class(): MSZoomToActualSizeAction;
}

