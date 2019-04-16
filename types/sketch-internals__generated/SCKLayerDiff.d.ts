interface SCKLayerDiffUninitialized<InitializedType = SCKLayerDiff> extends NSObjectUninitialized<SCKLayerDiff> {
  initWithObject_comparedTo(object: SCKLayer, otherObject: SCKLayer): InitializedType;
}
interface SCKLayerDiff extends NSObject, ISCKDiff {

  object(): SCKLayer;
  comparedObject(): SCKLayer;
  attributes(): SCKLayerAttributes;
}
declare const SCKLayerDiff: {
  alloc(): SCKLayerDiffUninitialized;
  class(): SCKLayerDiff;
}

