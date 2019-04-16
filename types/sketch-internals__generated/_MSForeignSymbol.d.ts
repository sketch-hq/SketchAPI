interface _MSForeignSymbolUninitialized<InitializedType = _MSForeignSymbol> extends MSForeignObjectUninitialized<_MSForeignSymbol> {}
interface _MSForeignSymbol extends MSForeignObject {

  originalMaster(): MSSymbolMaster;
  setOriginalMaster(originalMaster: MSSymbolMaster): void;
  symbolMaster(): MSSymbolMaster;
  setSymbolMaster(symbolMaster: MSSymbolMaster): void;
}
declare const _MSForeignSymbol: {
  alloc(): _MSForeignSymbolUninitialized;
  class(): _MSForeignSymbol;
}

