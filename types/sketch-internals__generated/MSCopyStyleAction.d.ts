interface MSCopyStyleActionUninitialized<InitializedType = MSCopyStyleAction> extends MSDocumentActionUninitialized<MSCopyStyleAction> {}
interface MSCopyStyleAction extends MSDocumentAction {
  copyStyle(sender: any): IBAction;
}
declare const MSCopyStyleAction: {
  alloc(): MSCopyStyleActionUninitialized;
  class(): MSCopyStyleAction;
}

