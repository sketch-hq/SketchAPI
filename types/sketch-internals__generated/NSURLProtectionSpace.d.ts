interface NSURLProtectionSpaceUninitialized<InitializedType = NSURLProtectionSpace> extends NSObjectUninitialized<NSURLProtectionSpace> {
  initWithHost_port_protocol_realm_authenticationMethod(host: NSString | string, port: NSInteger, protocol: NSString | string | null, realm: NSString | string | null, authenticationMethod: NSString | string | null): InitializedType;
  initWithProxyHost_port_type_realm_authenticationMethod(host: NSString | string, port: NSInteger, type: NSString | string | null, realm: NSString | string | null, authenticationMethod: NSString | string | null): InitializedType;
}

interface NSURLProtectionSpace extends NSObject, INSSecureCoding, INSCopying {
  copyWithZone(zone: NSZone | null): any;

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

