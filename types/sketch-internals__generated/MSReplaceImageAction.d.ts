interface MSReplaceImageActionUninitialized<InitializedType = MSReplaceImageAction> extends MSDocumentActionUninitialized<MSReplaceImageAction> {}
interface MSReplaceImageAction extends MSDocumentAction {
  replaceImage(sender: any): IBAction;
}
declare const MSReplaceImageAction: {
  alloc(): MSReplaceImageActionUninitialized;
  class(): MSReplaceImageAction;
}

