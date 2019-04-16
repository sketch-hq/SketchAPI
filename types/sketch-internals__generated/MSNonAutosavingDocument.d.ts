interface MSNonAutosavingDocumentUninitialized<InitializedType = MSNonAutosavingDocument> extends MSDocumentUninitialized<MSNonAutosavingDocument> {}

interface MSNonAutosavingDocument extends MSDocument {
}

declare const MSNonAutosavingDocument: {
  alloc(): MSNonAutosavingDocumentUninitialized;
  class(): MSNonAutosavingDocument;
  currentDocument(): MSDocument;
  windowForSheet(): NSWindow;
  autosavesInPlace(): boolean;
  preservesVersions(): boolean;
  autosavesDrafts(): boolean;
  readableTypes(): NSArray<any>;
  writableTypes(): NSArray<any>;
  usesUbiquitousStorage(): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

