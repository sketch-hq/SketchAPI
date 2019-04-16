interface MSPasteOverSelectionActionUninitialized<InitializedType = MSPasteOverSelectionAction> extends MSDocumentActionUninitialized<MSPasteOverSelectionAction> {}
interface MSPasteOverSelectionAction extends MSDocumentAction {
}
declare const MSPasteOverSelectionAction: {
  alloc(): MSPasteOverSelectionActionUninitialized;
  class(): MSPasteOverSelectionAction;
}

