interface MSRulerGuidesUninitialized<InitializedType = MSRulerGuides> extends NSObjectUninitialized<MSRulerGuides> {}

interface MSRulerGuides extends NSObject {
}

declare const MSRulerGuides: {
  alloc(): MSRulerGuidesUninitialized;
  class(): MSRulerGuides;
  findHoverGuidesOnPage_mouse_mask_zoomScale(page: MSPage, mouse: NSPoint, mask: MSSnapMask, zoomScale: CGFloat): NSArray<any>;
  horizontalGuidesForVerticalRulerOnPage_mask_zoomScale(page: MSPage, mask: MSSnapMask, zoomScale: CGFloat): NSArray<any>;
  horizontalGuidesForVerticalRulerOnPage_mask_inRect_zoomScale(page: MSPage, mask: MSSnapMask, rect: NSRect, zoomScale: CGFloat): NSArray<any>;
  verticalGuidesForHorizontalRulerOnPage_mask_zoomScale(page: MSPage, mask: MSSnapMask, zoomScale: CGFloat): NSArray<any>;
  verticalGuidesForHorizontalRulerOnPage_mask_inRect_zoomScale(page: MSPage, mask: MSSnapMask, rect: NSRect, zoomScale: CGFloat): NSArray<any>;
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

