interface MSScaleActionUninitialized<InitializedType = MSScaleAction> extends MSDocumentActionUninitialized<MSScaleAction> {}
interface MSScaleAction extends MSDocumentAction {
  scale(sender: any): IBAction;
}
declare const MSScaleAction: {
  alloc(): MSScaleActionUninitialized;
  class(): MSScaleAction;
}

