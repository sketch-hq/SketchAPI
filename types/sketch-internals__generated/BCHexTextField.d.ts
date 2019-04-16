interface BCHexTextFieldUninitialized<InitializedType = BCHexTextField> extends NSTextFieldUninitialized<BCHexTextField> {}
interface BCHexTextField extends NSTextField {
}
declare const BCHexTextField: {
  alloc(): BCHexTextFieldUninitialized;
  class(): BCHexTextField;
}

