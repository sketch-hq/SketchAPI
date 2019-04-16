interface MSToolbarConstructorUninitialized<InitializedType = MSToolbarConstructor> extends NSObjectUninitialized<MSToolbarConstructor> {
  initWithDocument(document: MSDocument): InitializedType;
}
interface MSToolbarConstructor extends NSObject, INSToolbarDelegate {
  constructToolbarForWindow(window: NSWindow): void;
  validateToolbarItems(): void;

  doc(): MSDocument;
  setDoc(doc: MSDocument): void;
}
declare const MSToolbarConstructor: {
  alloc(): MSToolbarConstructorUninitialized;
  class(): MSToolbarConstructor;  toolbarAllowedItemIdentifiers(): NSArray<any>;
  toolbarDefaultItemIdentifiers(): NSArray<any>;

}

