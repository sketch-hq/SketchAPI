interface NSSearchFieldCellUninitialized<InitializedType = NSSearchFieldCell> extends NSTextFieldCellUninitialized<NSSearchFieldCell> {}

interface NSSearchFieldCell extends NSTextFieldCell {
  resetSearchButtonCell(): void;
  resetCancelButtonCell(): void;
  searchTextRectForBounds(rect: NSRect): NSRect;
  searchButtonRectForBounds(rect: NSRect): NSRect;
  cancelButtonRectForBounds(rect: NSRect): NSRect;

  searchButtonCell(): NSButtonCell;
  setSearchButtonCell(searchButtonCell: NSButtonCell): void;
  cancelButtonCell(): NSButtonCell;
  setCancelButtonCell(cancelButtonCell: NSButtonCell): void;
  searchMenuTemplate(): NSMenu;
  setSearchMenuTemplate(searchMenuTemplate: NSMenu): void;
  sendsWholeSearchString(): boolean;
  setSendsWholeSearchString(sendsWholeSearchString: boolean): void;
  maximumRecents(): NSInteger;
  setMaximumRecents(maximumRecents: NSInteger): void;
  recentSearches(): NSArray<any>;
  setRecentSearches(recentSearches: NSArray<any> | any[]): void;
  recentsAutosaveName(): NSSearchFieldRecentsAutosaveName;
  setRecentsAutosaveName(recentsAutosaveName: NSSearchFieldRecentsAutosaveName): void;
  sendsSearchStringImmediately(): boolean;
  setSendsSearchStringImmediately(sendsSearchStringImmediately: boolean): void;
}

declare const NSSearchFieldCell: {
  alloc(): NSSearchFieldCellUninitialized;
  class(): NSSearchFieldCell;
}

