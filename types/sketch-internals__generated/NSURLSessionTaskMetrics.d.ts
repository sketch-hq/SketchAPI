interface NSURLSessionTaskMetricsUninitialized<InitializedType = NSURLSessionTaskMetrics> extends NSObjectUninitialized<NSURLSessionTaskMetrics> {}
interface NSURLSessionTaskMetrics extends NSObject {

  transactionMetrics(): NSArray<any>;
  taskInterval(): NSDateInterval;
  redirectCount(): NSUInteger;
}
declare const NSURLSessionTaskMetrics: {
  alloc(): NSURLSessionTaskMetricsUninitialized;
  class(): NSURLSessionTaskMetrics;
}

