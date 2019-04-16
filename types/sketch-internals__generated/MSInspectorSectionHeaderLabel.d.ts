interface MSInspectorSectionHeaderLabelUninitialized<InitializedType = MSInspectorSectionHeaderLabel> extends NSTextFieldUninitialized<MSInspectorSectionHeaderLabel> {}

interface MSInspectorSectionHeaderLabel extends NSTextField {
}

declare const MSInspectorSectionHeaderLabel: {
  alloc(): MSInspectorSectionHeaderLabelUninitialized;
  class(): MSInspectorSectionHeaderLabel;
  labelWithString(stringValue: NSString | string): MSInspectorSectionHeaderLabel;
  wrappingLabelWithString(stringValue: NSString | string): MSInspectorSectionHeaderLabel;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSInspectorSectionHeaderLabel;
  textFieldWithString(stringValue: NSString | string): MSInspectorSectionHeaderLabel;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

