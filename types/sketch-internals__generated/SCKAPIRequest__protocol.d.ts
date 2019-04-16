interface ISCKAPIRequest {

  environment(): SCKAPIEnvironment;
  setEnvironment(environment: SCKAPIEnvironment): void;
  authentication(): SCKAPISession;
  setAuthentication(authentication: SCKAPISession): void;
  urlRequest(): NSURLRequest;
}

