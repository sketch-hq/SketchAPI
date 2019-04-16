interface NSScreenUninitialized<InitializedType = NSScreen> extends NSObjectUninitialized<NSScreen> {}

interface NSScreen extends NSObject {
  canRepresentDisplayGamut(displayGamut: NSDisplayGamut): boolean;
  convertRectToBacking(rect: NSRect): NSRect;
  convertRectFromBacking(rect: NSRect): NSRect;
  backingAlignedRect_options(rect: NSRect, options: NSAlignmentOptions): NSRect;
  userSpaceScaleFactor(): CGFloat;
  isOnRetinaScreen(): boolean;

  depth(): NSWindowDepth;
  frame(): NSRect;
  visibleFrame(): NSRect;
  deviceDescription(): NSDictionary<any, any>;
  colorSpace(): NSColorSpace;
  supportedWindowDepths(): NSWindowDepth;
  backingScaleFactor(): CGFloat;
  maximumExtendedDynamicRangeColorComponentValue(): CGFloat;
}

declare const NSScreen: {
  alloc(): NSScreenUninitialized;
  class(): NSScreen;
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
  screens(): NSArray<any>;
  mainScreen(): NSScreen;
  deepestScreen(): NSScreen;
  screensHaveSeparateSpaces(): boolean;
  highestBackingScale_bc(): CGFloat;
  accessInstanceVariablesDirectly(): boolean;

}

