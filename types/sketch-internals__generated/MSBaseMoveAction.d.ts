interface MSBaseMoveActionUninitialized<InitializedType = MSBaseMoveAction> extends MSDocumentActionUninitialized<MSBaseMoveAction> {}
interface MSBaseMoveAction extends MSDocumentAction {
}
declare const MSBaseMoveAction: {
  alloc(): MSBaseMoveActionUninitialized;
  class(): MSBaseMoveAction;
}

