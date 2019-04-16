interface MSExistingDocumentCollectionItemUninitialized<InitializedType = MSExistingDocumentCollectionItem> extends MSWelcomeCollectionItemUninitialized<MSExistingDocumentCollectionItem> {
  initWithController_URL(controller: MSWelcomeWindowController, URL: NSURL): InitializedType;
}

interface MSExistingDocumentCollectionItem extends MSWelcomeCollectionItem {

  URL(): NSURL;
}

declare const MSExistingDocumentCollectionItem: {
  alloc(): MSExistingDocumentCollectionItemUninitialized;
  class(): MSExistingDocumentCollectionItem;
  bundledTemplatesDirectoryURL(): NSURL;
  userTemplatesDirectoryURL(): NSURL;
  accessInstanceVariablesDirectly(): boolean;

}

