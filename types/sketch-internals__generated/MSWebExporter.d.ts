interface MSWebExporterUninitialized<InitializedType = MSWebExporter> extends NSObjectUninitialized<MSWebExporter> {
  initWithDocument_name_localURL(doc: MSDocumentData, name: NSString | string, localURL: NSURL): InitializedType;
}
interface MSWebExporter extends NSObject, IMSCloudManifestMakerDelegate {
  exportArtboardsWithCompletionBlock(completionBlock: MSWebExporterCompletionBlock): void;
  exportDocumentWithUIMetadata_completionBlock(UIMetadata: NSDictionary<any, any> | {[key: string]: any}, completionBlock: MSWebExporterCompletionBlock): void;
  exportArtboardsIncludingManifest_error(includeManifest: boolean, error: NSError): boolean;
  cancel(): void;

  documentData(): MSDocumentData;
  destinationURL(): NSURL;
  name(): NSString;
  selectiveExport(): boolean;
  setSelectiveExport(selectiveExport: boolean): void;
  cloudOrganization(): SCKOrganization;
  setCloudOrganization(cloudOrganization: SCKOrganization): void;
}
declare const MSWebExporter: {
  alloc(): MSWebExporterUninitialized;
  class(): MSWebExporter;  exportArtboardsOfDocument_withName_toLocalURL_completionBlock(doc: MSDocumentData, name: NSString | string, localURL: NSURL, completionBlock: MSWebExporterCompletionBlock): void;
  exportSelectedArtboardsOfDocument_withName_toLocalURL_completionBlock(doc: MSDocumentData, name: NSString | string, localURL: NSURL, completionBlock: MSWebExporterCompletionBlock): void;
  exportBitmapImageForRequest(request: MSWebExportRequest): NSBitmapImageRep;
  imageURLWithHash_inDirectory(dataHash: NSString | string, directory: NSURL): NSURL;
  documentURLInDirectory(directory: NSURL): NSURL;

}

