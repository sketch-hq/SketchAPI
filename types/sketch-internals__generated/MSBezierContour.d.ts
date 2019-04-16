interface MSBezierContourUninitialized<InitializedType = MSBezierContour> extends NSObjectUninitialized<MSBezierContour> {
  initWithSegments_closed(segments: NSArray<any> | any[], isClosed: boolean): InitializedType;
}

interface MSBezierContour extends NSObject {
  reversedContour(): MSBezierContour;
  closedContour(): MSBezierContour;
  contourWithInset(inset: CGFloat): MSBezierContour;
  contourWithInset_joinStrategy(inset: CGFloat, strategy: MSBezierJoinStrategy): MSBezierContour;
  segmentBefore(segment: MSBezierSegment): MSBezierSegment;
  segmentAfter(segment: MSBezierSegment): MSBezierSegment;
  intersectionsWithSegment(segment: MSBezierSegment): NSSet<any>;
  FBBezierContour(): FBBezierContour;

  closed(): boolean;
  clockwise(): boolean;
  segments(): NSArray<any>;
  bounds(): CGRect;
  path(): MSPath;
  isRectangular(): boolean;
}

declare const MSBezierContour: {
  alloc(): MSBezierContourUninitialized;
  class(): MSBezierContour;
  contourWithRect(rect: CGRect): MSBezierContour;
  contourWithPolygonAtPoint_radius_sides(center: CGPoint, radius: CGFloat, sides: NSUInteger): MSBezierContour;
  contourWithFBBezierContour(contour: FBBezierContour): MSBezierContour;
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

