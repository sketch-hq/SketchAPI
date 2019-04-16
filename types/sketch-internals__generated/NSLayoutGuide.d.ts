interface NSLayoutGuideUninitialized<InitializedType = NSLayoutGuide> extends NSObjectUninitialized<NSLayoutGuide> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSLayoutGuide extends NSObject, INSCoding, INSUserInterfaceItemIdentification {
  constraintsAffectingLayoutForOrientation(orientation: NSLayoutConstraintOrientation): NSArray<any>;
  encodeWithCoder(aCoder: NSCoder): void;

  frame(): NSRect;
  owningView(): NSView;
  setOwningView(owningView: NSView): void;
  identifier(): NSUserInterfaceItemIdentifier;
  setIdentifier(identifier: NSUserInterfaceItemIdentifier): void;
  leadingAnchor(): NSLayoutXAxisAnchor;
  trailingAnchor(): NSLayoutXAxisAnchor;
  leftAnchor(): NSLayoutXAxisAnchor;
  rightAnchor(): NSLayoutXAxisAnchor;
  topAnchor(): NSLayoutYAxisAnchor;
  bottomAnchor(): NSLayoutYAxisAnchor;
  widthAnchor(): NSLayoutDimension;
  heightAnchor(): NSLayoutDimension;
  centerXAnchor(): NSLayoutXAxisAnchor;
  centerYAnchor(): NSLayoutYAxisAnchor;
  hasAmbiguousLayout(): boolean;
}

declare const NSLayoutGuide: {
  alloc(): NSLayoutGuideUninitialized;
  class(): NSLayoutGuide;
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

