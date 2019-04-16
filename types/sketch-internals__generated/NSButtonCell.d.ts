interface NSButtonCellUninitialized<InitializedType = NSButtonCell> extends NSActionCellUninitialized<NSButtonCell> {}

interface NSButtonCell extends NSActionCell {
  setButtonType(type: NSButtonType): void;
  setPeriodicDelay_interval(delay: number, interval: number): void;
  getPeriodicDelay_interval(delay: number, interval: number): void;
  setKeyEquivalentFont_size(fontName: NSString | string, fontSize: CGFloat): void;
  performClick(sender: any | null): void;
  drawImage_withFrame_inView(image: NSImage, frame: NSRect, controlView: NSView): void;
  drawTitle_withFrame_inView(title: NSAttributedString, frame: NSRect, controlView: NSView): NSRect;
  drawBezelWithFrame_inView(frame: NSRect, controlView: NSView): void;
  mouseEntered(event: NSEvent): void;
  mouseExited(event: NSEvent): void;
  setTitleWithMnemonic(stringWithAmpersand: NSString | string): void;
  setAlternateTitleWithMnemonic(stringWithAmpersand: NSString | string): void;
  setAlternateMnemonicLocation(location: NSUInteger): void;
  alternateMnemonicLocation(): NSUInteger;
  alternateMnemonic(): NSString;

  title(): NSString;
  setTitle(title: NSString | string): void;
  alternateTitle(): NSString;
  setAlternateTitle(alternateTitle: NSString | string): void;
  alternateImage(): NSImage;
  setAlternateImage(alternateImage: NSImage): void;
  imagePosition(): NSCellImagePosition;
  setImagePosition(imagePosition: NSCellImagePosition): void;
  imageScaling(): NSImageScaling;
  setImageScaling(imageScaling: NSImageScaling): void;
  highlightsBy(): NSCellStyleMask;
  setHighlightsBy(highlightsBy: NSCellStyleMask): void;
  showsStateBy(): NSCellStyleMask;
  setShowsStateBy(showsStateBy: NSCellStyleMask): void;
  opaque(): boolean;
  transparent(): boolean;
  setTransparent(transparent: boolean): void;
  keyEquivalent(): NSString;
  setKeyEquivalent(keyEquivalent: NSString | string): void;
  keyEquivalentModifierMask(): NSEventModifierFlags;
  setKeyEquivalentModifierMask(keyEquivalentModifierMask: NSEventModifierFlags): void;
  keyEquivalentFont(): NSFont;
  setKeyEquivalentFont(keyEquivalentFont: NSFont): void;
  imageDimsWhenDisabled(): boolean;
  setImageDimsWhenDisabled(imageDimsWhenDisabled: boolean): void;
  showsBorderOnlyWhileMouseInside(): boolean;
  setShowsBorderOnlyWhileMouseInside(showsBorderOnlyWhileMouseInside: boolean): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  attributedAlternateTitle(): NSAttributedString;
  setAttributedAlternateTitle(attributedAlternateTitle: NSAttributedString): void;
  bezelStyle(): NSBezelStyle;
  setBezelStyle(bezelStyle: NSBezelStyle): void;
  sound(): NSSound;
  setSound(sound: NSSound): void;
  gradientType(): NSGradientType;
  setGradientType(gradientType: NSGradientType): void;
}

declare const NSButtonCell: {
  alloc(): NSButtonCellUninitialized;
  class(): NSButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

