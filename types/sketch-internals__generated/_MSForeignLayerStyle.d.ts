interface _MSForeignLayerStyleUninitialized<InitializedType = _MSForeignLayerStyle> extends MSForeignStyleUninitialized<_MSForeignLayerStyle> {}

interface _MSForeignLayerStyle extends MSForeignStyle {
}

declare const _MSForeignLayerStyle: {
  alloc(): _MSForeignLayerStyleUninitialized;
  class(): _MSForeignLayerStyle;
  symbolPrivateStyleWithID_forForeignSymbol_fromDocument(sharedStyleID: NSString | string, foreignSymbol: MSForeignSymbol, remoteDocument: MSDocumentData): MSForeignStyle;
  remoteSharedIDFromSymbolPrivateID(styleID: NSString | string | null): NSString;
}

