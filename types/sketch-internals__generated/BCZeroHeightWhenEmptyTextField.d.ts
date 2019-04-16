interface BCZeroHeightWhenEmptyTextFieldUninitialized<InitializedType = BCZeroHeightWhenEmptyTextField> extends NSTextFieldUninitialized<BCZeroHeightWhenEmptyTextField> {}
interface BCZeroHeightWhenEmptyTextField extends NSTextField {

  paddingIfNotEmpty(): CGFloat;
  setPaddingIfNotEmpty(paddingIfNotEmpty: CGFloat): void;
}
declare const BCZeroHeightWhenEmptyTextField: {
  alloc(): BCZeroHeightWhenEmptyTextFieldUninitialized;
  class(): BCZeroHeightWhenEmptyTextField;
}

