interface MSArcUninitialized<InitializedType = MSArc> extends NSObjectUninitialized<MSArc> {}

interface MSArc extends NSObject {
  absoluteErrorWithSegment(segment: MSBezierSegment): CGFloat;

  endPoint1(): CGPoint;
  endPoint2(): CGPoint;
  center(): CGPoint;
  radius(): CGFloat;
  clockwise(): boolean;
  startAngle(): CGFloat;
  endAngle(): CGFloat;
  startTangent(): BCLine;
  endTangent(): BCLine;
  startNormal(): CGVector;
  endNormal(): CGVector;
  isALine(): boolean;
}

declare const MSArc: {
  alloc(): MSArcUninitialized;
  class(): MSArc;
  arcApproximationForSegment_maximumError(segment: MSBezierSegment, maximumError: CGFloat): NSArray<any>;
  arcApproximationForSegment_absoluteError(segment: MSBezierSegment, absoluteError: CGFloat): NSArray<any>;
  arcWithEndPoint1_endPoint2_center_clockwise(endPoint1: CGPoint, endPoint2: CGPoint, center: CGPoint, clockwise: boolean): MSArc;
  lineWithEndPoint1_endPoint2(endPoint1: CGPoint, endPoint2: CGPoint): MSArc;
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

