interface INSURLSessionDelegate {
  URLSession_didBecomeInvalidWithError(session: NSURLSession, error: NSError | null): void;
  URLSession_didReceiveChallenge_completionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: Block): void;
  URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;
}

