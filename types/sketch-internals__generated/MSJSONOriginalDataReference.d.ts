interface MSJSONOriginalDataReferenceUninitialized<InitializedType = MSJSONOriginalDataReference> extends MSJSONDataReferenceUninitialized<MSJSONOriginalDataReference> {}

interface MSJSONOriginalDataReference extends MSJSONDataReference {
}

declare const MSJSONOriginalDataReference: {
  alloc(): MSJSONOriginalDataReferenceUninitialized;
  class(): MSJSONOriginalDataReference;
  accessInstanceVariablesDirectly(): boolean;

}

