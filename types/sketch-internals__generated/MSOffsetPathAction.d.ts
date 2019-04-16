interface MSOffsetPathActionUninitialized<InitializedType = MSOffsetPathAction> extends MSDocumentActionUninitialized<MSOffsetPathAction> {}
interface MSOffsetPathAction extends MSDocumentAction {
  offsetPath(sender: any): IBAction;
}
declare const MSOffsetPathAction: {
  alloc(): MSOffsetPathActionUninitialized;
  class(): MSOffsetPathAction;
}

