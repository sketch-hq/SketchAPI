interface MSShowReplaceColorSheetActionUninitialized<InitializedType = MSShowReplaceColorSheetAction> extends MSDocumentActionUninitialized<MSShowReplaceColorSheetAction> {}

interface MSShowReplaceColorSheetAction extends MSDocumentAction {
  showReplaceColorSheet(sender: any | null): IBAction;
}

declare const MSShowReplaceColorSheetAction: {
  alloc(): MSShowReplaceColorSheetActionUninitialized;
  class(): MSShowReplaceColorSheetAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

