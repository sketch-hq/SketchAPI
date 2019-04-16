interface MSDiffUninitialized<InitializedType = MSDiff> extends NSObjectUninitialized<MSDiff> {
  initWithFirstObjectRoot_secondObjectRoot(first: MSSubtreeRoot, second: MSSubtreeRoot): InitializedType;
}
interface MSDiff extends NSObject {
  contentDirtyDiffRectForPage(page: MSImmutablePage): NSRect;
  overlayDirtyDiffRectForPage(page: MSImmutablePage): NSRect;

  firstObjectRoot(): MSSubtreeRoot;
  secondObjectRoot(): MSSubtreeRoot;
}
declare const MSDiff: {
  alloc(): MSDiffUninitialized;
  class(): MSDiff;
}

