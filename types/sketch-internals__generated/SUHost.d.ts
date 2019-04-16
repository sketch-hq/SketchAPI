interface SUHostUninitialized<InitializedType = SUHost> extends NSObjectUninitialized<SUHost> {
  initWithBundle(aBundle: NSBundle): InitializedType;
}

interface SUHost extends NSObject {
  objectForInfoDictionaryKey(key: NSString | string): any;
  boolForInfoDictionaryKey(key: NSString | string): boolean;
  objectForUserDefaultsKey(defaultName: NSString | string): any;
  setObject_forUserDefaultsKey(value: any, defaultName: NSString | string): void;
  boolForUserDefaultsKey(defaultName: NSString | string): boolean;
  setBool_forUserDefaultsKey(value: boolean, defaultName: NSString | string): void;
  objectForKey(key: NSString | string): any;
  boolForKey(key: NSString | string): boolean;

  bundle(): NSBundle;
  bundlePath(): NSString;
  name(): NSString;
  version(): NSString;
  displayVersion(): NSString;
  publicKeys(): SUPublicKeys;
  runningOnReadOnlyVolume(): boolean;
  publicDSAKeyFileKey(): NSString;
}

declare const SUHost: {
  alloc(): SUHostUninitialized;
  class(): SUHost;
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

