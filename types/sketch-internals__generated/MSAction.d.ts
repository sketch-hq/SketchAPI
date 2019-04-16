interface MSActionUninitialized<InitializedType = MSAction> extends NSResponderUninitialized<MSAction> {}
interface MSAction extends NSResponder {
  menuItems(): NSArray<any>;
  menuItemsForMenu(menu: NSMenu | null): NSArray<any>;
  makeToolbarItemForToolbar(forToolbar: boolean): NSToolbarItem;
  //   validateToolbarItem(): void;
  doPerformAction(sender: any): IBAction;
  submenuActionIDs(): NSArray<any>;
  containsActionWithID(actionIdentifier: NSString | string): boolean;
  contextForActionObservers(): any;
  handlesKeyEvent(event: NSEvent): boolean;

  badgeTitle(): NSAttributedString;
  preferredMenuAction(): string;
  labelForMenu(): NSString;
  mayShowInToolbar(): boolean;
  tooltip(): NSString;
  labelForToolbar(): NSString;
  imageForToolbar(): NSImage;
  menuItemForToolbarItem(): NSMenuItem;
  labelForToolbarCustomisationSheet(): NSString;
  controller(): MSActionController;
  setController(controller: MSActionController): void;
  toolbarItem(): NSToolbarItem;
  setToolbarItem(toolbarItem: NSToolbarItem): void;
  hasSubMenu(): boolean;
  hasDynamicTitle(): boolean;
  image(): NSImage;
  imageName(): NSString;
  label(): NSString;
  shortcutCharacter(): unichar;
  isActive(): boolean;
  isSelectable(): boolean;
  validate(): boolean;
  validationStatus(): MSActionValidation;
}
declare const MSAction: {
  alloc(): MSActionUninitialized;
  class(): MSAction;  imageName(): NSString;

}

