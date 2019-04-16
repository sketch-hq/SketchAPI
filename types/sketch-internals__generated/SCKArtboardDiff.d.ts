interface SCKArtboardDiffUninitialized<InitializedType = SCKArtboardDiff> extends NSObjectUninitialized<SCKArtboardDiff> {
  initWithObject_comparedTo(object: SCKArtboard, otherObject: SCKArtboard): InitializedType;
}
interface SCKArtboardDiff extends NSObject, ISCKDiff {

  object(): SCKArtboard;
  comparedObject(): SCKArtboard;
  attributes(): SCKArtboardAttributes;
}
declare const SCKArtboardDiff: {
  alloc(): SCKArtboardDiffUninitialized;
  class(): SCKArtboardDiff;
}

