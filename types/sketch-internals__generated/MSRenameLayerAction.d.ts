interface MSRenameLayerActionUninitialized<InitializedType = MSRenameLayerAction> extends MSDocumentActionUninitialized<MSRenameLayerAction> {}
interface MSRenameLayerAction extends MSDocumentAction {
  renameLayer(sender: any): IBAction;
}
declare const MSRenameLayerAction: {
  alloc(): MSRenameLayerActionUninitialized;
  class(): MSRenameLayerAction;
}

