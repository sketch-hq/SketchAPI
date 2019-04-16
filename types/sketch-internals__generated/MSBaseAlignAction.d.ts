interface MSBaseAlignActionUninitialized<InitializedType = MSBaseAlignAction> extends MSDocumentActionUninitialized<MSBaseAlignAction> {}
interface MSBaseAlignAction extends MSDocumentAction {
  textAlignment(): NSTextAlignment;
}
declare const MSBaseAlignAction: {
  alloc(): MSBaseAlignActionUninitialized;
  class(): MSBaseAlignAction;
}

