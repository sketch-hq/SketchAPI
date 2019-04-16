interface MSClippingMaskModeActionUninitialized<InitializedType = MSClippingMaskModeAction> extends MSDocumentActionUninitialized<MSClippingMaskModeAction> {}
interface MSClippingMaskModeAction extends MSDocumentAction {
  clippingMaskMode(sender: any): IBAction;
}
declare const MSClippingMaskModeAction: {
  alloc(): MSClippingMaskModeActionUninitialized;
  class(): MSClippingMaskModeAction;
}

