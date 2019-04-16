interface _MSSymbolContainerUninitialized<InitializedType = _MSSymbolContainer> extends MSSharedObjectContainerUninitialized<_MSSymbolContainer> {}

interface _MSSymbolContainer extends MSSharedObjectContainer {
}

declare const _MSSymbolContainer: {
  alloc(): _MSSymbolContainerUninitialized;
  class(): _MSSymbolContainer;
}

