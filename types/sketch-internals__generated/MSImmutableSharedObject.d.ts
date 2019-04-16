interface MSImmutableSharedObjectUninitialized<InitializedType = MSImmutableSharedObject> extends _MSImmutableSharedObjectUninitialized<MSImmutableSharedObject> {}
interface MSImmutableSharedObject extends _MSImmutableSharedObject {
}
declare const MSImmutableSharedObject: {
  alloc(): MSImmutableSharedObjectUninitialized;
  class(): MSImmutableSharedObject;
}

