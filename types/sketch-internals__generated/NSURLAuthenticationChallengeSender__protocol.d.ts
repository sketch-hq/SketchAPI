interface INSURLAuthenticationChallengeSender {
  useCredential_forAuthenticationChallenge(credential: NSURLCredential, challenge: NSURLAuthenticationChallenge): void;
  continueWithoutCredentialForAuthenticationChallenge(challenge: NSURLAuthenticationChallenge): void;
  cancelAuthenticationChallenge(challenge: NSURLAuthenticationChallenge): void;
  performDefaultHandlingForAuthenticationChallenge(challenge: NSURLAuthenticationChallenge): void;
  rejectProtectionSpaceAndContinueWithChallenge(challenge: NSURLAuthenticationChallenge): void;
}

