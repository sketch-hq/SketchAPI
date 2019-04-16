interface SCKAPIEnvironmentUninitialized<InitializedType = SCKAPIEnvironment> extends NSObjectUninitialized<SCKAPIEnvironment> {
  initWithHost(host: NSString | string | null): InitializedType;
  initWithName(name: NSString | string | null): InitializedType;
  initWithDefinition(definition: SCKAPIEnvironmentDefinition): InitializedType;
}

interface SCKAPIEnvironment extends NSObject, INSCopying {
  keychainAuthenticationWithError(error: NSError): SCKAPISession;
  setKeychainAuthentication_error(session: SCKAPISession | null, error: NSError): boolean;
  setCurrent(): void;
  copyWithZone(zone: NSZone | null): any;

  signUpURL(): NSURL;
  resetPasswordURL(): NSURL;
  requestSignatureSecret(): NSString;
  publicKeys(): NSArray<any>;
  definition(): SCKAPIEnvironmentDefinition;
  host(): NSString;
  name(): NSString;
  displayName(): NSString;
  suffixRepresentation(): NSString;
}

declare const SCKAPIEnvironment: {
  alloc(): SCKAPIEnvironmentUninitialized;
  class(): SCKAPIEnvironment;
  current(): SCKAPIEnvironment;
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
  accessInstanceVariablesDirectly(): boolean;

}

