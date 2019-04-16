interface NSSearchFieldUninitialized<InitializedType = NSSearchField> extends NSTextFieldUninitialized<NSSearchField> {}
interface NSSearchField extends NSTextField {
  rectForSearchTextWhenCentered(isCentered: boolean): NSRect;
  rectForSearchButtonWhenCentered(isCentered: boolean): NSRect;
  rectForCancelButtonWhenCentered(isCentered: boolean): NSRect;

  recentSearches(): NSArray<any>;
  setRecentSearches(recentSearches: NSArray<any> | any[]): void;
  recentsAutosaveName(): NSSearchFieldRecentsAutosaveName;
  setRecentsAutosaveName(recentsAutosaveName: NSSearchFieldRecentsAutosaveName): void;
  searchMenuTemplate(): NSMenu;
  setSearchMenuTemplate(searchMenuTemplate: NSMenu): void;
  sendsWholeSearchString(): boolean;
  setSendsWholeSearchString(sendsWholeSearchString: boolean): void;
  maximumRecents(): NSInteger;
  setMaximumRecents(maximumRecents: NSInteger): void;
  sendsSearchStringImmediately(): boolean;
  setSendsSearchStringImmediately(sendsSearchStringImmediately: boolean): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  centersPlaceholder(): boolean;
  setCentersPlaceholder(centersPlaceholder: boolean): void;
}
declare const NSSearchField: {
  alloc(): NSSearchFieldUninitialized;
  class(): NSSearchField;
}

