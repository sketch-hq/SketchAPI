interface MSFontNamesTableViewUninitialized<InitializedType = MSFontNamesTableView> extends NSTableViewUninitialized<MSFontNamesTableView> {}
interface MSFontNamesTableView extends NSTableView {

  searchField(): NSSearchField;
  setSearchField(searchField: NSSearchField): void;
}
declare const MSFontNamesTableView: {
  alloc(): MSFontNamesTableViewUninitialized;
  class(): MSFontNamesTableView;
}

