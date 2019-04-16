interface MSPasteActionUninitialized<InitializedType = MSPasteAction> extends MSDocumentActionUninitialized<MSPasteAction> {}

interface MSPasteAction extends MSDocumentAction {
}

declare const MSPasteAction: {
  alloc(): MSPasteActionUninitialized;
  class(): MSPasteAction;
}

