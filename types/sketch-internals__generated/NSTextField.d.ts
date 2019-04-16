interface NSTextFieldUninitialized<InitializedType = NSTextField> extends NSControlUninitialized<NSTextField> {}

interface NSTextField extends NSControl, INSUserInterfaceValidations, INSAccessibilityNavigableStaticText {
  selectText(sender: any | null): void;
  textShouldBeginEditing(textObject: NSText): boolean;
  textShouldEndEditing(textObject: NSText): boolean;
  textDidBeginEditing(notification: NSNotification): void;
  textDidEndEditing(notification: NSNotification): void;
  textDidChange(notification: NSNotification): void;
  setTitleWithMnemonic(stringWithAmpersand: NSString | string): void;
  validateUserInterfaceItem(item: any): boolean;
  accessibilityStringForRange(range: NSRange): NSString;
  accessibilityLineForIndex(index: NSInteger): NSInteger;
  accessibilityRangeForLine(lineNumber: NSInteger): NSRange;
  accessibilityFrameForRange(range: NSRange): NSRect;

  placeholderString(): NSString;
  setPlaceholderString(placeholderString: NSString | string): void;
  placeholderAttributedString(): NSAttributedString;
  setPlaceholderAttributedString(placeholderAttributedString: NSAttributedString): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  textColor(): NSColor;
  setTextColor(textColor: NSColor): void;
  bordered(): boolean;
  setBordered(bordered: boolean): void;
  bezeled(): boolean;
  setBezeled(bezeled: boolean): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  selectable(): boolean;
  setSelectable(selectable: boolean): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  acceptsFirstResponder(): boolean;
  bezelStyle(): NSTextFieldBezelStyle;
  setBezelStyle(bezelStyle: NSTextFieldBezelStyle): void;
  preferredMaxLayoutWidth(): CGFloat;
  setPreferredMaxLayoutWidth(preferredMaxLayoutWidth: CGFloat): void;
  maximumNumberOfLines(): NSInteger;
  setMaximumNumberOfLines(maximumNumberOfLines: NSInteger): void;
  allowsDefaultTighteningForTruncation(): boolean;
  setAllowsDefaultTighteningForTruncation(allowsDefaultTighteningForTruncation: boolean): void;
  automaticTextCompletionEnabled(): boolean;
  setAutomaticTextCompletionEnabled(automaticTextCompletionEnabled: boolean): void;
  allowsCharacterPickerTouchBarItem(): boolean;
  setAllowsCharacterPickerTouchBarItem(allowsCharacterPickerTouchBarItem: boolean): void;
  allowsEditingTextAttributes(): boolean;
  setAllowsEditingTextAttributes(allowsEditingTextAttributes: boolean): void;
  importsGraphics(): boolean;
  setImportsGraphics(importsGraphics: boolean): void;
  isEditingText(): boolean;
}

declare const NSTextField: {
  alloc(): NSTextFieldUninitialized;
  class(): NSTextField;
  labelWithString(stringValue: NSString | string): NSTextField;
  wrappingLabelWithString(stringValue: NSString | string): NSTextField;
  labelWithAttributedString(attributedStringValue: NSAttributedString): NSTextField;
  textFieldWithString(stringValue: NSString | string): NSTextField;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
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

