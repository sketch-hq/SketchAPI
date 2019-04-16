interface MSAddFlowActionUninitialized<InitializedType = MSAddFlowAction> extends MSFlowBaseActionUninitialized<MSAddFlowAction> {}

interface MSAddFlowAction extends MSFlowBaseAction {
  addFlow(sender: any): IBAction;
}

declare const MSAddFlowAction: {
  alloc(): MSAddFlowActionUninitialized;
  class(): MSAddFlowAction;
}

