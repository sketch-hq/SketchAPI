interface MSFindLayerActionUninitialized<InitializedType = MSFindLayerAction> extends MSDocumentActionUninitialized<MSFindLayerAction> {}
interface MSFindLayerAction extends MSDocumentAction {
  findLayer(sender: any): IBAction;
}
declare const MSFindLayerAction: {
  alloc(): MSFindLayerActionUninitialized;
  class(): MSFindLayerAction;
}

