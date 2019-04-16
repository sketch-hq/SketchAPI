interface MSImmutableSharedTextStyleContainerUninitialized<InitializedType = MSImmutableSharedTextStyleContainer> extends _MSImmutableSharedTextStyleContainerUninitialized<MSImmutableSharedTextStyleContainer> {}

interface MSImmutableSharedTextStyleContainer extends _MSImmutableSharedTextStyleContainer {
}

declare const MSImmutableSharedTextStyleContainer: {
  alloc(): MSImmutableSharedTextStyleContainerUninitialized;
  class(): MSImmutableSharedTextStyleContainer;
}

