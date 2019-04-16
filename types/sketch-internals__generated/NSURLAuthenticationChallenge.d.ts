interface NSURLAuthenticationChallengeUninitialized<InitializedType = NSURLAuthenticationChallenge> extends NSObjectUninitialized<NSURLAuthenticationChallenge> {
  initWithProtectionSpace_proposedCredential_previousFailureCount_failureResponse_error_sender(space: NSURLProtectionSpace, credential: NSURLCredential | null, previousFailureCount: NSInteger, response: NSURLResponse | null, error: NSError | null, sender: any): InitializedType;
  initWithAuthenticationChallenge_sender(challenge: NSURLAuthenticationChallenge, sender: any): InitializedType;
}
interface NSURLAuthenticationChallenge extends NSObject, INSSecureCoding {

  protectionSpace(): NSURLProtectionSpace;
  proposedCredential(): NSURLCredential;
  previousFailureCount(): NSInteger;
  failureResponse(): NSURLResponse;
  error(): NSError;
  sender(): any;
}
declare const NSURLAuthenticationChallenge: {
  alloc(): NSURLAuthenticationChallengeUninitialized;
  class(): NSURLAuthenticationChallenge;
}

