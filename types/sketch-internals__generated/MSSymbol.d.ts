interface MSSymbolUninitialized<InitializedType = MSSymbol> extends _MSSymbolUninitialized<MSSymbol> {}
interface MSSymbol extends _MSSymbol {
}
declare const MSSymbol: {
  alloc(): MSSymbolUninitialized;
  class(): MSSymbol;
}

