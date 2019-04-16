interface MSWelcomeCollectionTextFieldUninitialized<InitializedType = MSWelcomeCollectionTextField> extends NSTextFieldUninitialized<MSWelcomeCollectionTextField> {}

interface MSWelcomeCollectionTextField extends NSTextField {

  selected(): boolean;
  setSelected(selected: boolean): void;
}

declare const MSWelcomeCollectionTextField: {
  alloc(): MSWelcomeCollectionTextFieldUninitialized;
  class(): MSWelcomeCollectionTextField;
  labelWithString(stringValue: NSString | string): MSWelcomeCollectionTextField;
  wrappingLabelWithString(stringValue: NSString | string): MSWelcomeCollectionTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): MSWelcomeCollectionTextField;
  textFieldWithString(stringValue: NSString | string): MSWelcomeCollectionTextField;
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

