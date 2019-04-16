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
  masterFromDocument_withID(document: MSDocumentData, documentLocalID: NSString | string): MSModelObject;
  foreignObjectCollectionInDocument(document: MSDocumentData): NSArray<any>;
}

