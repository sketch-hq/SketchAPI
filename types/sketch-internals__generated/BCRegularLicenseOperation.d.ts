interface BCRegularLicenseOperationUninitialized<InitializedType = BCRegularLicenseOperation> extends BCURLOperationUninitialized<BCRegularLicenseOperation> {
  initWithRequest(request: NSURLRequest): InitializedType;
}
interface BCRegularLicenseOperation extends BCURLOperation, IBCLicenseOperation {

  result(): any;
  error(): NSError;
}
declare const BCRegularLicenseOperation: {
  alloc(): BCRegularLicenseOperationUninitialized;
  class(): BCRegularLicenseOperation;  configureWithApplicationID_publicCertificate(applicationID: NSString | string, publicCertificate: NSString | string): void;
  registerWithLicenseKey_handler(license: NSString | string, handler: BCLicenseRequestHandler): void;
  refreshLicense_handler(license: any | null, handler: BCLicenseRequestHandler): void;
  requestTrialWithHandler(handler: BCLicenseRequestHandler): void;
  unregisterLicense(license: any): void;
  requestMetadataForLicense_handler(license: any, handler: BCLicenseMetadataRequestHandler): void;

}

