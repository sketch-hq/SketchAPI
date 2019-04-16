interface NSImageCellUninitialized<InitializedType = NSImageCell> extends NSCellUninitialized<NSImageCell> {}

interface NSImageCell extends NSCell, INSCopying, INSCoding {
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  imageAlignment(): NSImageAlignment;
  setImageAlignment(imageAlignment: NSImageAlignment): void;
  imageScaling(): NSImageScaling;
  setImageScaling(imageScaling: NSImageScaling): void;
  imageFrameStyle(): NSImageFrameStyle;
  setImageFrameStyle(imageFrameStyle: NSImageFrameStyle): void;
}

declare const NSImageCell: {
  alloc(): NSImageCellUninitialized;
  class(): NSImageCell;
  drawBaselineAlignedAttributedTitle_forCell_controlView(attributedTitle: NSAttributedString, cell: NSCell, controlView: NSView): NSRect;
  inspectorIconColorForCellEnabled_highlighted(enabled: boolean, highlighted: boolean): NSColor;
  inspectorAccentColorForCellHighlighted(highlighted: boolean): NSColor;
  drawInspectorButtonImage_centeredInRect_withColor(image: NSImage, rect: NSRect, color: NSColor): void;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;
  accessInstanceVariablesDirectly(): boolean;

}

