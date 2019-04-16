interface MSConstraintResetActionUninitialized<InitializedType = MSConstraintResetAction> extends MSDocumentActionUninitialized<MSConstraintResetAction> {}

interface MSConstraintResetAction extends MSDocumentAction {
  resetConstraintAction(sender: any): IBAction;
}

declare const MSConstraintResetAction: {
  alloc(): MSConstraintResetActionUninitialized;
  class(): MSConstraintResetAction;
}

