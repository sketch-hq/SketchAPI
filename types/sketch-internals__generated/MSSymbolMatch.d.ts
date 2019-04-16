interface MSSymbolMatchUninitialized<InitializedType = MSSymbolMatch> extends NSObjectUninitialized<MSSymbolMatch> {
  initWithRemoteSymbol_searchingDocument(master: MSSymbolMaster, document: MSDocumentData): InitializedType;
  initWithRemoteForeignSymbol_searchingDocument(foreignMaster: MSForeignSymbol, document: MSDocumentData): InitializedType;
}
interface MSSymbolMatch extends NSObject {

  remoteMaster(): MSSymbolMaster;
  foreignSymbol(): MSForeignSymbol;
  resolvedMatch(): MSSymbolMaster;
}
declare const MSSymbolMatch: {
  alloc(): MSSymbolMatchUninitialized;
  class(): MSSymbolMatch;  resolve(matches: NSArray<any> | any[]): void;

}

