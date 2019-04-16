interface MSReplaceColorActionUninitialized<InitializedType = MSReplaceColorAction> extends MSDocumentActionUninitialized<MSReplaceColorAction> {}

interface MSReplaceColorAction extends MSDocumentAction {
  replaceColor(sender: any): IBAction;
}

declare const MSReplaceColorAction: {
  alloc(): MSReplaceColorActionUninitialized;
  class(): MSReplaceColorAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

