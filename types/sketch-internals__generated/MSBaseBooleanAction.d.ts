interface MSBaseBooleanActionUninitialized<InitializedType = MSBaseBooleanAction> extends MSDocumentActionUninitialized<MSBaseBooleanAction> {}
interface MSBaseBooleanAction extends MSDocumentAction {
  booleanOperation(): MSBooleanOperation;
}
declare const MSBaseBooleanAction: {
  alloc(): MSBaseBooleanActionUninitialized;
  class(): MSBaseBooleanAction;
}

