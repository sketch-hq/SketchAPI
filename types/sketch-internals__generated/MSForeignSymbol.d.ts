interface MSForeignSymbolUninitialized<InitializedType = MSForeignSymbol> extends _MSForeignSymbolUninitialized<MSForeignSymbol> {}
interface MSForeignSymbol extends _MSForeignSymbol {

  remoteSymbolID(): NSString;
}
declare const MSForeignSymbol: {
  alloc(): MSForeignSymbolUninitialized;
  class(): MSForeignSymbol;  foreignSymbolWithMaster_inLibrary(master: MSSymbolMaster, library: any): MSForeignSymbol;

}

