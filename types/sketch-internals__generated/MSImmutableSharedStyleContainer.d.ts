interface MSImmutableSharedStyleContainerUninitialized<InitializedType = MSImmutableSharedStyleContainer> extends _MSImmutableSharedStyleContainerUninitialized<MSImmutableSharedStyleContainer> {}

interface MSImmutableSharedStyleContainer extends _MSImmutableSharedStyleContainer {
}

declare const MSImmutableSharedStyleContainer: {
  alloc(): MSImmutableSharedStyleContainerUninitialized;
  class(): MSImmutableSharedStyleContainer;
}

