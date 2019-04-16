interface MSImmutableForeignSymbolUninitialized<InitializedType = MSImmutableForeignSymbol> extends _MSImmutableForeignSymbolUninitialized<MSImmutableForeignSymbol> {}

interface MSImmutableForeignSymbol extends _MSImmutableForeignSymbol {
}

declare const MSImmutableForeignSymbol: {
  alloc(): MSImmutableForeignSymbolUninitialized;
  class(): MSImmutableForeignSymbol;
}

