interface MSOverrideTextFieldUninitialized<InitializedType = MSOverrideTextField> extends NSTextFieldUninitialized<MSOverrideTextField> {}

interface MSOverrideTextField extends NSTextField {
}

declare const MSOverrideTextField: {
  alloc(): MSOverrideTextFieldUninitialized;
  class(): MSOverrideTextField;
  labelWithString(stringValue: NSString | string): MSOverrideTextField;
  wrappingLabelWithString(stringValue: NSString | string): MSOverrideTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSOverrideTextField;
  textFieldWithString(stringValue: NSString | string): MSOverrideTextField;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

