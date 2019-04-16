interface MSRedoActionUninitialized<InitializedType = MSRedoAction> extends MSUndoBaseActionUninitialized<MSRedoAction> {}

interface MSRedoAction extends MSUndoBaseAction {
  redo(sender: any): IBAction;
}

declare const MSRedoAction: {
  alloc(): MSRedoActionUninitialized;
  class(): MSRedoAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

