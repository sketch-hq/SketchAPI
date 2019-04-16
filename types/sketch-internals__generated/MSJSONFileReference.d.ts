interface MSJSONFileReferenceUninitialized<InitializedType = MSJSONFileReference> extends MSJSONArchiveReferenceUninitialized<MSJSONFileReference> {}

interface MSJSONFileReference extends MSJSONArchiveReference {
}

declare const MSJSONFileReference: {
  alloc(): MSJSONFileReferenceUninitialized;
  class(): MSJSONFileReference;
  accessInstanceVariablesDirectly(): boolean;

}

