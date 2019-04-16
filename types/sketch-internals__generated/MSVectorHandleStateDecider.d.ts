interface MSVectorHandleStateDeciderUninitialized<InitializedType = MSVectorHandleStateDecider> extends NSObjectUninitialized<MSVectorHandleStateDecider> {}

interface MSVectorHandleStateDecider extends NSObject {
  reset(): void;
  isHandleAtIndexPathSelected(indexPath: NSIndexPath): boolean;
  isHandleAtIndexPathVisible(indexPath: NSIndexPath): boolean;
  stateOfCurvePointAtIndexPath_curveToState_curveFromState(indexPath: NSIndexPath, curveToState: MSHandleState, curveFromState: MSHandleState): MSHandleState;
  indexPathOfHandleAtPoint_tolerance(point: NSPoint, tolerance: CGFloat): NSIndexPath;

  visibilityAroundSelectedHandles(): MSCurveAdjustmentHandleVisibility;
  setVisibilityAroundSelectedHandles(visibilityAroundSelectedHandles: MSCurveAdjustmentHandleVisibility): void;
  visibilityAroundHighlight(): MSCurveAdjustmentHandleVisibility;
  setVisibilityAroundHighlight(visibilityAroundHighlight: MSCurveAdjustmentHandleVisibility): void;
  selectionContext(): MSShapeChangeContext;
  setSelectionContext(selectionContext: MSShapeChangeContext): void;
  indexPathForHighlightedComponent(): NSIndexPath;
  setIndexPathForHighlightedComponent(indexPathForHighlightedComponent: NSIndexPath): void;
}

declare const MSVectorHandleStateDecider: {
  alloc(): MSVectorHandleStateDeciderUninitialized;
  class(): MSVectorHandleStateDecider;
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

