interface MSAlignmentEngineUninitialized<InitializedType = MSAlignmentEngine> extends NSObjectUninitialized<MSAlignmentEngine> {
  initWithCycle(cycle: MSAlignmentEngineCycle): InitializedType;
}

interface MSAlignmentEngine extends NSObject {
  canSnapOnAxis(axis: BCAxis): boolean;
  beginCycleWithPoint_constraint(point: NSPoint, constraint: MSAlignmentEngineConstraint | null): MSAlignmentEngineCycle;
  addTarget(target: MSSnappingTarget): void;
  addTargets(targets: NSArray<any> | any[]): void;
  addTargetWithLineSegment(segment: BCLineSegment): void;
  addOrthogonalTargetsThroughPoint(point: NSPoint): void;
  addTargetsForRect_includeCenter(rect: NSRect, includeCenter: boolean): void;
  addTargetAtPoint(point: NSPoint): void;

  snapDistance(): CGFloat;
  setSnapDistance(snapDistance: CGFloat): void;
  constraint(): MSAlignmentEngineConstraint;
  currentCycle(): MSAlignmentEngineCycle;
  alignmentResult(): MSAlignmentEngineResult;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSAlignmentEngine: {
  alloc(): MSAlignmentEngineUninitialized;
  class(): MSAlignmentEngine;
  snapTargetsForCentersOfLayers(layers: NSArray<any> | any[]): NSArray<any>;
  enumeratorForPossibleSnapTargetLayersInGroup(group: MSLayerGroup): MSLayerEnumerator<any>;
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

