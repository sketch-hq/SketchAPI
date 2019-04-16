interface INSURLDownloadDelegate {
  downloadDidBegin(download: NSURLDownload): void;
  download_willSendRequest_redirectResponse(download: NSURLDownload, request: NSURLRequest, redirectResponse: NSURLResponse | null): NSURLRequest;
  download_canAuthenticateAgainstProtectionSpace(connection: NSURLDownload, protectionSpace: NSURLProtectionSpace): boolean;
  download_didReceiveAuthenticationChallenge(download: NSURLDownload, challenge: NSURLAuthenticationChallenge): void;
  download_didCancelAuthenticationChallenge(download: NSURLDownload, challenge: NSURLAuthenticationChallenge): void;
  downloadShouldUseCredentialStorage(download: NSURLDownload): boolean;
  download_didReceiveResponse(download: NSURLDownload, response: NSURLResponse): void;
  download_willResumeWithResponse_fromByte(download: NSURLDownload, response: NSURLResponse, startingByte: number): void;
  download_didReceiveDataOfLength(download: NSURLDownload, length: NSUInteger): void;
  download_shouldDecodeSourceDataOfMIMEType(download: NSURLDownload, encodingType: NSString | string): boolean;
  download_decideDestinationWithSuggestedFilename(download: NSURLDownload, filename: NSString | string): void;
  download_didCreateDestination(download: NSURLDownload, path: NSString | string): void;
  downloadDidFinish(download: NSURLDownload): void;
  download_didFailWithError(download: NSURLDownload, error: NSError): void;
}

