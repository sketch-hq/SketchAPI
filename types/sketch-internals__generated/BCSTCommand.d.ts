interface BCSTCommandUninitialized<InitializedType = BCSTCommand> extends ECCommandLineCommandUninitialized<BCSTCommand> {}
interface BCSTCommand extends ECCommandLineCommand {
  processDocumentsAtPaths_engine(paths: NSArray<any> | any[], engine: ECCommandLineEngine): ECCommandLineResult;
  processDocumentURL_engine(documentURL: NSURL, engine: ECCommandLineEngine): ECCommandLineResult;
  processItemsForPage_engine(page: MSPage, engine: ECCommandLineEngine): ECCommandLineResult;
  documentDataForURL_engine(url: NSURL, engine: ECCommandLineEngine): MSDocumentData;
  documentForURL_engine(url: NSURL, engine: ECCommandLineEngine): MSDocumentReader;
  pagesForURL_engine(url: NSURL, engine: ECCommandLineEngine): NSArray<any>;
  scalesToUseForSlice_scales(slice: MSSliceLayer, scales: NSArray<any> | any[]): NSArray<any>;
  suffixForScale(scale: CGFloat): NSString;
  specifiedItemsWithEngine(engine: ECCommandLineEngine): NSArray<any>;
  filteredArtboardsForPage_engine(page: MSPage, engine: ECCommandLineEngine): NSArray<any>;
  shouldExportLayer_forMatch(layer: MSLayer, nameOrID: NSString | string): boolean;
}
declare const BCSTCommand: {
  alloc(): BCSTCommandUninitialized;
  class(): BCSTCommand;
}

