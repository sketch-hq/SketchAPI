interface NSURLSessionDownloadTaskUninitialized<InitializedType = NSURLSessionDownloadTask> extends NSURLSessionTaskUninitialized<NSURLSessionDownloadTask> {}

interface NSURLSessionDownloadTask extends NSURLSessionTask {
  cancelByProducingResumeData(completionHandler: Block): void;
}

declare const NSURLSessionDownloadTask: {
  alloc(): NSURLSessionDownloadTaskUninitialized;
  class(): NSURLSessionDownloadTask;
  accessInstanceVariablesDirectly(): boolean;

}

