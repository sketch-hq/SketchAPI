interface SCKOAuthAPIURLRequestUninitialized<InitializedType = SCKOAuthAPIURLRequest> extends SCKAPIURLRequestUninitialized<SCKOAuthAPIURLRequest> {}

interface SCKOAuthAPIURLRequest extends SCKAPIURLRequest {
}

declare const SCKOAuthAPIURLRequest: {
  alloc(): SCKOAuthAPIURLRequestUninitialized;
  class(): SCKOAuthAPIURLRequest;
  requestWithEmail_password(email: NSString | string, password: NSString | string): SCKOAuthAPIURLRequest;
  requestWithAuthentication(authentication: SCKAPISession): SCKOAuthAPIURLRequest;
  licenseRequestWithAuthentication(authentication: SCKAPISession): SCKOAuthAPIURLRequest;
  baseURLForEnvironment(environment: SCKAPIEnvironment): NSURL;
  requestWithPath_queryItems_environment(path: NSString | string, parameters: NSDictionary<any, any> | {[key: string]: any} | null, environment: SCKAPIEnvironment): SCKOAuthAPIURLRequest;
  requestWithPath_environment(path: NSString | string, environment: SCKAPIEnvironment): SCKOAuthAPIURLRequest;
  requestWithPath(path: NSString | string): SCKOAuthAPIURLRequest;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

