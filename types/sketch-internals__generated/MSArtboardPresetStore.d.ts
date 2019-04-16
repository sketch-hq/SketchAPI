interface MSArtboardPresetStoreUninitialized<InitializedType = MSArtboardPresetStore> extends NSObjectUninitialized<MSArtboardPresetStore> {}

interface MSArtboardPresetStore extends NSObject {
  presetWithSize_preferredCategory(size: NSSize, preferredCategory: MSArtboardPresetsCategory | null): MSArtboardPreset;
  resizablePresetMatchingSize_preferredCategory(size: NSSize, preferredCategory: MSArtboardPresetsCategory | null): MSArtboardPreset;
  savePreset_error(newPreset: MSArtboardPreset, error: MOPointer<NSError>): boolean;
  removePreset_error(aPreset: MSArtboardPreset, error: MOPointer<NSError>): boolean;
  suggestedNameForUserPreset(): NSString;
  presetWithName_matchingSize(presetName: NSString | string, size: NSSize): MSArtboardPreset;

  categories(): NSArray<any>;
  customPresetsCategory(): MSArtboardPresetsCategory;
}

declare const MSArtboardPresetStore: {
  alloc(): MSArtboardPresetStoreUninitialized;
  class(): MSArtboardPresetStore;
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
  systemCategories(): NSArray<any>;
  setSystemCategories(systemCategories: NSArray<any> | any[]): void;
  indexOfLastSelectedCategory(): NSUInteger;
  setIndexOfLastSelectedCategory(indexOfLastSelectedCategory: NSUInteger): void;
  accessInstanceVariablesDirectly(): boolean;

}

