interface BCLicenseMetadataUninitialized<InitializedType = BCLicenseMetadata> extends NSObjectUninitialized<BCLicenseMetadata> {
  initWithUpdateExpirationDate(updateExpirationDate: NSDate): InitializedType;
  initWithDictionary_applicationID_publicCertificate(dictionary: NSDictionary<any, any> | {[key: string]: any} | null, applicationID: NSString | string | null, certificate: NSString | string | null): InitializedType;
}
interface BCLicenseMetadata extends NSObject {

  updateExpirationDate(): NSDate;
}
declare const BCLicenseMetadata: {
  alloc(): BCLicenseMetadataUninitialized;
  class(): BCLicenseMetadata;
}

