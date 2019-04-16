interface BCTableCellTitleTextFieldUninitialized<InitializedType = BCTableCellTitleTextField> extends NSTextFieldUninitialized<BCTableCellTitleTextField> {}

interface BCTableCellTitleTextField extends NSTextField {
}

declare const BCTableCellTitleTextField: {
  alloc(): BCTableCellTitleTextFieldUninitialized;
  class(): BCTableCellTitleTextField;
  labelWithString(stringValue: NSString | string): BCTableCellTitleTextField;
  wrappingLabelWithString(stringValue: NSString | string): BCTableCellTitleTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): BCTableCellTitleTextField;
  textFieldWithString(stringValue: NSString | string): BCTableCellTitleTextField;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

