interface SCKPageDiffUninitialized<InitializedType = SCKPageDiff> extends NSObjectUninitialized<SCKPageDiff> {
  initWithObject_comparedTo(object: SCKPage, otherObject: SCKPage): InitializedType;
}
interface SCKPageDiff extends NSObject, ISCKDiff {

  object(): SCKPage;
  comparedObject(): SCKPage;
  attributes(): SCKPageAttributes;
  artboardsDiff(): SCKCollectionDiff;
}
declare const SCKPageDiff: {
  alloc(): SCKPageDiffUninitialized;
  class(): SCKPageDiff;
}

