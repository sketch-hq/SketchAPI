interface BCRegularLicenseUninitialized<InitializedType = BCRegularLicense> extends NSObjectUninitialized<BCRegularLicense> {
  initWithDictionary_applicationID_publicCertificate(dictionary: NSDictionary<any, any> | {[key: string]: any} | null, applicationID: NSString | string | null, certificate: NSString | string | null): InitializedType;
}
interface BCRegularLicense extends NSObject, IBCLicense {

  applicationID(): NSString;
  setApplicationID(applicationID: NSString | string): void;
  registrationStatus(): BCLicenseRegistrationStatus;
}
declare const BCRegularLicense: {
  alloc(): BCRegularLicenseUninitialized;
  class(): BCRegularLicense;
}

