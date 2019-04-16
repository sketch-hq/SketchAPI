interface NSErrorUninitialized<InitializedType = NSError> extends NSObjectUninitialized<NSError> {
  initWithDomain_code_userInfo(domain: NSErrorDomain, code: NSInteger, dict: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}
interface NSError extends NSObject, INSCopying, INSSecureCoding {

  domain(): NSErrorDomain;
  code(): NSInteger;
  userInfo(): NSDictionary<any, any>;
  localizedDescription(): NSString;
  localizedFailureReason(): NSString;
  localizedRecoverySuggestion(): NSString;
  localizedRecoveryOptions(): NSArray<any>;
  recoveryAttempter(): any;
  helpAnchor(): NSString;
  cloudCode_sck(): SCKErrorCode;
  isCloudServerRelated_sck(): boolean;
  isURLCancelled_sck(): boolean;
  cloudFields_sck(): NSArray<any>;
}
declare const NSError: {
  alloc(): NSErrorUninitialized;
  class(): NSError;  errorWithDomain_code_userInfo(domain: NSErrorDomain, code: NSInteger, dict: NSDictionary<any, any> | {[key: string]: any} | null): NSError;
  setUserInfoValueProviderForDomain_provider(errorDomain: NSErrorDomain, provider: Block): void;

}

