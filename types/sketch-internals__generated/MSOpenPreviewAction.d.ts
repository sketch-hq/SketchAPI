interface MSOpenPreviewActionUninitialized<InitializedType = MSOpenPreviewAction> extends MSDocumentActionUninitialized<MSOpenPreviewAction> {}
interface MSOpenPreviewAction extends MSDocumentAction {
  openMirrorPreview(sender: any): IBAction;
}
declare const MSOpenPreviewAction: {
  alloc(): MSOpenPreviewActionUninitialized;
  class(): MSOpenPreviewAction;
}

