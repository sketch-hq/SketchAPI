interface _MSImmutableSharedStyleContainerUninitialized<InitializedType = _MSImmutableSharedStyleContainer> extends MSImmutableSharedObjectContainerUninitialized<_MSImmutableSharedStyleContainer> {}

interface _MSImmutableSharedStyleContainer extends MSImmutableSharedObjectContainer {
}

declare const _MSImmutableSharedStyleContainer: {
  alloc(): _MSImmutableSharedStyleContainerUninitialized;
  class(): _MSImmutableSharedStyleContainer;
}

