interface FBEdgeCrossingUninitialized<InitializedType = FBEdgeCrossing> extends NSObjectUninitialized<FBEdgeCrossing> {
  initWithIntersection(intersection: FBBezierIntersection): InitializedType;
}

interface FBEdgeCrossing extends NSObject {
  removeFromEdge(): void;
  isCoincidentWith(crossing: FBEdgeCrossing): boolean;
  nextUsingNonself(useNonself: boolean): FBEdgeCrossing;
  previousUsingNonself(useNonself: boolean): FBEdgeCrossing;
  isEqualToEdgeCrossing(crossing: FBEdgeCrossing): boolean;

  edge(): FBBezierCurve;
  setEdge(edge: FBBezierCurve): void;
  counterpart(): FBEdgeCrossing;
  setCounterpart(counterpart: FBEdgeCrossing): void;
  order(): FBFloat;
  entry(): boolean;
  setEntry(entry: boolean): void;
  processed(): boolean;
  setProcessed(processed: boolean): void;
  selfCrossing(): boolean;
  setSelfCrossing(selfCrossing: boolean): void;
  overlapRun(): FBEdgeOverlapRun;
  setOverlapRun(overlapRun: FBEdgeOverlapRun): void;
  fromCrossingOverlap(): boolean;
  index(): NSUInteger;
  setIndex(index: NSUInteger): void;
  suspicious(): boolean;
  setSuspicious(suspicious: boolean): void;
  next(): FBEdgeCrossing;
  previous(): FBEdgeCrossing;
  parameter(): FBFloat;
  curve(): FBBezierCurve;
  leftCurve(): FBBezierCurve;
  rightCurve(): FBBezierCurve;
  atStart(): boolean;
  atEnd(): boolean;
  location(): FBPoint;
  intersection(): FBBezierIntersection;
}

declare const FBEdgeCrossing: {
  alloc(): FBEdgeCrossingUninitialized;
  class(): FBEdgeCrossing;
  crossingWithIntersection(intersection: FBBezierIntersection): FBEdgeCrossing;
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

