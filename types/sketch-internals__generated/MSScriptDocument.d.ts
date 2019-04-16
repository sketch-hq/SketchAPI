interface MSScriptDocumentUninitialized<InitializedType = MSScriptDocument> extends NSDocumentUninitialized<MSScriptDocument> {}
interface MSScriptDocument extends NSDocument {
}
declare const MSScriptDocument: {
  alloc(): MSScriptDocumentUninitialized;
  class(): MSScriptDocument;
}

