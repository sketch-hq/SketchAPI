interface MSBezierFilletUninitialized<InitializedType = MSBezierFillet> extends NSObjectUninitialized<MSBezierFillet> {
  initWithSegment1_segment2_segment1Offset_segment2Offset_arcEndPoint1_arcEndPoint2_arcCenter_arcRadius(segment1: MSBezierSegment, segment2: MSBezierSegment, segment1Offset: CGFloat, segment2Offset: CGFloat, arcEndPoint1: CGPoint, arcEndPoint2: CGPoint, arcCenter: CGPoint, arcRadius: CGFloat): InitializedType;
}

interface MSBezierFillet extends NSObject {
  reversedFillet(): MSBezierFillet;
  arcSegments(): NSArray<any>;
  addArcToBezierPath_orCGPath(bezierPath: NSBezierPath, pathRef: CGMutablePathRef): void;

  segment1(): MSBezierSegment;
  segment2(): MSBezierSegment;
  segment1Offset(): CGFloat;
  segment2Offset(): CGFloat;
  arcRadius(): CGFloat;
  arcEndPoint1(): CGPoint;
  arcEndPoint2(): CGPoint;
  arcCenter(): CGPoint;
  startAngle(): CGFloat;
  endAngle(): CGFloat;
  clockwise(): boolean;
}

declare const MSBezierFillet: {
  alloc(): MSBezierFilletUninitialized;
  class(): MSBezierFillet;
  bezierFilletWithSegment1_segment2_segment1Offset(segment1: MSBezierSegment, segment2: MSBezierSegment, segment1Offset: CGFloat): MSBezierFillet;
  bezierFilletWithSegment1_segment2_filletRadius(segment1: MSBezierSegment, segment2: MSBezierSegment, filletRadius: CGFloat): MSBezierFillet;
  zeroRadiusFilletWithSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): MSBezierFillet;
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

