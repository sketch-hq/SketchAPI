interface NSSecureTextFieldUninitialized<InitializedType = NSSecureTextField> extends NSTextFieldUninitialized<NSSecureTextField> {}

interface NSSecureTextField extends NSTextField {
}

declare const NSSecureTextField: {
  alloc(): NSSecureTextFieldUninitialized;
  class(): NSSecureTextField;
  labelWithString(stringValue: NSString | string): NSSecureTextField;
  wrappingLabelWithString(stringValue: NSString | string): NSSecureTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): NSSecureTextField;
  textFieldWithString(stringValue: NSString | string): NSSecureTextField;
}

