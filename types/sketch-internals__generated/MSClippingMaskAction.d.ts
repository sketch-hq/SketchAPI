interface MSClippingMaskActionUninitialized<InitializedType = MSClippingMaskAction> extends MSDocumentActionUninitialized<MSClippingMaskAction> {}
interface MSClippingMaskAction extends MSDocumentAction {
  clippingMask(sender: any): IBAction;
}
declare const MSClippingMaskAction: {
  alloc(): MSClippingMaskActionUninitialized;
  class(): MSClippingMaskAction;
}

