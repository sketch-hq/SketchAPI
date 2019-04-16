interface NSURLSessionStreamTaskUninitialized<InitializedType = NSURLSessionStreamTask> extends NSURLSessionTaskUninitialized<NSURLSessionStreamTask> {}
interface NSURLSessionStreamTask extends NSURLSessionTask {
  readDataOfMinLength_maxLength_timeout_completionHandler(minBytes: NSUInteger, maxBytes: NSUInteger, timeout: NSTimeInterval, completionHandler: Block): void;
  writeData_timeout_completionHandler(data: NSData, timeout: NSTimeInterval, completionHandler: Block): void;
  captureStreams(): void;
  closeWrite(): void;
  closeRead(): void;
  startSecureConnection(): void;
  stopSecureConnection(): void;
}
declare const NSURLSessionStreamTask: {
  alloc(): NSURLSessionStreamTaskUninitialized;
  class(): NSURLSessionStreamTask;
}

