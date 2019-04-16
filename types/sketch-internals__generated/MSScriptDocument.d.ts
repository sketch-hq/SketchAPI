interface MSScriptDocumentUninitialized<InitializedType = MSScriptDocument> extends NSDocumentUninitialized<MSScriptDocument> {}

interface MSScriptDocument extends NSDocument {
}

declare const MSScriptDocument: {
  alloc(): MSScriptDocumentUninitialized;
  class(): MSScriptDocument;
  canConcurrentlyReadDocumentsOfType(typeName: NSString | string): boolean;
  isNativeType(type: NSString | string): boolean;
  autosavesInPlace(): boolean;
  preservesVersions(): boolean;
  autosavesDrafts(): boolean;
  readableTypes(): NSArray<any>;
  writableTypes(): NSArray<any>;
  usesUbiquitousStorage(): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

