interface MSConstraintActionUninitialized<InitializedType = MSConstraintAction> extends MSDocumentActionUninitialized<MSConstraintAction> {}

interface MSConstraintAction extends MSDocumentAction {

  actionKeyPath(): NSString;
  validationKeyPath(): NSString;
}

declare const MSConstraintAction: {
  alloc(): MSConstraintActionUninitialized;
  class(): MSConstraintAction;
}

