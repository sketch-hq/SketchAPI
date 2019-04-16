interface _MSImmutableSharedObjectContainerUninitialized<InitializedType = _MSImmutableSharedObjectContainer> extends MSImmutableModelObjectUninitialized<_MSImmutableSharedObjectContainer> {}

interface _MSImmutableSharedObjectContainer extends MSImmutableModelObject {

  objects(): NSArray<any>;
}

declare const _MSImmutableSharedObjectContainer: {
  alloc(): _MSImmutableSharedObjectContainerUninitialized;
  class(): _MSImmutableSharedObjectContainer;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

