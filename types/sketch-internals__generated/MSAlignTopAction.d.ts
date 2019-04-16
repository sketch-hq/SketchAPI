interface MSAlignTopActionUninitialized<InitializedType = MSAlignTopAction> extends MSTextVerticalAlignmentActionUninitialized<MSAlignTopAction> {}
interface MSAlignTopAction extends MSTextVerticalAlignmentAction {
  alignTop(sender: any): IBAction;
}
declare const MSAlignTopAction: {
  alloc(): MSAlignTopActionUninitialized;
  class(): MSAlignTopAction;
}

