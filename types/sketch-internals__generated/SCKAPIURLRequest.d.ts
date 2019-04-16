interface SCKAPIURLRequestUninitialized<InitializedType = SCKAPIURLRequest> extends NSMutableURLRequestUninitialized<SCKAPIURLRequest> {}
interface SCKAPIURLRequest extends NSMutableURLRequest, ISCKAPIRequest {

  environment(): SCKAPIEnvironment;
  setEnvironment(environment: SCKAPIEnvironment): void;
  authentication(): SCKAPISession;
  setAuthentication(authentication: SCKAPISession): void;
  body(): any;
  setBody(body: any): void;
  resultType(): any;
  setResultType(resultType: any): void;
  type(): SCKAPIURLRequestType;
  setType(type: SCKAPIURLRequestType): void;
}
declare const SCKAPIURLRequest: {
  alloc(): SCKAPIURLRequestUninitialized;
  class(): SCKAPIURLRequest;  baseURLForEnvironment(environment: SCKAPIEnvironment): NSURL;
  requestWithPath_queryItems_environment(path: NSString | string, parameters: NSDictionary<any, any> | {[key: string]: any} | null, environment: SCKAPIEnvironment): SCKAPIURLRequest;
  requestWithPath_environment(path: NSString | string, environment: SCKAPIEnvironment): SCKAPIURLRequest;
  requestWithPath(path: NSString | string): SCKAPIURLRequest;

}

