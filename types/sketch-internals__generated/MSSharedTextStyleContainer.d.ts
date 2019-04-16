interface MSSharedTextStyleContainerUninitialized<InitializedType = MSSharedTextStyleContainer> extends _MSSharedTextStyleContainerUninitialized<MSSharedTextStyleContainer> {}
interface MSSharedTextStyleContainer extends _MSSharedTextStyleContainer {
}
declare const MSSharedTextStyleContainer: {
  alloc(): MSSharedTextStyleContainerUninitialized;
  class(): MSSharedTextStyleContainer;
}

