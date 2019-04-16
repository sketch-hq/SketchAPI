interface SCKAuthAPIURLRequestUninitialized<InitializedType = SCKAuthAPIURLRequest> extends SCKAPIURLRequestUninitialized<SCKAuthAPIURLRequest> {}

interface SCKAuthAPIURLRequest extends SCKAPIURLRequest {
}

declare const SCKAuthAPIURLRequest: {
  alloc(): SCKAuthAPIURLRequestUninitialized;
  class(): SCKAuthAPIURLRequest;
  baseURLForEnvironment(environment: SCKAPIEnvironment): NSURL;
  requestWithPath_queryItems_environment(path: NSString | string, parameters: NSDictionary<any, any> | {[key: string]: any} | null, environment: SCKAPIEnvironment): SCKAuthAPIURLRequest;
  requestWithPath_environment(path: NSString | string, environment: SCKAPIEnvironment): SCKAuthAPIURLRequest;
  requestWithPath(path: NSString | string): SCKAuthAPIURLRequest;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

