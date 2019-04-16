interface SCKOAuthAPIOperationUninitialized<InitializedType = SCKOAuthAPIOperation> extends SCKAPIOperationUninitialized<SCKOAuthAPIOperation> {}

interface SCKOAuthAPIOperation extends SCKAPIOperation {

  authentication(): SCKAPISession;
}

declare const SCKOAuthAPIOperation: {
  alloc(): SCKOAuthAPIOperationUninitialized;
  class(): SCKOAuthAPIOperation;
  refreshAuthentication_handler(session: SCKAPISession, handler: SCKOAuthAPIHandler): void;
  refreshLicenseWithAuthentication_handler(authentication: SCKAPISession, handler: SCKOAuthAPIHandler): void;
  clientID(): NSString;
  setClientID(clientID: NSString | string): void;
  accessInstanceVariablesDirectly(): boolean;

}

