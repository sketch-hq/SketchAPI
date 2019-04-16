interface MSReversePathActionUninitialized<InitializedType = MSReversePathAction> extends MSDocumentActionUninitialized<MSReversePathAction> {}

interface MSReversePathAction extends MSDocumentAction {
  reversePath(sender: any): IBAction;
}

declare const MSReversePathAction: {
  alloc(): MSReversePathActionUninitialized;
  class(): MSReversePathAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

