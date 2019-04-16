interface MSInspectorTextFieldUninitialized<InitializedType = MSInspectorTextField> extends NSTextFieldUninitialized<MSInspectorTextField> {}

interface MSInspectorTextField extends NSTextField {
}

declare const MSInspectorTextField: {
  alloc(): MSInspectorTextFieldUninitialized;
  class(): MSInspectorTextField;
  labelWithString(stringValue: NSString | string): MSInspectorTextField;
  wrappingLabelWithString(stringValue: NSString | string): MSInspectorTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSInspectorTextField;
  textFieldWithString(stringValue: NSString | string): MSInspectorTextField;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

