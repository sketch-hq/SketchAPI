interface CAConstraintUninitialized<InitializedType = CAConstraint> extends NSObjectUninitialized<CAConstraint> {
  initWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat): InitializedType;
}

interface CAConstraint extends NSObject, INSSecureCoding {

  attribute(): CAConstraintAttribute;
  sourceName(): NSString;
  sourceAttribute(): CAConstraintAttribute;
  scale(): CGFloat;
  offset(): CGFloat;
}

declare const CAConstraint: {
  alloc(): CAConstraintUninitialized;
  class(): CAConstraint;
  constraintWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat): CAConstraint;
  constraintWithAttribute_relativeTo_attribute_offset(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute, c: CGFloat): CAConstraint;
  constraintWithAttribute_relativeTo_attribute(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute): CAConstraint;
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

