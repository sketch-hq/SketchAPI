interface CAMediaTimingFunctionUninitialized<InitializedType = CAMediaTimingFunction> extends NSObjectUninitialized<CAMediaTimingFunction> {
  initWithControlPoints___(c1x: number, c1y: number, c2x: number, c2y: number): InitializedType;
}

interface CAMediaTimingFunction extends NSObject, INSSecureCoding {
  getControlPointAtIndex_values(idx: size_t, ptr: [number, number]): void;
}

declare const CAMediaTimingFunction: {
  alloc(): CAMediaTimingFunctionUninitialized;
  class(): CAMediaTimingFunction;
  functionWithName(name: CAMediaTimingFunctionName): CAMediaTimingFunction;
  functionWithControlPoints___(c1x: number, c1y: number, c2x: number, c2y: number): CAMediaTimingFunction;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

