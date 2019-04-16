interface MSAttributedStringAttributeUninitialized<InitializedType = MSAttributedStringAttribute> extends NSObjectUninitialized<MSAttributedStringAttribute> {
  initWithJSONDecoder(decoder: BCJSONDecoder): InitializedType;
}

interface MSAttributedStringAttribute extends NSObject, IBCJSONEncoding {
  encodeAsJSON(coder: BCJSONEncoder): void;
  replacementObjectForJSONEncoder(coder: BCJSONEncoder): NSObject;

  range(): NSRange;
  setRange(range: NSRange): void;
  attributeDictionary(): NSDictionary<any, any>;
  setAttributeDictionary(attributeDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const MSAttributedStringAttribute: {
  alloc(): MSAttributedStringAttributeUninitialized;
  class(): MSAttributedStringAttribute;
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

