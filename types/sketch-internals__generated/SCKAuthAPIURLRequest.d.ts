interface SCKAuthAPIURLRequestUninitialized<InitializedType = SCKAuthAPIURLRequest> extends SCKAPIURLRequestUninitialized<SCKAuthAPIURLRequest> {}
interface SCKAuthAPIURLRequest extends SCKAPIURLRequest {
}
declare const SCKAuthAPIURLRequest: {
  alloc(): SCKAuthAPIURLRequestUninitialized;
  class(): SCKAuthAPIURLRequest;
}

