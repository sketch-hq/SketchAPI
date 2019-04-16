interface MSZoomToSelectionActionUninitialized<InitializedType = MSZoomToSelectionAction> extends MSDocumentActionUninitialized<MSZoomToSelectionAction> {}
interface MSZoomToSelectionAction extends MSDocumentAction {
}
declare const MSZoomToSelectionAction: {
  alloc(): MSZoomToSelectionActionUninitialized;
  class(): MSZoomToSelectionAction;
}

