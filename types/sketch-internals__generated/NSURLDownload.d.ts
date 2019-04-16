interface NSURLDownloadUninitialized<InitializedType = NSURLDownload> extends NSObjectUninitialized<NSURLDownload> {
  initWithRequest_delegate(request: NSURLRequest, delegate: any | null): InitializedType;
  initWithResumeData_delegate_path(resumeData: NSData, delegate: any | null, path: NSString | string): InitializedType;
}
interface NSURLDownload extends NSObject {
  cancel(): void;
  setDestination_allowOverwrite(path: NSString | string, allowOverwrite: boolean): void;

  request(): NSURLRequest;
  resumeData(): NSData;
  deletesFileUponFailure(): boolean;
  setDeletesFileUponFailure(deletesFileUponFailure: boolean): void;
}
declare const NSURLDownload: {
  alloc(): NSURLDownloadUninitialized;
  class(): NSURLDownload;  canResumeDownloadDecodedWithEncodingMIMEType(MIMEType: NSString | string): boolean;

}

