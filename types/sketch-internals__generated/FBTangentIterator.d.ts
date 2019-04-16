interface FBTangentIteratorUninitialized<InitializedType = FBTangentIterator> extends NSObjectUninitialized<FBTangentIterator> {
  initWithIntersection_onCurve(intersection: FBBezierIntersection, curve: FBBezierCurve): InitializedType;
}

interface FBTangentIterator extends NSObject {
  sync(other: FBTangentIterator): void;
  next(tangents: [FBPoint, FBPoint]): boolean;

  leftCurve(): FBBezierCurve;
  setLeftCurve(leftCurve: FBBezierCurve): void;
  rightCurve(): FBBezierCurve;
  setRightCurve(rightCurve: FBBezierCurve): void;
  offset(): FBFloat;
  setOffset(offset: FBFloat): void;
  offsetStep(): FBFloat;
  setOffsetStep(offsetStep: FBFloat): void;
  offsetMaximum(): FBFloat;
  setOffsetMaximum(offsetMaximum: FBFloat): void;
}

declare const FBTangentIterator: {
  alloc(): FBTangentIteratorUninitialized;
  class(): FBTangentIterator;
  tangentIteratorWithIntersection_onCurve(intersection: FBBezierIntersection, curve: FBBezierCurve): FBTangentIterator;
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

