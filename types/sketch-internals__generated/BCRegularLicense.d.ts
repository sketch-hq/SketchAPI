interface BCRegularLicenseUninitialized<InitializedType = BCRegularLicense> extends NSObjectUninitialized<BCRegularLicense> {
  initWithDictionary_applicationID_publicCertificate(dictionary: NSDictionary<any, any> | {[key: string]: any} | null, applicationID: NSString | string | null, certificate: NSString | string | null): InitializedType;
}

interface BCRegularLicense extends NSObject, IBCLicense {
  saveToURL_error(URL: NSURL, error: MOPointer<NSError>): boolean;
  log(): void;

  applicationID(): NSString;
  setApplicationID(applicationID: NSString | string): void;
  registrationStatus(): BCLicenseRegistrationStatus;
  licenseID(): NSString;
  email(): NSString;
  deviceID(): NSString;
  networkTime(): BCNetworkTime;
  isValid(): boolean;
  type(): BCLicenseType;
  remainingTimeInterval(): NSTimeInterval;
  shouldRefresh(): boolean;
  requiresRefresh(): boolean;
  shouldTryToRequestNewTrialLicense(): boolean;
  isAboutToExpire(): boolean;
  updateExpirationDate(): NSDate;
  updatesHaveExpired(): boolean;
  variants(): NSArray<any>;
}

declare const BCRegularLicense: {
  alloc(): BCRegularLicenseUninitialized;
  class(): BCRegularLicense;
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
  provider(): BCLicenseProvider;
  accessInstanceVariablesDirectly(): boolean;

}

