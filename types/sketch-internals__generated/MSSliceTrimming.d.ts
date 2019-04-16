interface MSSliceTrimmingUninitialized<InitializedType = MSSliceTrimming> extends NSObjectUninitialized<MSSliceTrimming> {}
interface MSSliceTrimming extends NSObject {
}
declare const MSSliceTrimming: {
  alloc(): MSSliceTrimmingUninitialized;
  class(): MSSliceTrimming;  trimmedRectForLayerAncestry(ancestry: MSImmutableLayerAncestry): NSRect;
  simpleSafeRectFromLayerAncestry(ancestry: MSImmutableLayerAncestry): NSRect;

}

