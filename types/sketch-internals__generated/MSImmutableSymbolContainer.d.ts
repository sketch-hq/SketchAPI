interface MSImmutableSymbolContainerUninitialized<InitializedType = MSImmutableSymbolContainer> extends _MSImmutableSymbolContainerUninitialized<MSImmutableSymbolContainer> {}

interface MSImmutableSymbolContainer extends _MSImmutableSymbolContainer {
}

declare const MSImmutableSymbolContainer: {
  alloc(): MSImmutableSymbolContainerUninitialized;
  class(): MSImmutableSymbolContainer;
}

