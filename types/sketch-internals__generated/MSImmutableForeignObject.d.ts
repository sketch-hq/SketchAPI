interface MSImmutableForeignObjectUninitialized<InitializedType = MSImmutableForeignObject> extends _MSImmutableForeignObjectUninitialized<MSImmutableForeignObject> {}
interface MSImmutableForeignObject extends _MSImmutableForeignObject {
}
declare const MSImmutableForeignObject: {
  alloc(): MSImmutableForeignObjectUninitialized;
  class(): MSImmutableForeignObject;
}

