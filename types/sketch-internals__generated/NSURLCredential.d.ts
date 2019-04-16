interface NSURLCredentialUninitialized<InitializedType = NSURLCredential> extends NSObjectUninitialized<NSURLCredential> {
  initWithUser_password_persistence(user: NSString | string, password: NSString | string, persistence: NSURLCredentialPersistence): InitializedType;
  initWithIdentity_certificates_persistence(identity: SecIdentityRef, certArray: NSArray<any> | any[] | null, persistence: NSURLCredentialPersistence): InitializedType;
  initWithTrust(trust: SecTrustRef): InitializedType;
}
interface NSURLCredential extends NSObject, INSSecureCoding, INSCopying {

  persistence(): NSURLCredentialPersistence;
  user(): NSString;
  password(): NSString;
  hasPassword(): boolean;
  identity(): SecIdentityRef;
  certificates(): NSArray<any>;
}
declare const NSURLCredential: {
  alloc(): NSURLCredentialUninitialized;
  class(): NSURLCredential;  credentialWithUser_password_persistence(user: NSString | string, password: NSString | string, persistence: NSURLCredentialPersistence): NSURLCredential;
  credentialWithIdentity_certificates_persistence(identity: SecIdentityRef, certArray: NSArray<any> | any[] | null, persistence: NSURLCredentialPersistence): NSURLCredential;
  credentialForTrust(trust: SecTrustRef): NSURLCredential;

}

