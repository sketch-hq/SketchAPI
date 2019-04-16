interface MSJSONDataReferenceUninitialized<InitializedType = MSJSONDataReference> extends MSJSONArchiveReferenceUninitialized<MSJSONDataReference> {}
interface MSJSONDataReference extends MSJSONArchiveReference {
}
declare const MSJSONDataReference: {
  alloc(): MSJSONDataReferenceUninitialized;
  class(): MSJSONDataReference;
}

