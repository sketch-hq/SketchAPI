interface MSSymbolContainerUninitialized<InitializedType = MSSymbolContainer> extends _MSSymbolContainerUninitialized<MSSymbolContainer> {}

interface MSSymbolContainer extends _MSSymbolContainer {
}

declare const MSSymbolContainer: {
  alloc(): MSSymbolContainerUninitialized;
  class(): MSSymbolContainer;
}

