interface MSPasteWithStyleActionUninitialized<InitializedType = MSPasteWithStyleAction> extends MSDocumentActionUninitialized<MSPasteWithStyleAction> {}

interface MSPasteWithStyleAction extends MSDocumentAction {
}

declare const MSPasteWithStyleAction: {
  alloc(): MSPasteWithStyleActionUninitialized;
  class(): MSPasteWithStyleAction;
}

