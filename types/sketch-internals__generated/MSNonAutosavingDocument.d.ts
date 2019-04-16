interface MSNonAutosavingDocumentUninitialized<InitializedType = MSNonAutosavingDocument> extends MSDocumentUninitialized<MSNonAutosavingDocument> {}
interface MSNonAutosavingDocument extends MSDocument {
}
declare const MSNonAutosavingDocument: {
  alloc(): MSNonAutosavingDocumentUninitialized;
  class(): MSNonAutosavingDocument;
}

