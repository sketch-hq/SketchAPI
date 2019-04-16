interface MSChangeInferredLayoutActionUninitialized<InitializedType = MSChangeInferredLayoutAction> extends MSDocumentActionUninitialized<MSChangeInferredLayoutAction> {}

interface MSChangeInferredLayoutAction extends MSDocumentAction {
  changeInferredLayout(sender: any): IBAction;
}

declare const MSChangeInferredLayoutAction: {
  alloc(): MSChangeInferredLayoutActionUninitialized;
  class(): MSChangeInferredLayoutAction;
}

