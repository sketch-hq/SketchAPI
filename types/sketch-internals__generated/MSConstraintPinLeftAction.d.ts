interface MSConstraintPinLeftActionUninitialized<InitializedType = MSConstraintPinLeftAction> extends MSConstraintActionUninitialized<MSConstraintPinLeftAction> {}
interface MSConstraintPinLeftAction extends MSConstraintAction {
  pinLeftAction(sender: any): IBAction;
}
declare const MSConstraintPinLeftAction: {
  alloc(): MSConstraintPinLeftActionUninitialized;
  class(): MSConstraintPinLeftAction;
}

