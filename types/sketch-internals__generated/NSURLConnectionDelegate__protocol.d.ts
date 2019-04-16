interface INSURLConnectionDelegate {
  connection_didFailWithError(connection: NSURLConnection, error: NSError): void;
  connectionShouldUseCredentialStorage(connection: NSURLConnection): boolean;
  connection_willSendRequestForAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;
  connection_canAuthenticateAgainstProtectionSpace(connection: NSURLConnection, protectionSpace: NSURLProtectionSpace): boolean;
  connection_didReceiveAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;
  connection_didCancelAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;
}

