interface MSJSONOriginalFileReferenceUninitialized<InitializedType = MSJSONOriginalFileReference> extends MSJSONArchiveReferenceUninitialized<MSJSONOriginalFileReference> {}

interface MSJSONOriginalFileReference extends MSJSONArchiveReference {
}

declare const MSJSONOriginalFileReference: {
  alloc(): MSJSONOriginalFileReferenceUninitialized;
  class(): MSJSONOriginalFileReference;
  accessInstanceVariablesDirectly(): boolean;

}

