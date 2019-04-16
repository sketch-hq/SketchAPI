interface MSReduceImageSizeActionUninitialized<InitializedType = MSReduceImageSizeAction> extends MSDocumentActionUninitialized<MSReduceImageSizeAction> {}
interface MSReduceImageSizeAction extends MSDocumentAction {
  reduceImageSize(sender: any): IBAction;
}
declare const MSReduceImageSizeAction: {
  alloc(): MSReduceImageSizeActionUninitialized;
  class(): MSReduceImageSizeAction;
}

