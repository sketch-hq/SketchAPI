interface MSFontNamesTableViewUninitialized<InitializedType = MSFontNamesTableView> extends NSTableViewUninitialized<MSFontNamesTableView> {}

interface MSFontNamesTableView extends NSTableView {

  searchField(): NSSearchField;
  setSearchField(searchField: NSSearchField): void;
}

declare const MSFontNamesTableView: {
  alloc(): MSFontNamesTableViewUninitialized;
  class(): MSFontNamesTableView;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

