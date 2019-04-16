interface MSArtboardPresetUninitialized<InitializedType = MSArtboardPreset> extends NSObjectUninitialized<MSArtboardPreset> {
  initWithName_size_imageName(name: NSString | string, size: NSSize, imageName: NSString | string | null): InitializedType;
  initWithDictionaryRepresentation(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}

interface MSArtboardPreset extends NSObject, INSCopying {
  oppositeOrientationPreset(): MSArtboardPreset;
  copyWithZone(zone: NSZone | null): any;

  name(): NSString;
  setName(name: NSString | string): void;
  layerName(): NSString;
  size(): NSSize;
  setSize(size: NSSize): void;
  sizeDescription(): NSString;
  offersLandscapeVariant(): boolean;
  allowResizedMatching(): boolean;
  imageName(): NSString;
  image(): NSImage;
  tooltip(): NSString;
  isSizeToFit(): boolean;
  isNew(): boolean;
  dictionaryRepresentation(): NSDictionary<any, any>;
}

declare const MSArtboardPreset: {
  alloc(): MSArtboardPresetUninitialized;
  class(): MSArtboardPreset;
  sizeToFitPresetWithName_size(name: NSString | string, size: NSSize): MSArtboardPreset;
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

