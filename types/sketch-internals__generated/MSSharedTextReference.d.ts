interface MSSharedTextReferenceUninitialized<InitializedType = MSSharedTextReference> extends MSSharedStyleReferenceUninitialized<MSSharedTextReference> {}

interface MSSharedTextReference extends MSSharedStyleReference {
}

declare const MSSharedTextReference: {
  alloc(): MSSharedTextReferenceUninitialized;
  class(): MSSharedTextReference;
  accessInstanceVariablesDirectly(): boolean;

}

