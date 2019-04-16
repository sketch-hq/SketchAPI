interface MSInsertSliceActionUninitialized<InitializedType = MSInsertSliceAction> extends MSDocumentActionUninitialized<MSInsertSliceAction> {}

interface MSInsertSliceAction extends MSDocumentAction {
  insertSlice(sender: any): IBAction;
}

declare const MSInsertSliceAction: {
  alloc(): MSInsertSliceActionUninitialized;
  class(): MSInsertSliceAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

