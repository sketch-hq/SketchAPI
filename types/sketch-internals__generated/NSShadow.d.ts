interface NSShadowUninitialized<InitializedType = NSShadow> extends NSObjectUninitialized<NSShadow> {}

interface NSShadow extends NSObject, INSCopying, INSSecureCoding {
  set(): void;
  copyWithZone(zone: NSZone | null): any;

  shadowOffset(): NSSize;
  setShadowOffset(shadowOffset: NSSize): void;
  shadowBlurRadius(): CGFloat;
  setShadowBlurRadius(shadowBlurRadius: CGFloat): void;
  shadowColor(): NSColor;
  setShadowColor(shadowColor: NSColor): void;
}

declare const NSShadow: {
  alloc(): NSShadowUninitialized;
  class(): NSShadow;
  shadowWithColor_offset_blur(color: NSColor, offset: NSSize, blur: CGFloat): NSShadow;
  clearShadow(): void;
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

