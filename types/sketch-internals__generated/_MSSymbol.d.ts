interface _MSSymbolUninitialized<InitializedType = _MSSymbol> extends MSSharedObjectUninitialized<_MSSymbol> {}
interface _MSSymbol extends MSSharedObject {
}
declare const _MSSymbol: {
  alloc(): _MSSymbolUninitialized;
  class(): _MSSymbol;
}

