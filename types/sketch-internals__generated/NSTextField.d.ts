interface NSTextFieldUninitialized<InitializedType = NSTextField> extends NSControlUninitialized<NSTextField> {}
interface NSTextField extends NSControl, INSUserInterfaceValidations, INSAccessibilityNavigableStaticText {
  selectText(sender: any | null): void;
  textShouldBeginEditing(textObject: NSText): boolean;
  textShouldEndEditing(textObject: NSText): boolean;
  textDidBeginEditing(notification: NSNotification): void;
  textDidEndEditing(notification: NSNotification): void;
  textDidChange(notification: NSNotification): void;
  setTitleWithMnemonic(stringWithAmpersand: NSString | string): void;

  placeholderString(): NSString;
  setPlaceholderString(placeholderString: NSString | string): void;
  placeholderAttributedString(): NSAttributedString;
  setPlaceholderAttributedString(placeholderAttributedString: NSAttributedString): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  textColor(): NSColor;
  setTextColor(textColor: NSColor): void;
  bordered(): boolean;
  setBordered(bordered: boolean): void;
  bezeled(): boolean;
  setBezeled(bezeled: boolean): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  selectable(): boolean;
  setSelectable(selectable: boolean): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  acceptsFirstResponder(): boolean;
  bezelStyle(): NSTextFieldBezelStyle;
  setBezelStyle(bezelStyle: NSTextFieldBezelStyle): void;
  preferredMaxLayoutWidth(): CGFloat;
  setPreferredMaxLayoutWidth(preferredMaxLayoutWidth: CGFloat): void;
  maximumNumberOfLines(): NSInteger;
  setMaximumNumberOfLines(maximumNumberOfLines: NSInteger): void;
  allowsDefaultTighteningForTruncation(): boolean;
  setAllowsDefaultTighteningForTruncation(allowsDefaultTighteningForTruncation: boolean): void;
  automaticTextCompletionEnabled(): boolean;
  setAutomaticTextCompletionEnabled(automaticTextCompletionEnabled: boolean): void;
  allowsCharacterPickerTouchBarItem(): boolean;
  setAllowsCharacterPickerTouchBarItem(allowsCharacterPickerTouchBarItem: boolean): void;
  allowsEditingTextAttributes(): boolean;
  setAllowsEditingTextAttributes(allowsEditingTextAttributes: boolean): void;
  importsGraphics(): boolean;
  setImportsGraphics(importsGraphics: boolean): void;
  isEditingText(): boolean;
}
declare const NSTextField: {
  alloc(): NSTextFieldUninitialized;
  class(): NSTextField;  labelWithString(stringValue: NSString | string): NSTextField;
  wrappingLabelWithString(stringValue: NSString | string): NSTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): NSTextField;
  textFieldWithString(stringValue: NSString | string): NSTextField;

}

