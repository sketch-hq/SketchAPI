interface BCFontSearchFieldUninitialized<InitializedType = BCFontSearchField> extends NSSearchFieldUninitialized<BCFontSearchField> {}
interface BCFontSearchField extends NSSearchField, INSTextViewDelegate {

  searchResults(): NSTableView;
  setSearchResults(searchResults: NSTableView): void;
}
declare const BCFontSearchField: {
  alloc(): BCFontSearchFieldUninitialized;
  class(): BCFontSearchField;
}

