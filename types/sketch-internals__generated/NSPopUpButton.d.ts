interface NSPopUpButtonUninitialized<InitializedType = NSPopUpButton> extends NSButtonUninitialized<NSPopUpButton> {
  initWithFrame_pullsDown(buttonFrame: NSRect, flag: boolean): InitializedType;
}

interface NSPopUpButton extends NSButton {
  addItemWithTitle(title: NSString | string): void;
  addItemsWithTitles(itemTitles: NSArray<any> | any[]): void;
  insertItemWithTitle_atIndex(title: NSString | string, index: NSInteger): void;
  removeItemWithTitle(title: NSString | string): void;
  removeItemAtIndex(index: NSInteger): void;
  removeAllItems(): void;
  indexOfItem(item: NSMenuItem): NSInteger;
  indexOfItemWithTitle(title: NSString | string): NSInteger;
  indexOfItemWithTag(tag: NSInteger): NSInteger;
  indexOfItemWithRepresentedObject(obj: any | null): NSInteger;
  indexOfItemWithTarget_andAction(target: any | null, actionSelector: string | null): NSInteger;
  itemAtIndex(index: NSInteger): NSMenuItem;
  itemWithTitle(title: NSString | string): NSMenuItem;
  selectItem(item: NSMenuItem | null): void;
  selectItemAtIndex(index: NSInteger): void;
  selectItemWithTitle(title: NSString | string): void;
  selectItemWithTag(tag: NSInteger): boolean;
  setTitle(string: NSString | string): void;
  synchronizeTitleAndSelectedItem(): void;
  itemTitleAtIndex(index: NSInteger): NSString;

  menu(): NSMenu;
  setMenu(menu: NSMenu): void;
  pullsDown(): boolean;
  setPullsDown(pullsDown: boolean): void;
  autoenablesItems(): boolean;
  setAutoenablesItems(autoenablesItems: boolean): void;
  preferredEdge(): NSRectEdge;
  setPreferredEdge(preferredEdge: NSRectEdge): void;
  itemArray(): NSArray<any>;
  numberOfItems(): NSInteger;
  lastItem(): NSMenuItem;
  selectedItem(): NSMenuItem;
  indexOfSelectedItem(): NSInteger;
  selectedTag(): NSInteger;
  itemTitles(): NSArray<any>;
  titleOfSelectedItem(): NSString;
}

declare const NSPopUpButton: {
  alloc(): NSPopUpButtonUninitialized;
  class(): NSPopUpButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): NSPopUpButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSPopUpButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): NSPopUpButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSPopUpButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSPopUpButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

