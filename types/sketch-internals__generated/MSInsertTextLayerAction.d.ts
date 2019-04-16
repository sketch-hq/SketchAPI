interface MSInsertTextLayerActionUninitialized<InitializedType = MSInsertTextLayerAction> extends MSBaseInsertActionUninitialized<MSInsertTextLayerAction> {}
interface MSInsertTextLayerAction extends MSBaseInsertAction {
  insertTextLayer(sender: any): IBAction;
}
declare const MSInsertTextLayerAction: {
  alloc(): MSInsertTextLayerActionUninitialized;
  class(): MSInsertTextLayerAction;
}

