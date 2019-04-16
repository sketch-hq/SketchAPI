interface SCKJWTUninitialized<InitializedType = SCKJWT> extends NSObjectUninitialized<SCKJWT> {}
interface SCKJWT extends NSObject {
  isSignatureValidForEnvironment(environment: SCKAPIEnvironment): boolean;

  algorithm(): NSString;
  type(): NSString;
  subject(): NSString;
  issuedAt(): NSNumber;
  expirationTime(): NSNumber;
  recommendedRefreshTime(): NSNumber;
  criticalRefreshTime(): NSNumber;
  sessionID(): NSString;
  deviceID(): NSString;
  variant(): NSString;
  email(): NSString;
  stringValue(): NSString;
  header(): NSDictionary<any, any>;
  payload(): NSDictionary<any, any>;
  signature(): NSString;
}
declare const SCKJWT: {
  alloc(): SCKJWTUninitialized;
  class(): SCKJWT;
}

