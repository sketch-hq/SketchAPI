interface MSTextFieldWithDropDownMenuUninitialized<InitializedType = MSTextFieldWithDropDownMenu> extends NSTextFieldUninitialized<MSTextFieldWithDropDownMenu> {}

interface MSTextFieldWithDropDownMenu extends NSTextField {

  popupMenu(): NSMenu;
  setPopupMenu(popupMenu: NSMenu): void;
}

declare const MSTextFieldWithDropDownMenu: {
  alloc(): MSTextFieldWithDropDownMenuUninitialized;
  class(): MSTextFieldWithDropDownMenu;
  labelWithString(stringValue: NSString | string): MSTextFieldWithDropDownMenu;
  wrappingLabelWithString(stringValue: NSString | string): MSTextFieldWithDropDownMenu;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSTextFieldWithDropDownMenu;
  textFieldWithString(stringValue: NSString | string): MSTextFieldWithDropDownMenu;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

