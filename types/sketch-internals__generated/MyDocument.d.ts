interface MyDocumentUninitialized<InitializedType = MyDocument> extends NSDocumentUninitialized<MyDocument> {}

interface MyDocument extends NSDocument {
  toggleShowPoints(sender: any): IBAction;
  toggleSimplifyPath(sender: any): IBAction;
  toggleFitCurve(sender: any): IBAction;
}

declare const MyDocument: {
  alloc(): MyDocumentUninitialized;
  class(): MyDocument;
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

