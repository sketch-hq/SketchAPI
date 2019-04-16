interface NSURLSessionUploadTaskUninitialized<InitializedType = NSURLSessionUploadTask> extends NSURLSessionDataTaskUninitialized<NSURLSessionUploadTask> {}
interface NSURLSessionUploadTask extends NSURLSessionDataTask {
}
declare const NSURLSessionUploadTask: {
  alloc(): NSURLSessionUploadTaskUninitialized;
  class(): NSURLSessionUploadTask;
}

