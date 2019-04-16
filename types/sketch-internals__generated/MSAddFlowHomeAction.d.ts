interface MSAddFlowHomeActionUninitialized<InitializedType = MSAddFlowHomeAction> extends MSFlowBaseActionUninitialized<MSAddFlowHomeAction> {}

interface MSAddFlowHomeAction extends MSFlowBaseAction {
  addFlowHome(sender: any): IBAction;
}

declare const MSAddFlowHomeAction: {
  alloc(): MSAddFlowHomeActionUninitialized;
  class(): MSAddFlowHomeAction;
}

