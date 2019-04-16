interface NSMenuItemUninitialized<InitializedType = NSMenuItem> extends NSObjectUninitialized<NSMenuItem> {
  initWithTitle_action_keyEquivalent(string: NSString | string, selector: string | null, charCode: NSString | string): InitializedType;
  initWithCoder(decoder: NSCoder): InitializedType;
}
interface NSMenuItem extends NSObject, INSCopying, INSCoding, INSValidatedUserInterfaceItem, INSUserInterfaceItemIdentification, INSAccessibilityElement, INSAccessibility {
  setMnemonicLocation(location: NSUInteger): void;
  mnemonicLocation(): NSUInteger;
  mnemonic(): NSString;
  setTitleWithMnemonic(stringWithAmpersand: NSString | string): void;
  isInMainMenu(): boolean;
  setSmallFont(): void;
  setSmallCenteredFont(): void;
  applyBlockToMenuItemAndItemsInSubmenus(applierBlock: Block): void;
  generatePreviewWithColorSpace_backingScale_completionHandler(colorSpace: NSColorSpace, backingScale: CGFloat, block: MSPreviewGeneratorBlock): boolean;

  menu(): NSMenu;
  setMenu(menu: NSMenu): void;
  hasSubmenu(): boolean;
  submenu(): NSMenu;
  setSubmenu(submenu: NSMenu): void;
  parentItem(): NSMenuItem;
  title(): NSString;
  setTitle(title: NSString | string): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  separatorItem(): boolean;
  keyEquivalent(): NSString;
  setKeyEquivalent(keyEquivalent: NSString | string): void;
  keyEquivalentModifierMask(): NSEventModifierFlags;
  setKeyEquivalentModifierMask(keyEquivalentModifierMask: NSEventModifierFlags): void;
  userKeyEquivalent(): NSString;
  allowsKeyEquivalentWhenHidden(): boolean;
  setAllowsKeyEquivalentWhenHidden(allowsKeyEquivalentWhenHidden: boolean): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  state(): NSControlStateValue;
  setState(state: NSControlStateValue): void;
  onStateImage(): NSImage;
  setOnStateImage(onStateImage: NSImage): void;
  offStateImage(): NSImage;
  setOffStateImage(offStateImage: NSImage): void;
  mixedStateImage(): NSImage;
  setMixedStateImage(mixedStateImage: NSImage): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  alternate(): boolean;
  setAlternate(alternate: boolean): void;
  indentationLevel(): NSInteger;
  setIndentationLevel(indentationLevel: NSInteger): void;
  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
  representedObject(): any;
  setRepresentedObject(representedObject: any): void;
  view(): NSView;
  setView(view: NSView): void;
  highlighted(): boolean;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
  hiddenOrHasHiddenAncestor(): boolean;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
  dataMenuProvider(): MSDataMenuProvider;
  setDataMenuProvider(dataMenuProvider: MSDataMenuProvider): void;
  dataSupplier(): MSDataSupplier;
  setDataSupplier(dataSupplier: MSDataSupplier): void;
  dataSupplierType(): MSDataType;
  setDataSupplierType(dataSupplierType: MSDataType): void;
  shareableObjectReferences(): NSArray<any>;
  setShareableObjectReferences(shareableObjectReferences: NSArray<any> | any[]): void;
  symbolMasterReferences(): NSArray<any>;
}
declare const NSMenuItem: {
  alloc(): NSMenuItemUninitialized;
  class(): NSMenuItem;  separatorItem(): NSMenuItem;
  itemWithTitle_action(title: NSString | string, action: string): NSMenuItem;
  itemWithTitle_target_action(title: NSString | string, aTarget: any, action: string): NSMenuItem;
  itemWithTitle_small_target_action(title: NSString | string, smallFont: boolean, aTarget: any, action: string): NSMenuItem;
  menuItemWithTruncatedTitle_target_action(aString: NSString | string, aTarget: any, anAction: string): NSMenuItem;

  usesUserKeyEquivalents(): boolean;
  setUsesUserKeyEquivalents(usesUserKeyEquivalents: boolean): void;

}

