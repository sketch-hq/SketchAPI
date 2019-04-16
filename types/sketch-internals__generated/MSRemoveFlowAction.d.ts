interface MSRemoveFlowActionUninitialized<InitializedType = MSRemoveFlowAction> extends MSFlowBaseActionUninitialized<MSRemoveFlowAction> {}
interface MSRemoveFlowAction extends MSFlowBaseAction {
  removeFlow(sender: any): IBAction;
}
declare const MSRemoveFlowAction: {
  alloc(): MSRemoveFlowActionUninitialized;
  class(): MSRemoveFlowAction;
}

