interface MSForeignStyleUninitialized<InitializedType = MSForeignStyle> extends _MSForeignStyleUninitialized<MSForeignStyle> {}
interface MSForeignStyle extends _MSForeignStyle {
  findOrCreatePublicVersion(): MSForeignStyle;
  addOrReplaceInDocument(document: MSDocumentData): void;
}
declare const MSForeignStyle: {
  alloc(): MSForeignStyleUninitialized;
  class(): MSForeignStyle;  symbolPrivateStyleWithID_forForeignSymbol_fromDocument(sharedStyleID: NSString | string, foreignSymbol: MSForeignSymbol, remoteDocument: MSDocumentData): MSForeignStyle;
  remoteSharedIDFromSymbolPrivateID(styleID: NSString | string | null): NSString;

}

