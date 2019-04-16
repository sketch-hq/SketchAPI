interface MSPasteHereActionUninitialized<InitializedType = MSPasteHereAction> extends MSDocumentActionUninitialized<MSPasteHereAction> {}
interface MSPasteHereAction extends MSDocumentAction {
}
declare const MSPasteHereAction: {
  alloc(): MSPasteHereActionUninitialized;
  class(): MSPasteHereAction;
}

