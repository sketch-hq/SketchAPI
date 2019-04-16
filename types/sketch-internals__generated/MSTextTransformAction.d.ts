interface MSTextTransformActionUninitialized<InitializedType = MSTextTransformAction> extends MSDocumentActionUninitialized<MSTextTransformAction> {}
interface MSTextTransformAction extends MSDocumentAction {
}
declare const MSTextTransformAction: {
  alloc(): MSTextTransformActionUninitialized;
  class(): MSTextTransformAction;
}

