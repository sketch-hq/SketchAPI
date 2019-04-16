interface MSDocumentTreeUninitialized<InitializedType = MSDocumentTree> extends NSObjectUninitialized<MSDocumentTree> {
  initWithDocumentData(documentData: MSImmutableDocumentData): InitializedType;
}
interface MSDocumentTree extends NSObject {
  parentForObject(object: MSImmutableModelObject): any;
  ancestorsOfObject(object: MSImmutableModelObject): NSArray<any>;
  ancestorLayersOfObject(object: MSImmutableLayer): NSArray<any>;

  documentData(): MSImmutableDocumentData;
  cache(): BCCache;
}
declare const MSDocumentTree: {
  alloc(): MSDocumentTreeUninitialized;
  class(): MSDocumentTree;
}

