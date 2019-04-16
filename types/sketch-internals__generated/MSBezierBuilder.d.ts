interface MSBezierBuilderUninitialized<InitializedType = MSBezierBuilder> extends NSObjectUninitialized<MSBezierBuilder> {
  initWithPointRadiusBehavior(pointRadiusBehaviour: MSPointRadiusBehaviour): InitializedType;
}

interface MSBezierBuilder extends NSObject {
  bezierPath(): NSBezierPath;
  path(): MSPath;
  _bezierPath(): NSBezierPath;

  pointRadiusBehaviour(): MSPointRadiusBehaviour;
}

declare const MSBezierBuilder: {
  alloc(): MSBezierBuilderUninitialized;
  class(): MSBezierBuilder;
  bezierPathWithPoints_inRect_shouldClose_pointRadiusBehaviour(points: NSArray<any> | any[], rect: NSRect, shouldClose: boolean, pointRadiusBehaviour: MSPointRadiusBehaviour): NSBezierPath;
  pathWithPoints_inRect_shouldClose_pointRadiusBehaviour(points: NSArray<any> | any[], rect: NSRect, shouldClose: boolean, pointRadiusBehaviour: MSPointRadiusBehaviour): MSPath;
  bezierPathForSegmentAtIndex_inPath_inRect(index: NSUInteger, shapePath: MSShapePathLayer, rect: NSRect): NSBezierPath;
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

