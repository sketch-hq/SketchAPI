interface MSArtboardPresetsSectionUninitialized<InitializedType = MSArtboardPresetsSection> extends NSObjectUninitialized<MSArtboardPresetsSection> {
  initWithName_presets(name: NSString | string | null, presets: NSArray<any> | any[]): InitializedType;
  initWithDictionaryRepresentation(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}

interface MSArtboardPresetsSection extends NSObject {

  name(): NSString;
  presets(): NSArray<any>;
  dictionaryRepresentation(): NSDictionary<any, any>;
}

declare const MSArtboardPresetsSection: {
  alloc(): MSArtboardPresetsSectionUninitialized;
  class(): MSArtboardPresetsSection;
  sectionsWithContentsOfURL(url: NSURL): NSArray<any>;
  writeSections_toURL_error(collections: NSArray<any> | any[], url: NSURL, error: MOPointer<NSError>): boolean;
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

