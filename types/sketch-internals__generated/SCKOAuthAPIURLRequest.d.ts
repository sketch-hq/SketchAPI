interface SCKOAuthAPIURLRequestUninitialized<InitializedType = SCKOAuthAPIURLRequest> extends SCKAPIURLRequestUninitialized<SCKOAuthAPIURLRequest> {}
interface SCKOAuthAPIURLRequest extends SCKAPIURLRequest {
}
declare const SCKOAuthAPIURLRequest: {
  alloc(): SCKOAuthAPIURLRequestUninitialized;
  class(): SCKOAuthAPIURLRequest;  requestWithEmail_password(email: NSString | string, password: NSString | string): SCKOAuthAPIURLRequest;
  requestWithAuthentication(authentication: SCKAPISession): SCKOAuthAPIURLRequest;
  licenseRequestWithAuthentication(authentication: SCKAPISession): SCKOAuthAPIURLRequest;

}

