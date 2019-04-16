interface MSLockLayerActionUninitialized<InitializedType = MSLockLayerAction> extends MSDocumentActionUninitialized<MSLockLayerAction> {}
interface MSLockLayerAction extends MSDocumentAction {
  lockLayer(sender: any): IBAction;
}
declare const MSLockLayerAction: {
  alloc(): MSLockLayerActionUninitialized;
  class(): MSLockLayerAction;
}

