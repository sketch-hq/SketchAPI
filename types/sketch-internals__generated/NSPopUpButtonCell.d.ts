interface NSPopUpButtonCellUninitialized<InitializedType = NSPopUpButtonCell> extends NSMenuItemCellUninitialized<NSPopUpButtonCell> {
  initTextCell_pullsDown(stringValue: NSString | string, pullDown: boolean): InitializedType;
}
interface NSPopUpButtonCell extends NSMenuItemCell, INSMenuItemValidation {
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
  setTitle(string: NSString | string | null): void;
  synchronizeTitleAndSelectedItem(): void;
  itemTitleAtIndex(index: NSInteger): NSString;
  attachPopUpWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;
  dismissPopUp(): void;
  performClickWithFrame_inView(frame: NSRect, controlView: NSView): void;

  menu(): NSMenu;
  setMenu(menu: NSMenu): void;
  pullsDown(): boolean;
  setPullsDown(pullsDown: boolean): void;
  autoenablesItems(): boolean;
  setAutoenablesItems(autoenablesItems: boolean): void;
  preferredEdge(): NSRectEdge;
  setPreferredEdge(preferredEdge: NSRectEdge): void;
  usesItemFromMenu(): boolean;
  setUsesItemFromMenu(usesItemFromMenu: boolean): void;
  altersStateOfSelectedItem(): boolean;
  setAltersStateOfSelectedItem(altersStateOfSelectedItem: boolean): void;
  itemArray(): NSArray<any>;
  numberOfItems(): NSInteger;
  lastItem(): NSMenuItem;
  selectedItem(): NSMenuItem;
  indexOfSelectedItem(): NSInteger;
  itemTitles(): NSArray<any>;
  titleOfSelectedItem(): NSString;
  arrowPosition(): NSPopUpArrowPosition;
  setArrowPosition(arrowPosition: NSPopUpArrowPosition): void;
}
declare const NSPopUpButtonCell: {
  alloc(): NSPopUpButtonCellUninitialized;
  class(): NSPopUpButtonCell;
}

