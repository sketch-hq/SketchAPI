interface BCTableCellTitleTextFieldUninitialized<InitializedType = BCTableCellTitleTextField> extends NSTextFieldUninitialized<BCTableCellTitleTextField> {}
interface BCTableCellTitleTextField extends NSTextField {
}
declare const BCTableCellTitleTextField: {
  alloc(): BCTableCellTitleTextFieldUninitialized;
  class(): BCTableCellTitleTextField;
}

