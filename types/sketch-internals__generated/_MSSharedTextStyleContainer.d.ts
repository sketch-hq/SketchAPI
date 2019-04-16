interface _MSSharedTextStyleContainerUninitialized<InitializedType = _MSSharedTextStyleContainer> extends MSSharedStyleContainerUninitialized<_MSSharedTextStyleContainer> {}
interface _MSSharedTextStyleContainer extends MSSharedStyleContainer {
}
declare const _MSSharedTextStyleContainer: {
  alloc(): _MSSharedTextStyleContainerUninitialized;
  class(): _MSSharedTextStyleContainer;
}

