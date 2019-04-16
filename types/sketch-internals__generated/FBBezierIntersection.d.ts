interface FBBezierIntersectionUninitialized<InitializedType = FBBezierIntersection> extends NSObjectUninitialized<FBBezierIntersection> {
  initWithCurve1_parameter1_curve2_parameter2(curve1: FBBezierCurve, parameter1: FBFloat, curve2: FBBezierCurve, parameter2: FBFloat): InitializedType;
}

interface FBBezierIntersection extends NSObject {
  enumerateAliasesWithBlock(block: Block): void;
  curve1Direction(): FBPoint;
  curve2Direction(): FBPoint;
  curve1WindingCount(): NSInteger;
  curve2WindingCount(): NSInteger;

  location(): FBPoint;
  curve1(): FBBezierCurve;
  parameter1(): FBFloat;
  curve2(): FBBezierCurve;
  parameter2(): FBFloat;
  tangent(): boolean;
  curve1LeftBezier(): FBBezierCurve;
  curve1RightBezier(): FBBezierCurve;
  curve2LeftBezier(): FBBezierCurve;
  curve2RightBezier(): FBBezierCurve;
  atStartOfCurve1(): boolean;
  atStopOfCurve1(): boolean;
  atStartOfCurve2(): boolean;
  atStopOfCurve2(): boolean;
  isAtExactStartOfCurve1(): boolean;
  isAtExactStopOfCurve1(): boolean;
  isAtExactStartOfCurve2(): boolean;
  isAtExactStopOfCurve2(): boolean;
  atEndPointOfCurve1(): boolean;
  atEndPointOfCurve2(): boolean;
  atEndPointOfCurve(): boolean;
}

declare const FBBezierIntersection: {
  alloc(): FBBezierIntersectionUninitialized;
  class(): FBBezierIntersection;
  intersectionWithCurve1_parameter1_curve2_parameter2(curve1: FBBezierCurve, parameter1: FBFloat, curve2: FBBezierCurve, parameter2: FBFloat): FBBezierIntersection;
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

