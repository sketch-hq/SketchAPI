interface MSFollowFlowActionUninitialized<InitializedType = MSFollowFlowAction> extends MSFlowBaseActionUninitialized<MSFollowFlowAction> {}
interface MSFollowFlowAction extends MSFlowBaseAction {
  followFlow(sender: any): IBAction;
}
declare const MSFollowFlowAction: {
  alloc(): MSFollowFlowActionUninitialized;
  class(): MSFollowFlowAction;
}

