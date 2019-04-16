interface MSCopyActionUninitialized<InitializedType = MSCopyAction> extends MSDocumentActionUninitialized<MSCopyAction> {}
interface MSCopyAction extends MSDocumentAction {
}
declare const MSCopyAction: {
  alloc(): MSCopyActionUninitialized;
  class(): MSCopyAction;
}

