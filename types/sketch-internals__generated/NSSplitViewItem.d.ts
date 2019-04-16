interface NSSplitViewItemUninitialized<InitializedType = NSSplitViewItem> extends NSObjectUninitialized<NSSplitViewItem> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSSplitViewItem extends NSObject, INSAnimatablePropertyContainer, INSCoding {
  animator(): NSSplitViewItem;
  animationForKey(key: NSAnimatablePropertyKey): any;
  encodeWithCoder(aCoder: NSCoder): void;

  behavior(): NSSplitViewItemBehavior;
  viewController(): NSViewController;
  setViewController(viewController: NSViewController): void;
  collapsed(): boolean;
  setCollapsed(collapsed: boolean): void;
  canCollapse(): boolean;
  setCanCollapse(canCollapse: boolean): void;
  collapseBehavior(): NSSplitViewItemCollapseBehavior;
  setCollapseBehavior(collapseBehavior: NSSplitViewItemCollapseBehavior): void;
  minimumThickness(): CGFloat;
  setMinimumThickness(minimumThickness: CGFloat): void;
  maximumThickness(): CGFloat;
  setMaximumThickness(maximumThickness: CGFloat): void;
  preferredThicknessFraction(): CGFloat;
  setPreferredThicknessFraction(preferredThicknessFraction: CGFloat): void;
  holdingPriority(): NSLayoutPriority;
  setHoldingPriority(holdingPriority: NSLayoutPriority): void;
  automaticMaximumThickness(): CGFloat;
  setAutomaticMaximumThickness(automaticMaximumThickness: CGFloat): void;
  springLoaded(): boolean;
  setSpringLoaded(springLoaded: boolean): void;
  animations(): NSDictionary<any, any>;
  setAnimations(animations: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const NSSplitViewItem: {
  alloc(): NSSplitViewItemUninitialized;
  class(): NSSplitViewItem;
  splitViewItemWithViewController(viewController: NSViewController): NSSplitViewItem;
  sidebarWithViewController(viewController: NSViewController): NSSplitViewItem;
  contentListWithViewController(viewController: NSViewController): NSSplitViewItem;
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

