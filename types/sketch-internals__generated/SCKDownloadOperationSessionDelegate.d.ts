interface SCKDownloadOperationSessionDelegateUninitialized<InitializedType = SCKDownloadOperationSessionDelegate> extends NSObjectUninitialized<SCKDownloadOperationSessionDelegate> {}
interface SCKDownloadOperationSessionDelegate extends NSObject, INSURLSessionDownloadDelegate {
  setDownloadTaskDelegate_forTask(delegate: any, task: NSURLSessionTask): void;
}
declare const SCKDownloadOperationSessionDelegate: {
  alloc(): SCKDownloadOperationSessionDelegateUninitialized;
  class(): SCKDownloadOperationSessionDelegate;
}

