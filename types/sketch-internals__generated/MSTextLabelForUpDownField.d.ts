interface MSTextLabelForUpDownFieldUninitialized<InitializedType = MSTextLabelForUpDownField> extends NSTextFieldUninitialized<MSTextLabelForUpDownField> {}

interface MSTextLabelForUpDownField extends NSTextField {

  upDownTextField(): NSTextField;
  setUpDownTextField(upDownTextField: NSTextField): void;
  textFields(): NSArray<any>;
  setTextFields(textFields: NSArray<any> | any[]): void;
}

declare const MSTextLabelForUpDownField: {
  alloc(): MSTextLabelForUpDownFieldUninitialized;
  class(): MSTextLabelForUpDownField;
  labelWithString(stringValue: NSString | string): MSTextLabelForUpDownField;
  wrappingLabelWithString(stringValue: NSString | string): MSTextLabelForUpDownField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSTextLabelForUpDownField;
  textFieldWithString(stringValue: NSString | string): MSTextLabelForUpDownField;
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

