interface SMKAdvertisementUninitialized<InitializedType = SMKAdvertisement> extends NSObjectUninitialized<SMKAdvertisement> {
  initWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}

interface SMKAdvertisement extends NSObject, INSCopying, INSSecureCoding {
  copyWithZone(zone: NSZone | null): any;

  dictionaryRepresentation(): NSDictionary<any, any>;
  identifier(): NSUUID;
  setIdentifier(identifier: NSUUID): void;
  name(): NSString;
  setName(name: NSString | string): void;
  modelName(): NSString;
  setModelName(modelName: NSString | string): void;
}

declare const SMKAdvertisement: {
  alloc(): SMKAdvertisementUninitialized;
  class(): SMKAdvertisement;
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

