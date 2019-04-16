interface MSNewDocumentCollectionItemUninitialized<InitializedType = MSNewDocumentCollectionItem> extends MSWelcomeCollectionItemUninitialized<MSNewDocumentCollectionItem> {}

interface MSNewDocumentCollectionItem extends MSWelcomeCollectionItem {
}

declare const MSNewDocumentCollectionItem: {
  alloc(): MSNewDocumentCollectionItemUninitialized;
  class(): MSNewDocumentCollectionItem;
  bundledTemplatesDirectoryURL(): NSURL;
  userTemplatesDirectoryURL(): NSURL;
  accessInstanceVariablesDirectly(): boolean;

}

