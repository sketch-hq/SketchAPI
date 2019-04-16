interface NSTabViewItemUninitialized<InitializedType = NSTabViewItem> extends NSObjectUninitialized<NSTabViewItem> {
  initWithIdentifier(identifier: any | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTabViewItem extends NSObject, INSCoding {
  drawLabel_inRect(shouldTruncateLabel: boolean, labelRect: NSRect): void;
  sizeOfLabel(computeMin: boolean): NSSize;
  encodeWithCoder(aCoder: NSCoder): void;

  identifier(): any;
  setIdentifier(identifier: any): void;
  color(): NSColor;
  setColor(color: NSColor): void;
  label(): NSString;
  setLabel(label: NSString | string): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  view(): NSView;
  setView(view: NSView): void;
  viewController(): NSViewController;
  setViewController(viewController: NSViewController): void;
  tabState(): NSTabState;
  tabView(): NSTabView;
  initialFirstResponder(): NSView;
  setInitialFirstResponder(initialFirstResponder: NSView): void;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
}

declare const NSTabViewItem: {
  alloc(): NSTabViewItemUninitialized;
  class(): NSTabViewItem;
  tabViewItemWithViewController(viewController: NSViewController): NSTabViewItem;
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

