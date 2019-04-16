interface MSAddAsLibraryActionUninitialized<InitializedType = MSAddAsLibraryAction> extends MSDocumentActionUninitialized<MSAddAsLibraryAction> {}
interface MSAddAsLibraryAction extends MSDocumentAction {
  addAsLibraryAction(sender: any): IBAction;
}
declare const MSAddAsLibraryAction: {
  alloc(): MSAddAsLibraryActionUninitialized;
  class(): MSAddAsLibraryAction;
}

