interface NSTextFieldCellUninitialized<InitializedType = NSTextFieldCell> extends NSActionCellUninitialized<NSTextFieldCell> {}

interface NSTextFieldCell extends NSActionCell {
  setUpFieldEditorAttributes(textObj: NSText): NSText;
  setWantsNotificationForMarkedText(flag: boolean): void;

  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  textColor(): NSColor;
  setTextColor(textColor: NSColor): void;
  bezelStyle(): NSTextFieldBezelStyle;
  setBezelStyle(bezelStyle: NSTextFieldBezelStyle): void;
  placeholderString(): NSString;
  setPlaceholderString(placeholderString: NSString | string): void;
  placeholderAttributedString(): NSAttributedString;
  setPlaceholderAttributedString(placeholderAttributedString: NSAttributedString): void;
  allowedInputSourceLocales(): NSArray<any>;
  setAllowedInputSourceLocales(allowedInputSourceLocales: NSArray<any> | any[]): void;
}

declare const NSTextFieldCell: {
  alloc(): NSTextFieldCellUninitialized;
  class(): NSTextFieldCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

