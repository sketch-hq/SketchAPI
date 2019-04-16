interface FBContourOverlapUninitialized<InitializedType = FBContourOverlap> extends NSObjectUninitialized<FBContourOverlap> {}

interface FBContourOverlap extends NSObject {
  addOverlap_forEdge1_edge2(range: FBBezierIntersectRange, edge1: FBBezierCurve, edge2: FBBezierCurve): void;
  runsWithBlock(block: Block): void;
  reset(): void;
  isComplete(): boolean;
  isEmpty(): boolean;
  isBetweenContour_andContour(contour1: FBBezierContour, contour2: FBBezierContour): boolean;
  doesContainCrossing(crossing: FBEdgeCrossing): boolean;
  doesContainParameter_onEdge(parameter: FBFloat, edge: FBBezierCurve): boolean;

  contour1(): FBBezierContour;
  contour2(): FBBezierContour;
  overlapRuns(): NSArray<any>;
}

declare const FBContourOverlap: {
  alloc(): FBContourOverlapUninitialized;
  class(): FBContourOverlap;
  contourOverlap(): FBContourOverlap;
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

