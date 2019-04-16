interface INSURLConnectionDataDelegate {
  connection_willSendRequest_redirectResponse(connection: NSURLConnection, request: NSURLRequest, response: NSURLResponse | null): NSURLRequest;
  connection_didReceiveResponse(connection: NSURLConnection, response: NSURLResponse): void;
  connection_didReceiveData(connection: NSURLConnection, data: NSData): void;
  connection_needNewBodyStream(connection: NSURLConnection, request: NSURLRequest): NSInputStream;
  connection_didSendBodyData_totalBytesWritten_totalBytesExpectedToWrite(connection: NSURLConnection, bytesWritten: NSInteger, totalBytesWritten: NSInteger, totalBytesExpectedToWrite: NSInteger): void;
  connection_willCacheResponse(connection: NSURLConnection, cachedResponse: NSCachedURLResponse): NSCachedURLResponse;
  connectionDidFinishLoading(connection: NSURLConnection): void;
}

