interface MSConstraintPinBottomActionUninitialized<InitializedType = MSConstraintPinBottomAction> extends MSConstraintActionUninitialized<MSConstraintPinBottomAction> {}

interface MSConstraintPinBottomAction extends MSConstraintAction {
  pinBottomAction(sender: any): IBAction;
}

declare const MSConstraintPinBottomAction: {
  alloc(): MSConstraintPinBottomActionUninitialized;
  class(): MSConstraintPinBottomAction;
}

