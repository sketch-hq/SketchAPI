interface MSAddFlowBackActionUninitialized<InitializedType = MSAddFlowBackAction> extends MSFlowBaseActionUninitialized<MSAddFlowBackAction> {}
interface MSAddFlowBackAction extends MSFlowBaseAction {
  addFlowBack(sender: any): IBAction;
}
declare const MSAddFlowBackAction: {
  alloc(): MSAddFlowBackActionUninitialized;
  class(): MSAddFlowBackAction;
}

