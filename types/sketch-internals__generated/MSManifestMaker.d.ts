interface MSManifestMakerUninitialized<InitializedType = MSManifestMaker> extends NSObjectUninitialized<MSManifestMaker> {
  initWithDocument(documentData: MSImmutableDocumentData): InitializedType;
}
interface MSManifestMaker extends NSObject {
  createManifest(): NSDictionary<any, any>;
  metadataForRootLayer_onPage_earlierSlugs(root: MSImmutableLayerGroup, page: MSImmutablePage, slugs: NSMutableDictionary<any, any> | {[key: string]: any} | null): NSDictionary<any, any>;
  filesMetadataForRootLayer_onPage_id(root: MSImmutableLayerGroup, page: MSImmutablePage, fileID: NSString | string): NSArray<any>;

  documentData(): MSImmutableDocumentData;
  name(): NSString;
  setName(name: NSString | string): void;
  fileURL(): NSURL;
  setFileURL(fileURL: NSURL): void;
  selectiveExport(): boolean;
  setSelectiveExport(selectiveExport: boolean): void;
  usePageIfMissingArtboard(): boolean;
  setUsePageIfMissingArtboard(usePageIfMissingArtboard: boolean): void;
}
declare const MSManifestMaker: {
  alloc(): MSManifestMakerUninitialized;
  class(): MSManifestMaker;  keyForFlowAnimationType(type: MSFlowAnimationType): NSString;

}

