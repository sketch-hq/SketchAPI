interface NSFontCollectionUninitialized<InitializedType = NSFontCollection> extends NSObjectUninitialized<NSFontCollection> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSFontCollection extends NSObject, INSCopying, INSMutableCopying, INSCoding {
  matchingDescriptorsWithOptions(options: NSDictionary<any, any> | {[key: string]: any} | null): NSArray<any>;
  matchingDescriptorsForFamily(family: NSString | string): NSArray<any>;
  matchingDescriptorsForFamily_options(family: NSString | string, options: NSDictionary<any, any> | {[key: string]: any} | null): NSArray<any>;
  copyWithZone(zone: NSZone | null): any;
  mutableCopyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  queryDescriptors(): NSArray<any>;
  exclusionDescriptors(): NSArray<any>;
  matchingDescriptors(): NSArray<any>;
}

declare const NSFontCollection: {
  alloc(): NSFontCollectionUninitialized;
  class(): NSFontCollection;
  fontCollectionWithDescriptors(queryDescriptors: NSArray<any> | any[]): NSFontCollection;
  fontCollectionWithLocale(locale: NSLocale): NSFontCollection;
  showFontCollection_withName_visibility_error(collection: NSFontCollection, name: NSFontCollectionName, visibility: NSFontCollectionVisibility, error: MOPointer<NSError>): boolean;
  hideFontCollectionWithName_visibility_error(name: NSFontCollectionName, visibility: NSFontCollectionVisibility, error: MOPointer<NSError>): boolean;
  renameFontCollectionWithName_visibility_toName_error(name: NSFontCollectionName, visibility: NSFontCollectionVisibility, name2: NSFontCollectionName, error: MOPointer<NSError>): boolean;
  fontCollectionWithName(name: NSFontCollectionName): NSFontCollection;
  fontCollectionWithName_visibility(name: NSFontCollectionName, visibility: NSFontCollectionVisibility): NSFontCollection;
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
  fontCollectionWithAllAvailableDescriptors(): NSFontCollection;
  allFontCollectionNames(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

