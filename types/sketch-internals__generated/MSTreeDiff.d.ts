interface MSTreeDiffUninitialized<InitializedType = MSTreeDiff> extends NSObjectUninitialized<MSTreeDiff> {
  initWithFirstDocument_secondDocument(firstDoc: MSImmutableDocumentData, secondDoc: MSImmutableDocumentData): InitializedType;
}
interface MSTreeDiff extends NSObject {
  diffs(): NSArray<any>;
  contentDirtyDiffRectForPage(page: MSImmutablePage): NSRect;
  overlayDirtyDiffRectForPage(page: MSImmutablePage): NSRect;
  changedPropertiesAllExhibitTrait_allKeysWereCompared(trait: MSPropertyTraits, allKeysWereCompared: boolean): boolean;
  someChangedPropertiesExhibitTrait_allKeysWereCompared(targetTrait: MSPropertyTraits, allKeysWereCompared: boolean): boolean;
  containsLayerWithTraits(traits: MSTraits): boolean;

  keysAffectedByDiff(): NSSet<any>;
  selectionHasChanged(): boolean;
  currentPageHasChanged(): boolean;
}
declare const MSTreeDiff: {
  alloc(): MSTreeDiffUninitialized;
  class(): MSTreeDiff;
}

