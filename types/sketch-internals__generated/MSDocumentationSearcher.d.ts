interface MSDocumentationSearcherUninitialized<InitializedType = MSDocumentationSearcher> extends NSObjectUninitialized<MSDocumentationSearcher> {}
interface MSDocumentationSearcher extends NSObject, INSUserInterfaceItemSearching {
  documentationMightHaveChanged(): void;
}
declare const MSDocumentationSearcher: {
  alloc(): MSDocumentationSearcherUninitialized;
  class(): MSDocumentationSearcher;
}

