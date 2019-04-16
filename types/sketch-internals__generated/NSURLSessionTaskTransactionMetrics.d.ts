interface NSURLSessionTaskTransactionMetricsUninitialized<InitializedType = NSURLSessionTaskTransactionMetrics> extends NSObjectUninitialized<NSURLSessionTaskTransactionMetrics> {}
interface NSURLSessionTaskTransactionMetrics extends NSObject {

  request(): NSURLRequest;
  response(): NSURLResponse;
  fetchStartDate(): NSDate;
  domainLookupStartDate(): NSDate;
  domainLookupEndDate(): NSDate;
  connectStartDate(): NSDate;
  secureConnectionStartDate(): NSDate;
  secureConnectionEndDate(): NSDate;
  connectEndDate(): NSDate;
  requestStartDate(): NSDate;
  requestEndDate(): NSDate;
  responseStartDate(): NSDate;
  responseEndDate(): NSDate;
  networkProtocolName(): NSString;
  proxyConnection(): boolean;
  reusedConnection(): boolean;
  resourceFetchType(): NSURLSessionTaskMetricsResourceFetchType;
}
declare const NSURLSessionTaskTransactionMetrics: {
  alloc(): NSURLSessionTaskTransactionMetricsUninitialized;
  class(): NSURLSessionTaskTransactionMetrics;
}

