interface MSNewPageActionUninitialized<InitializedType = MSNewPageAction> extends MSDocumentActionUninitialized<MSNewPageAction> {}
interface MSNewPageAction extends MSDocumentAction {
  addNewPage(sender: any): IBAction;
}
declare const MSNewPageAction: {
  alloc(): MSNewPageActionUninitialized;
  class(): MSNewPageAction;
}

