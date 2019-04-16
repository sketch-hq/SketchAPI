interface SCKAPISessionUninitialized<InitializedType = SCKAPISession> extends NSObjectUninitialized<SCKAPISession> {
  initWithOAuthDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithTokenData_forUserID(data: NSData, userID: NSString | string): InitializedType;
  initWithToken_ofType_refreshToken_forUserID(token: NSString | string, tokenType: SCKAPISessionTokenType, refreshToken: NSString | string, userID: NSString | string): InitializedType;
}
interface SCKAPISession extends NSObject, INSCopying {
  setCurrentWithError(error: NSError): boolean;
  sessionWithRefreshToken(refreshToken: NSString | string): SCKAPISession;

  isCurrent(): boolean;
  refreshToken(): NSString;
  tokenData(): NSData;
  token(): NSString;
  userID(): NSString;
  tokenType(): SCKAPISessionTokenType;
  expirationDate(): NSDate;
  isValid(): boolean;
  httpAuthorizationValue(): NSString;
}
declare const SCKAPISession: {
  alloc(): SCKAPISessionUninitialized;
  class(): SCKAPISession;  invalidateCurrentCache(): void;

  hasCurrent(): boolean;

}

