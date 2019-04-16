interface MSInsertVectorActionUninitialized<InitializedType = MSInsertVectorAction> extends MSDocumentActionUninitialized<MSInsertVectorAction> {}
interface MSInsertVectorAction extends MSDocumentAction {
  insertVector(sender: any): IBAction;
}
declare const MSInsertVectorAction: {
  alloc(): MSInsertVectorActionUninitialized;
  class(): MSInsertVectorAction;
}

