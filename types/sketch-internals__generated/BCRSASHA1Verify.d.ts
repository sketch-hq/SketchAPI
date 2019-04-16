interface BCRSASHA1VerifyUninitialized<InitializedType = BCRSASHA1Verify> extends NSObjectUninitialized<BCRSASHA1Verify> {}
interface BCRSASHA1Verify extends NSObject {

  error(): NSError;
  setError(error: NSError): void;
  verified(): boolean;
  setVerified(verified: boolean): void;
}
declare const BCRSASHA1Verify: {
  alloc(): BCRSASHA1VerifyUninitialized;
  class(): BCRSASHA1Verify;
}

