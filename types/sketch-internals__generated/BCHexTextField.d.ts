interface BCHexTextFieldUninitialized<InitializedType = BCHexTextField> extends NSTextFieldUninitialized<BCHexTextField> {}

interface BCHexTextField extends NSTextField {
}

declare const BCHexTextField: {
  alloc(): BCHexTextFieldUninitialized;
  class(): BCHexTextField;
  labelWithString(stringValue: NSString | string): BCHexTextField;
  wrappingLabelWithString(stringValue: NSString | string): BCHexTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): BCHexTextField;
  textFieldWithString(stringValue: NSString | string): BCHexTextField;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

