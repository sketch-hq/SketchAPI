interface NSFormCellUninitialized<InitializedType = NSFormCell> extends NSActionCellUninitialized<NSFormCell> {}

interface NSFormCell extends NSActionCell {
  titleWidth(size: NSSize): CGFloat;
  setTitleWithMnemonic(stringWithAmpersand: NSString | string): void;

  titleWidth(): CGFloat;
  setTitleWidth(titleWidth: CGFloat): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  titleFont(): NSFont;
  setTitleFont(titleFont: NSFont): void;
  titleAlignment(): NSTextAlignment;
  setTitleAlignment(titleAlignment: NSTextAlignment): void;
  opaque(): boolean;
  placeholderString(): NSString;
  setPlaceholderString(placeholderString: NSString | string): void;
  placeholderAttributedString(): NSAttributedString;
  setPlaceholderAttributedString(placeholderAttributedString: NSAttributedString): void;
  titleBaseWritingDirection(): NSWritingDirection;
  setTitleBaseWritingDirection(titleBaseWritingDirection: NSWritingDirection): void;
  preferredTextFieldWidth(): CGFloat;
  setPreferredTextFieldWidth(preferredTextFieldWidth: CGFloat): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
}

declare const NSFormCell: {
  alloc(): NSFormCellUninitialized;
  class(): NSFormCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

