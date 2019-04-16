interface MSConstraintPinRightActionUninitialized<InitializedType = MSConstraintPinRightAction> extends MSConstraintActionUninitialized<MSConstraintPinRightAction> {}
interface MSConstraintPinRightAction extends MSConstraintAction {
  pinRightAction(sender: any): IBAction;
}
declare const MSConstraintPinRightAction: {
  alloc(): MSConstraintPinRightActionUninitialized;
  class(): MSConstraintPinRightAction;
}

