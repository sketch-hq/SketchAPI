interface NSBoxUninitialized<InitializedType = NSBox> extends NSViewUninitialized<NSBox> {}

interface NSBox extends NSView {
  sizeToFit(): void;
  setFrameFromContentFrame(contentFrame: NSRect): void;
  setTitleWithMnemonic(stringWithAmpersand: NSString | string): void;

  boxType(): NSBoxType;
  setBoxType(boxType: NSBoxType): void;
  titlePosition(): NSTitlePosition;
  setTitlePosition(titlePosition: NSTitlePosition): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  titleFont(): NSFont;
  setTitleFont(titleFont: NSFont): void;
  borderRect(): NSRect;
  titleRect(): NSRect;
  titleCell(): any;
  contentViewMargins(): NSSize;
  setContentViewMargins(contentViewMargins: NSSize): void;
  contentView(): NSView;
  setContentView(contentView: NSView): void;
  transparent(): boolean;
  setTransparent(transparent: boolean): void;
  borderWidth(): CGFloat;
  setBorderWidth(borderWidth: CGFloat): void;
  cornerRadius(): CGFloat;
  setCornerRadius(cornerRadius: CGFloat): void;
  borderColor(): NSColor;
  setBorderColor(borderColor: NSColor): void;
  fillColor(): NSColor;
  setFillColor(fillColor: NSColor): void;
  borderType(): NSBorderType;
  setBorderType(borderType: NSBorderType): void;
}

declare const NSBox: {
  alloc(): NSBoxUninitialized;
  class(): NSBox;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;

}

