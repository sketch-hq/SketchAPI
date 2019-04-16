interface MSImmutableSharedObjectContainerUninitialized<InitializedType = MSImmutableSharedObjectContainer> extends _MSImmutableSharedObjectContainerUninitialized<MSImmutableSharedObjectContainer> {}

interface MSImmutableSharedObjectContainer extends _MSImmutableSharedObjectContainer {
}

declare const MSImmutableSharedObjectContainer: {
  alloc(): MSImmutableSharedObjectContainerUninitialized;
  class(): MSImmutableSharedObjectContainer;
}

