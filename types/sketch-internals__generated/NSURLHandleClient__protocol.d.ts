interface INSURLHandleClient {
  URLHandle_resourceDataDidBecomeAvailable(sender: NSURLHandle, newBytes: NSData): void;
  URLHandleResourceDidBeginLoading(sender: NSURLHandle): void;
  URLHandleResourceDidFinishLoading(sender: NSURLHandle): void;
  URLHandleResourceDidCancelLoading(sender: NSURLHandle): void;
  URLHandle_resourceDidFailLoadingWithReason(sender: NSURLHandle, reason: NSString | string): void;
}

