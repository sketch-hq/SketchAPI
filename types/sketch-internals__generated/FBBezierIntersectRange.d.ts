interface FBBezierIntersectRangeUninitialized<InitializedType = FBBezierIntersectRange> extends NSObjectUninitialized<FBBezierIntersectRange> {
  initWithCurve1_parameterRange1_curve2_parameterRange2_reversed(curve1: FBBezierCurve, parameterRange1: FBRange, curve2: FBBezierCurve, parameterRange2: FBRange, reversed: boolean): InitializedType;
}

interface FBBezierIntersectRange extends NSObject {
  merge(other: FBBezierIntersectRange): void;
  flip(): FBBezierIntersectRange;

  curve1(): FBBezierCurve;
  parameterRange1(): FBRange;
  curve1LeftBezier(): FBBezierCurve;
  curve1RightBezier(): FBBezierCurve;
  curve1OverlappingBezier(): FBBezierCurve;
  curve2(): FBBezierCurve;
  parameterRange2(): FBRange;
  reversed(): boolean;
  curve2LeftBezier(): FBBezierCurve;
  curve2RightBezier(): FBBezierCurve;
  curve2OverlappingBezier(): FBBezierCurve;
  startIntersection(): FBBezierIntersection;
  middleIntersection(): FBBezierIntersection;
  stopIntersection(): FBBezierIntersection;
  atStartOfCurve1(): boolean;
  atStopOfCurve1(): boolean;
  atStartOfCurve2(): boolean;
  atStopOfCurve2(): boolean;
}

declare const FBBezierIntersectRange: {
  alloc(): FBBezierIntersectRangeUninitialized;
  class(): FBBezierIntersectRange;
  intersectRangeWithCurve1_parameterRange1_curve2_parameterRange2_reversed(curve1: FBBezierCurve, parameterRange1: FBRange, curve2: FBBezierCurve, parameterRange2: FBRange, reversed: boolean): FBBezierIntersectRange;
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

