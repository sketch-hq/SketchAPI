interface SUAppcastItemUninitialized<InitializedType = SUAppcastItem> extends NSObjectUninitialized<SUAppcastItem> {
  initWithDictionary(dict: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithDictionary_failureReason(dict: NSDictionary<any, any> | {[key: string]: any}, error: MOPointer<NSString>): InitializedType;
}

interface SUAppcastItem extends NSObject {
  infoURL(): NSURL;

  title(): NSString;
  dateString(): NSString;
  itemDescription(): NSString;
  releaseNotesURL(): NSURL;
  signatures(): SUSignatures;
  minimumSystemVersion(): NSString;
  maximumSystemVersion(): NSString;
  fileURL(): NSURL;
  contentLength(): number;
  versionString(): NSString;
  osString(): NSString;
  displayVersionString(): NSString;
  deltaUpdates(): NSDictionary<any, any>;
  infoURL(): NSURL;
  deltaUpdate(): boolean;
  criticalUpdate(): boolean;
  macOsUpdate(): boolean;
  informationOnlyUpdate(): boolean;
  propertiesDictionary(): NSDictionary<any, any>;
}

declare const SUAppcastItem: {
  alloc(): SUAppcastItemUninitialized;
  class(): SUAppcastItem;
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

