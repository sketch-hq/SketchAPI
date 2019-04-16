interface MSSubtreeRootUninitialized<InitializedType = MSSubtreeRoot> extends NSObjectUninitialized<MSSubtreeRoot> {}
interface MSSubtreeRoot extends NSObject {
  contentDirtyDiffRectForPage(page: MSImmutablePage): NSRect;
  overlayDirtyDiffRectForPage(page: MSImmutablePage): NSRect;

  object(): MSImmutableModelObject;
  setObject(object: MSImmutableModelObject): void;
  ancestorsOfObject(): NSArray<any>;
  setAncestorsOfObject(ancestorsOfObject: NSArray<any> | any[]): void;
  document(): MSImmutableDocumentData;
  setDocument(document: MSImmutableDocumentData): void;
  webExportableRootLayer(): MSImmutableLayerGroup;
}
declare const MSSubtreeRoot: {
  alloc(): MSSubtreeRootUninitialized;
  class(): MSSubtreeRoot;
}

