interface MSUndoActionUninitialized<InitializedType = MSUndoAction> extends MSUndoBaseActionUninitialized<MSUndoAction> {}
interface MSUndoAction extends MSUndoBaseAction {
  undo(sender: any): IBAction;
}
declare const MSUndoAction: {
  alloc(): MSUndoActionUninitialized;
  class(): MSUndoAction;
}

