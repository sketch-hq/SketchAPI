interface _MSImmutableSharedObjectUninitialized<InitializedType = _MSImmutableSharedObject> extends MSImmutableModelObjectUninitialized<_MSImmutableSharedObject> {}
interface _MSImmutableSharedObject extends MSImmutableModelObject {

  name(): NSString;
  value(): MSImmutableModelObject;
}
declare const _MSImmutableSharedObject: {
  alloc(): _MSImmutableSharedObjectUninitialized;
  class(): _MSImmutableSharedObject;
}

