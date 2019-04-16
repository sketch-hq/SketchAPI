interface NSURLSessionDataTaskUninitialized<InitializedType = NSURLSessionDataTask> extends NSURLSessionTaskUninitialized<NSURLSessionDataTask> {}
interface NSURLSessionDataTask extends NSURLSessionTask {
}
declare const NSURLSessionDataTask: {
  alloc(): NSURLSessionDataTaskUninitialized;
  class(): NSURLSessionDataTask;
}

