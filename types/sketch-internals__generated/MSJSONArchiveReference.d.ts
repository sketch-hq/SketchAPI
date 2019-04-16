interface MSJSONArchiveReferenceUninitialized<InitializedType = MSJSONArchiveReference> extends NSObjectUninitialized<MSJSONArchiveReference> {
  initWithReferenceObject(object: NSObject): InitializedType;
}
interface MSJSONArchiveReference extends NSObject, IBCJSONEncoding {
}
declare const MSJSONArchiveReference: {
  alloc(): MSJSONArchiveReferenceUninitialized;
  class(): MSJSONArchiveReference;
}

