interface MSConstraintFixWidthActionUninitialized<InitializedType = MSConstraintFixWidthAction> extends MSConstraintActionUninitialized<MSConstraintFixWidthAction> {}
interface MSConstraintFixWidthAction extends MSConstraintAction {
  fixWidthAction(sender: any): IBAction;
}
declare const MSConstraintFixWidthAction: {
  alloc(): MSConstraintFixWidthActionUninitialized;
  class(): MSConstraintFixWidthAction;
}

