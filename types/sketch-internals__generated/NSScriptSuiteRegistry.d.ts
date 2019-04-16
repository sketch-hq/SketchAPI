interface NSScriptSuiteRegistryUninitialized<InitializedType = NSScriptSuiteRegistry> extends NSObjectUninitialized<NSScriptSuiteRegistry> {}

interface NSScriptSuiteRegistry extends NSObject {
  loadSuitesFromBundle(bundle: NSBundle): void;
  loadSuiteWithDictionary_fromBundle(suiteDeclaration: NSDictionary<any, any> | {[key: string]: any}, bundle: NSBundle): void;
  registerClassDescription(classDescription: NSScriptClassDescription): void;
  registerCommandDescription(commandDescription: NSScriptCommandDescription): void;
  appleEventCodeForSuite(suiteName: NSString | string): number;
  bundleForSuite(suiteName: NSString | string): NSBundle;
  classDescriptionsInSuite(suiteName: NSString | string): NSDictionary<any, any>;
  commandDescriptionsInSuite(suiteName: NSString | string): NSDictionary<any, any>;
  suiteForAppleEventCode(appleEventCode: number): NSString;
  classDescriptionWithAppleEventCode(appleEventCode: number): NSScriptClassDescription;
  commandDescriptionWithAppleEventClass_andAppleEventCode(appleEventClassCode: number, appleEventIDCode: number): NSScriptCommandDescription;
  aeteResource(languageName: NSString | string): NSData;

  suiteNames(): NSArray<any>;
}

declare const NSScriptSuiteRegistry: {
  alloc(): NSScriptSuiteRegistryUninitialized;
  class(): NSScriptSuiteRegistry;
  sharedScriptSuiteRegistry(): NSScriptSuiteRegistry;
  setSharedScriptSuiteRegistry(registry: NSScriptSuiteRegistry): void;
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

