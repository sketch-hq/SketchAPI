interface MSColorHexFieldUninitialized<InitializedType = MSColorHexField> extends NSTextFieldUninitialized<MSColorHexField> {}

interface MSColorHexField extends NSTextField {
}

declare const MSColorHexField: {
  alloc(): MSColorHexFieldUninitialized;
  class(): MSColorHexField;
  labelWithString(stringValue: NSString | string): MSColorHexField;
  wrappingLabelWithString(stringValue: NSString | string): MSColorHexField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSColorHexField;
  textFieldWithString(stringValue: NSString | string): MSColorHexField;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

