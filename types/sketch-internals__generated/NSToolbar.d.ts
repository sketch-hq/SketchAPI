interface NSToolbarUninitialized<InitializedType = NSToolbar> extends NSObjectUninitialized<NSToolbar> {
  initWithIdentifier(identifier: NSToolbarIdentifier): InitializedType;
  init(): InitializedType;
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
}

