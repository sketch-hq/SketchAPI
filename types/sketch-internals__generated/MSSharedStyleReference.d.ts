interface MSSharedStyleReferenceUninitialized<InitializedType = MSSharedStyleReference> extends MSShareableObjectReferenceUninitialized<MSSharedStyleReference> {}
interface MSSharedStyleReference extends MSShareableObjectReference {

  style(): MSStyle;
}
declare const MSSharedStyleReference: {
  alloc(): MSSharedStyleReferenceUninitialized;
  class(): MSSharedStyleReference;
}

