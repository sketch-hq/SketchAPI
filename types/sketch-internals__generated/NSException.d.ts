interface NSExceptionUninitialized<InitializedType = NSException> extends NSObjectUninitialized<NSException> {
  initWithName_reason_userInfo(aName: NSExceptionName, aReason: NSString | string | null, aUserInfo: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSException extends NSObject, INSCopying, INSCoding {
  raise(): void;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  name(): NSExceptionName;
  reason(): NSString;
  userInfo(): NSDictionary<any, any>;
  callStackReturnAddresses(): NSArray<any>;
  callStackSymbols(): NSArray<any>;
}

declare const NSException: {
  alloc(): NSExceptionUninitialized;
  class(): NSException;
  exceptionWithName_reason_userInfo(name: NSExceptionName, reason: NSString | string | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): NSException;
  raise_format(name: NSExceptionName, format: NSString | string, ...args: any[]): void;
  raise_format_arguments(name: NSExceptionName, format: NSString | string, ...argList: any[]): void;
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

