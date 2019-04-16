interface NSTokenFieldUninitialized<InitializedType = NSTokenField> extends NSTextFieldUninitialized<NSTokenField> {}

interface NSTokenField extends NSTextField {

  delegate(): any;
  setDelegate(delegate: any): void;
  tokenStyle(): NSTokenStyle;
  setTokenStyle(tokenStyle: NSTokenStyle): void;
  completionDelay(): NSTimeInterval;
  setCompletionDelay(completionDelay: NSTimeInterval): void;
  tokenizingCharacterSet(): NSCharacterSet;
  setTokenizingCharacterSet(tokenizingCharacterSet: NSCharacterSet): void;
}

declare const NSTokenField: {
  alloc(): NSTokenFieldUninitialized;
  class(): NSTokenField;
  labelWithString(stringValue: NSString | string): NSTokenField;
  wrappingLabelWithString(stringValue: NSString | string): NSTokenField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): NSTokenField;
  textFieldWithString(stringValue: NSString | string): NSTokenField;
  defaultCompletionDelay(): NSTimeInterval;
  defaultTokenizingCharacterSet(): NSCharacterSet;
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

