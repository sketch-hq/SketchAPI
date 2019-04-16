interface NSComboBoxCellUninitialized<InitializedType = NSComboBoxCell> extends NSTextFieldCellUninitialized<NSComboBoxCell> {}

interface NSComboBoxCell extends NSTextFieldCell {
  reloadData(): void;
  noteNumberOfItemsChanged(): void;
  scrollItemAtIndexToTop(index: NSInteger): void;
  scrollItemAtIndexToVisible(index: NSInteger): void;
  selectItemAtIndex(index: NSInteger): void;
  deselectItemAtIndex(index: NSInteger): void;
  completedString(string: NSString | string): NSString;
  addItemWithObjectValue(object: any): void;
  addItemsWithObjectValues(objects: NSArray<any> | any[]): void;
  insertItemWithObjectValue_atIndex(object: any, index: NSInteger): void;
  removeItemWithObjectValue(object: any): void;
  removeItemAtIndex(index: NSInteger): void;
  removeAllItems(): void;
  selectItemWithObjectValue(object: any | null): void;
  itemObjectValueAtIndex(index: NSInteger): any;
  indexOfItemWithObjectValue(object: any): NSInteger;

  hasVerticalScroller(): boolean;
  setHasVerticalScroller(hasVerticalScroller: boolean): void;
  intercellSpacing(): NSSize;
  setIntercellSpacing(intercellSpacing: NSSize): void;
  itemHeight(): CGFloat;
  setItemHeight(itemHeight: CGFloat): void;
  numberOfVisibleItems(): NSInteger;
  setNumberOfVisibleItems(numberOfVisibleItems: NSInteger): void;
  buttonBordered(): boolean;
  setButtonBordered(buttonBordered: boolean): void;
  usesDataSource(): boolean;
  setUsesDataSource(usesDataSource: boolean): void;
  indexOfSelectedItem(): NSInteger;
  numberOfItems(): NSInteger;
  completes(): boolean;
  setCompletes(completes: boolean): void;
  dataSource(): any;
  setDataSource(dataSource: any): void;
  objectValueOfSelectedItem(): any;
  objectValues(): NSArray<any>;
}

declare const NSComboBoxCell: {
  alloc(): NSComboBoxCellUninitialized;
  class(): NSComboBoxCell;
}

