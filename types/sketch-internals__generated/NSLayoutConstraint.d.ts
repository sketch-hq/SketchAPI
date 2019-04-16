interface NSLayoutConstraintUninitialized<InitializedType = NSLayoutConstraint> extends NSObjectUninitialized<NSLayoutConstraint> {}

interface NSLayoutConstraint extends NSObject, INSAnimatablePropertyContainer {
  animator(): NSLayoutConstraint;
  animationForKey(key: NSAnimatablePropertyKey): any;

  priority(): NSLayoutPriority;
  setPriority(priority: NSLayoutPriority): void;
  shouldBeArchived(): boolean;
  setShouldBeArchived(shouldBeArchived: boolean): void;
  firstItem(): any;
  firstAttribute(): NSLayoutAttribute;
  secondItem(): any;
  secondAttribute(): NSLayoutAttribute;
  firstAnchor(): NSLayoutAnchor;
  secondAnchor(): NSLayoutAnchor;
  relation(): NSLayoutRelation;
  multiplier(): CGFloat;
  constant(): CGFloat;
  setConstant(constant: CGFloat): void;
  active(): boolean;
  setActive(active: boolean): void;
  identifier(): NSString;
  setIdentifier(identifier: NSString | string): void;
  animations(): NSDictionary<any, any>;
  setAnimations(animations: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const NSLayoutConstraint: {
  alloc(): NSLayoutConstraintUninitialized;
  class(): NSLayoutConstraint;
  constraintsWithVisualFormat_options_metrics_views(format: NSString | string, opts: NSLayoutFormatOptions, metrics: NSDictionary<any, any> | {[key: string]: any} | null, views: NSDictionary<any, any> | {[key: string]: any}): NSArray<any>;
  constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(view1: any, attr1: NSLayoutAttribute, relation: NSLayoutRelation, view2: any | null, attr2: NSLayoutAttribute, multiplier: CGFloat, c: CGFloat): NSLayoutConstraint;
  activateConstraints(constraints: NSArray<any> | any[]): void;
  deactivateConstraints(constraints: NSArray<any> | any[]): void;
  defaultAnimationForKey(key: NSAnimatablePropertyKey): any;
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

