interface SCKDocumentDiffUninitialized<InitializedType = SCKDocumentDiff> extends NSObjectUninitialized<SCKDocumentDiff> {
  initWithObject_comparedTo(object: SCKDocument, otherObject: SCKDocument): InitializedType;
}
interface SCKDocumentDiff extends NSObject, ISCKDiff {

  object(): SCKDocument;
  comparedObject(): SCKDocument;
  attributes(): SCKDocumentAttributes;
  pageDiff(): SCKCollectionDiff;
  artboardsDiff(): SCKCollectionDiff;
}
declare const SCKDocumentDiff: {
  alloc(): SCKDocumentDiffUninitialized;
  class(): SCKDocumentDiff;
}

