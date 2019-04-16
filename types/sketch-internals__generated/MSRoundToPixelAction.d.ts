interface MSRoundToPixelActionUninitialized<InitializedType = MSRoundToPixelAction> extends MSDocumentActionUninitialized<MSRoundToPixelAction> {}
interface MSRoundToPixelAction extends MSDocumentAction {
  roundToPixel(sender: any): IBAction;
}
declare const MSRoundToPixelAction: {
  alloc(): MSRoundToPixelActionUninitialized;
  class(): MSRoundToPixelAction;
}

