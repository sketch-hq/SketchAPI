interface BCRounderUninitialized<InitializedType = BCRounder> extends NSObjectUninitialized<BCRounder> {
  initWithRoundingIncrement(roundingIncrement: CGFloat): InitializedType;
}

interface BCRounder extends NSObject {
  roundPoint(point: CGPoint): CGPoint;
  roundPoint_mask(point: CGPoint, mask: BCAxisMask): CGPoint;
  roundSize(point: CGSize): CGSize;
  roundSize_mask(point: CGSize, mask: BCAxisMask): CGSize;
  roundVector(vector: CGVector): CGVector;
  roundVector_mask(vector: CGVector, mask: BCAxisMask): CGVector;
  roundedPoint_coordinateSpace_inCoordinateSpace(p: NSPoint, currentSpace: MSLayer, roundingSpace: any | null): NSPoint;

  roundingIncrement(): CGFloat;
  setRoundingIncrement(roundingIncrement: CGFloat): void;
}

declare const BCRounder: {
  alloc(): BCRounderUninitialized;
  class(): BCRounder;
  rounderWithPrecision(precision: MSVectorRounding): BCRounder;
  vectorRounder(): BCRounder;
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

