interface MSSnappingTargetUninitialized<InitializedType = MSSnappingTarget> extends NSObjectUninitialized<MSSnappingTarget> {
  initWithGuideLine(lineSegment: BCLineSegment): InitializedType;
  initWithPosition_onAxis(value: CGFloat, axis: BCAxis): InitializedType;
  initWithPoint_axis_wantsGuide_length(point: NSPoint, axis: BCAxis, showGuide: boolean, length: CGFloat): InitializedType;
  initWithPoint_directionVector_guideType(point: NSPoint, vector: CGVector, guideType: MSSnappingTargetGuideType): InitializedType;
}

interface MSSnappingTarget extends NSObject, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  point(): NSPoint;
  directionVector(): CGVector;
  line(): BCLine;
  lineSegment(): BCLineSegment;
  guideType(): MSSnappingTargetGuideType;
}

declare const MSSnappingTarget: {
  alloc(): MSSnappingTargetUninitialized;
  class(): MSSnappingTarget;
  targetsForEdgesOfRect_includeCenter(rect: NSRect, includeCenter: boolean): NSArray<any>;
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

