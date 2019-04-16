interface MSBezierJoinUninitialized<InitializedType = MSBezierJoin> extends NSObjectUninitialized<MSBezierJoin> {
  initWithSegment1_segment2_joinedSegments(segment1: MSBezierSegment, segment2: MSBezierSegment, joinedSegments: NSArray<any> | any[] | null): InitializedType;
}

interface MSBezierJoin extends NSObject {

  segment1(): MSBezierSegment;
  segment2(): MSBezierSegment;
  joinedSegments(): NSArray<any>;
}

declare const MSBezierJoin: {
  alloc(): MSBezierJoinUninitialized;
  class(): MSBezierJoin;
  joinWithSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): MSBezierJoin;
  joinWithSegment1_segment2_strategy(segment1: MSBezierSegment, segment2: MSBezierSegment, strategy: MSBezierJoinStrategy): MSBezierJoin;
  segmentsByJoiningSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): NSArray<any>;
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

