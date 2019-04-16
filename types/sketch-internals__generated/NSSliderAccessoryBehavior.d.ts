interface NSSliderAccessoryBehaviorUninitialized<InitializedType = NSSliderAccessoryBehavior> extends NSObjectUninitialized<NSSliderAccessoryBehavior> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSSliderAccessoryBehavior extends NSObject, INSCoding, INSCopying {
  handleAction(sender: NSSliderAccessory): void;
  encodeWithCoder(aCoder: NSCoder): void;
  copyWithZone(zone: NSZone | null): any;
}

declare const NSSliderAccessoryBehavior: {
  alloc(): NSSliderAccessoryBehaviorUninitialized;
  class(): NSSliderAccessoryBehavior;
  behaviorWithTarget_action(target: any | null, action: string): NSSliderAccessoryBehavior;
  behaviorWithHandler(handler: Block): NSSliderAccessoryBehavior;
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
  automaticBehavior(): NSSliderAccessoryBehavior;
  valueStepBehavior(): NSSliderAccessoryBehavior;
  valueResetBehavior(): NSSliderAccessoryBehavior;
  accessInstanceVariablesDirectly(): boolean;

}

