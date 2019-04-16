interface MSZoomToArtboardActionUninitialized<InitializedType = MSZoomToArtboardAction> extends MSDocumentActionUninitialized<MSZoomToArtboardAction> {}

interface MSZoomToArtboardAction extends MSDocumentAction {
}

declare const MSZoomToArtboardAction: {
  alloc(): MSZoomToArtboardActionUninitialized;
  class(): MSZoomToArtboardAction;
}

