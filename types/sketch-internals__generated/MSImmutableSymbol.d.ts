interface MSImmutableSymbolUninitialized<InitializedType = MSImmutableSymbol> extends _MSImmutableSymbolUninitialized<MSImmutableSymbol> {}
interface MSImmutableSymbol extends _MSImmutableSymbol {
  masterInstance(): MSImmutableLayerGroup;
}
declare const MSImmutableSymbol: {
  alloc(): MSImmutableSymbolUninitialized;
  class(): MSImmutableSymbol;
}

