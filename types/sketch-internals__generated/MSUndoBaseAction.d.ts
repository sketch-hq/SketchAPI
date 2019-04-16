interface MSUndoBaseActionUninitialized<InitializedType = MSUndoBaseAction> extends MSDocumentActionUninitialized<MSUndoBaseAction> {}

interface MSUndoBaseAction extends MSDocumentAction {
}

declare const MSUndoBaseAction: {
  alloc(): MSUndoBaseActionUninitialized;
  class(): MSUndoBaseAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

