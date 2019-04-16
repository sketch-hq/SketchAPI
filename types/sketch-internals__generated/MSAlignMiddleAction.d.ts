interface MSAlignMiddleActionUninitialized<InitializedType = MSAlignMiddleAction> extends MSTextVerticalAlignmentActionUninitialized<MSAlignMiddleAction> {}
interface MSAlignMiddleAction extends MSTextVerticalAlignmentAction {
  alignMiddle(sender: any): IBAction;
}
declare const MSAlignMiddleAction: {
  alloc(): MSAlignMiddleActionUninitialized;
  class(): MSAlignMiddleAction;
}

