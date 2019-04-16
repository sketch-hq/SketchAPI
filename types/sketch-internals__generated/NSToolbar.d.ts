interface NSToolbarUninitialized<InitializedType = NSToolbar> extends NSObjectUninitialized<NSToolbar> {
  initWithIdentifier(identifier: NSToolbarIdentifier): InitializedType;
}

interface NSToolbar extends NSObject {
  insertItemWithItemIdentifier_atIndex(itemIdentifier: NSToolbarItemIdentifier, index: NSInteger): void;
  removeItemAtIndex(index: NSInteger): void;
  runCustomizationPalette(sender: any | null): void;
  setConfigurationFromDictionary(configDict: NSDictionary<any, any> | {[key: string]: any}): void;
  validateVisibleItems(): void;
  itemWithIdentifier(identifier: NSString | string): NSToolbarItem;

  delegate(): any;
  setDelegate(delegate: any): void;
  visible(): boolean;
  setVisible(visible: boolean): void;
  customizationPaletteIsRunning(): boolean;
  displayMode(): NSToolbarDisplayMode;
  setDisplayMode(displayMode: NSToolbarDisplayMode): void;
  selectedItemIdentifier(): NSToolbarItemIdentifier;
  setSelectedItemIdentifier(selectedItemIdentifier: NSToolbarItemIdentifier): void;
  sizeMode(): NSToolbarSizeMode;
  setSizeMode(sizeMode: NSToolbarSizeMode): void;
  showsBaselineSeparator(): boolean;
  setShowsBaselineSeparator(showsBaselineSeparator: boolean): void;
  allowsUserCustomization(): boolean;
  setAllowsUserCustomization(allowsUserCustomization: boolean): void;
  identifier(): NSToolbarIdentifier;
  items(): NSArray<any>;
  visibleItems(): NSArray<any>;
  centeredItemIdentifier(): NSToolbarItemIdentifier;
  setCenteredItemIdentifier(centeredItemIdentifier: NSToolbarItemIdentifier): void;
  autosavesConfiguration(): boolean;
  setAutosavesConfiguration(autosavesConfiguration: boolean): void;
  configurationDictionary(): NSDictionary<any, any>;
  allowsExtensionItems(): boolean;
  setAllowsExtensionItems(allowsExtensionItems: boolean): void;
  fullScreenAccessoryView(): NSView;
  setFullScreenAccessoryView(fullScreenAccessoryView: NSView): void;
  fullScreenAccessoryViewMinHeight(): CGFloat;
  setFullScreenAccessoryViewMinHeight(fullScreenAccessoryViewMinHeight: CGFloat): void;
  fullScreenAccessoryViewMaxHeight(): CGFloat;
  setFullScreenAccessoryViewMaxHeight(fullScreenAccessoryViewMaxHeight: CGFloat): void;
}

declare const NSToolbar: {
  alloc(): NSToolbarUninitialized;
  class(): NSToolbar;
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

