interface MSFlexibleColorUninitialized<InitializedType = MSFlexibleColor> extends NSObjectUninitialized<MSFlexibleColor> {}

interface MSFlexibleColor extends NSObject {
  getRed_green_blue_alpha(red: CGFloat | null, green: CGFloat | null, blue: CGFloat | null, alpha: CGFloat | null): void;
  getHue_saturation_brightness_alpha(hue: CGFloat | null, saturation: CGFloat | null, brightness: CGFloat | null, alpha: CGFloat | null): void;
  getHue_saturation_lightness_alpha(hue: CGFloat | null, saturation: CGFloat | null, lightness: CGFloat | null, alpha: CGFloat | null): void;
  colorForColorSpace(space: NSColorSpace): NSColor;
  msColor(): MSColor;
}

declare const MSFlexibleColor: {
  alloc(): MSFlexibleColorUninitialized;
  class(): MSFlexibleColor;
  colorWithRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): any;
  colorWithHue_sat_bright_alpha(hue: CGFloat, sat: CGFloat, bright: CGFloat, alpha: CGFloat): any;
  colorWithHue_sat_lightness_alpha(hue: CGFloat, sat: CGFloat, lightness: CGFloat, alpha: CGFloat): any;
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

