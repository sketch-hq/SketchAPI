interface MSSharedStyleReferenceUninitialized<InitializedType = MSSharedStyleReference> extends MSShareableObjectReferenceUninitialized<MSSharedStyleReference> {}

interface MSSharedStyleReference extends MSShareableObjectReference {

  style(): MSStyle;
}

declare const MSSharedStyleReference: {
  alloc(): MSSharedStyleReferenceUninitialized;
  class(): MSSharedStyleReference;
  referenceForShareableObject(object: MSModelObject): MSSharedStyleReference;
  referenceForShareableObject_inLibrary(object: MSModelObject, library: MSAssetLibrary | null): MSSharedStyleReference;
  accessInstanceVariablesDirectly(): boolean;

}

