interface MSExportManagerUninitialized<InitializedType = MSExportManager> extends NSObjectUninitialized<MSExportManager> {}
interface MSExportManager extends NSObject {
  exportedDataForRequest(exportRequest: MSExportRequest): NSData;
  exportFileForRequest_toFileURL(exportRequest: MSExportRequest, fileURL: NSURL): void;
  exportFilesForRequests(exportRequests: NSArray<any> | any[]): void;

  colorSpace(): NSColorSpace;
  sliceCompletionBlock(): MSExportManagerSliceCompletionBlock;
  setSliceCompletionBlock(sliceCompletionBlock: MSExportManagerSliceCompletionBlock): void;
}
declare const MSExportManager: {
  alloc(): MSExportManagerUninitialized;
  class(): MSExportManager;
}

