interface BCScreenGrabUninitialized<InitializedType = BCScreenGrab> extends NSObjectUninitialized<BCScreenGrab> {}

interface BCScreenGrab extends NSObject {
  bitmapImageRepCroppingToRect(r: NSRect): NSBitmapImageRep;

  displayID(): CGDirectDisplayID;
  image(): NSImage;
  bitmapRep(): NSBitmapImageRep;
  imageOrigin(): NSPoint;
  isRetinaScreen(): boolean;
  colorSpace(): NSColorSpace;
  screenFrame(): NSRect;
}

declare const BCScreenGrab: {
  alloc(): BCScreenGrabUninitialized;
  class(): BCScreenGrab;
  screenGrabForDisplay_belowWindowWithID(displayID: CGDirectDisplayID, windowID: CGWindowID): BCScreenGrab;
  screenGrabWithBitmapImageRep_originOnScreen_colorSpace_displayID(bitmapRep: NSBitmapImageRep, screenOrigin: NSPoint, colorSpace: NSColorSpace, displayID: CGDirectDisplayID): BCScreenGrab;
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

