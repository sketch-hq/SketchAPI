interface MSLayerYFocusActionUninitialized<InitializedType = MSLayerYFocusAction> extends MSDocumentActionUninitialized<MSLayerYFocusAction> {}
interface MSLayerYFocusAction extends MSDocumentAction {
}
declare const MSLayerYFocusAction: {
  alloc(): MSLayerYFocusActionUninitialized;
  class(): MSLayerYFocusAction;
}

