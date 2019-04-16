interface MSImmutableDocumentDataUninitialized<InitializedType = MSImmutableDocumentData> extends _MSImmutableDocumentDataUninitialized<MSImmutableDocumentData> {}

interface MSImmutableDocumentData extends _MSImmutableDocumentData, IMSDocumentData {
  defaultPagesArray(): NSArray<any>;
  usedFontNames(): NSSet<any>;
  textLayersWithUnsafeFonts(): NSSet<any>;
  pageWithID(pageID: NSString | string): MSImmutablePage;
  symbolWithID(objectID: NSString | string): MSImmutableSymbolMaster;
  artboardWithID(objectID: NSString | string | null): MSImmutableArtboardGroup;
  textStyleWithID(sharedStyleID: NSString | string | null): MSImmutableSharedStyle;
  layerStyleWithID(sharedStyleID: NSString | string | null): MSImmutableSharedStyle;
  artboardWithID_page(objectID: NSString | string, pageOut: MSImmutablePage): MSImmutableArtboardGroup;
  wasSavedByOldVersion(): boolean;
  wasSavedByTestVersion(): boolean;
  allArtboards(): NSArray<any>;
  allSymbols(): NSArray<any>;
  pagesAndArtboardsMetadata(): NSDictionary<any, any>;
  symbolsChangedSincePreviousDocument(lastImmutable: MSImmutableDocumentData): boolean;
  prepareForRender(diff: MSTreeDiff): void;

  metadata(): NSDictionary<any, any>;
  textPreviewData(): NSData;
  currentPage(): MSImmutablePage;
  selectedOverrides(): NSArray<any>;
  fontNames(): NSSet<any>;
  unavailableFontNames(): NSSet<any>;
  containsUnavailableFontNames(): boolean;
  pages(): NSArray<any>;
}

declare const MSImmutableDocumentData: {
  alloc(): MSImmutableDocumentDataUninitialized;
  class(): MSImmutableDocumentData;
  loadDocumentDataWithMetadata_textPreviewData_loadBlock(metadata: NSDictionary<any, any> | {[key: string]: any}, textPreviewData: NSData | null, loadBlock: Block): MSImmutableDocumentData;
}

