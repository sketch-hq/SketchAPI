interface NSOrthographyUninitialized<InitializedType = NSOrthography> extends NSObjectUninitialized<NSOrthography> {
  initWithDominantScript_languageMap(script: NSString | string, map: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSOrthography extends NSObject, INSCopying, INSSecureCoding {
  languagesForScript(script: NSString | string): NSArray<any>;
  dominantLanguageForScript(script: NSString | string): NSString;
  copyWithZone(zone: NSZone | null): any;

  dominantScript(): NSString;
  languageMap(): NSDictionary<any, any>;
  dominantLanguage(): NSString;
  allScripts(): NSArray<any>;
  allLanguages(): NSArray<any>;
}

declare const NSOrthography: {
  alloc(): NSOrthographyUninitialized;
  class(): NSOrthography;
  defaultOrthographyForLanguage(language: NSString | string): NSOrthography;
  orthographyWithDominantScript_languageMap(script: NSString | string, map: NSDictionary<any, any> | {[key: string]: any}): NSOrthography;
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

