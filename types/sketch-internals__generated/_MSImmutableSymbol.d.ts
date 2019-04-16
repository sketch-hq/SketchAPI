interface _MSImmutableSymbolUninitialized<InitializedType = _MSImmutableSymbol> extends MSImmutableSharedObjectUninitialized<_MSImmutableSymbol> {}

interface _MSImmutableSymbol extends MSImmutableSharedObject {
}

declare const _MSImmutableSymbol: {
  alloc(): _MSImmutableSymbolUninitialized;
  class(): _MSImmutableSymbol;
}

