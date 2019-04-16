interface MSSharedLayerReferenceUninitialized<InitializedType = MSSharedLayerReference> extends MSSharedStyleReferenceUninitialized<MSSharedLayerReference> {}

interface MSSharedLayerReference extends MSSharedStyleReference {
}

declare const MSSharedLayerReference: {
  alloc(): MSSharedLayerReferenceUninitialized;
  class(): MSSharedLayerReference;
  accessInstanceVariablesDirectly(): boolean;

}

