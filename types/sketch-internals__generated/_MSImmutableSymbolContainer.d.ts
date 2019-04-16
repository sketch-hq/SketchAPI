interface _MSImmutableSymbolContainerUninitialized<InitializedType = _MSImmutableSymbolContainer> extends MSImmutableSharedObjectContainerUninitialized<_MSImmutableSymbolContainer> {}
interface _MSImmutableSymbolContainer extends MSImmutableSharedObjectContainer {
}
declare const _MSImmutableSymbolContainer: {
  alloc(): _MSImmutableSymbolContainerUninitialized;
  class(): _MSImmutableSymbolContainer;
}

