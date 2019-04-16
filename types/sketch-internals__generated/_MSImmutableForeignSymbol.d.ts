interface _MSImmutableForeignSymbolUninitialized<InitializedType = _MSImmutableForeignSymbol> extends MSImmutableForeignObjectUninitialized<_MSImmutableForeignSymbol> {}
interface _MSImmutableForeignSymbol extends MSImmutableForeignObject {

  originalMaster(): MSImmutableSymbolMaster;
  symbolMaster(): MSImmutableSymbolMaster;
}
declare const _MSImmutableForeignSymbol: {
  alloc(): _MSImmutableForeignSymbolUninitialized;
  class(): _MSImmutableForeignSymbol;
}

