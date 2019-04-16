interface NSSecureTextFieldUninitialized<InitializedType = NSSecureTextField> extends NSTextFieldUninitialized<NSSecureTextField> {}
interface NSSecureTextField extends NSTextField {
}
declare const NSSecureTextField: {
  alloc(): NSSecureTextFieldUninitialized;
  class(): NSSecureTextField;
}

