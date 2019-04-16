interface MSConstraintPinTopActionUninitialized<InitializedType = MSConstraintPinTopAction> extends MSConstraintActionUninitialized<MSConstraintPinTopAction> {}
interface MSConstraintPinTopAction extends MSConstraintAction {
  pinTopAction(sender: any): IBAction;
}
declare const MSConstraintPinTopAction: {
  alloc(): MSConstraintPinTopActionUninitialized;
  class(): MSConstraintPinTopAction;
}

