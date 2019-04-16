interface NSURLProtectionSpaceUninitialized<InitializedType = NSURLProtectionSpace> extends NSObjectUninitialized<NSURLProtectionSpace> {
  initWithHost_port_protocol_realm_authenticationMethod(host: NSString | string, port: NSInteger, protocol: NSString | string | null, realm: NSString | string | null, authenticationMethod: NSString | string | null): InitializedType;
  initWithProxyHost_port_type_realm_authenticationMethod(host: NSString | string, port: NSInteger, type: NSString | string | null, realm: NSString | string | null, authenticationMethod: NSString | string | null): InitializedType;
}
interface NSURLProtectionSpace extends NSObject, INSSecureCoding, INSCopying {

  realm(): NSString;
  receivesCredentialSecurely(): boolean;
  isProxy(): boolean;
  host(): NSString;
  port(): NSInteger;
  proxyType(): NSString;
  protocol(): NSString;
  authenticationMethod(): NSString;
  distinguishedNames(): NSArray<any>;
  serverTrust(): SecTrustRef;
}
declare const NSURLProtectionSpace: {
  alloc(): NSURLProtectionSpaceUninitialized;
  class(): NSURLProtectionSpace;
}

