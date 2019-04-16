interface BCZeroHeightWhenEmptyTextFieldUninitialized<InitializedType = BCZeroHeightWhenEmptyTextField> extends NSTextFieldUninitialized<BCZeroHeightWhenEmptyTextField> {}

interface BCZeroHeightWhenEmptyTextField extends NSTextField {

  paddingIfNotEmpty(): CGFloat;
  setPaddingIfNotEmpty(paddingIfNotEmpty: CGFloat): void;
}

declare const BCZeroHeightWhenEmptyTextField: {
  alloc(): BCZeroHeightWhenEmptyTextFieldUninitialized;
  class(): BCZeroHeightWhenEmptyTextField;
  labelWithString(stringValue: NSString | string): BCZeroHeightWhenEmptyTextField;
  wrappingLabelWithString(stringValue: NSString | string): BCZeroHeightWhenEmptyTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): BCZeroHeightWhenEmptyTextField;
  textFieldWithString(stringValue: NSString | string): BCZeroHeightWhenEmptyTextField;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

