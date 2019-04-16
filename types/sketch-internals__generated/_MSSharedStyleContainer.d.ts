interface _MSSharedStyleContainerUninitialized<InitializedType = _MSSharedStyleContainer> extends MSSharedObjectContainerUninitialized<_MSSharedStyleContainer> {}
interface _MSSharedStyleContainer extends MSSharedObjectContainer {
}
declare const _MSSharedStyleContainer: {
  alloc(): _MSSharedStyleContainerUninitialized;
  class(): _MSSharedStyleContainer;
}

