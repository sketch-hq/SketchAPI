interface BCCloudLicenseUninitialized<InitializedType = BCCloudLicense> extends NSObjectUninitialized<BCCloudLicense> {
  initWithDictionary_applicationID_publicCertificate(dictionary: NSDictionary<any, any> | {[key: string]: any} | null, applicationID: NSString | string | null, certificate: NSString | string | null): InitializedType;
  initWithToken(token: NSString | string): InitializedType;
}
interface BCCloudLicense extends NSObject, IBCLicense {

  userID(): NSString;
}
declare const BCCloudLicense: {
  alloc(): BCCloudLicenseUninitialized;
  class(): BCCloudLicense;
}

