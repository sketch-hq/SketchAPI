interface MSUnderlineActionUninitialized<InitializedType = MSUnderlineAction> extends MSDocumentActionUninitialized<MSUnderlineAction> {}
interface MSUnderlineAction extends MSDocumentAction {
}
declare const MSUnderlineAction: {
  alloc(): MSUnderlineActionUninitialized;
  class(): MSUnderlineAction;
}

