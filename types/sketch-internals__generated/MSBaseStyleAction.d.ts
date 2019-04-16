interface MSBaseStyleActionUninitialized<InitializedType = MSBaseStyleAction> extends MSDocumentActionUninitialized<MSBaseStyleAction> {}
interface MSBaseStyleAction extends MSDocumentAction {
}
declare const MSBaseStyleAction: {
  alloc(): MSBaseStyleActionUninitialized;
  class(): MSBaseStyleAction;
}

