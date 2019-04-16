interface BCCloudLicenseOperationUninitialized<InitializedType = BCCloudLicenseOperation> extends SCKOAuthAPIOperationUninitialized<BCCloudLicenseOperation> {}

interface BCCloudLicenseOperation extends SCKOAuthAPIOperation, IBCLicenseOperation {
}

declare const BCCloudLicenseOperation: {
  alloc(): BCCloudLicenseOperationUninitialized;
  class(): BCCloudLicenseOperation;
  refreshLicense_handler(license: any | null, handler: BCLicenseRequestHandler): void;
  refreshAuthentication_handler(session: SCKAPISession, handler: SCKOAuthAPIHandler): void;
  refreshLicenseWithAuthentication_handler(authentication: SCKAPISession, handler: SCKOAuthAPIHandler): void;
}

