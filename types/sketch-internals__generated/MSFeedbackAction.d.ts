interface MSFeedbackActionUninitialized<InitializedType = MSFeedbackAction> extends MSActionUninitialized<MSFeedbackAction> {}
interface MSFeedbackAction extends MSAction {
  feedback(sender: any): IBAction;
}
declare const MSFeedbackAction: {
  alloc(): MSFeedbackActionUninitialized;
  class(): MSFeedbackAction;
}

