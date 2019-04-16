interface MSTextVerticalAlignmentActionUninitialized<InitializedType = MSTextVerticalAlignmentAction> extends MSDocumentActionUninitialized<MSTextVerticalAlignmentAction> {}

interface MSTextVerticalAlignmentAction extends MSDocumentAction {
  verticalAlignment(): MSTextStyleVerticalAlignment;
}

declare const MSTextVerticalAlignmentAction: {
  alloc(): MSTextVerticalAlignmentActionUninitialized;
  class(): MSTextVerticalAlignmentAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

