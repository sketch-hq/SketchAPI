interface NSURLCredentialUninitialized<InitializedType = NSURLCredential> extends NSObjectUninitialized<NSURLCredential> {
  initWithUser_password_persistence(user: NSString | string, password: NSString | string, persistence: NSURLCredentialPersistence): InitializedType;
  initWithIdentity_certificates_persistence(identity: SecIdentityRef, certArray: NSArray<any> | any[] | null, persistence: NSURLCredentialPersistence): InitializedType;
  initWithTrust(trust: SecTrustRef): InitializedType;
}

interface NSURLCredential extends NSObject, INSSecureCoding, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  persistence(): NSURLCredentialPersistence;
  user(): NSString;
  password(): NSString;
  hasPassword(): boolean;
  identity(): SecIdentityRef;
  certificates(): NSArray<any>;
}

declare const NSURLCredential: {
  alloc(): NSURLCredentialUninitialized;
  class(): NSURLCredential;
  credentialWithUser_password_persistence(user: NSString | string, password: NSString | string, persistence: NSURLCredentialPersistence): NSURLCredential;
  credentialWithIdentity_certificates_persistence(identity: SecIdentityRef, certArray: NSArray<any> | any[] | null, persistence: NSURLCredentialPersistence): NSURLCredential;
  credentialForTrust(trust: SecTrustRef): NSURLCredential;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

