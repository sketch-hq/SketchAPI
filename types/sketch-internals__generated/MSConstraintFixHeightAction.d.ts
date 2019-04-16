interface MSConstraintFixHeightActionUninitialized<InitializedType = MSConstraintFixHeightAction> extends MSConstraintActionUninitialized<MSConstraintFixHeightAction> {}

interface MSConstraintFixHeightAction extends MSConstraintAction {
  fixHeightAction(sender: any): IBAction;
}

declare const MSConstraintFixHeightAction: {
  alloc(): MSConstraintFixHeightActionUninitialized;
  class(): MSConstraintFixHeightAction;
}

