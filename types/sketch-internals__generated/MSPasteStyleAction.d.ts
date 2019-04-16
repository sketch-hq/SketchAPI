interface MSPasteStyleActionUninitialized<InitializedType = MSPasteStyleAction> extends MSDocumentActionUninitialized<MSPasteStyleAction> {}
interface MSPasteStyleAction extends MSDocumentAction {
  pasteStyle(sender: any): IBAction;
}
declare const MSPasteStyleAction: {
  alloc(): MSPasteStyleActionUninitialized;
  class(): MSPasteStyleAction;
}

