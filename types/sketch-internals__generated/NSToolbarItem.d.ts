interface NSToolbarItemUninitialized<InitializedType = NSToolbarItem> extends NSObjectUninitialized<NSToolbarItem> {
  initWithItemIdentifier(itemIdentifier: NSToolbarItemIdentifier): InitializedType;
}

interface NSToolbarItem extends NSObject, INSCopying, INSMenuItemValidation, INSValidatedUserInterfaceItem {
  validate(): void;
  copyWithZone(zone: NSZone | null): any;
  validateMenuItem(menuItem: NSMenuItem): boolean;

  itemIdentifier(): NSToolbarItemIdentifier;
  toolbar(): NSToolbar;
  label(): NSString;
  setLabel(label: NSString | string): void;
  paletteLabel(): NSString;
  setPaletteLabel(paletteLabel: NSString | string): void;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
  menuFormRepresentation(): NSMenuItem;
  setMenuFormRepresentation(menuFormRepresentation: NSMenuItem): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  view(): NSView;
  setView(view: NSView): void;
  minSize(): NSSize;
  setMinSize(minSize: NSSize): void;
  maxSize(): NSSize;
  setMaxSize(maxSize: NSSize): void;
  visibilityPriority(): NSToolbarItemVisibilityPriority;
  setVisibilityPriority(visibilityPriority: NSToolbarItemVisibilityPriority): void;
  autovalidates(): boolean;
  setAutovalidates(autovalidates: boolean): void;
  allowsDuplicatesInToolbar(): boolean;
}

declare const NSToolbarItem: {
  alloc(): NSToolbarItemUninitialized;
  class(): NSToolbarItem;
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

