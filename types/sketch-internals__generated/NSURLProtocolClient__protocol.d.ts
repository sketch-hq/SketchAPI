interface INSURLProtocolClient {
  URLProtocol_wasRedirectedToRequest_redirectResponse(protocol: NSURLProtocol, request: NSURLRequest, redirectResponse: NSURLResponse): void;
  URLProtocol_cachedResponseIsValid(protocol: NSURLProtocol, cachedResponse: NSCachedURLResponse): void;
  URLProtocol_didReceiveResponse_cacheStoragePolicy(protocol: NSURLProtocol, response: NSURLResponse, policy: NSURLCacheStoragePolicy): void;
  URLProtocol_didLoadData(protocol: NSURLProtocol, data: NSData): void;
  URLProtocolDidFinishLoading(protocol: NSURLProtocol): void;
  URLProtocol_didFailWithError(protocol: NSURLProtocol, error: NSError): void;
  URLProtocol_didReceiveAuthenticationChallenge(protocol: NSURLProtocol, challenge: NSURLAuthenticationChallenge): void;
  URLProtocol_didCancelAuthenticationChallenge(protocol: NSURLProtocol, challenge: NSURLAuthenticationChallenge): void;
}

