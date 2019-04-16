interface MSResizeArtboardToFitActionUninitialized<InitializedType = MSResizeArtboardToFitAction> extends MSDocumentActionUninitialized<MSResizeArtboardToFitAction> {}
interface MSResizeArtboardToFitAction extends MSDocumentAction {
  resizeArtboardToFit(sender: any): IBAction;
}
declare const MSResizeArtboardToFitAction: {
  alloc(): MSResizeArtboardToFitActionUninitialized;
  class(): MSResizeArtboardToFitAction;
}

