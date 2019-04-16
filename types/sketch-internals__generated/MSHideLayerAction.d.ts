interface MSHideLayerActionUninitialized<InitializedType = MSHideLayerAction> extends MSDocumentActionUninitialized<MSHideLayerAction> {}
interface MSHideLayerAction extends MSDocumentAction {
  hideLayer(sender: any): IBAction;
}
declare const MSHideLayerAction: {
  alloc(): MSHideLayerActionUninitialized;
  class(): MSHideLayerAction;
}

